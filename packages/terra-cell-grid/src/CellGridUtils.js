const staticStyle = width => (
  {
    msFlex: '0 0 0px',
    flex: '0 0 0px',
    maxWidth: width,
    minWidth: width,
  }
);

const scalarStyle = width => (
  {
    msFlex: `${width} ${width} 0px`,
    flex: `${width} ${width} 0px`,
  }
);

const styleFromWidth = (width) => {
  if (!width) {
    return null;
  }
  if (width.static) {
    return staticStyle(`${width.static.value}${width.static.unit}`);
  }
  if (width.percentage) {
    return staticStyle(`${width.percentage}%`);
  }
  if (width.scalar) {
    return scalarStyle(width.scalar);
  }
  return null;
};

const TableUtils = {
  styleFromWidth,
};

export default TableUtils;
