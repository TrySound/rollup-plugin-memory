import test from 'ava';
import { rollup } from 'rollup';
import memory from '..';

/* eslint-disable max-len */
let tests = [{
    message: 'should load from memory',
    options: {
        contents: 'console.log("some content")',
        entry: 'fixture.js'
    },
    expected: 'console.log("some content")'
}, {
    message: 'should load with entry option and import',
    options: {
        contents: 'import mod from \'./mod.js\'; mod();',
        entry: 'fixture/simple.js'
    },
    expected: 'function mod () {\n    console.log(\'mod.js\');\n}\n\nmod();'
}, {
    message: 'should load with path option and import',
    options: {
        entry: '.',
        path: 'fixture/simple.js',
        contents: 'import mod from \'./mod.js\'; mod();'
    },
    expected: 'function mod () {\n    console.log(\'mod.js\');\n}\n\nmod();'
}];
/* eslint-enable max-len */

tests.forEach(item => {
    test(item.message, async t => {
        item.options.plugins = [
            memory(item.options)
        ];
        const bundle = await rollup(item.options);

        const result = bundle.generate({
            format: 'cjs',
            useStrict: false
        });

        t.is(result.code, item.expected);
    });
});
