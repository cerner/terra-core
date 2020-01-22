import {
  styleFromWidth,
} from '../../src/_CellGridUtils';

describe('CellGridUtils', () => {
  it('styleFromWidth return correct values', () => {
    let result = styleFromWidth();
    expect(result).toEqual(undefined);

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

    result = styleFromWidth({ scalar: 3 });
    expect(result).toEqual({
      msFlex: `${3} ${3} 0px`,
      flex: `${3} ${3} 0px`,
    });
  });
});
