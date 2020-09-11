<h1 align="center" style="text-align:center">🔑 Sort-Key</h1>

<h4 align="center">Tiny library for generating and parsing DynamoDB sort keys.</h4>

<p align="center">
  <a href="https://www.npmjs.org/package/sort-key">
    <img src="http://img.shields.io/npm/v/sort-key.svg" alt="View On NPM">
  </a>
  <a href="https://travis-ci.com/neuledge/sort-key">
    <img src="https://travis-ci.com/neuledge/sort-key.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://depfu.com/github/neuledge/sort-key?project_id=15586">
    <img src="https://badges.depfu.com/badges/c8d7e8c2c15dc9427a6d96b382a83cd8/overview.svg" alt="Dependency Status">
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
AWS](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html). It uses
 `#` as separator key and knows how to escape it when given on one of the key parts.

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

const SK = SortKey.generate('1532208', '2020-09-11T15:30:06.822Z');
// "1532208#2020-09-11T15:30:06.822Z"

const [order, time] = SortKey.parse(SK);
// "1532208" "2020-09-11T15:30:06.822Z"

```

#### It supports escaping as well:

```ts
const SK = SortKey.generate('top', 'https://example.com/foo/bar#top');
// top#https://example.com/foo/bar\\#top

const [anchor, url] = SortKey.parse(SK);  
// "top" "https://example.com/foo/bar#top"
```

<br>

## License

[MIT](LICENSE) license &copy; 2020 [Neuledge](https://neuledge.com)
