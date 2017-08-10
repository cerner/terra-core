import generateStyles from '../../src/styles';

describe('Styles', () => {
  describe('No regions', () => {
    const regionStyles = generateStyles({});
    it('should only have styles for grid', () => {
      expect(Object.keys(regionStyles).length).toEqual(1);
      expect(regionStyles.grid).toBeDefined();
    });
  });

  describe('Default region', () => {
    const regionStyles = generateStyles({ regions: [{ name: 'r1' }] });
    it('syould have region styles', () => {
      expect(Object.keys(regionStyles).length).toEqual(2);
      expect(regionStyles.r1).toEqual({});
    });
  });

  describe('Region with start and end', () => {
    const regionStyles = generateStyles({
      regions: [{
        name: 'r1',
        'grid-row-start': '2',
        'grid-row-end': '3',
        'grid-column-start': '1',
        'grid-column-end': '1',
      }],
    });

    it('should have grid row styles', () => {
      expect(regionStyles.r1['grid-row-start']).toEqual('2');
      expect(regionStyles.r1['grid-row-end']).toEqual('3');
      expect(regionStyles.r1['-ms-grid-row']).toEqual('3');
      expect(regionStyles.r1['-ms-grid-row-span']).toEqual('2');
    });

    it('should have grid column styles', () => {
      expect(regionStyles.r1['grid-column-start']).toEqual('1');
      expect(regionStyles.r1['grid-column-end']).toEqual('1');
      expect(regionStyles.r1['-ms-grid-column']).toEqual('1');
      expect(regionStyles.r1['-ms-grid-column-span']).toEqual('1');
    });
  });

  describe('Region with only start', () => {
    const regionStyles = generateStyles({
      regions: [{
        name: 'r1',
        'grid-row-start': '2',
        'grid-column-start': '1',
      }],
    });

    it('should have grid row styles', () => {
      expect(regionStyles.r1['grid-row-start']).toEqual('2');
      expect(regionStyles.r1['grid-row-end']).toBeUndefined();
      expect(regionStyles.r1['-ms-grid-row']).toEqual('3');
      expect(regionStyles.r1['-ms-grid-row-span']).toBeUndefined();
    });

    it('should have grid column styles', () => {
      expect(regionStyles.r1['grid-column-start']).toEqual('1');
      expect(regionStyles.r1['grid-column-end']).toBeUndefined();
      expect(regionStyles.r1['-ms-grid-column']).toEqual('1');
      expect(regionStyles.r1['-ms-grid-column-span']).toBeUndefined();
    });
  });
});
