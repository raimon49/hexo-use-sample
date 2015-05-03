title: "hexo-code-reading"
date: 2015-05-03 10:17:00
tags: [Hexo, JavaScript]
---

Hexo Code Reading
=================

hexoコマンドの実体
------------------

`node_modules/.bin/hexo` の中身

```javascript
#!/usr/bin/env node

'use strict';

require('hexo-cli')();
```

`hexo-cli` というライブラリを読み込んで実行しているだけ

hexo-cliのエントリポイント
--------------------------

`node_modules/hexo/node_modules/hexo-cli/lib/index.js` でそれらしき処理

```javascript
  function runHexoCommand(){
    var cmd = args._.shift();

    if (cmd){
      var c = hexo.extend.console.get(cmd);
      if (!c) cmd = 'help';
    } else if (args.v || args.version){
      cmd = 'version';
    } else {
      cmd = 'help';
    }

    // Listen to Ctrl+C (SIGINT) signal
    process.on('SIGINT', function(){
      log.info(goodbye());

      // Stop watching
      if (hexo) hexo.unwatch();

      // Exit
      exit().then(function(){
        process.exit();
      });
    });

    return hexo.call(cmd, args);
  }
```

* 2 space indentを採用
* コマンドライン引数は `args` という値で抽象化されている

`minimist` というライブラリに任せているようだ

```javascript
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));
```

JavaScriptでCLIツール書くの面倒くさそう
