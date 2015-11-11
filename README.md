hexo-use-sample
===============

[![Build Status](https://travis-ci.org/raimon49/hexo-use-sample.svg?branch=master)](https://travis-ci.org/raimon49/hexo-use-sample)
[![Circle CI](https://circleci.com/gh/raimon49/hexo-use-sample.svg?style=svg)](https://circleci.com/gh/raimon49/hexo-use-sample)
[![devDependency Status](https://david-dm.org/raimon49/hexo-use-sample/dev-status.svg)](https://david-dm.org/raimon49/hexo-use-sample#info=devDependencies)


* [How to create](http://raimon49.github.io/2015/04/25/create-blog-with-hexo.html)
* [How to testing](http://raimon49.github.io/2015/05/01/lint-markdown-at-commit.html)

Dependencies
------------

* [Hexo](https://github.com/hexojs/hexo) 3.x
* See [blog/package.json](blog/package.json)

Setup
-----

```sh
$ git clone git@github.com:raimon49/hexo-use-sample.git
$ cd hexo-use-sample/blog
$ npm install
```

Write
-----

```sh
$ npm run create "write-article-title"
```

Publish
-------

```sh
$ npm run deploy
```
