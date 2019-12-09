import {
  shouldBeMultiSelectable,
  updatedMultiSelectedKeys,
} from '../../src/TableUtils';

describe('TableUtils', () => {
  it('shouldBeMultiSelectable return correct values', () => {
    let result = shouldBeMultiSelectable(-1, ['1', '2', '3'], '4');
    expect(result).toEqual(true);

    result = shouldBeMultiSelectable(4, ['1', '2', '3'], '4');
    expect(result).toEqual(true);

    result = shouldBeMultiSelectable(3, ['1', '2', '3'], '3');
    expect(result).toEqual(true);

    result = shouldBeMultiSelectable(3, ['1', '2', '3'], '4');
    expect(result).toEqual(false);
  });

  it('updatedMultiSelectedKeys return correct values', () => {
    let result = updatedMultiSelectedKeys(['1', '2', '3'], '4');
    expect(result).toEqual(['1', '2', '3', '4']);

    result = updatedMultiSelectedKeys(['1', '2', '3'], '2');
    expect(result).toEqual(['1', '3']);

    result = updatedMultiSelectedKeys([], '3');
    expect(result).toEqual(['3']);
  });
});
