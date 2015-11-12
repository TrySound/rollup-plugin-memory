function once(fn) {
    var called = false;
    return (...args) => {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
}

export default function memory(opts = {}) {
    if (typeof opts.contents !== 'string' &&
        !(opts.contents instanceof Buffer)
    ) {
        throw Error([
            'rollup-plugin-memory',
            'opts.contents should be string or buffer instance'
        ].join(': '));
    }

    let contents = opts.contents.toString();
    let path = typeof opts.path === 'string' ? opts.path : false;

    return {
        resolveId: once(id => path || id ),
        load: once(() => contents )
    };
}
