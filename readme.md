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

This module was build as a workaround to enable tree shaking of unused JSON properties. Take a look at https://github.com/webpack/webpack/issues/5734.

## Installation

```sh
$ npm i json-es6-loader -D
```

## Usage

```js
{
    test: /\.json$/,
    use: [{
        loader: 'json-es6-loader'
    }]
}
```

## License

MIT
