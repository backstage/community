# Backstage Governance

This is the governance for the Backstage project. It applies to all repositories
in the [Backstage GitHub organization](https://github.com/backstage).

## Table of Contents

- [Project Areas](#project-areas)
- [Project Roles](#project-roles)
  - [Contributor](#contributor)
  - [Organization Member](#organization-member)
  - [Reviewer](#reviewer)
  - [Plugin Maintainer](#plugin-maintainer)
  - [Project Area Maintainer](#project-area-maintainer)
  - [Core Maintainer](#core-maintainer)
  - [End User Sponsors](#end-user-sponsors)
- [Conflict resolution and voting](#conflict-resolution-and-voting)
- [Inactivity](#inactivity)
- [Involuntary Removal or Demotion](#involuntary-removal-or-demotion)
- [Stepping Down/Emeritus Process](#stepping-downemeritus-process)

## Code of Conduct

All members of the Backstage community are expected to follow the
[CNCF Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)

## Project Areas

The Backstage project is divided into several project areas, each covering
particular parts of the project. The main driver for each area is ownership of
code in the main Backstage repository, as well as other repositories in the
Backstage GitHub organization. Each area has a set of maintainers and repository
content that they own. There may be no overlap in ownership between areas, which
means that any given line in the GitHub code owners file should have only one
owner specified. Each area is represented by a team in the Backstage GitHub
organization. Apart from certain project-wide concerns, such as the release
process, each area is self-governing and chooses their own ways of working.
Project areas may also have special interest groups (SIGs) related to their
area, but this is not required.

The project areas as well as their maintainers are listed in the
[OWNERS.md](https://github.com/backstage/backstage/blob/master/OWNERS.md) file.

Each project area must have at least one maintainer. Project area maintainers
may have shared ownership with the core maintainers, which in that case is
considered an incubating area. The project area maintainers help drive work
forward in the area, but they might not yet feel ready to take on ownership. The
goal should generally be that these project area maintainers eventually become
sole maintainers of the project area. This is to allow for a more smooth
onboarding and transition of ownership, where members of the community might for
example be new to open source maintainership.

### Adding new project areas

Project areas are added by nominating new maintainers for that area. See the
sections for becoming a [Project Area Maintainer](#project-area-maintainer).

Project areas may also by added by splitting existing areas. Every area that is
created through this process must have at least one maintainer.

### Removing project areas

Project areas are removed by removing all maintainers for that area and removing
the corresponding team from the Backstage GitHub organization. The project area
can be re-added later if there is a need for it. Reasons for removal may include
lack of activity, lack of maintainers, or lack of relevance to the project.

## Project Roles

### Contributor

A Contributor contributes directly to the project and adds value to it.
Contributions need not be code. People at the Contributor level may be new
contributors, or they may only contribute occasionally.

#### Responsibilities

- Follow the
  [CNCF CoC](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)
- Follow the project
  [contributing guide](https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md)

#### How to get involved

- Participate in community discussions
- Help other users
- Submit bug reports
- Comment on issues
- Try out new releases
- Attend community events

#### How to contribute

- Report and sometimes resolve issues
- Occasionally submit PRs
- Contribute to the documentation
- Show up at meetings, take notes
- Answer questions from other community members
- Submit feedback on issues and PRs
- Test releases and patches and submit reviews
- Run or help run events
- Promote the project in public

### Organization Member

An org member is a frequent contributor that has become a member of the
Backstage GitHub organization. In addition to the responsibilities of
contributors, an org member is also expected to be reasonably active in the
community through continuous contributions of any type.

An Organization Member must meet the responsibilities and has the requirements
of a Contributor.

#### Responsibilities

- Continues to contribute regularly, as demonstrated by having at least 10
  GitHub contributions per year in
  [Devstats](https://backstage.devstats.cncf.io/d/48/users-statistics-by-repository-group?orgId=1&var-period=y&var-metric=contributions&var-repogroup_name=All&from=now-1y&to=now&var-users=All),
  or contributions of a similar effort that might not be captured in Devstats.

#### Requirements

There are three different paths to becoming an Organization Member:

1. Individual org-member path:
   - Must have at least 10 contributions to the projects in the form of:
     - Accepted PRs
     - Helpful PR reviews
     - Resolving GitHub issues
     - Or some equivalent contributions to the project
   - Must have been contributing for at least 3 months
2. Team member of an existing project area maintainer team:
   - In the case where a team at an organization owns a project area, all the
     members of that team are automatically able to become both Organization
     Members and Project Area Maintainers. This must be approved by at least one
     of the existing project area maintainers.
3. Plugin maintainer:
   - In the event that a contributor is granted Plugin Maintainer status, they
     are automatically also granted Organization Member status. This must be
     approved by at least one of the existing Community Plugin Project Area
     Maintainers.

#### Becoming an Organization Member

Open an issue towards
[the community repository](https://github.com/backstage/community) using the
[org membership request template](https://github.com/backstage/community/issues/new?template=org_member.yaml&title=Org+Member%3A+%3Cyour-github-login%3E).

#### Privileges

- Membership in the Backstage GitHub organization

### Reviewer

A Reviewer is a Contributor who has shown a commitment to the project by
providing helpful and constructive feedback on pull requests. While anyone is
encouraged to review pull requests, a Reviewer is formally recognized as a
trusted voice in the review process. This role is a great way to contribute to
the project and can be a stepping stone towards becoming a maintainer.

#### Responsibilities

- Actively review pull requests, providing constructive, kind, and helpful
  feedback.
- Follow the project's
  [reviewing guide](https://github.com/backstage/backstage/blob/master/REVIEWING.md).
- Help contributors get their PRs into a mergeable state.
- Help triage issues and apply labels where appropriate.

#### Requirements

- Has a track record of providing high-quality, constructive reviews on several
  pull requests across the project.
- Demonstrates a good understanding of the project's coding conventions, values,
  and best practices.
- Is supportive of new and occasional contributors and helps get useful PRs in
  shape to merge.

#### Privileges

- May be formally requested for reviews on specific PRs.
- May be granted triage access to repositories to help manage issues and PRs.

#### Becoming a Reviewer

Contributors can be nominated by any Project Area or Core Maintainer. The
nomination is discussed and approved by the maintainers of the relevant project
area(s).

### Plugin Maintainer

A Plugin Maintainer is responsible for maintaining an individual Backstage
plugin or module in the
[backstage/community-plugins](https://github.com/backstage/community-plugins)
repository. This includes reviewing contributions and responding to issues
towards an individual plugin, as well as keeping the plugin up to date.

Plugin Maintainer is a lightweight form of ownership that is reflected though
[CODEOWNERS.md](https://github.com/backstage/community-plugins/blob/main/.github/CODEOWNERS)
in the community plugins repository. Each plugin can have one or more
maintainers. If a plugin becomes a significant part of the Backstage ecosystem,
it may be promoted to be a distinct project area instead.

A Plugin Maintainer has all the rights and responsibilities of an Organization
Member.

#### Responsibilities

- Review the majority of PRs towards the plugin
- Respond to GitHub issues related to the plugin
- Keep the plugin up-to-date with Backstage libraries and other dependencies
- Follow the
  [reviewing guide](https://github.com/backstage/backstage/blob/master/REVIEWING.md)

#### Requirements

- Display knowledge of Backstage's review process and best practices for plugin
  design
- Is supportive of new and occasional contributors and helps get useful PRs in
  shape to merge
- Owns at least one plugin in the
  [backstage/community-plugins](https://github.com/backstage/community-plugins)
  repository. For details on how to contribute a plugin, see the
  [Backstage Community Plugins README.md](https://github.com/backstage/community-plugins/blob/main/README.md)

#### Privileges

- Write access to the
  [backstage/community-plugins](https://github.com/backstage/community-plugins)
  repository
- GitHub code owner of the plugin workspace, with rights to approve and merge
  PRs towards the plugin

#### Becoming a Plugin Maintainer

You become a Plugin Maintainer by contributing a plugin to the
[community plugins respository](https://github.com/backstage/community-plugins)
and listing yourself as the
[code owner](https://github.com/backstage/community-plugins/blob/main/.github/CODEOWNERS)
of the plugin. The plugin contribution and ownership change must both be
approved and merged by the Community Plugin Maintainers before you are granted
Plugin Maintainer status. To become the maintainer of an existing plugin, the
must list yourself as a
[code owner](https://github.com/backstage/community-plugins/blob/main/.github/CODEOWNERS)
of the plugin, and this change must be approved and merged by both the existing
code owners as well as the Community Plugin Maintainers.

### Project Area Maintainer

Project Area Maintainers are owners of a particular project area. They are
expected to review and merge pull requests towards their area, and also drive
development and manage tech health. A Project Area Maintainer also need to
commit a certain number of hours per month towards the project, and exercise
judgment for the good of the project, independent of their employer. Project
Area Maintainers should also mentor new maintainers and participate in and lead
community meetings related to their area. New Project Area Maintainers need to
be approved by the existing project area maintainers, or the core maintainers if
it is a new area.

The maintainers of a project area may be represented by a team in external
organization. In this case, the state as a project area maintainer is tied to
the membership in that team. New members of the team may automatically be added
as maintainers, as well as removed when they leave. This process is governed
autonomously by the team of project area maintainers.

A Project Area Maintainer has all the rights and responsibilities of an
Organization Member.

#### Responsibilities

- Review PRs towards their project area. Project area maintainers are expected
  to review at least 20 PRs per year, or the majority of all PRs towards the
  area, if it is less than 20
- Follow the
  [reviewing guide](https://github.com/backstage/backstage/blob/master/REVIEWING.md)
- Triage and respond to issues related to their project area
- Mentor new project area maintainers
- Write refactoring PRs
- Determine strategy and policy for the project area
- Participate in or leading community meetings related to their project area

#### Requirements

- Is an Organization Member
- Have made at least 5 meaningful contributions towards the project area
- Demonstrates knowledge of their project area, and how it fits into the larger
  Backstage project
- Is able to exercise judgment for the good of the project, independent of their
  employer, friends, or team
- Mentors other contributors and project area maintainers
- Can commit to spending at least 16 hours per month working on the project,
  preferably distributed evenly across the month

#### Privileges

- Approve and merge PRs towards their project area
- Drive the direction and roadmap of their project area

#### Becoming a Project Area Maintainer

If you are interested in becoming a project area maintainer, reach out to the
existing maintainers for that area. If you wish to become a maintainer for a new
area, reach out to the core maintainers.

Any current project area maintainer or core maintainer may nominate a new
project area maintainer by opening a PR towards the
[OWNERS.md](https://github.com/backstage/backstage/blob/master/OWNERS.md) file.
A majority of the project area maintainers for that area must approve the PR. If
there are no existing maintainers for that area, the PR must be approved by a
majority of the core maintainers.

### Core Maintainer

Core Maintainers are responsible for the Backstage project as a whole. They help
review and merge project-level pull requests as well as coordinate work
affecting multiple project areas. A core maintainer needs to commit the majority
of their working time towards the project, and exercise judgment for the good of
the project, independent of their employer. Core maintainers should also mentor
and seek out new maintainers, lead community meetings, and communicate with the
CNCF on behalf of the project. To become a core maintainer one needs to have
been the maintainer of a number of different project areas, demonstrate a deep
knowledge of large parts of the Backstage project, and be backed by the existing
core maintainers.

A Core Maintainer have all the rights and responsibilities of a Project Area
Maintainer.

#### Responsibilities

- Take part in the incoming issue and PR triage and review process. PRs are
  shared equally among all maintainers
- Mentor new Project Area Maintainers and Plugin Maintainers
- Drive refactoring and manage tech health across the entire project
- Participate in CNCF maintainer activities
- Respond to security incidents in accordance to our
  [security policy](https://github.com/backstage/backstage/blob/master/SECURITY.md)
- Determine strategy and policy for the project
- Participate in or leading community meetings

#### Requirements

- Experience as a Project Area Maintainer for at least 6 months
- Demonstrates a broad knowledge of the project across multiple areas
- Is able to exercise judgment for the good of the project, independent of their
  employer, friends, or team
- Mentors other contributors
- Can commit to spending at least 10 days per month working on the project

#### Privileges

- Approve PRs that fall outside any specific project area
- Merge PRs to any area of the project
- Represent the project in public as a Maintainer
- Communicate with the CNCF on behalf of the project
- Have a vote in Maintainer decision-making meetings

#### Becoming a Core Maintainer

Any core maintainer or end user sponsor may nominate a new core maintainer by
opening a PR towards the
[OWNERS.md](https://github.com/backstage/backstage/blob/master/OWNERS.md) file.
Core maintainers must be approved by a majority of the existing core maintainers
and end user sponsors.

### End User Sponsors

#### Role of a Backstage End User Sponsor

- Provide support for Backstage by removing blockers, securing funding,
  providing advocacy, feedback, and ensuring project continuity and long term
  success
- Assist Backstage maintainers in prioritizing upcoming roadmap items and
  planned work
- Provide neutral mediation for any disputes that arise as part of the project

#### Backstage End User Sponsor Membership

The End User Sponsors group comprises at most 5 people. To be eligible for
membership in the group, you or the company where you work you must:

- Be responsible for and end user of a production Backstage deployment of
  non-trivial size
- Be active contributors to the open source project
- Be willing and able to attend regularly-scheduled End User Sponsor meetings
- Abide by
  [CNCF CoC](https://github.com/cncf/foundation/blob/main/code-of-conduct.md)

Candidates for membership will be nominated by current Sponsor members or by
Backstage maintainers. If there are more nominations than Sponsor seats
remaining, existing sponsors shall vote on the candidates, and the candidates
with the most votes will become Sponsors. Any ties will be broken by current
Backstage sponsors.

## Conflict resolution and voting

In general, we prefer that technical issues and membership are amicably worked
out between the persons involved. If a dispute cannot be decided independently,
the sponsors and core maintainers can be called in to decide an issue. If the
sponsors and maintainers themselves cannot decide an issue, the issue will be
resolved by voting.

In all cases in this document where voting is mentioned, the voting process is a
simple majority in which each sponsor receives two votes and each core
maintainer receives one vote. If such a majority is reached, the vote is said to
have _passed_.

## Inactivity

It is important for contributors to be and stay active to set an example and
show commitment to the project. Inactivity is harmful to the project as it may
lead to unexpected delays, contributor attrition, and a loss of trust in the
project.

Inactivity is measured by periods of no contributions without explanation, for
longer than:

- Core Maintainer: 2 months
- Project Area Maintainer: 4 months
- Plugin Maintainer: 6 months
- Organization Member: 12 months

Consequences of being inactive include:

- Involuntary removal or demotion
- Being asked to move to Emeritus status

## Involuntary Removal or Demotion

Involuntary removal/demotion of a contributor happens when responsibilities and
requirements aren't being met. This may include repeated patterns of inactivity,
extended period of inactivity, a period of failing to meet the requirements of
your role, and/or a violation of the Code of Conduct. This process is important
because it protects the community and its deliverables while also opens up
opportunities for new contributors to step in.

Involuntary removal or demotion is handled through a vote by a majority of the
current Core Maintainers. Some aspects of this process may be automated, such as
removal after periods of inactivity.

## Stepping Down/Emeritus Process

If and when contributors' commitment levels change, contributors can consider
stepping down (moving down the contributor ladder) vs moving to emeritus status
(completely stepping away from the project).

Contact the Maintainers about changing to Emeritus status, or reducing your
contributor level.
