function hi() {
    console.log('hello, a');
}

function hello(name, fn) {
    if (name === 'a') {
        fn();
    }
}

test('test', () => {
    const fn = jest.fn();
    hello('a', fn)
    expect(fn).toHaveBeenCalled()
})