#!/usr/bin/env node
/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Octokit } from '@octokit/rest';
import { parseArgs } from 'node:util';

const {
  values,
} = parseArgs({
  options: {
    config: { type: 'string', short: 'c'},
    'dry-run': { type: 'boolean', short: 'd', default: false },
  },
  strict: true,
});

const config = values.config;
const dryRun = values['dry-run'];

if (!config) {
  console.error('❌ Missing required --config <path/to/file.yaml>');
  process.exit(1);
}

const configPath = path.resolve(config);
const GITHUB_ORG = 'backstage';
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// read and parse the YAML config file
function readConfig(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Config file not found at: ${filePath}`);
    process.exit(1);
  }

  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return yaml.load(raw);
  } catch (err) {
    console.error(`❌ Failed to parse YAML: ${err.message}`);
    process.exit(1);
  }
}

// fetch the id of the parent team
async function getTeamIdBySlug(slug) {
  try {
    const res = await octokit.rest.teams.getByName({ org: GITHUB_ORG, team_slug: slug });
    return res.data.id;
  } catch (err) {
    if (err.status === 404) {
      console.warn(`⚠️ Parent team "${slug}" does not exist yet.`);
      return null;
    }
    console.error(`❌ Failed to get team ID for "${slug}": ${err.message}`);
    return null;
  }
}

// fetch actual team members from GitHub
async function getActualMembers(teamSlug) {
  try {
    const res = await octokit.rest.teams.listMembersInOrg({
      org: GITHUB_ORG,
      team_slug: teamSlug,
    });
    return res.data.map(member => member.login);
  } catch (err) {
    if (err.status === 404) return [];
    console.error(`❌ Error fetching members of ${teamSlug}: ${err.message}`);
    return [];
  }
}

// creates subteam if it does not exist
async function ensureTeamExists(team, parentTeamId) {
  try {
    await octokit.rest.teams.getByName({ org: GITHUB_ORG, team_slug: team.name });
  } catch (err) {
    if (err.status === 404) {
      if (dryRun) {
        console.log(`   🛠️ (dry-run) Would create team "${team.name}"${team.parent ? ` under "${team.parent}"` : ''}`);
      } else {
        await octokit.rest.teams.create({
          org: GITHUB_ORG,
          name: team.name,
          description: team.description,
          parent_team_id: parentTeamId || undefined,
        });
        console.log(`   🛠️ Created team "${team.name}"`);
      }
    } else {
      console.error(`❌ Failed to check team "${team.name}": ${err.message}`);
    }
  }
}

// syncs team members with the config
async function syncTeams(config) {
  for (const team of config.teams) {
    const teamSlug = team.name;
    const expected = team.members || [];

    let parentTeamId = null;
    if (team.parent) {
      parentTeamId = await getTeamIdBySlug(team.parent);
    }

    console.log(`\n🔧 Syncing team "${teamSlug}":`);
    await ensureTeamExists(team, parentTeamId);

    const actual = await getActualMembers(teamSlug);

    for (const user of expected) {
      if (!actual.includes(user)) {
        if (dryRun) {
          console.log(`   ➕ (dry-run) Would add "${user}"`);
        } else {
          await octokit.rest.teams.addOrUpdateMembershipForUserInOrg({
            org: GITHUB_ORG,
            team_slug: teamSlug,
            username: user,
            role: 'member',
          });
          console.log(`   ➕ Added "${user}"`);
        }
      } else {
        console.log(`   ✅ "${user}" already a member`);
      }
    }

    const extras = actual.filter(user => !expected.includes(user));
    for (const user of extras) {
      if (dryRun) {
        console.log(`   ➖ (dry-run) Would remove "${user}"`);
      } else {
        await octokit.rest.teams.removeMembershipForUserInOrg({
          org: GITHUB_ORG,
          team_slug: teamSlug,
          username: user,
        });
        console.log(`   ➖ Removed "${user}"`);
      }
    }
  }

  console.log(`\n✅ Team sync complete${dryRun ? ' (dry-run mode)' : ''}.`);
}

async function main() {
  if (!dryRun && !process.env.GITHUB_TOKEN) {
    console.error('❌ GITHUB_TOKEN environment variable is required.');
    process.exit(1);
  }

  console.log(`📄 Using config: ${configPath}`);
  const config = readConfig(configPath);
  await syncTeams(config);
}

main();
