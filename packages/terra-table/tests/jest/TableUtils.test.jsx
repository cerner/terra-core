import {
  canToggleArrayValue,
  toggleArrayValue,
} from '../../src/TableUtils';

describe('TableUtils', () => {
  it('canToggleArrayValue return correct values', () => {
    let result = canToggleArrayValue(-1, ['1', '2', '3'], '4');
    expect(result).toEqual(true);

    result = canToggleArrayValue(4, ['1', '2', '3'], '4');
    expect(result).toEqual(true);

    result = canToggleArrayValue(3, ['1', '2', '3'], '3');
    expect(result).toEqual(true);

    result = canToggleArrayValue(3, ['1', '2', '3'], '4');
    expect(result).toEqual(false);
  });

  it('toggleArrayValue return correct values', () => {
    let result = toggleArrayValue(['1', '2', '3'], '4');
    expect(result).toEqual(['1', '2', '3', '4']);

    result = toggleArrayValue(['1', '2', '3'], '2');
    expect(result).toEqual(['1', '3']);

    result = toggleArrayValue([], '3');
    expect(result).toEqual(['3']);
  });
});
