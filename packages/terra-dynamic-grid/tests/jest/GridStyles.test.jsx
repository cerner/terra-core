import generateStyles from '../../src/styles';

describe('Styles', () => {
  describe('Default Grid', () => {
    window.CSS = { supports: () => true };
    const gridStyles = generateStyles({}).grid;

    it('should have display grid', () => {
      expect(gridStyles.display).toEqual('grid');
    });

    it('should not have a grid template', () => {
      expect(gridStyles['grid-template-columns']).toEqual(undefined);
      expect(gridStyles['grid-template-rows']).toEqual(undefined);
    });

    it('should not have a grid gap', () => {
      expect(gridStyles['grid-gap']).toEqual(undefined);
    });
  });

  describe('Legacy IE Grid', () => {
    window.CSS = undefined;
    const gridStyles = generateStyles({}).grid;

    it('should have display -ms-grid', () => {
      expect(gridStyles.display).toEqual('-ms-grid');
    });
  });

  describe('Legacy Edge Grid', () => {
    window.CSS = { supports: () => false };
    const gridStyles = generateStyles({}).grid;

    it('should have display -ms-grid', () => {
      expect(gridStyles.display).toEqual('-ms-grid');
    });
  });

  describe('Ungapped grid with 2 columns and rows', () => {
    const gridStyles = generateStyles({
      'grid-template-columns': '100px 200px',
      'grid-template-rows': '300px 400px',
    }).grid;

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
    const gridStyles = generateStyles({
      'grid-template-columns': '100px 200px',
      'grid-template-rows': '300px 400px',
      'grid-gap': '10px 20px',
    }).grid;

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

  describe('Grid scoped to media query', () => {
    window.CSS = { supports: () => true };
    const gridStyles = generateStyles({
      media: '@media (max-width: 600px)',
    }).grid;

    it('should scope grid styles to media query ', () => {
      expect(gridStyles).toEqual({
        '@media (max-width: 600px)': {
          display: 'grid',
        },
      });
    });
  });
});
