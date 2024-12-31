function factorial(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

test('factorial of 5 should return 120', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial of 6 should return 720', () => {
    expect(factorial(6)).toBe(720);
});

test('factorial of 0 should return 1', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial of 1 should return 1', () => {
    expect(factorial(1)).toBe(1);
});

test('factorial of negative number should throw an error', () => {
    expect(() => factorial(-5)).toThrow('Input must be a non-negative integer');
});
