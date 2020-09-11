<h1 align="center" style="text-align:center">🔑 Sort-Key</h1>

<h4 align="center">Tiny library for generating and parsing DynamoDB sort keys.</h4>

<p align="center">
  <a href="https://www.npmjs.org/package/sort-key">
    <img src="http://img.shields.io/npm/v/sort-key.svg" alt="View On NPM">
  </a>
  <a href="https://travis-ci.com/neuledge/sort-key">
    <img src="https://travis-ci.com/neuledge/sort-key.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://depfu.com/github/neuledge/sort-key?project_id=13055">
    <img src="https://badges.depfu.com/badges/c06bc1e007e8b7f804d8563a56bb2ced/overview.svg" alt="Dependency Status">
  </a>
  <a href="https://coveralls.io/github/neuledge/sort-key?branch=master">
    <img src="https://coveralls.io/repos/github/neuledge/sort-key/badge.svg?branch=master"
      alt="Coverage Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/sort-key.svg" alt="License">
  </a>
</p>
<br>

This library made for generating DynamoDB sort keys from multiple string parts as [recommended by
AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html):

```
[country]#[region]#[state]#[county]#[city]#[neighborhood]
```

## Install

```bash
npm i sort-key
```

<br>

## Usage

```ts
import SortKey from 'sort-key';

const SK = SortKey.generate('[order]', '[item]');
// "[order]#[item]"

const [order, item] = SortKey.parse(SK);
```

#### It supports escaping as well:

```ts
const SK = SortKey.generate('top', 'https://example.com/foo/bar#top');
// top#https://example.com/foo/bar\\#top

const [anchor, url] = SortKey.parse(SK);
```

<br>

## License

[MIT](LICENSE) license &copy; 2020 [Neuledge](https://neuledge.com)
