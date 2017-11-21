# json-es6-loader

Load JSON as ES6 module. 

This loader transforms the following JSON

```json
{
    "foo": "foo-value",
    "bar": "bar-value"
}
```

to ES6 module in this way

```js
export const foo = 'foo-value';
export const bar = 'var-value';
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
