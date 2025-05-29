# Backstage GitHub Team Sync

A script to sync GitHub teams and their members based on a YAML config file.

## 📦 Requirements

- Node.js v18+
- A GitHub personal access token (set as `GITHUB_TOKEN` env var)

## 🚀 Usage

```bash
node team-sync --config path/to/teams.yaml
```

Optional dry-run mode:

```bash
node team-sync.js --config path/to/teams.yaml --dry-run
```

## 🛠️ Example Config (`teams.yaml`)

```yaml
teams:
  - name: community-plugins-$plugin
    description: Maintainers of $plugin
    parent: community-plugins-owners
    members:
      - GitHubUserA
      - GitHubUserB
```
