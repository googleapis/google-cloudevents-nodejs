# Contributing

This doc has some guidelines on how to generate and contribute to this library.

## Generate the Library

The contents of this module are generated from the JSON Schemas defined in the source of truth repo:

https://github.com/googleapis/google-cloudevents

To generate this library, follow these steps:

### Setup

- Install the `qt` CLI globally from https://github.com/googleapis/google-cloudevents/tree/main/tools/quicktype-wrapper
- Clone the types source repo: `git clone git@github.com:googleapis/google-cloudevents.git`
- Clone this language repo: `git clone git@github.com:googleapis/google-cloudevents-nodejs.git --depth 1`

### Generate and Build

- Generate: In the root of this Node repo, run the script: `npm run gen`. This generates this library from JSON schemas.
- Build: In the root of this repo, run the script: `npm run build`. This compiles the TypeScript source.
- Your package should be ready to publish.

## Publish to npm

This module is automatically published by [Release Please](https://github.com/googleapis/release-please) when merging a generated release PR.
This PR is created from a GitHub Action that detects changes to the `main` branch.

Sometimes publishing does not work. To publish manually, Googlers can run the following commands:

```sh
npm run build
npm login --registry https://wombat-dressing-room.appspot.com
npm publish --registry https://wombat-dressing-room.appspot.com
```

### Conventional Commit Requirement

Only `feat` and `fix` or any commit that's breaking, as indicated by a `!`: `refactor!: foo` will trigger a release. Other commits will not trigger a PR from the bot.

See: https://www.conventionalcommits.org/en/v1.0.0/#summary

## How to Contribute

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Contributor License Agreement

Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to <https://cla.developers.google.com/> to see
your current agreements on file or to sign a new one.

You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Community Guidelines

This project follows [Google's Open Source Community
Guidelines](https://opensource.google/conduct/).
