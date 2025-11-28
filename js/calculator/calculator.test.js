const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 2 / 1 to equal 2', () => {
  expect(calculator.divide(2, 1)).toBe(2);
});

test('divide -8 / 4 to equal -2', () => {
  expect(calculator.divide(-8, 4)).toBe(-2);
});

test('multiply 5 * 4 to equal 20', () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

test('multiply -5 * -10 to equal 50', () => {
  expect(calculator.multiply(-5, -10)).toBe(50);
});

// ✅ TAREA 3 - NUEVA PRUEBA PARA DIVISIÓN POR CERO
test('divide by zero should throw error', () => {
  expect(() => calculator.divide(5, 0)).toThrow();
  expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
});