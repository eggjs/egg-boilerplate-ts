# Changelog

## [2.0.0](https://github.com/eggjs/egg-boilerplate-ts/compare/v1.11.1...v2.0.0) (2025-02-04)


### ⚠ BREAKING CHANGES

* drop Node.js < 18.19.0 support

part of https://github.com/eggjs/egg/issues/3644

https://github.com/eggjs/egg/issues/5257

<!-- This is an auto-generated comment: release notes by coderabbit.ai
-->
## Summary by CodeRabbit

## Release Notes

- **Project Configuration**
  - Updated Node.js version support to 18, 20, and 22
- Updated TypeScript configuration to ES2022 and NodeNext module
resolution
  - Updated minimum Node.js requirement to version 18
  - Added MIT license

- **Dependencies**
  - Upgraded several development dependencies
  - Updated testing and build tools to latest versions

- **Documentation**
  - Added Contributors section to README
  - Updated project requirements documentation

- **Maintenance**
  - Updated `.gitignore` to exclude `package-lock.json`
  - Removed pull request template
  - Introduced a new configuration file for unit tests
<!-- end of auto-generated comment: release notes by coderabbit.ai -->

### Features

* support cjs and esm both by tshy ([#27](https://github.com/eggjs/egg-boilerplate-ts/issues/27)) ([b750157](https://github.com/eggjs/egg-boilerplate-ts/commit/b7501572bd043bea1d5b8976a15f3c1e600e24df))

## [1.11.1](https://github.com/eggjs/egg-boilerplate-ts/compare/v1.11.0...v1.11.1) (2024-01-07)


### Bug Fixes

* use typescript v5 latest ([#26](https://github.com/eggjs/egg-boilerplate-ts/issues/26)) ([9c87112](https://github.com/eggjs/egg-boilerplate-ts/commit/9c871129fbf6c8533703ad511f94a8c935014497))

## [1.11.0](https://github.com/eggjs/egg-boilerplate-ts/compare/v1.10.0...v1.11.0) (2023-11-25)


### Features

* add enforce-node-prefix eslint rule by default ([#25](https://github.com/eggjs/egg-boilerplate-ts/issues/25)) ([9480865](https://github.com/eggjs/egg-boilerplate-ts/commit/94808656f83ffa1c6007e796908b3cdc299b4a2c))

## [1.10.0](https://github.com/eggjs/egg-boilerplate-ts/compare/v1.9.0...v1.10.0) (2023-02-15)


### Features

* use egg-bin v6 ([#23](https://github.com/eggjs/egg-boilerplate-ts/issues/23)) ([8ccc783](https://github.com/eggjs/egg-boilerplate-ts/commit/8ccc783dd847e068bc372fb4e8e1658cab68035e))

## [1.9.0](https://github.com/eggjs/egg-boilerplate-ts/compare/v1.8.0...v1.9.0) (2023-02-12)


### Features

* Upgrade to tegg by default ([#22](https://github.com/eggjs/egg-boilerplate-ts/issues/22)) ([3ca85c4](https://github.com/eggjs/egg-boilerplate-ts/commit/3ca85c4fc41267a851f9e5acda70a74b836d730b))

---


1.8.0 / 2022-06-18
==================

**features**
  * [[`0bc89be`](http://github.com/eggjs/egg-boilerplate-ts/commit/0bc89be0aac6128efb3efaf4eac8788436aedfd2)] - feat: upgrade deps version (#20) (吖猩 <<whx89768@alibaba-inc.com>>)

1.7.0 / 2020-01-20
==================

**features**
  * [[`144f5ae`](http://github.com/eggjs/egg-boilerplate-ts/commit/144f5ae09d6e196e92c3183a73d6bc26cb1795c0)] - feat: change tslint to eslint (#17) (吖猩 <<whxaxes@gmail.com>>)

1.6.0 / 2019-02-21
==================

**others**
  * [[`520c5b5`](http://github.com/eggjs/egg-boilerplate-ts/commit/520c5b56d95a07fab02b7dbc8987a9711fbe1795)] - chore: using egg-bin declarations instead of require (#14) (吖猩 <<whxaxes@qq.com>>)

1.5.0 / 2019-01-16
==================

  * deps: upgrade tslint (#13)

1.4.0 / 2019-01-07
==================

  * chore: scripts optimization (#12)

1.3.0 / 2018-09-11
==================

  * feat: update deps and code optimization (#11)

1.2.3 / 2018-09-06
==================

  * fix: typo (#10)

1.2.2 / 2018-06-14
==================

  * fix: TSLint script and lint error (#9)

1.2.1 / 2018-05-30
==================

  * fix: fix the config & appInfo define (#7)
  * fix: git ignore. (#5)

1.2.0 / 2018-04-13
==================

  * feat: adjust plugin (#4)
  * chore: ignore node_modules* folders (#3)

1.1.1 / 2018-04-05
==================

  * fix: test (#2)

1.1.0 / 2018-04-04
==================

  * feat: less code (#1)

1.0.0 / 2018-04-04
==================

  * feat: first version
