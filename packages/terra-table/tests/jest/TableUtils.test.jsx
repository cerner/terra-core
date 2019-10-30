import TableUtils, {
  shouldBeMultiSelectable,
  updatedMultiSelectedKeys,
  styleFromWidth,
} from '../../src/TableUtils';

// wrappedOnClickForItem ?
// wrappedOnKeyDownForItem ?
// wrappedEventCallback ?

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
    expect(result).toEqual(true);

    result = updatedMultiSelectedKeys(['1', '2', '3'], '2');
    expect(result).toEqual(true);

    result = updatedMultiSelectedKeys([], '3');
    expect(result).toEqual(true);
  });

  it('staticStyle return correct values', () => {
    const result = TableUtils.staticStyle('10px');
    expect(result).toEqual({
      msFlex: '0 0 0px',
      flex: '0 0 0px',
      maxWidth: '10px',
      minWidth: '10px',
    });
  });

  it('scalarStyle return correct values', () => {
    const result = TableUtils.scalarStyle(2);
    expect(result).toEqual({
      msFlex: `${2} ${2} 0px`,
      flex: `${2} ${2} 0px`,
    });
  });

  it('styleFromWidth return correct values', () => {
    let result = styleFromWidth();
    expect(result).toEqual(null);

    result = styleFromWidth({ static: { value: 4, unit: 'px' } });
    expect(result).toEqual({
      msFlex: '0 0 0px',
      flex: '0 0 0px',
      maxWidth: '4px',
      minWidth: '4px',
    });

    result = styleFromWidth({ percentage: 10 });
    expect(result).toEqual({
      msFlex: '0 0 0px',
      flex: '0 0 0px',
      maxWidth: '10%',
      minWidth: '10%',
    });

    result = styleFromWidth({ scale: 3 });
    expect(result).toEqual({
      msFlex: `${3} ${3} 0px`,
      flex: `${3} ${3} 0px`,
    });
  });
});
