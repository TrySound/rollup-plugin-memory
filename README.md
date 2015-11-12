# rollup-plugin-memory [![Build Status][ci-img]][ci]

[ci-img]:  https://travis-ci.org/TrySound/rollup-plugin-memory.svg
[ci]:      https://travis-ci.org/TrySound/rollup-plugin-memory

Load entry from memory

## Install

```sh
npm i rollup-plugin-memory -D
```

## Usage

```js
import { rollup } from 'rollup';
import memory from 'rollup-plugin-memory';

rollup({
    entry: 'main.js',
    plugins: [
        memory([
            contents: 'console.log("some code");'
        ])
    ]
});
```

## Options

### options.contents

Required. Type: `string` or `Buffer`

Preloaded content

### options.path

Options. Type: `string`

Path to loaded content. If this options specified rollup `entry` will be skipped

> rollup `entry` still should contain any non-empty string

# License

MIT © [Bogdan Chadkin](mailto:trysound@yandex.ru)
