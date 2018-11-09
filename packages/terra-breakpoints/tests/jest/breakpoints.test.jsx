import breakpoints, { activeBreakpointForSize, breakpointIsActiveForSize } from '../../src/breakpoints';

describe('breakpoints', () => {
  it('should contain the set of breakpoint values', () => {
    expect(breakpoints).toBeDefined();
    expect(breakpoints.tiny).toBe(0);
    expect(breakpoints.small).toBe(544);
    expect(breakpoints.medium).toBe(768);
    expect(breakpoints.large).toBe(992);
    expect(breakpoints.huge).toBe(1216);
    expect(breakpoints.enormous).toBe(1440);
  });
});

describe('activeBreakpointForSize', () => {
  it('should accurately detect default size', () => {
    expect(activeBreakpointForSize(-1)).toBeUndefined();
    expect(activeBreakpointForSize(0)).toBe('tiny');
  });

  it('should accurately detect tiny size', () => {
    expect(activeBreakpointForSize(544)).toBe('small');
  });

  it('should accurately detect small size', () => {
    expect(activeBreakpointForSize(768)).toBe('medium');
  });

  it('should accurately detect medium size', () => {
    expect(activeBreakpointForSize(992)).toBe('large');
  });

  it('should accurately detect large size', () => {
    expect(activeBreakpointForSize(1216)).toBe('huge');
  });

  it('should accurately detect huge size', () => {
    expect(activeBreakpointForSize(1440)).toBe('enormous');
    expect(activeBreakpointForSize(9999)).toBe('enormous');
  });
});

describe('breakpointIsActiveForSize', () => {
  it('should return false for unknown breakpoint', () => {
    expect(breakpointIsActiveForSize('test', 100)).toBe(false);
  });

  it('should return false for negative size', () => {
    expect(breakpointIsActiveForSize('tiny', -100)).toBe(false);
  });

  it('should accurately determine default size matching', () => {
    expect(breakpointIsActiveForSize('tiny', 0)).toBe(true);
    expect(breakpointIsActiveForSize('tiny', 544)).toBe(true);
    expect(breakpointIsActiveForSize('tiny', 768)).toBe(true);
    expect(breakpointIsActiveForSize('tiny', 992)).toBe(true);
    expect(breakpointIsActiveForSize('tiny', 1216)).toBe(true);
    expect(breakpointIsActiveForSize('tiny', 1440)).toBe(true);
    expect(breakpointIsActiveForSize('tiny', 9999)).toBe(true);
  });

  it('should accurately determine tiny size matching', () => {
    expect(breakpointIsActiveForSize('small', 0)).toBe(false);
    expect(breakpointIsActiveForSize('small', 544)).toBe(true);
    expect(breakpointIsActiveForSize('small', 768)).toBe(true);
    expect(breakpointIsActiveForSize('small', 992)).toBe(true);
    expect(breakpointIsActiveForSize('small', 1216)).toBe(true);
    expect(breakpointIsActiveForSize('small', 1440)).toBe(true);
    expect(breakpointIsActiveForSize('small', 9999)).toBe(true);
  });

  it('should accurately determine small size matching', () => {
    expect(breakpointIsActiveForSize('medium', 0)).toBe(false);
    expect(breakpointIsActiveForSize('medium', 544)).toBe(false);
    expect(breakpointIsActiveForSize('medium', 768)).toBe(true);
    expect(breakpointIsActiveForSize('medium', 992)).toBe(true);
    expect(breakpointIsActiveForSize('medium', 1216)).toBe(true);
    expect(breakpointIsActiveForSize('medium', 1440)).toBe(true);
    expect(breakpointIsActiveForSize('medium', 9999)).toBe(true);
  });

  it('should accurately determine medium size matching', () => {
    expect(breakpointIsActiveForSize('large', 0)).toBe(false);
    expect(breakpointIsActiveForSize('large', 544)).toBe(false);
    expect(breakpointIsActiveForSize('large', 768)).toBe(false);
    expect(breakpointIsActiveForSize('large', 992)).toBe(true);
    expect(breakpointIsActiveForSize('large', 1216)).toBe(true);
    expect(breakpointIsActiveForSize('large', 1440)).toBe(true);
    expect(breakpointIsActiveForSize('large', 9999)).toBe(true);
  });

  it('should accurately determine large size matching', () => {
    expect(breakpointIsActiveForSize('huge', 0)).toBe(false);
    expect(breakpointIsActiveForSize('huge', 544)).toBe(false);
    expect(breakpointIsActiveForSize('huge', 768)).toBe(false);
    expect(breakpointIsActiveForSize('huge', 992)).toBe(false);
    expect(breakpointIsActiveForSize('huge', 1216)).toBe(true);
    expect(breakpointIsActiveForSize('huge', 1440)).toBe(true);
    expect(breakpointIsActiveForSize('huge', 9999)).toBe(true);
  });  

  it('should accurately determine huge size matching', () => {
    expect(breakpointIsActiveForSize('enormous', 0)).toBe(false);
    expect(breakpointIsActiveForSize('enormous', 544)).toBe(false);
    expect(breakpointIsActiveForSize('enormous', 768)).toBe(false);
    expect(breakpointIsActiveForSize('enormous', 992)).toBe(false);
    expect(breakpointIsActiveForSize('enormous', 1216)).toBe(false);
    expect(breakpointIsActiveForSize('enormous', 1440)).toBe(true);
    expect(breakpointIsActiveForSize('enormous', 9999)).toBe(true);
  });  
});