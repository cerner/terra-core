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
    : ((end - start) * 2) - 1;

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

const gridDisplay = (layout) => {
  if (Object.keys(layout).length === 0) {
    return {};
  }

  const isCSSGridsEnabled = window.CSS
    && window.CSS.supports
    && window.CSS.supports('display', 'grid');
  return {
    display: isCSSGridsEnabled ? 'grid' : '-ms-grid',
  };
};

const grid = template => ({
  ...gridDisplay(template),
  ...gridGap(template),
  ...gridTemplate('columns', template),
  ...gridTemplate('rows', template),
  ...(template.style || {}),
});

const region = position => ({
  ...gridLineStart('column', position),
  ...gridLineEnd('column', position),
  ...gridLineStart('row', position),
  ...gridLineEnd('row', position),
  ...(position.style || {}),
});

export { grid, region };
