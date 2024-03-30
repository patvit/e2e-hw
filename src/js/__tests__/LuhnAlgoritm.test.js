import LuhnAlgorithm from '../LuhnAlgoritm';

test('the check digit must be equal to the calculated digit', () => {
  const luhnAlgorithm = new LuhnAlgorithm();
  const value = '4945616821746255';
  const expected = Number(value[value.length - 1]);
  const result = luhnAlgorithm.сalcCheckDigit(value);
  expect(result).toBe(expected);
});
