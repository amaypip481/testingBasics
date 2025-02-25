const {sum, capitalize, calculator, caesarCipher,  analyseArray} = require('./sum');

test('adds 1+2 equal 3', () =>{
    expect(sum(1,2)).toBe(3);
});

test('capitalize first character at amay', () => {
    expect(capitalize("amay")).toBe("Amay");
})

test('Sum 2 numbers', () => {
    expect(calculator(1,2).add()).toBe(3);
});
test('divide 2 numbers', () => {
    expect(calculator(4,2).divide()).toBe(2);
});
test('Multiply 2 numbers', () => {
    expect(calculator(3,2).multiply()).toBe(6);
});

test("CaesarCipher", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})


test('Operators on numbers', () => {
    expect(analyseArray([1,8,3,4,2,6])).toBe({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     }.toString());
});