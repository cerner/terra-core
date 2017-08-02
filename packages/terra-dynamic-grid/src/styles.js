// IE < 11 doesn't honor window.CSS.Supports. Edge has supports, but will fail on grid.
const cssGridsEnabled = window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');

const gridTemplateColumns = (layout) => {
  const columns = layout['grid-template-columns'];
  const msColumns = columns.split(/\s+/).join(` ${layout['grid-gap'] || 0} `);

  return {
    'grid-template-columns': columns,
    '-ms-grid-columns': msColumns,
  };
};

const gridTemplateRows = (layout) => {
  const rows = layout['grid-template-rows'];
  const msRows = rows.split(/\s+/).join(` ${layout['grid-gap'] || 0} `);

  return {
    'grid-template-rows': rows,
    '-ms-grid-rows': msRows,
  };
};


const gridColumnStart = (layout, region) => {
  const start = region['grid-column-start'];
  const msStart = (start * 2) - 1;

  return {
    'grid-column-start': `${start}`,
    '-ms-grid-column': `${msStart}`,
  };
};

const gridColumnEnd = (layout, region) => {
  const start = region['grid-column-start'];
  const end = region['grid-column-end'] || start + 1;
  const span = end - start < 2
    ? 1 // No gaps traversed
    : (end - start) * 2;

  return {
    'grid-column-end': `${end}`,
    '-ms-grid-column-span': `${span}`,
  };
};


const gridRowStart = (layout, region) => {
  const start = region['grid-row-start'];
  const msStart = (start * 2) - 1;

  return {
    'grid-row-start': `${start}`,
    '-ms-grid-row': `${msStart}`,
  };
};

const gridRowEnd = (layout, region) => {
  const start = region['grid-row-start'];
  const end = region['grid-row-end'] || start + 1;
  const span = end - start < 2
    ? 1 // No gaps traversed
    : (end - start) * 2;

  return {
    'grid-row-end': `${end}`,
    '-ms-grid-row-span': `${span}`,
  };
};


const generateGridStyles = (layout) => {
  const styles = {
    display: cssGridsEnabled ? 'grid' : '-ms-grid',
    'grid-gap': layout['grid-gap'],
    ...gridTemplateColumns(layout),
    ...gridTemplateRows(layout),
  };

  return { grid: layout.media
    ? { [layout.media]: styles }
    : styles };
};

const generateRegionStyles = layout => (
  (region) => {
    const styles = {
      ...gridColumnStart(layout, region),
      ...gridColumnEnd(layout, region),
      ...gridRowStart(layout, region),
      ...gridRowEnd(layout, region),
      ...region.style,
    };

    return { [region.name]: layout.media
      ? { [layout.media]: styles }
      : styles };
  }
);


const generateStyles = (layout) => {
  const grid = generateGridStyles(layout);
  return layout.regions
    .map(generateRegionStyles(layout))
    .reduce((regions, region) => Object.assign(regions, region), grid);
};

export default generateStyles;
