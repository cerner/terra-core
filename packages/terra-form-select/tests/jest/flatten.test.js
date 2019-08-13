import flatten from '../../src/shared/flatten';

test('given [] it returns []', () => {
  const list = [];
  const expected = [];
  const result = flatten(list);

  expect(result).toEqual(expected);
});

test('given [1, 2, 3] it returns [1, 2, 3] ', () => {
  const list = [1, 2, 3];
  const expected = [1, 2, 3];
  const result = flatten(list);

  expect(result).toEqual(expected);
});

test('given [1, 2, [3], 4] it returns [1, 2, 3, 4] ', () => {
  const list = [1, 2, [3], 4];
  const expected = [1, 2, 3, 4];
  const result = flatten(list);

  expect(result).toEqual(expected);
});

test('given [1, [2, [3], [4, [5]]], [6]] it returns [1, 2, 3, 4, 5, 6]', () => {
  const list = [1, [2, [3], [4, [5]]], [6]];
  const expected = [1, 2, 3, 4, 5, 6];
  const result = flatten(list);

  expect(result).toMatchObject(expected);
});
