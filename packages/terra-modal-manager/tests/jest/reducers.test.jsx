import modalManager from '../../src/reducers';
import {
  OPEN,
  CLOSE,
  PUSH,
  POP,
  MAXIMIZE,
  MINIMIZE,
} from '../../src/actionTypes';

describe('modalManager reducer', () => {
  it('should return the given state when action type is not recognized', () => {
    const initialState = { state: 'initial' };

    const result = modalManager(initialState, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result).toBe(initialState);
  });

  it('should return the default state when the initial state is undefined', () => {
    const result = modalManager(undefined, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result.componentKeys).toEqual([]);
    expect(result.components).toEqual({});
    expect(result.isMaximized).toEqual(false);
    expect(result.isOpen).toEqual(false);
    expect(result.size).toEqual('small');
  });

  it('should return state after open action', () => {
    const content = {
      key: 'test_key',
      name: 'TestComponent',
      props: { prop1: 'test', prop2: 'test' },
    };

    const initialState = modalManager(undefined, {});
    const result = modalManager(initialState, {
      type: OPEN,
      data: {
        preferredType: 'modal',
        size: 'tiny',
        content,
      },
    });

    const expected = {
      componentKeys: [content.key],
      components: {
        [`${content.key}`]: {
          name: content.name,
          props: content.props,
          key: `${content.key}`,
        },
      },
      isMaximized: false,
      isOpen: true,
      size: 'tiny',
    };

    expect(result).toEqual(expected);
  });

  it('should return state after open action with default size', () => {
    const content = {
      key: 'test_key',
      name: 'TestComponent',
      props: { prop1: 'test', prop2: 'test' },
    };

    const initialState = modalManager(undefined, {});
    const result = modalManager(initialState, {
      type: OPEN,
      data: {
        preferredType: 'modal',
        content,
      },
    });

    const expected = {
      componentKeys: [content.key],
      components: {
        [`${content.key}`]: {
          name: content.name,
          props: content.props,
          key: `${content.key}`,
        },
      },
      isMaximized: false,
      isOpen: true,
      size: 'small',
    };

    expect(result).toEqual(expected);
  });

  it('should return state after close action', () => {
    const initialState = modalManager(undefined, {});
    const result = modalManager(initialState, {
      type: CLOSE,
      data: {},
    });

    expect(result).toEqual(initialState);
  });

  it('should return state after push action', () => {
    const content = {
      key: 'test_key',
      name: 'TestComponent',
      props: { prop1: 'test', prop2: 'test' },
    };

    const initialState = {
      componentKeys: ['COMPONENT_1', 'COMPONENT_2'],
      components: {
        COMPONENT_1: {
          name: 'Component1',
          props: {},
          key: 'COMPONENT_1',
        },
        COMPONENT_2: {
          name: 'Component2',
          props: {},
          key: 'COMPONENT_2',
        },
      },
      isOpen: true,
      isMaximized: false,
      size: 'large',
    };

    const result = modalManager(initialState, {
      type: PUSH,
      data: {
        preferredType: 'modal',
        content,
      },
    });

    const expected = {
      componentKeys: [initialState.componentKeys[0], initialState.componentKeys[1], content.key],
      components: Object.assign({}, initialState.components, {
        [`${content.key}`]: {
          name: content.name,
          props: content.props,
          key: `${content.key}`,
        },
      }),
      isMaximized: false,
      isOpen: true,
      size: 'large',
    };

    expect(result).toEqual(expected);
  });

  it('should return state after pop action', () => {
    const initialState = {
      componentKeys: ['COMPONENT_1', 'COMPONENT_2'],
      components: {
        COMPONENT_1: {
          name: 'Component1',
          props: {},
          key: 'COMPONENT_1',
        },
        COMPONENT_2: {
          name: 'Component2',
          props: {},
          key: 'COMPONENT_2',
        },
      },
      isOpen: true,
      isMaximized: false,
      size: 'large',
    };

    const result = modalManager(initialState, {
      type: POP,
      data: {},
    });

    const expected = {
      componentKeys: [initialState.componentKeys[0]],
      components: {
        COMPONENT_1: {
          name: 'Component1',
          props: {},
          key: 'COMPONENT_1',
        },
      },
      isMaximized: false,
      isOpen: true,
      size: 'large',
    };

    expect(result).toEqual(expected);
  });

  it('should return state after maximize action', () => {
    const initialState = {
      componentKeys: ['COMPONENT_1', 'COMPONENT_2'],
      components: {
        COMPONENT_1: {
          name: 'Component1',
          props: {},
          key: 'COMPONENT_1',
        },
        COMPONENT_2: {
          name: 'Component2',
          props: {},
          key: 'COMPONENT_2',
        },
      },
      isOpen: true,
      isMaximized: false,
      size: 'large',
    };

    const result = modalManager(initialState, {
      type: MAXIMIZE,
      data: {},
    });

    const expected = Object.assign({}, initialState, { isMaximized: true });

    expect(result).toEqual(expected);
  });

  it('should return state after minimize action', () => {
    const initialState = {
      componentKeys: ['COMPONENT_1', 'COMPONENT_2'],
      components: {
        COMPONENT_1: {
          name: 'Component1',
          props: {},
          key: 'COMPONENT_1',
        },
        COMPONENT_2: {
          name: 'Component2',
          props: {},
          key: 'COMPONENT_2',
        },
      },
      isOpen: true,
      isMaximized: true,
      size: 'large',
    };

    const result = modalManager(initialState, {
      type: MINIMIZE,
      data: {},
    });

    const expected = Object.assign({}, initialState, { isMaximized: false });

    expect(result).toEqual(expected);
  });
});
