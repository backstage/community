# Project Area Ways of Working

This documents the ways of working that are common across all project areas, as
well as additional practices that may be adopted by individual areas.

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

Our stale bot is in place to close old issues, as well as to keep bringing up
existing issues to the forefront so that all issues throughout the project are
considered at a regular cadence. If there is an issue that you want to leave
open without having it marked as stale, you can add the `will-fix` label.

### Pull Request Management

Project area maintainers in the main Backstage repository are responsible for
reviewing pull requests towards their area, as outlined in
[REVIEWING.md](https://github.com/backstage/backstage/blob/master/REVIEWING.md).

Project area maintainers in other repositories are responsible for defining
their own ways of working for pull request reviews. For example, the
community-plugins repository has its own
[Plugin Maintainer Guide](https://github.com/backstage/community-plugins/blob/main/docs/plugin-maintainers-guide.md).

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
updates since the last meeting. This is the approach used by the core
maintainers, and they use the
[`github-sync-helper`](https://github.com/benjdlambert/github-sync-helper) tool
to automatically open all issues that have been updated. To open all issues that
have been changed in the last 7 days in the catalog area, you can use the
following command:

```bash
npx github-sync-helper issues --days 7 --labels area:catalog
```

When executing this command each issue will be opened in your default browser.
Typically one person executes this command, shares their screen, and drives the
meeting. While working through the issues together you typically use a
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
goalie rotation are that it can be daunting work, and it doesn't encourage as
much collaboration in the triage process.

### Pull Request Review Strategies

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

A separate strategy that can be used to review pull requests is pair or mob
reviews. Typically this takes the form of a scheduled or ad-hoc meeting where
you walk through the pull request together. If the pull request is authored by
one of the team members they would typically explain it to the rest of the
group, or if it is an external pull request anyone can drive the walkthrough.
This is particularly useful for complicated pull requests and can in many cases
end up being a time saver compared to reviewing the pull request asynchronously.
