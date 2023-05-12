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

This section describes a few tools and strategies that can be used to
collaborate and manage work within each project area.

### Issue Triage Strategies

This section lists different ways in which you can triage issues within your
project area. Issue triage is an important process to make sure that issues are
responded to in a timely manner, and that the right people are involved in the
discussion.

#### Regularly Scheduled Sync

Use a regularly scheduled meeting to cycle through all issues that have had
updates since the last meeting. This is the approached used by the core
maintainers, and they use the
[`github-sync-helper`](https://github.com/benjdlambert/github-sync-helper) tool
to automatically open all issues that have been updated. To open all issues that
have been changed in the last 7 days in the catalog area, you can use the
following command:

```bash
npx github-sync-helper issues --days 7 --labels area:catalog
```

When executing this command each issue will be opened in your default browser.
Typically one person executed this command, shares their screen, and drives the
meeting. While working through the issues to gether you typically use a
combination of the following to respond to issues:

- The driver takes some quick notes and writes the full response after the
  meeting.
- An issue is assigned to an individual that will respond to it.
- Short responses can be written directly together in the meeting.

#### Rotating "Goalie"

A rotating "goalie" role is set up, where the goalie triages, responds, or
assigns issues. Typically you would rotate goalie every week, but other
schedules can of course be set up too. The benefit of a rotating goalie is that
is provides a clearer owner of the triage process, it brings everyone into the
work, and it lets the rest of the team focused on other work. Drawbacks of a
goalie rotation is that it can be daunting work, and it doesn't encourage as
much collaboration in the triage process.

### Pull Request Strategies

This section lists different ways in which you can manage Pull Request reviews
within your project area.

#### Randomized Pull Request Assignment

GitHub has a feature that allows you to randomly assign an individual reviewer
to each pull request. It can be found on the team settings page:
`https://github.com/orgs/backstage/teams/<name>/edit/review_assignment`. With
this in place each pull request where the team would be marked for review, an
individual member of the team will be asked to review instead. There are several
different strategies for how reviews are divided that you can use. It also takes
into consideration if members set their GitHub status to "Busy", in which case
they will not receive any new reviews.

#### Assignment During Issue Triage

One strategy for handling pull requests is to triage them together with your
issue process. For example, of you use sync meeting you might assign new pull
requests during that meeting, or in case of a goalie, the goalie might review
and/or assign pull requests to other maintainers. The benefits and drawbacks of
using the goalie approach are similar to the ones mentioned in the issue triage
section.

### Pull request pair/mob review

A separate strategy that can be used to review pull requests are pair or mob
reviews. Typically this takes the form of a scheduled or ad-hoc meeting where
you walk through the pull request together. If the pull request is authored by
one of the team member they would typically explain it to the rest of the group,
or if it is an external pull request anyone can drive the walkthrough. This is
particularly useful for complicated pull requests and can in many cases end up
being a time saver compared to reviewing the pull request asynchronously.
