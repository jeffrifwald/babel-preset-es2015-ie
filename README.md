# babel-preset-es2015-ie

> Babel preset for all es2015 plugins that works with IE>=9.

## Install

```sh
$ npm install --save-dev babel-preset-es2015-ie
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-ie"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-ie
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-ie"]
});
```

## Options

### `modules`

`"amd" | "umd" | "systemjs" | "commonjs" | false`, defaults to `"commonjs"`.

Enable transformation of ES6 module syntax to another module type.

Setting this to `false` will not transform modules (uses with module bundlers like rollup.js).

## Examples

#### Example config for webpack 2/rollup

**.babelrc**

```json
{
  "presets": [
    ["es2015-ie", {
      "modules": false
    }]
  ]
}
```

