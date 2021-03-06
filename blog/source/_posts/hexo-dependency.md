title: "hexo-dependency"
date: 2015-04-25 14:13:36
categories: tech
tags: [Hexo, npm]
---

Hexoの依存ライブラリ
====================

`$ npm ls --json` コマンドで確認してみる。

```json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "dependencies": {
    "hexo": {
      "version": "3.0.1",
      "from": "hexo@>=3.0.0 <4.0.0",
      "resolved": "https://registry.npmjs.org/hexo/-/hexo-3.0.1.tgz",
      "dependencies": {
        "abbrev": {
          "version": "1.0.5",
          "from": "abbrev@>=1.0.5 <2.0.0",
          "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.0.5.tgz"
        },
        "archy": {
          "version": "1.0.0",
          "from": "archy@>=1.0.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/archy/-/archy-1.0.0.tgz"
        },
        "bluebird": {
          "version": "2.9.24",
          "from": "bluebird@>=2.6.2 <3.0.0",
          "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-2.9.24.tgz"
        },
        "bunyan": {
          "version": "1.3.5",
          "from": "bunyan@>=1.3.3 <2.0.0",
          "resolved": "https://registry.npmjs.org/bunyan/-/bunyan-1.3.5.tgz",
          "dependencies": {
            "dtrace-provider": {
              "version": "0.4.0",
              "from": "dtrace-provider@>=0.4.0 <0.5.0",
              "resolved": "https://registry.npmjs.org/dtrace-provider/-/dtrace-provider-0.4.0.tgz",
              "dependencies": {
                "nan": {
                  "version": "1.5.3",
                  "from": "nan@>=1.5.1 <1.6.0",
                  "resolved": "https://registry.npmjs.org/nan/-/nan-1.5.3.tgz"
                }
              }
            },
            "mv": {
              "version": "2.0.3",
              "from": "mv@>=2.0.0 <3.0.0",
              "resolved": "https://registry.npmjs.org/mv/-/mv-2.0.3.tgz",
              "dependencies": {
                "mkdirp": {
                  "version": "0.5.0",
                  "from": "mkdirp@>=0.5.0 <0.6.0",
                  "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.0.tgz",
                  "dependencies": {
                    "minimist": {
                      "version": "0.0.8",
                      "from": "minimist@0.0.8",
                      "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.8.tgz"
                    }
                  }
                },
                "ncp": {
                  "version": "0.6.0",
                  "from": "ncp@>=0.6.0 <0.7.0",
                  "resolved": "https://registry.npmjs.org/ncp/-/ncp-0.6.0.tgz"
                },
                "rimraf": {
                  "version": "2.2.8",
                  "from": "rimraf@>=2.2.8 <2.3.0",
                  "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.2.8.tgz"
                }
              }
            },
            "safe-json-stringify": {
              "version": "1.0.3",
              "from": "safe-json-stringify@>=1.0.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/safe-json-stringify/-/safe-json-stringify-1.0.3.tgz"
            }
          }
        },
        "chalk": {
          "version": "1.0.0",
          "from": "chalk@>=1.0.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.0.0.tgz",
          "dependencies": {
            "ansi-styles": {
              "version": "2.0.1",
              "from": "ansi-styles@>=2.0.1 <3.0.0",
              "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.0.1.tgz"
            },
            "escape-string-regexp": {
              "version": "1.0.3",
              "from": "escape-string-regexp@>=1.0.2 <2.0.0",
              "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.3.tgz"
            },
            "has-ansi": {
              "version": "1.0.3",
              "from": "has-ansi@>=1.0.3 <2.0.0",
              "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-1.0.3.tgz",
              "dependencies": {
                "ansi-regex": {
                  "version": "1.1.1",
                  "from": "ansi-regex@>=1.1.0 <2.0.0",
                  "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-1.1.1.tgz"
                },
                "get-stdin": {
                  "version": "4.0.1",
                  "from": "get-stdin@>=4.0.1 <5.0.0",
                  "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz"
                }
              }
            },
            "strip-ansi": {
              "version": "2.0.1",
              "from": "strip-ansi@>=2.0.1 <3.0.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-2.0.1.tgz",
              "dependencies": {
                "ansi-regex": {
                  "version": "1.1.1",
                  "from": "ansi-regex@>=1.1.0 <2.0.0",
                  "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-1.1.1.tgz"
                }
              }
            },
            "supports-color": {
              "version": "1.3.1",
              "from": "supports-color@>=1.3.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-1.3.1.tgz"
            }
          }
        },
        "cheerio": {
          "version": "0.19.0",
          "from": "cheerio@>=0.19.0 <0.20.0",
          "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-0.19.0.tgz",
          "dependencies": {
            "css-select": {
              "version": "1.0.0",
              "from": "css-select@>=1.0.0 <1.1.0",
              "resolved": "https://registry.npmjs.org/css-select/-/css-select-1.0.0.tgz",
              "dependencies": {
                "css-what": {
                  "version": "1.0.0",
                  "from": "css-what@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/css-what/-/css-what-1.0.0.tgz"
                },
                "domutils": {
                  "version": "1.4.3",
                  "from": "domutils@>=1.4.0 <1.5.0",
                  "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.4.3.tgz",
                  "dependencies": {
                    "domelementtype": {
                      "version": "1.3.0",
                      "from": "domelementtype@>=1.0.0 <2.0.0",
                      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.0.tgz"
                    }
                  }
                },
                "boolbase": {
                  "version": "1.0.0",
                  "from": "boolbase@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz"
                },
                "nth-check": {
                  "version": "1.0.1",
                  "from": "nth-check@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.1.tgz"
                }
              }
            },
            "entities": {
              "version": "1.1.1",
              "from": "entities@>=1.1.1 <1.2.0",
              "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.1.tgz"
            },
            "htmlparser2": {
              "version": "3.8.2",
              "from": "htmlparser2@>=3.8.1 <3.9.0",
              "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.8.2.tgz",
              "dependencies": {
                "domhandler": {
                  "version": "2.3.0",
                  "from": "domhandler@>=2.3.0 <2.4.0",
                  "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.3.0.tgz"
                },
                "domutils": {
                  "version": "1.5.1",
                  "from": "domutils@>=1.5.0 <1.6.0",
                  "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.5.1.tgz"
                },
                "domelementtype": {
                  "version": "1.3.0",
                  "from": "domelementtype@>=1.0.0 <2.0.0",
                  "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.0.tgz"
                },
                "readable-stream": {
                  "version": "1.1.13",
                  "from": "readable-stream@>=1.1.0 <1.2.0",
                  "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.13.tgz",
                  "dependencies": {
                    "core-util-is": {
                      "version": "1.0.1",
                      "from": "core-util-is@>=1.0.0 <1.1.0",
                      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.1.tgz"
                    },
                    "isarray": {
                      "version": "0.0.1",
                      "from": "isarray@0.0.1",
                      "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz"
                    },
                    "string_decoder": {
                      "version": "0.10.31",
                      "from": "string_decoder@>=0.10.0 <0.11.0",
                      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz"
                    },
                    "inherits": {
                      "version": "2.0.1",
                      "from": "inherits@>=2.0.1 <2.1.0"
                    }
                  }
                },
                "entities": {
                  "version": "1.0.0",
                  "from": "entities@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/entities/-/entities-1.0.0.tgz"
                }
              }
            },
            "dom-serializer": {
              "version": "0.1.0",
              "from": "dom-serializer@>=0.1.0 <0.2.0",
              "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.1.0.tgz",
              "dependencies": {
                "domelementtype": {
                  "version": "1.1.3",
                  "from": "domelementtype@>=1.1.1 <1.2.0",
                  "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.1.3.tgz"
                }
              }
            }
          }
        },
        "hexo-cli": {
          "version": "0.1.4",
          "from": "hexo-cli@>=0.1.0 <0.2.0",
          "resolved": "https://registry.npmjs.org/hexo-cli/-/hexo-cli-0.1.4.tgz",
          "dependencies": {
            "minimist": {
              "version": "1.1.1",
              "from": "minimist@>=1.1.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.1.1.tgz"
            }
          }
        },
        "hexo-front-matter": {
          "version": "0.2.2",
          "from": "hexo-front-matter@>=0.2.1 <0.3.0",
          "resolved": "https://registry.npmjs.org/hexo-front-matter/-/hexo-front-matter-0.2.2.tgz"
        },
        "hexo-fs": {
          "version": "0.1.3",
          "from": "hexo-fs@>=0.1.3 <0.2.0",
          "resolved": "https://registry.npmjs.org/hexo-fs/-/hexo-fs-0.1.3.tgz",
          "dependencies": {
            "chokidar": {
              "version": "0.12.6",
              "from": "chokidar@>=0.12.0 <0.13.0",
              "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-0.12.6.tgz",
              "dependencies": {
                "readdirp": {
                  "version": "1.3.0",
                  "from": "readdirp@>=1.3.0 <1.4.0",
                  "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-1.3.0.tgz",
                  "dependencies": {
                    "graceful-fs": {
                      "version": "2.0.3",
                      "from": "graceful-fs@>=2.0.0 <2.1.0",
                      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.3.tgz"
                    },
                    "minimatch": {
                      "version": "0.2.14",
                      "from": "minimatch@>=0.2.12 <0.3.0",
                      "dependencies": {
                        "lru-cache": {
                          "version": "2.6.2",
                          "from": "lru-cache@>=2.0.0 <3.0.0",
                          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-2.6.2.tgz"
                        },
                        "sigmund": {
                          "version": "1.0.0",
                          "from": "sigmund@>=1.0.0 <1.1.0"
                        }
                      }
                    },
                    "readable-stream": {
                      "version": "1.0.33",
                      "from": "readable-stream@>=1.0.26-2 <1.1.0",
                      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.0.33.tgz",
                      "dependencies": {
                        "core-util-is": {
                          "version": "1.0.1",
                          "from": "core-util-is@>=1.0.0 <1.1.0",
                          "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.1.tgz"
                        },
                        "isarray": {
                          "version": "0.0.1",
                          "from": "isarray@0.0.1",
                          "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz"
                        },
                        "string_decoder": {
                          "version": "0.10.31",
                          "from": "string_decoder@>=0.10.0 <0.11.0",
                          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz"
                        },
                        "inherits": {
                          "version": "2.0.1",
                          "from": "inherits@>=2.0.1 <2.1.0"
                        }
                      }
                    }
                  }
                },
                "async-each": {
                  "version": "0.1.6",
                  "from": "async-each@>=0.1.5 <0.2.0",
                  "resolved": "https://registry.npmjs.org/async-each/-/async-each-0.1.6.tgz"
                }
              }
            },
            "escape-string-regexp": {
              "version": "1.0.3",
              "from": "escape-string-regexp@>=1.0.2 <2.0.0",
              "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.3.tgz"
            },
            "graceful-fs": {
              "version": "3.0.6",
              "from": "graceful-fs@>=3.0.4 <4.0.0",
              "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-3.0.6.tgz"
            }
          }
        },
        "hexo-i18n": {
          "version": "0.2.1",
          "from": "hexo-i18n@>=0.2.0 <0.3.0",
          "resolved": "https://registry.npmjs.org/hexo-i18n/-/hexo-i18n-0.2.1.tgz",
          "dependencies": {
            "sprintf-js": {
              "version": "1.0.2",
              "from": "sprintf-js@>=1.0.2 <2.0.0",
              "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.2.tgz"
            }
          }
        },
        "hexo-util": {
          "version": "0.1.6",
          "from": "hexo-util@>=0.1.6 <0.2.0",
          "resolved": "https://registry.npmjs.org/hexo-util/-/hexo-util-0.1.6.tgz",
          "dependencies": {
            "ent": {
              "version": "2.2.0",
              "from": "ent@>=2.2.0 <3.0.0",
              "resolved": "https://registry.npmjs.org/ent/-/ent-2.2.0.tgz"
            },
            "highlight.js": {
              "version": "8.5.0",
              "from": "highlight.js@>=8.4.0 <9.0.0",
              "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-8.5.0.tgz"
            }
          }
        },
        "js-yaml": {
          "version": "3.2.7",
          "from": "js-yaml@>=3.2.5 <4.0.0",
          "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.2.7.tgz",
          "dependencies": {
            "argparse": {
              "version": "1.0.2",
              "from": "argparse@>=1.0.0 <1.1.0",
              "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.2.tgz",
              "dependencies": {
                "sprintf-js": {
                  "version": "1.0.2",
                  "from": "sprintf-js@>=1.0.2 <1.1.0",
                  "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.2.tgz"
                }
              }
            },
            "esprima": {
              "version": "2.0.0",
              "from": "esprima@>=2.0.0 <2.1.0",
              "resolved": "https://registry.npmjs.org/esprima/-/esprima-2.0.0.tgz"
            }
          }
        },
        "lodash": {
          "version": "3.7.0",
          "from": "lodash@>=3.2.0 <4.0.0",
          "resolved": "https://registry.npmjs.org/lodash/-/lodash-3.7.0.tgz"
        },
        "minimatch": {
          "version": "2.0.4",
          "from": "minimatch@>=2.0.1 <3.0.0",
          "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-2.0.4.tgz",
          "dependencies": {
            "brace-expansion": {
              "version": "1.1.0",
              "from": "brace-expansion@>=1.0.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.0.tgz",
              "dependencies": {
                "balanced-match": {
                  "version": "0.2.0",
                  "from": "balanced-match@>=0.2.0 <0.3.0",
                  "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-0.2.0.tgz"
                },
                "concat-map": {
                  "version": "0.0.1",
                  "from": "concat-map@0.0.1",
                  "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz"
                }
              }
            }
          }
        },
        "moment": {
          "version": "2.9.0",
          "from": "moment@2.9.0",
          "resolved": "https://registry.npmjs.org/moment/-/moment-2.9.0.tgz"
        },
        "moment-timezone": {
          "version": "0.3.1",
          "from": "moment-timezone@>=0.3.0 <0.4.0",
          "resolved": "https://registry.npmjs.org/moment-timezone/-/moment-timezone-0.3.1.tgz"
        },
        "nunjucks": {
          "version": "1.3.3",
          "from": "nunjucks@>=1.3.3 <2.0.0",
          "resolved": "https://registry.npmjs.org/nunjucks/-/nunjucks-1.3.3.tgz",
          "dependencies": {
            "optimist": {
              "version": "0.6.1",
              "from": "optimist@*",
              "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
              "dependencies": {
                "wordwrap": {
                  "version": "0.0.2",
                  "from": "wordwrap@>=0.0.2 <0.1.0",
                  "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz"
                },
                "minimist": {
                  "version": "0.0.10",
                  "from": "minimist@>=0.0.1 <0.1.0",
                  "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz"
                }
              }
            },
            "chokidar": {
              "version": "0.12.6",
              "from": "chokidar@>=0.12.5 <0.13.0",
              "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-0.12.6.tgz",
              "dependencies": {
                "readdirp": {
                  "version": "1.3.0",
                  "from": "readdirp@>=1.3.0 <1.4.0",
                  "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-1.3.0.tgz",
                  "dependencies": {
                    "graceful-fs": {
                      "version": "2.0.3",
                      "from": "graceful-fs@>=2.0.0 <2.1.0",
                      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.3.tgz"
                    },
                    "minimatch": {
                      "version": "0.2.14",
                      "from": "minimatch@>=0.2.12 <0.3.0",
                      "dependencies": {
                        "lru-cache": {
                          "version": "2.6.2",
                          "from": "lru-cache@>=2.0.0 <3.0.0",
                          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-2.6.2.tgz"
                        },
                        "sigmund": {
                          "version": "1.0.0",
                          "from": "sigmund@>=1.0.0 <1.1.0"
                        }
                      }
                    },
                    "readable-stream": {
                      "version": "1.0.33",
                      "from": "readable-stream@>=1.0.26-2 <1.1.0",
                      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.0.33.tgz",
                      "dependencies": {
                        "core-util-is": {
                          "version": "1.0.1",
                          "from": "core-util-is@>=1.0.0 <1.1.0",
                          "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.1.tgz"
                        },
                        "isarray": {
                          "version": "0.0.1",
                          "from": "isarray@0.0.1",
                          "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz"
                        },
                        "string_decoder": {
                          "version": "0.10.31",
                          "from": "string_decoder@>=0.10.0 <0.11.0",
                          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz"
                        },
                        "inherits": {
                          "version": "2.0.1",
                          "from": "inherits@>=2.0.1 <2.1.0"
                        }
                      }
                    }
                  }
                },
                "async-each": {
                  "version": "0.1.6",
                  "from": "async-each@>=0.1.5 <0.2.0",
                  "resolved": "https://registry.npmjs.org/async-each/-/async-each-0.1.6.tgz"
                }
              }
            }
          }
        },
        "pretty-hrtime": {
          "version": "1.0.0",
          "from": "pretty-hrtime@>=1.0.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/pretty-hrtime/-/pretty-hrtime-1.0.0.tgz"
        },
        "strip-indent": {
          "version": "1.0.1",
          "from": "strip-indent@>=1.0.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
          "dependencies": {
            "get-stdin": {
              "version": "4.0.1",
              "from": "get-stdin@>=4.0.1 <5.0.0",
              "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz"
            }
          }
        },
        "swig": {
          "version": "1.4.2",
          "from": "swig@1.4.2",
          "resolved": "https://registry.npmjs.org/swig/-/swig-1.4.2.tgz",
          "dependencies": {
            "uglify-js": {
              "version": "2.4.20",
              "from": "uglify-js@>=2.4.0 <2.5.0",
              "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-2.4.20.tgz",
              "dependencies": {
                "async": {
                  "version": "0.2.10",
                  "from": "async@>=0.2.6 <0.3.0",
                  "resolved": "https://registry.npmjs.org/async/-/async-0.2.10.tgz"
                },
                "source-map": {
                  "version": "0.1.34",
                  "from": "source-map@0.1.34",
                  "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.1.34.tgz",
                  "dependencies": {
                    "amdefine": {
                      "version": "0.1.0",
                      "from": "amdefine@>=0.0.4",
                      "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-0.1.0.tgz"
                    }
                  }
                },
                "yargs": {
                  "version": "3.5.4",
                  "from": "yargs@>=3.5.4 <3.6.0",
                  "resolved": "https://registry.npmjs.org/yargs/-/yargs-3.5.4.tgz",
                  "dependencies": {
                    "camelcase": {
                      "version": "1.0.2",
                      "from": "camelcase@>=1.0.2 <2.0.0",
                      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-1.0.2.tgz"
                    },
                    "decamelize": {
                      "version": "1.0.0",
                      "from": "decamelize@>=1.0.0 <2.0.0",
                      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.0.0.tgz"
                    },
                    "window-size": {
                      "version": "0.1.0",
                      "from": "window-size@0.1.0",
                      "resolved": "https://registry.npmjs.org/window-size/-/window-size-0.1.0.tgz"
                    },
                    "wordwrap": {
                      "version": "0.0.2",
                      "from": "wordwrap@0.0.2",
                      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz"
                    }
                  }
                },
                "uglify-to-browserify": {
                  "version": "1.0.2",
                  "from": "uglify-to-browserify@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/uglify-to-browserify/-/uglify-to-browserify-1.0.2.tgz"
                }
              }
            },
            "optimist": {
              "version": "0.6.1",
              "from": "optimist@>=0.6.0 <0.7.0",
              "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
              "dependencies": {
                "wordwrap": {
                  "version": "0.0.2",
                  "from": "wordwrap@>=0.0.2 <0.1.0",
                  "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz"
                },
                "minimist": {
                  "version": "0.0.10",
                  "from": "minimist@>=0.0.1 <0.1.0",
                  "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz"
                }
              }
            }
          }
        },
        "swig-extras": {
          "version": "0.0.1",
          "from": "swig-extras@0.0.1",
          "resolved": "https://registry.npmjs.org/swig-extras/-/swig-extras-0.0.1.tgz",
          "dependencies": {
            "markdown": {
              "version": "0.5.0",
              "from": "markdown@>=0.5.0 <0.6.0",
              "resolved": "https://registry.npmjs.org/markdown/-/markdown-0.5.0.tgz",
              "dependencies": {
                "nopt": {
                  "version": "2.1.2",
                  "from": "nopt@>=2.1.1 <2.2.0",
                  "resolved": "https://registry.npmjs.org/nopt/-/nopt-2.1.2.tgz"
                }
              }
            }
          }
        },
        "text-table": {
          "version": "0.2.0",
          "from": "text-table@>=0.2.0 <0.3.0",
          "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz"
        },
        "through2": {
          "version": "1.1.1",
          "from": "through2@>=1.1.1 <2.0.0",
          "resolved": "https://registry.npmjs.org/through2/-/through2-1.1.1.tgz",
          "dependencies": {
            "readable-stream": {
              "version": "1.1.13",
              "from": "readable-stream@>=1.1.13-1 <1.2.0-0",
              "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.13.tgz",
              "dependencies": {
                "core-util-is": {
                  "version": "1.0.1",
                  "from": "core-util-is@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.1.tgz"
                },
                "isarray": {
                  "version": "0.0.1",
                  "from": "isarray@0.0.1",
                  "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz"
                },
                "string_decoder": {
                  "version": "0.10.31",
                  "from": "string_decoder@>=0.10.0 <0.11.0",
                  "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz"
                },
                "inherits": {
                  "version": "2.0.1",
                  "from": "inherits@>=2.0.1 <2.1.0"
                }
              }
            },
            "xtend": {
              "version": "4.0.0",
              "from": "xtend@>=4.0.0 <4.1.0-0",
              "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.0.tgz"
            }
          }
        },
        "tildify": {
          "version": "1.0.0",
          "from": "tildify@>=1.0.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/tildify/-/tildify-1.0.0.tgz",
          "dependencies": {
            "user-home": {
              "version": "1.1.1",
              "from": "user-home@>=1.0.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/user-home/-/user-home-1.1.1.tgz"
            }
          }
        },
        "titlecase": {
          "version": "1.0.2",
          "from": "titlecase@>=1.0.2 <2.0.0",
          "resolved": "https://registry.npmjs.org/titlecase/-/titlecase-1.0.2.tgz"
        },
        "warehouse": {
          "version": "1.0.2",
          "from": "warehouse@>=1.0.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/warehouse/-/warehouse-1.0.2.tgz",
          "dependencies": {
            "JSONStream": {
              "version": "0.10.0",
              "from": "JSONStream@>=0.10.0 <0.11.0",
              "resolved": "https://registry.npmjs.org/JSONStream/-/JSONStream-0.10.0.tgz",
              "dependencies": {
                "jsonparse": {
                  "version": "0.0.5",
                  "from": "jsonparse@0.0.5",
                  "resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-0.0.5.tgz"
                },
                "through": {
                  "version": "2.3.7",
                  "from": "through@>=2.2.7 <3.0.0",
                  "resolved": "https://registry.npmjs.org/through/-/through-2.3.7.tgz"
                }
              }
            },
            "cuid": {
              "version": "1.2.4",
              "from": "cuid@>=1.2.4 <2.0.0",
              "resolved": "https://registry.npmjs.org/cuid/-/cuid-1.2.4.tgz"
            },
            "graceful-fs": {
              "version": "3.0.6",
              "from": "graceful-fs@>=3.0.5 <4.0.0",
              "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-3.0.6.tgz"
            }
          }
        }
      }
    },
    "hexo-deployer-git": {
      "version": "0.0.4",
      "from": "hexo-deployer-git@*",
      "resolved": "https://registry.npmjs.org/hexo-deployer-git/-/hexo-deployer-git-0.0.4.tgz",
      "dependencies": {
        "chalk": {
          "version": "0.5.1",
          "from": "chalk@>=0.5.1 <0.6.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-0.5.1.tgz",
          "dependencies": {
            "ansi-styles": {
              "version": "1.1.0",
              "from": "ansi-styles@>=1.1.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-1.1.0.tgz"
            },
            "escape-string-regexp": {
              "version": "1.0.3",
              "from": "escape-string-regexp@>=1.0.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.3.tgz"
            },
            "has-ansi": {
              "version": "0.1.0",
              "from": "has-ansi@>=0.1.0 <0.2.0",
              "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-0.1.0.tgz",
              "dependencies": {
                "ansi-regex": {
                  "version": "0.2.1",
                  "from": "ansi-regex@>=0.2.0 <0.3.0",
                  "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-0.2.1.tgz"
                }
              }
            },
            "strip-ansi": {
              "version": "0.3.0",
              "from": "strip-ansi@>=0.3.0 <0.4.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-0.3.0.tgz",
              "dependencies": {
                "ansi-regex": {
                  "version": "0.2.1",
                  "from": "ansi-regex@>=0.2.0 <0.3.0",
                  "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-0.2.1.tgz"
                }
              }
            },
            "supports-color": {
              "version": "0.2.0",
              "from": "supports-color@>=0.2.0 <0.3.0",
              "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-0.2.0.tgz"
            }
          }
        },
        "hexo-fs": {
          "version": "0.1.3",
          "from": "hexo-fs@>=0.1.0 <0.2.0",
          "resolved": "https://registry.npmjs.org/hexo-fs/-/hexo-fs-0.1.3.tgz",
          "dependencies": {
            "bluebird": {
              "version": "2.9.24",
              "from": "bluebird@>=2.3.11 <3.0.0",
              "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-2.9.24.tgz"
            },
            "chokidar": {
              "version": "0.12.6",
              "from": "chokidar@>=0.12.0 <0.13.0",
              "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-0.12.6.tgz",
              "dependencies": {
                "readdirp": {
                  "version": "1.3.0",
                  "from": "readdirp@>=1.3.0 <1.4.0",
                  "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-1.3.0.tgz",
                  "dependencies": {
                    "graceful-fs": {
                      "version": "2.0.3",
                      "from": "graceful-fs@>=2.0.0 <2.1.0",
                      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.3.tgz"
                    },
                    "minimatch": {
                      "version": "0.2.14",
                      "from": "minimatch@>=0.2.12 <0.3.0",
                      "dependencies": {
                        "lru-cache": {
                          "version": "2.6.2",
                          "from": "lru-cache@>=2.0.0 <3.0.0",
                          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-2.6.2.tgz"
                        },
                        "sigmund": {
                          "version": "1.0.0",
                          "from": "sigmund@>=1.0.0 <1.1.0"
                        }
                      }
                    },
                    "readable-stream": {
                      "version": "1.0.33",
                      "from": "readable-stream@>=1.0.26-2 <1.1.0",
                      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.0.33.tgz",
                      "dependencies": {
                        "core-util-is": {
                          "version": "1.0.1",
                          "from": "core-util-is@>=1.0.0 <1.1.0",
                          "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.1.tgz"
                        },
                        "isarray": {
                          "version": "0.0.1",
                          "from": "isarray@0.0.1",
                          "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz"
                        },
                        "string_decoder": {
                          "version": "0.10.31",
                          "from": "string_decoder@>=0.10.0 <0.11.0",
                          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz"
                        },
                        "inherits": {
                          "version": "2.0.1",
                          "from": "inherits@>=2.0.1 <2.1.0"
                        }
                      }
                    }
                  }
                },
                "async-each": {
                  "version": "0.1.6",
                  "from": "async-each@>=0.1.5 <0.2.0",
                  "resolved": "https://registry.npmjs.org/async-each/-/async-each-0.1.6.tgz"
                }
              }
            },
            "escape-string-regexp": {
              "version": "1.0.3",
              "from": "escape-string-regexp@>=1.0.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.3.tgz"
            },
            "graceful-fs": {
              "version": "3.0.6",
              "from": "graceful-fs@>=3.0.4 <4.0.0",
              "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-3.0.6.tgz"
            }
          }
        },
        "hexo-util": {
          "version": "0.1.6",
          "from": "hexo-util@>=0.1.0 <0.2.0",
          "resolved": "https://registry.npmjs.org/hexo-util/-/hexo-util-0.1.6.tgz",
          "dependencies": {
            "bluebird": {
              "version": "2.9.24",
              "from": "bluebird@>=2.3.11 <3.0.0",
              "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-2.9.24.tgz"
            },
            "ent": {
              "version": "2.2.0",
              "from": "ent@>=2.2.0 <3.0.0",
              "resolved": "https://registry.npmjs.org/ent/-/ent-2.2.0.tgz"
            },
            "highlight.js": {
              "version": "8.5.0",
              "from": "highlight.js@>=8.4.0 <9.0.0",
              "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-8.5.0.tgz"
            }
          }
        },
        "moment": {
          "version": "2.10.2",
          "from": "moment@>=2.8.4 <3.0.0",
          "resolved": "https://registry.npmjs.org/moment/-/moment-2.10.2.tgz"
        },
        "swig": {
          "version": "1.4.2",
          "from": "swig@>=1.4.2 <2.0.0",
          "resolved": "https://registry.npmjs.org/swig/-/swig-1.4.2.tgz",
          "dependencies": {
            "uglify-js": {
              "version": "2.4.20",
              "from": "uglify-js@>=2.4.0 <2.5.0",
              "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-2.4.20.tgz",
              "dependencies": {
                "async": {
                  "version": "0.2.10",
                  "from": "async@>=0.2.6 <0.3.0",
                  "resolved": "https://registry.npmjs.org/async/-/async-0.2.10.tgz"
                },
                "source-map": {
                  "version": "0.1.34",
                  "from": "source-map@0.1.34",
                  "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.1.34.tgz",
                  "dependencies": {
                    "amdefine": {
                      "version": "0.1.0",
                      "from": "amdefine@>=0.0.4",
                      "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-0.1.0.tgz"
                    }
                  }
                },
                "yargs": {
                  "version": "3.5.4",
                  "from": "yargs@>=3.5.4 <3.6.0",
                  "resolved": "https://registry.npmjs.org/yargs/-/yargs-3.5.4.tgz",
                  "dependencies": {
                    "camelcase": {
                      "version": "1.0.2",
                      "from": "camelcase@>=1.0.2 <2.0.0",
                      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-1.0.2.tgz"
                    },
                    "decamelize": {
                      "version": "1.0.0",
                      "from": "decamelize@>=1.0.0 <2.0.0",
                      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.0.0.tgz"
                    },
                    "window-size": {
                      "version": "0.1.0",
                      "from": "window-size@0.1.0",
                      "resolved": "https://registry.npmjs.org/window-size/-/window-size-0.1.0.tgz"
                    },
                    "wordwrap": {
                      "version": "0.0.2",
                      "from": "wordwrap@0.0.2",
                      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz"
                    }
                  }
                },
                "uglify-to-browserify": {
                  "version": "1.0.2",
                  "from": "uglify-to-browserify@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/uglify-to-browserify/-/uglify-to-browserify-1.0.2.tgz"
                }
              }
            },
            "optimist": {
              "version": "0.6.1",
              "from": "optimist@>=0.6.0 <0.7.0",
              "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",
              "dependencies": {
                "wordwrap": {
                  "version": "0.0.2",
                  "from": "wordwrap@>=0.0.2 <0.1.0",
                  "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz"
                },
                "minimist": {
                  "version": "0.0.10",
                  "from": "minimist@>=0.0.1 <0.1.0",
                  "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz"
                }
              }
            }
          }
        }
      }
    },
    "hexo-generator-archive": {
      "version": "0.1.1",
      "from": "hexo-generator-archive@>=0.1.0 <0.2.0",
      "resolved": "https://registry.npmjs.org/hexo-generator-archive/-/hexo-generator-archive-0.1.1.tgz",
      "dependencies": {
        "hexo-pagination": {
          "version": "0.0.2",
          "from": "hexo-pagination@0.0.2",
          "resolved": "https://registry.npmjs.org/hexo-pagination/-/hexo-pagination-0.0.2.tgz",
          "dependencies": {
            "utils-merge": {
              "version": "1.0.0",
              "from": "utils-merge@1.0.0",
              "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.0.tgz"
            }
          }
        },
        "object-assign": {
          "version": "2.0.0",
          "from": "object-assign@>=2.0.0 <3.0.0",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-2.0.0.tgz"
        }
      }
    },
    "hexo-generator-category": {
      "version": "0.1.1",
      "from": "hexo-generator-category@>=0.1.0 <0.2.0",
      "resolved": "https://registry.npmjs.org/hexo-generator-category/-/hexo-generator-category-0.1.1.tgz",
      "dependencies": {
        "hexo-pagination": {
          "version": "0.0.2",
          "from": "hexo-pagination@0.0.2",
          "resolved": "https://registry.npmjs.org/hexo-pagination/-/hexo-pagination-0.0.2.tgz",
          "dependencies": {
            "utils-merge": {
              "version": "1.0.0",
              "from": "utils-merge@1.0.0",
              "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.0.tgz"
            }
          }
        },
        "object-assign": {
          "version": "2.0.0",
          "from": "object-assign@>=2.0.0 <3.0.0",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-2.0.0.tgz"
        }
      }
    },
    "hexo-generator-index": {
      "version": "0.1.0",
      "from": "hexo-generator-index@>=0.1.0 <0.2.0",
      "resolved": "https://registry.npmjs.org/hexo-generator-index/-/hexo-generator-index-0.1.0.tgz",
      "dependencies": {
        "hexo-pagination": {
          "version": "0.0.2",
          "from": "hexo-pagination@0.0.2",
          "resolved": "https://registry.npmjs.org/hexo-pagination/-/hexo-pagination-0.0.2.tgz",
          "dependencies": {
            "utils-merge": {
              "version": "1.0.0",
              "from": "utils-merge@1.0.0",
              "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.0.tgz"
            }
          }
        },
        "object-assign": {
          "version": "2.0.0",
          "from": "object-assign@>=2.0.0 <3.0.0",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-2.0.0.tgz"
        }
      }
    },
    "hexo-generator-tag": {
      "version": "0.1.0",
      "from": "hexo-generator-tag@>=0.1.0 <0.2.0",
      "resolved": "https://registry.npmjs.org/hexo-generator-tag/-/hexo-generator-tag-0.1.0.tgz",
      "dependencies": {
        "hexo-pagination": {
          "version": "0.0.2",
          "from": "hexo-pagination@0.0.2",
          "resolved": "https://registry.npmjs.org/hexo-pagination/-/hexo-pagination-0.0.2.tgz",
          "dependencies": {
            "utils-merge": {
              "version": "1.0.0",
              "from": "utils-merge@1.0.0",
              "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.0.tgz"
            }
          }
        },
        "object-assign": {
          "version": "2.0.0",
          "from": "object-assign@>=2.0.0 <3.0.0",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-2.0.0.tgz"
        }
      }
    },
    "hexo-renderer-ejs": {
      "version": "0.1.0",
      "from": "hexo-renderer-ejs@>=0.1.0 <0.2.0",
      "resolved": "https://registry.npmjs.org/hexo-renderer-ejs/-/hexo-renderer-ejs-0.1.0.tgz",
      "dependencies": {
        "ejs": {
          "version": "1.0.0",
          "from": "ejs@>=1.0.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/ejs/-/ejs-1.0.0.tgz"
        },
        "lodash": {
          "version": "2.4.1",
          "from": "lodash@>=2.4.1 <3.0.0",
          "resolved": "https://registry.npmjs.org/lodash/-/lodash-2.4.1.tgz"
        }
      }
    },
    "hexo-renderer-marked": {
      "version": "0.2.5",
      "from": "hexo-renderer-marked@>=0.2.4 <0.3.0",
      "resolved": "https://registry.npmjs.org/hexo-renderer-marked/-/hexo-renderer-marked-0.2.5.tgz",
      "dependencies": {
        "hexo-util": {
          "version": "0.1.6",
          "from": "hexo-util@>=0.1.0 <0.2.0",
          "resolved": "https://registry.npmjs.org/hexo-util/-/hexo-util-0.1.6.tgz",
          "dependencies": {
            "bluebird": {
              "version": "2.9.24",
              "from": "bluebird@>=2.6.2 <3.0.0",
              "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-2.9.24.tgz"
            },
            "ent": {
              "version": "2.2.0",
              "from": "ent@>=2.2.0 <3.0.0",
              "resolved": "https://registry.npmjs.org/ent/-/ent-2.2.0.tgz"
            },
            "highlight.js": {
              "version": "8.5.0",
              "from": "highlight.js@>=8.4.0 <9.0.0",
              "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-8.5.0.tgz"
            }
          }
        },
        "marked": {
          "version": "0.3.3",
          "from": "marked@>=0.3.3 <0.4.0",
          "resolved": "https://registry.npmjs.org/marked/-/marked-0.3.3.tgz"
        },
        "object-assign": {
          "version": "2.0.0",
          "from": "object-assign@>=2.0.0 <3.0.0",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-2.0.0.tgz"
        },
        "strip-indent": {
          "version": "1.0.1",
          "from": "strip-indent@>=1.0.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
          "dependencies": {
            "get-stdin": {
              "version": "4.0.1",
              "from": "get-stdin@>=4.0.1 <5.0.0",
              "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz"
            }
          }
        }
      }
    },
    "hexo-renderer-stylus": {
      "version": "0.2.3",
      "from": "hexo-renderer-stylus@>=0.2.0 <0.3.0",
      "resolved": "https://registry.npmjs.org/hexo-renderer-stylus/-/hexo-renderer-stylus-0.2.3.tgz",
      "dependencies": {
        "stylus": {
          "version": "0.50.0",
          "from": "stylus@>=0.50.0 <0.51.0",
          "resolved": "https://registry.npmjs.org/stylus/-/stylus-0.50.0.tgz",
          "dependencies": {
            "css-parse": {
              "version": "1.7.0",
              "from": "css-parse@>=1.7.0 <1.8.0",
              "resolved": "https://registry.npmjs.org/css-parse/-/css-parse-1.7.0.tgz"
            },
            "mkdirp": {
              "version": "0.3.5",
              "from": "mkdirp@>=0.3.0 <0.4.0",
              "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.3.5.tgz"
            },
            "debug": {
              "version": "2.1.3",
              "from": "debug@*",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.1.3.tgz",
              "dependencies": {
                "ms": {
                  "version": "0.7.0",
                  "from": "ms@0.7.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-0.7.0.tgz"
                }
              }
            },
            "sax": {
              "version": "0.5.8",
              "from": "sax@>=0.5.0 <0.6.0",
              "resolved": "https://registry.npmjs.org/sax/-/sax-0.5.8.tgz"
            },
            "glob": {
              "version": "3.2.11",
              "from": "glob@>=3.2.0 <3.3.0",
              "resolved": "https://registry.npmjs.org/glob/-/glob-3.2.11.tgz",
              "dependencies": {
                "inherits": {
                  "version": "2.0.1",
                  "from": "inherits@>=2.0.0 <3.0.0"
                },
                "minimatch": {
                  "version": "0.3.0",
                  "from": "minimatch@>=0.3.0 <0.4.0",
                  "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-0.3.0.tgz",
                  "dependencies": {
                    "lru-cache": {
                      "version": "2.6.2",
                      "from": "lru-cache@>=2.0.0 <3.0.0",
                      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-2.6.2.tgz"
                    },
                    "sigmund": {
                      "version": "1.0.0",
                      "from": "sigmund@>=1.0.0 <1.1.0"
                    }
                  }
                }
              }
            },
            "source-map": {
              "version": "0.1.43",
              "from": "source-map@>=0.1.0 <0.2.0",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.1.43.tgz",
              "dependencies": {
                "amdefine": {
                  "version": "0.1.0",
                  "from": "amdefine@>=0.0.4",
                  "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-0.1.0.tgz"
                }
              }
            }
          }
        },
        "nib": {
          "version": "1.1.0",
          "from": "nib@>=1.1.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/nib/-/nib-1.1.0.tgz",
          "dependencies": {
            "stylus": {
              "version": "0.49.3",
              "from": "stylus@>=0.49.0 <0.50.0",
              "resolved": "https://registry.npmjs.org/stylus/-/stylus-0.49.3.tgz",
              "dependencies": {
                "css-parse": {
                  "version": "1.7.0",
                  "from": "css-parse@>=1.7.0 <1.8.0",
                  "resolved": "https://registry.npmjs.org/css-parse/-/css-parse-1.7.0.tgz"
                },
                "mkdirp": {
                  "version": "0.3.5",
                  "from": "mkdirp@>=0.3.0 <0.4.0",
                  "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.3.5.tgz"
                },
                "debug": {
                  "version": "2.1.3",
                  "from": "debug@*",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-2.1.3.tgz",
                  "dependencies": {
                    "ms": {
                      "version": "0.7.0",
                      "from": "ms@0.7.0",
                      "resolved": "https://registry.npmjs.org/ms/-/ms-0.7.0.tgz"
                    }
                  }
                },
                "sax": {
                  "version": "0.5.8",
                  "from": "sax@>=0.5.0 <0.6.0",
                  "resolved": "https://registry.npmjs.org/sax/-/sax-0.5.8.tgz"
                },
                "glob": {
                  "version": "3.2.11",
                  "from": "glob@>=3.2.0 <3.3.0",
                  "resolved": "https://registry.npmjs.org/glob/-/glob-3.2.11.tgz",
                  "dependencies": {
                    "inherits": {
                      "version": "2.0.1",
                      "from": "inherits@>=2.0.0 <3.0.0"
                    },
                    "minimatch": {
                      "version": "0.3.0",
                      "from": "minimatch@>=0.3.0 <0.4.0",
                      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-0.3.0.tgz",
                      "dependencies": {
                        "lru-cache": {
                          "version": "2.6.2",
                          "from": "lru-cache@>=2.0.0 <3.0.0",
                          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-2.6.2.tgz"
                        },
                        "sigmund": {
                          "version": "1.0.0",
                          "from": "sigmund@>=1.0.0 <1.1.0"
                        }
                      }
                    }
                  }
                },
                "source-map": {
                  "version": "0.1.43",
                  "from": "source-map@>=0.1.0 <0.2.0",
                  "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.1.43.tgz",
                  "dependencies": {
                    "amdefine": {
                      "version": "0.1.0",
                      "from": "amdefine@>=0.0.4",
                      "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-0.1.0.tgz"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "hexo-server": {
      "version": "0.1.2",
      "from": "hexo-server@>=0.1.2 <0.2.0",
      "resolved": "https://registry.npmjs.org/hexo-server/-/hexo-server-0.1.2.tgz",
      "dependencies": {
        "bluebird": {
          "version": "2.9.24",
          "from": "bluebird@>=2.6.2 <3.0.0",
          "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-2.9.24.tgz"
        },
        "chalk": {
          "version": "0.5.1",
          "from": "chalk@>=0.5.1 <0.6.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-0.5.1.tgz",
          "dependencies": {
            "ansi-styles": {
              "version": "1.1.0",
              "from": "ansi-styles@>=1.1.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-1.1.0.tgz"
            },
            "escape-string-regexp": {
              "version": "1.0.3",
              "from": "escape-string-regexp@>=1.0.0 <2.0.0",
              "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.3.tgz"
            },
            "has-ansi": {
              "version": "0.1.0",
              "from": "has-ansi@>=0.1.0 <0.2.0",
              "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-0.1.0.tgz",
              "dependencies": {
                "ansi-regex": {
                  "version": "0.2.1",
                  "from": "ansi-regex@>=0.2.0 <0.3.0",
                  "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-0.2.1.tgz"
                }
              }
            },
            "strip-ansi": {
              "version": "0.3.0",
              "from": "strip-ansi@>=0.3.0 <0.4.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-0.3.0.tgz",
              "dependencies": {
                "ansi-regex": {
                  "version": "0.2.1",
                  "from": "ansi-regex@>=0.2.0 <0.3.0",
                  "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-0.2.1.tgz"
                }
              }
            },
            "supports-color": {
              "version": "0.2.0",
              "from": "supports-color@>=0.2.0 <0.3.0",
              "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-0.2.0.tgz"
            }
          }
        },
        "compression": {
          "version": "1.4.3",
          "from": "compression@>=1.3.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/compression/-/compression-1.4.3.tgz",
          "dependencies": {
            "accepts": {
              "version": "1.2.5",
              "from": "accepts@>=1.2.5 <1.3.0",
              "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.2.5.tgz",
              "dependencies": {
                "mime-types": {
                  "version": "2.0.10",
                  "from": "mime-types@>=2.0.10 <2.1.0",
                  "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.0.10.tgz",
                  "dependencies": {
                    "mime-db": {
                      "version": "1.8.0",
                      "from": "mime-db@>=1.8.0 <1.9.0",
                      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.8.0.tgz"
                    }
                  }
                },
                "negotiator": {
                  "version": "0.5.1",
                  "from": "negotiator@0.5.1",
                  "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.5.1.tgz"
                }
              }
            },
            "bytes": {
              "version": "1.0.0",
              "from": "bytes@1.0.0",
              "resolved": "https://registry.npmjs.org/bytes/-/bytes-1.0.0.tgz"
            },
            "compressible": {
              "version": "2.0.2",
              "from": "compressible@>=2.0.2 <2.1.0",
              "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.2.tgz",
              "dependencies": {
                "mime-db": {
                  "version": "1.9.1",
                  "from": "mime-db@>=1.1.2 <2.0.0",
                  "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.9.1.tgz"
                }
              }
            },
            "debug": {
              "version": "2.1.3",
              "from": "debug@>=2.1.3 <2.2.0",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.1.3.tgz",
              "dependencies": {
                "ms": {
                  "version": "0.7.0",
                  "from": "ms@0.7.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-0.7.0.tgz"
                }
              }
            },
            "on-headers": {
              "version": "1.0.0",
              "from": "on-headers@>=1.0.0 <1.1.0",
              "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.0.tgz"
            },
            "vary": {
              "version": "1.0.0",
              "from": "vary@>=1.0.0 <1.1.0",
              "resolved": "https://registry.npmjs.org/vary/-/vary-1.0.0.tgz"
            }
          }
        },
        "connect": {
          "version": "3.3.5",
          "from": "connect@>=3.0.0 <4.0.0",
          "resolved": "https://registry.npmjs.org/connect/-/connect-3.3.5.tgz",
          "dependencies": {
            "debug": {
              "version": "2.1.3",
              "from": "debug@>=2.1.3 <2.2.0",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.1.3.tgz",
              "dependencies": {
                "ms": {
                  "version": "0.7.0",
                  "from": "ms@0.7.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-0.7.0.tgz"
                }
              }
            },
            "finalhandler": {
              "version": "0.3.4",
              "from": "finalhandler@0.3.4",
              "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-0.3.4.tgz",
              "dependencies": {
                "escape-html": {
                  "version": "1.0.1",
                  "from": "escape-html@1.0.1",
                  "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.1.tgz"
                },
                "on-finished": {
                  "version": "2.2.1",
                  "from": "on-finished@>=2.2.0 <2.3.0",
                  "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.2.1.tgz",
                  "dependencies": {
                    "ee-first": {
                      "version": "1.1.0",
                      "from": "ee-first@1.1.0",
                      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.0.tgz"
                    }
                  }
                }
              }
            },
            "parseurl": {
              "version": "1.3.0",
              "from": "parseurl@>=1.3.0 <1.4.0",
              "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.0.tgz"
            },
            "utils-merge": {
              "version": "1.0.0",
              "from": "utils-merge@1.0.0",
              "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.0.tgz"
            }
          }
        },
        "mime": {
          "version": "1.3.4",
          "from": "mime@>=1.2.11 <2.0.0",
          "resolved": "https://registry.npmjs.org/mime/-/mime-1.3.4.tgz"
        },
        "morgan": {
          "version": "1.5.2",
          "from": "morgan@>=1.5.0 <2.0.0",
          "resolved": "https://registry.npmjs.org/morgan/-/morgan-1.5.2.tgz",
          "dependencies": {
            "basic-auth": {
              "version": "1.0.0",
              "from": "basic-auth@1.0.0",
              "resolved": "https://registry.npmjs.org/basic-auth/-/basic-auth-1.0.0.tgz"
            },
            "debug": {
              "version": "2.1.3",
              "from": "debug@>=2.1.3 <2.2.0",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.1.3.tgz",
              "dependencies": {
                "ms": {
                  "version": "0.7.0",
                  "from": "ms@0.7.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-0.7.0.tgz"
                }
              }
            },
            "depd": {
              "version": "1.0.1",
              "from": "depd@>=1.0.0 <1.1.0",
              "resolved": "https://registry.npmjs.org/depd/-/depd-1.0.1.tgz"
            },
            "on-finished": {
              "version": "2.2.1",
              "from": "on-finished@>=2.2.0 <2.3.0",
              "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.2.1.tgz",
              "dependencies": {
                "ee-first": {
                  "version": "1.1.0",
                  "from": "ee-first@1.1.0",
                  "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.0.tgz"
                }
              }
            }
          }
        },
        "object-assign": {
          "version": "2.0.0",
          "from": "object-assign@>=2.0.0 <3.0.0",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-2.0.0.tgz"
        },
        "open": {
          "version": "0.0.5",
          "from": "open@0.0.5",
          "resolved": "https://registry.npmjs.org/open/-/open-0.0.5.tgz"
        },
        "serve-static": {
          "version": "1.9.2",
          "from": "serve-static@>=1.7.1 <2.0.0",
          "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.9.2.tgz",
          "dependencies": {
            "escape-html": {
              "version": "1.0.1",
              "from": "escape-html@1.0.1",
              "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.1.tgz"
            },
            "parseurl": {
              "version": "1.3.0",
              "from": "parseurl@>=1.3.0 <1.4.0",
              "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.0.tgz"
            },
            "send": {
              "version": "0.12.2",
              "from": "send@0.12.2",
              "resolved": "https://registry.npmjs.org/send/-/send-0.12.2.tgz",
              "dependencies": {
                "debug": {
                  "version": "2.1.3",
                  "from": "debug@>=2.1.3 <2.2.0",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-2.1.3.tgz"
                },
                "depd": {
                  "version": "1.0.1",
                  "from": "depd@>=1.0.0 <1.1.0",
                  "resolved": "https://registry.npmjs.org/depd/-/depd-1.0.1.tgz"
                },
                "destroy": {
                  "version": "1.0.3",
                  "from": "destroy@1.0.3",
                  "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.3.tgz"
                },
                "etag": {
                  "version": "1.5.1",
                  "from": "etag@>=1.5.1 <1.6.0",
                  "resolved": "https://registry.npmjs.org/etag/-/etag-1.5.1.tgz",
                  "dependencies": {
                    "crc": {
                      "version": "3.2.1",
                      "from": "crc@3.2.1",
                      "resolved": "https://registry.npmjs.org/crc/-/crc-3.2.1.tgz"
                    }
                  }
                },
                "fresh": {
                  "version": "0.2.4",
                  "from": "fresh@0.2.4",
                  "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.2.4.tgz"
                },
                "ms": {
                  "version": "0.7.0",
                  "from": "ms@0.7.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-0.7.0.tgz"
                },
                "on-finished": {
                  "version": "2.2.1",
                  "from": "on-finished@>=2.2.0 <2.3.0",
                  "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.2.1.tgz",
                  "dependencies": {
                    "ee-first": {
                      "version": "1.1.0",
                      "from": "ee-first@1.1.0",
                      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.0.tgz"
                    }
                  }
                },
                "range-parser": {
                  "version": "1.0.2",
                  "from": "range-parser@>=1.0.2 <1.1.0",
                  "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.0.2.tgz"
                }
              }
            },
            "utils-merge": {
              "version": "1.0.0",
              "from": "utils-merge@1.0.0",
              "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.0.tgz"
            }
          }
        }
      }
    }
  }
}
```
