const breakpoints = {
  tiny: 0,
  small: 544,
  medium: 768,
  large: 992,
  huge: 1216,
  enormous: 1440,
};

const breakpointSequence = ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'];

const activeBreakpointForSize = (size) => {
  for (let i = breakpointSequence.length - 1; i >= 0; i -= 1) {
    const breakpoint = breakpointSequence[i];

    if (size >= breakpoints[breakpoint]) {
      return breakpoint;
    }
  }
  return undefined;
};

const breakpointIsActiveForSize = (breakpoint, size) => {
  const breakpointLocation = breakpointSequence.indexOf(breakpoint);
  const sizeLocation = breakpointSequence.indexOf(activeBreakpointForSize(size));

  return sizeLocation === -1 || breakpointLocation === -1 ? false : sizeLocation >= breakpointLocation;
};

export default breakpoints;
export {
  activeBreakpointForSize, breakpointIsActiveForSize,
};
