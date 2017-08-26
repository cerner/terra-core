import { grid } from '../../src/styles';

describe('Styles', () => {
  describe('Default Grid', () => {
    window.CSS = { supports: () => true };
    const gridStyles = grid({});

    it('should be an empty object', () => {
      expect(gridStyles).toEqual({});
    });
  });

  describe('Modern Browser Grid', () => {
    window.CSS = { supports: () => true };
    const gridStyles = grid({ 'grid-template-rows': '1px' });

    it('should be an empty object', () => {
      expect(gridStyles.display).toEqual('grid');
    });
  });

  describe('Legacy IE Grid', () => {
    window.CSS = undefined;
    const gridStyles = grid({ 'grid-template-rows': '1px' });

    it('should have display -ms-grid', () => {
      expect(gridStyles.display).toEqual('-ms-grid');
    });
  });

  describe('Legacy Edge Grid', () => {
    window.CSS = { supports: () => false };
    const gridStyles = grid({ 'grid-template-rows': '1px' });

    it('should have display -ms-grid', () => {
      expect(gridStyles.display).toEqual('-ms-grid');
    });
  });

  describe('Ungapped grid with 2 columns and rows', () => {
    const gridStyles = grid({
      'grid-template-columns': '100px 200px',
      'grid-template-rows': '300px 400px',
    });

    it('should not have a grid gap', () => {
      expect(gridStyles['grid-gap']).toEqual(undefined);
    });

    it('should have a grid template', () => {
      expect(gridStyles['grid-template-columns']).toEqual('100px 200px');
      expect(gridStyles['grid-template-rows']).toEqual('300px 400px');
    });

    it('should have a -ms template', () => {
      // Verify the grid gap is set into the -ms grid lines
      expect(gridStyles['-ms-grid-columns']).toEqual('100px 0 200px');
      expect(gridStyles['-ms-grid-rows']).toEqual('300px 0 400px');
    });
  });

  describe('Gapped Grid with 2 columns and rows', () => {
    const gridStyles = grid({
      'grid-template-columns': '100px 200px',
      'grid-template-rows': '300px 400px',
      'grid-gap': '10px 20px',
    });

    it('should not have a grid gap', () => {
      expect(gridStyles['grid-gap']).toEqual('10px 20px');
    });

    it('should have a grid template', () => {
      expect(gridStyles['grid-template-columns']).toEqual('100px 200px');
      expect(gridStyles['grid-template-rows']).toEqual('300px 400px');
    });

    it('should have a -ms template with grip gap included', () => {
      expect(gridStyles['-ms-grid-columns']).toEqual('100px 20px 200px');
      expect(gridStyles['-ms-grid-rows']).toEqual('300px 10px 400px');
    });
  });
});
