import { mapStateToProps, mapDispatchToProps } from '../../src/index';

import {
  OPEN,
  CLOSE,
  PUSH,
  POP,
  MAXIMIZE,
  MINIMIZE,
  GAIN_FOCUS,
  LOSE_FOCUS,
} from '../../src/actionTypes';

describe('mapStateToProps', () => {
  it('should properly map the modal manager state to props', () => {
    const componentData = [{
      key: '1',
      name: 'COMP1',
      props: { value: 1 },
    }, {
      key: '2',
      name: 'COMP2',
      props: { value: 2 },
    }, {
      key: '3',
      name: 'COMP3',
      props: { value: 3 },
    }];

    // The values used here are kind of junky and don't match the state schema, but I'm doing that on purpose to
    // validate that the values are passed through from state directly and not manipulated in any way.
    const state = {
      modalManager: {
        componentKeys: ['1', '2', '3'],
        components: {
          1: componentData[0],
          2: componentData[1],
          3: componentData[2],
        },
        isFocused: 'IS_FOCUSED_VALUE',
        isOpen: 'IS_OPEN_VALUE',
        isMaximized: 'IS_MAXIMIZED_VALUE',
        size: 'SIZE_VALUE',
      },
    };

    const expectedResult = {
      modalComponentData: componentData,
      isFocused: 'IS_FOCUSED_VALUE',
      isOpen: 'IS_OPEN_VALUE',
      isMaximized: 'IS_MAXIMIZED_VALUE',
      size: 'SIZE_VALUE',
    };

    expect(mapStateToProps(state)).toEqual(expectedResult);
  });

  it('should properly map the modal manager state to props when no component data is present', () => {
    const componentData = [];

    const state = {
      modalManager: {
        componentKeys: [],
        components: {},
        isFocused: 'IS_FOCUSED_VALUE',
        isOpen: 'IS_OPEN_VALUE',
        isMaximized: 'IS_MAXIMIZED_VALUE',
        size: 'SIZE_VALUE',
      },
    };

    const expectedResult = {
      modalComponentData: componentData,
      isFocused: 'IS_FOCUSED_VALUE',
      isOpen: 'IS_OPEN_VALUE',
      isMaximized: 'IS_MAXIMIZED_VALUE',
      size: 'SIZE_VALUE',
    };

    expect(mapStateToProps(state)).toEqual(expectedResult);
  });
});

describe('mapDispatchToProps', () => {
  it('should properly map the dispatch state to props', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.openModal).toBeDefined();
    expect(result.closeModal).toBeDefined();
    expect(result.pushModal).toBeDefined();
    expect(result.popModal).toBeDefined();
    expect(result.maximizeModal).toBeDefined();
    expect(result.minimizeModal).toBeDefined();
    expect(result.gainFocus).toBeDefined();
    expect(result.loseFocus).toBeDefined();
  });

  it('should properly setup openModal function', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.openModal).toBeDefined();

    result.openModal({ test: 'data' });

    expect(testDispatch).toHaveBeenCalledWith({ type: OPEN, data: { test: 'data' } });
  });

  it('should properly setup closeModal function', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.closeModal).toBeDefined();

    result.closeModal({ test: 'data' });

    expect(testDispatch).toHaveBeenCalledWith({ type: CLOSE, data: { test: 'data' } });
  });

  it('should properly setup pushModal function', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.pushModal).toBeDefined();

    result.pushModal({ test: 'data' });

    expect(testDispatch).toHaveBeenCalledWith({ type: PUSH, data: { test: 'data' } });
  });

  it('should properly setup popModal function', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.popModal).toBeDefined();

    result.popModal({ test: 'data' });

    expect(testDispatch).toHaveBeenCalledWith({ type: POP, data: { test: 'data' } });
  });

  it('should properly setup maximizeModal function', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.maximizeModal).toBeDefined();

    result.maximizeModal({ test: 'data' });

    expect(testDispatch).toHaveBeenCalledWith({ type: MAXIMIZE, data: { test: 'data' } });
  });

  it('should properly setup minimizeModal function', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.minimizeModal).toBeDefined();

    result.minimizeModal({ test: 'data' });

    expect(testDispatch).toHaveBeenCalledWith({ type: MINIMIZE, data: { test: 'data' } });
  });

  it('should properly setup gainFocus function', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.gainFocus).toBeDefined();

    result.gainFocus({ test: 'data' });

    expect(testDispatch).toHaveBeenCalledWith({ type: GAIN_FOCUS, data: { test: 'data' } });
  });

  it('should properly setup loseFocus function', () => {
    const testDispatch = jest.fn();

    const result = mapDispatchToProps(testDispatch);

    expect(result.loseFocus).toBeDefined();

    result.loseFocus({ test: 'data' });

    expect(testDispatch).toHaveBeenCalledWith({ type: LOSE_FOCUS, data: { test: 'data' } });
  });
});
