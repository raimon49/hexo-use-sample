var markdownlint = require("markdownlint"),
    glob = require("glob"),
    options = {
        "files": glob.sync("blog/source/_posts/*.md"),
        "config": {
            "default": true,
            "MD007": {"indent": 4},
            "MD013": false
        }
    };

var result = markdownlint.sync(options),
    resultString = result.toString();

if (resultString.length > 0) {
    console.log(resultString);
    process.exit(1);
} else {
    console.log("Markdown Syntax OK");
    process.exit(0);
}
