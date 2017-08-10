const gridTemplate = (prop, layout) => {
  const grid = layout[`grid-template-${prop}`];
  if (grid === undefined) {
    return {};
  }

  let gap = (layout['grid-gap'] || '0').split(/\s+/);
  gap = prop === 'rows'
    ? gap[0] // If 2 values are specified row is the 1st value else its the first
    : gap.slice(-1)[0]; // If 2 values then column is the 2nd, else its the first

  return {
    [`grid-template-${prop}`]: grid,
    // IE doesn't have gap support, simulate it by creating columns
    [`-ms-grid-${prop}`]: grid.split(/\s+/).join(` ${gap} `),
  };
};


const gridLineStart = (prop, region) => {
  const start = region[`grid-${prop}-start`];
  if (start === undefined) {
    return {};
  }

  return {
    [`grid-${prop}-start`]: `${start}`,
    // IE has gaps as columns.. so start point is double
    [`-ms-grid-${prop}`]: `${(start * 2) - 1}`,
  };
};


const gridLineEnd = (prop, region) => {
  if (region[`grid-${prop}-end`] === undefined) {
    return {};
  }

  const start = region[`grid-${prop}-start`] || region[`grid-${prop}-end`];
  const end = region[`grid-${prop}-end`];
  // IE has gaps as columns.. so columns spanned is double
  const span = start === end
    ? 1 // No gaps traversed
    : (end - start) * 2;

  return {
    [`grid-${prop}-end`]: `${end}`,
    [`-ms-grid-${prop}-span`]: `${span}`,
  };
};


const gridGap = layout => (
  layout['grid-gap']
    ? { 'grid-gap': layout['grid-gap'] }
    : {}
);

const gridDisplay = () => {
  const isCSSGridsEnabled = window.CSS
    && window.CSS.supports
    && window.CSS.supports('display', 'grid');
  return {
    display: isCSSGridsEnabled ? 'grid' : '-ms-grid',
  };
};


const generateGridStyles = (layout) => {
  const styles = {
    ...gridDisplay(),
    ...gridGap(layout),
    ...gridTemplate('columns', layout),
    ...gridTemplate('rows', layout),
  };

  return { grid: layout.media
    ? { [layout.media]: styles }
    : styles };
};

const generateRegionStyles = layout => (
  (region) => {
    const styles = {
      ...gridLineStart('column', region),
      ...gridLineEnd('column', region),
      ...gridLineStart('row', region),
      ...gridLineEnd('row', region),
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
  return (layout.regions || [])
    .map(regionStyles)
    .reduce((regions, region) => ({ ...regions, ...region }), grid);
};

export default generateStyles;
