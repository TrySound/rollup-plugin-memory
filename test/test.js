const assert = require('assert');
const rollup = require('rollup').rollup;
const memory = require('../');

function generate(bundle) {
    return bundle.generate({ format: 'cjs', useStrict: false }).code;
}

it('should load config from plugin options', () => {
    return rollup({
        entry: true,
        plugins: [
            memory({
                path: 'fixture.js',
                contents: 'console.log(0)'
            })
        ]
    }).then(bundle => {
        assert.equal(generate(bundle), 'console.log(0)');
    });
});

it('should load config from entry', () => {
    return rollup({
        entry: {
            path: 'fixture.js',
            contents: 'console.log(0)'
        },
        plugins: [
            memory()
        ]
    }).then(bundle => {
        assert.equal(generate(bundle), 'console.log(0)');
    });
});

it('should accept contents as Buffer in entry', () => {
    return rollup({
        entry: {
            path:'fixture.js',
            contents: new Buffer('console.log(0)')
        },
        plugins: [
            memory()
        ]
    }).then(bundle => {
        assert.equal(generate(bundle), 'console.log(0)');
    })
});

it('should accept contents as Buffer in plugin options', () => {
    return rollup({
        entry: true,
        plugins: [
            memory({
                path:'fixture.js',
                contents: new Buffer('console.log(0)')
            })
        ]
    }).then(bundle => {
        assert.equal(generate(bundle), 'console.log(0)');
    })
});

it('should fail if config is not specified', () => {
    rollup({
        entry: true,
        plugins: [memory()]
    }).then(() => {
        assert.fail('should fails on invalid config');
    }).catch(err => {
        assert.equal(err.message, '\'path\' should be a string and \'contents\' should be a string of Buffer');
    });
});
