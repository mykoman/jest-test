const functions = require('./functions');

test('Add 2 and 2 expects 4', () => {
    expect(functions.add(2,2)).toBe(4);
} );

test('check if functions is defined',()=>{
    expect(functions).toBeDefined;
});

test('if x is returned', () => {
    expect(functions.x()).toMatch('x');
} );