title: "ci-tools-setting"
date: 2015-05-01 20:32:21
tags: CI
---

CIサービスの設定
================

Travis CI
---------

```yaml
language: node_js
node_js:
  - "0.12"
  - "0.10"
  - "iojs"
```

Circle CI
---------

```yaml
machine:
  node:
    version: 0.10.22
```
