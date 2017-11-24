# json-es6-loader

Load JSON as ES6 module. 

This loader transforms the following JSON

```json
{
    "foo": "foo-value",
    "bar": "bar-value",
    "@baz": "baz-value",
    "9nine": "nine-value",
    "st-ra.n/ge": "strange-value"
}
```

to ES6 module in this way

```js
export const foo = 'foo-value';
export const bar = 'bar-value';
export const _baz = 'baz-value';
export const _nine = 'nine-value';
export const st_ra_n_ge = 'strange-value';
```

This module was build as a workaround to enable Tree Shaking of unused JSON properties. Take a look at https://github.com/webpack/webpack/issues/5734.

## Installation

```sh
$ npm i json-es6-loader -D
```

## Usage

```js
{
    test: /\.json$/,
    use: 'json-es6-loader'
}
```

## Remarks on Tree Shaking

Please read official guide https://webpack.js.org/guides/tree-shaking/. Just to summarize it - in order to enable Tree Shaking for JSON modules you need to: 
* use production build `webpack -p`,
* use `json-es6-loader`
* disable modules in `.babelrc` or in `webpack.config.js` - `presets: [["es2015", { "modules": false }]`,
* always import propertiers by name, ie. `import { fooProperty } from './foobar.json'`

## License

MIT &copy; [Michał Jezierski](https://pl.linkedin.com/in/jezierskimichal)
