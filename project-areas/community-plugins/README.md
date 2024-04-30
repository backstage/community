# [Community Plugin Area Maintainers](https://github.com/backstage/backstage/blob/master/OWNERS.md#community-plugins)

This document highlights the processes and responsibilities of the Community Plugin Area Maintainers specifically.

## Responsibilites in the Community Plugins Repository

The Community Plugins Area Owners are the maintainers of the [community plugins repository](https://github.com/backstage/community-plugins), and are also the "catch-all" for when there's no specific Plugin Maintainer for a plugin.

They are responsible for ensuring that the repository is maintained overall, and that plugins are being updated and released, and support Plugin Mainatainers in their work where needed.

## Ways of Working

### Issue Triage

TBD in the upcoming Community Plugins SIG.

### Pull Request Reviews

- Pull Requests are randomly assigned to one Community Plugins Area Maintainer for Review, using the [randomized pull request assignment](../Maintainer-Guidance.md#randomized-pull-request-assignment)
  pull request review strategy.

- Creation of new `workspaces` will always need a review from a Community Plugins Maintainer, as these will not have a `CODEOWNER` specified.

- Creation of new plugins or packages inside a `workspace` will need a review from the Plugin Maintainer if there exists one, alternatively it will need a review from a Community Plugins Maintainer.

- Changes to `workspaces` that have a `CODEOWNER` specified should be reviewed by the Plugin Maintainer, and can optionally be reviewed by a Community Plugins Area Maintainer. If a Plugin Maintainer is not available to review a PR, the Community Plugins Area Maintainer will review the PR.

- Changes to `workspaces` without a `CODEOWNER` is the responsibility of the Community Plugins Area Maintainer, and should be merged and released by them.

- `Version Packages (workspace)` PR's for `workspaces` with a `CODEOWNER` can be released at any time by the Plugin Maintainer, and should be merged by them.

- `Version Packages (workspace)` PR's for `workspaces` without a `CODEOWNER` should be merged and released by the Community Plugins Area Maintainer, and perhaps be requested by community contributors in the `Version Packages (workspace)` PR.

- `Renovate` dependency bumps are automerged if there's no `package.json` change which accompanies the Pull Request.
