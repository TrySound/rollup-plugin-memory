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
    entry: {
        path: 'main.js',
        contents: 'console.log("some code");'
    },
    plugins: [
        memory()
    ]
});
```

`path` is a string like normal entry. `contents` is a string or Buffer with preloaded content.

# License

MIT © [Bogdan Chadkin](mailto:trysound@yandex.ru)
