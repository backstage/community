# Project Area Ways of Working

This document the ways of working that are common across all project areas, as
well additional practices that may be adopted by individual areas.

## Common

### Issue Management

Issues are triaged and sorted into the appropriate project areas through
automation as well as curation by the core maintainers. Each project area has an
associated GitHub label of the format `area:<name>`. These labels are used to
signal which areas each issue belongs to. If an issue spans multiple areas, it
should have multiple area labels.

Issue assignment is not required, but may be used to help track and highlight
who is responding to particular issues. Each project area chooses whether they
want to use issue assignment as part of their workflow or not.

There are currently no required time frames or objectives for responding to
issues across the project. There is however an expectation that issues are
responded to by the maintainers of the relevant project area. In particular we
have stale bot in place to prune inactive issues, and it doesn't look good if
issues are marked as stale without a response.

Our stale bot is in place both to close old issue, but also to keep bringing up
existing issues to the forefront so that all issues throughout the project are
considered at a regular cadence. If there is an issue that you want to leave
open without having it marked as stale, you can add the `will-fix` label.

### Pull Request Management

The division of pull request among project areas is based on the GitHub reviewer
feature, rather than labels or assignment. This is because it automatically
works with the code owners feature, and also makes it possible for each team to
decide if they want individual assignment of pull requests through the GitHub
team settings.

To aid in the pull request review process there is a
[Pull Request Reviews](https://github.com/orgs/backstage/projects/2) GitHub
project, where all incoming pull requests are automatically added. The "All" tab
shows all pull requests, while "For Me" shows only the ones that you have been
requested to review. The rest of the tabs show pull requests for each individual
project area.

Note that the project area tabs will not show pull requests that have been
assigned to an individual maintainer, they will instead show up in their "For
Me" tab.

### Pull Request Reviews

When reviewing pull requests you should always use the "request changes" option
if you are leaving a review where you would not like the pull request to be
merged as is. This is both to clarify to the author that the pull request is not
ready to be merged, but also to update the status of the pull request in the
pull request review board, more on that below. If you simply want to contribute
to a discussion in the pull requests you can leave a regular comment.

Even though a pull request may only change code owned by a single project area,
it may indirectly affect other project areas or the project as a whole. If this
is the case, reviews should be requested from the additional maintainer teams,
and labels can be added for extra visibility. These are a few example where this
would be applicable:

1. A pull request adds a new way of using capabilities provided by a different
   area, for example if the TechDocs plugin started utilizing the scaffolder
   APIs in a novel way that is not already established or documented.
1. A pull request introduces new platform level technologies such as new code
   generation tools. In this case the core maintainers should be requested for
   review.

### Merging Pull Requests

External contributions are merged by the owner of the modified code once the
pull request has been approved and all critical status checks have passed. If
there are multiple owners and it is not obvious that the pull request belongs to
any particular area, then any owner may merge the pull requests as soon as it
has been approved by all owners.

Pull requests that are made by a project area maintainer within the same area
are generally merged by the pull request author, although it is up to the
maintainers of the area to decide if they want to use a different process.

The core maintainers are able to and may occasionally merge pull requests
without approval from all code owners. This is to be avoided, but might
sometimes be necessary for emergency fixes. It is also done for the "Version
Packages" pull requests that are part of our automated release process. This
means that project area maintainers do not need to approve these pull requests
every week.

### Release Process

Our release process is documented
[here](https://github.com/backstage/backstage/blob/master/docs/publishing.md).
The core maintainers are responsible for switching between next and main line
releases as required.

Releases happen every Tuesday, but there is no need to avoid merging pull
requests during this time. If needed, the core maintainers will block the
merging of pull requests in order to prepare for the release. As a project area
maintainer, if there is a particular pull requests that you would like to have
merged ahead of the release on a Tuesday, reach out to the core maintainers via
Discord or similar medium.

Pay attention to the release calendar and avoid merging significant changes
ahead of main line releases. For impactful changes that aren't released as an
experimental feature, it is often best to merge them just after a main line
release. This ensures that the change gets as much time as possible in
pre-releases before reaching stable.

## Tools

### Issue Triage

### Triage Strategies

#### Regularly Scheduled Sync

meet every X, open issues, PR that need discussion

filter by label

#### Rotating "Goalie"

### Pull Request Strategies

#### Randomized Pull Request Assignment

GitHub team settings ->

#### Assignment during

### Pull request pair/mob review

Tricky PRs, one or more maintainers

### Review Each Others' Pull Requests

### Discord text channel

### Discord voice channel
