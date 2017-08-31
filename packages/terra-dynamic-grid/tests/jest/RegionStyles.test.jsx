import { region } from '../../src/styles';

describe('Styles', () => {
  describe('Default region', () => {
    const regionStyles = region({});
    it('syould have region styles', () => {
      expect(regionStyles).toEqual({});
    });
  });

  describe('Region with start and end', () => {
    const regionStyles = region({
      'grid-row-start': '2',
      'grid-row-end': '3',
      'grid-column-start': '1',
      'grid-column-end': '1',
    });

    it('should have grid row styles', () => {
      expect(regionStyles['grid-row-start']).toEqual('2');
      expect(regionStyles['grid-row-end']).toEqual('3');
      expect(regionStyles['-ms-grid-row']).toEqual('3');
      expect(regionStyles['-ms-grid-row-span']).toEqual('2');
    });

    it('should have grid column styles', () => {
      expect(regionStyles['grid-column-start']).toEqual('1');
      expect(regionStyles['grid-column-end']).toEqual('1');
      expect(regionStyles['-ms-grid-column']).toEqual('1');
      expect(regionStyles['-ms-grid-column-span']).toEqual('1');
    });
  });

  describe('Region with only start', () => {
    const regionStyles = region({
      'grid-row-start': '2',
      'grid-column-start': '1',
    });

    it('should have grid row styles', () => {
      expect(regionStyles['grid-row-start']).toEqual('2');
      expect(regionStyles['grid-row-end']).toBeUndefined();
      expect(regionStyles['-ms-grid-row']).toEqual('3');
      expect(regionStyles['-ms-grid-row-span']).toBeUndefined();
    });

    it('should have grid column styles', () => {
      expect(regionStyles['grid-column-start']).toEqual('1');
      expect(regionStyles['grid-column-end']).toBeUndefined();
      expect(regionStyles['-ms-grid-column']).toEqual('1');
      expect(regionStyles['-ms-grid-column-span']).toBeUndefined();
    });
  });
});
