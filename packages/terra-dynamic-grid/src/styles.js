// IE < 11 doesn't honor window.CSS.Supports. Edge has supports, but will fail on grid.
const isCSSGridsEnabled = window.CSS && window.CSS.supports && window.CSS.supports('display', 'grid');

const gridTemplateColumns = (layout) => {
  const columns = layout['grid-template-columns'];
  // If 2 values are specified, column is the 2nd value, else its the first
  const gap = (layout['grid-gap'] || '0').split(' ').slice(-1)[0];
  const msColumns = columns.split(/\s+/).join(` ${gap} `);

  return {
    'grid-template-columns': columns,
    '-ms-grid-columns': msColumns,
  };
};

const gridTemplateRows = (layout) => {
  const rows = layout['grid-template-rows'];
  // If 2 values are specified, row is the 1st value
  const gap = (layout['grid-gap'] || '0').split(' ')[0];
  const msRows = rows.split(/\s+/).join(` ${gap} `);

  return {
    'grid-template-rows': rows,
    '-ms-grid-rows': msRows,
  };
};


const gridColumnStart = (region) => {
  const start = region['grid-column-start'];
  const msStart = (start * 2) - 1;

  return {
    'grid-column-start': `${start}`,
    '-ms-grid-column': `${msStart}`,
  };
};

const gridColumnEnd = (region) => {
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


const gridRowStart = (region) => {
  const start = region['grid-row-start'];
  const msStart = (start * 2) - 1;

  return {
    'grid-row-start': `${start}`,
    '-ms-grid-row': `${msStart}`,
  };
};

const gridRowEnd = (region) => {
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
    display: isCSSGridsEnabled ? 'grid' : '-ms-grid',
    'grid-gap': layout['grid-gap'] || '0',
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
      ...gridColumnStart(region),
      ...gridColumnEnd(region),
      ...gridRowStart(region),
      ...gridRowEnd(region),
      ...region.style,
    };

    return { [region.name]: layout.media
      ? { [layout.media]: styles }
      : styles };
  }
);


const generateStyles = (layout) => {
  const grid = generateGridStyles(layout);
  const regionStyles = generateRegionStyles(layout);
  return layout.regions
    .map(regionStyles)
    .reduce((regions, region) => ({ ...regions, ...region }), grid);
};

export default generateStyles;
