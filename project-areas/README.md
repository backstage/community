# Backstage Project Areas

This directory contains external and internal information about many of the
Backstage project areas. It is not required for a project area to be documented
here. A full list of the Backstage project areas can be found in
[OWNERS.md](https://github.com/backstage/backstage/blob/master/OWNERS.md#project-areas).

## For Maintainers

For project area maintainers that want to learn more about the common ways of
working across project areas, as well different tools you can use within the
project area, see [guidance.md](./Maintainer-Guidance.md).

Each area owns their own documentation within this directory, please add
yourselves as code owners.

## FAQ

### Why is X not a project area?

There are many pieces of Backstage that could be their own project areas. In
some cases there's a tradeoff to be made for how granular our division of the
project is. It might be the case that a potential area is either too large or
small in scope. Good guidelines for a project area is that it should not be
trivially small, but also not larger than what a single team is able to manage.
Project areas are also a permanent structure, in the sense that temporary
working groups or task forces to not organize into a project area.

The answer might also simply be that nobody has stepped up to drive the area, in
which case, see the question below!

### Can I start a new project area?

Yes! If there is part of the project that you feel should be its own project
area that you want to drive, reach out to the core maintainers. Be sure to
familiarize yourself with the project
[governance](https://github.com/backstage/backstage/blob/master/GOVERNANCE.md),
especially the project area maintainer role and its responsibilities and
requirements. In order to help onboard new areas, they can be created as
incubating project areas, which means that the ownership will be shared with the
Backstage core maintainers.
