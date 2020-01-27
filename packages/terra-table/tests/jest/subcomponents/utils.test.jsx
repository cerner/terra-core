import {
  styleFromWidth,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from '../../../src/subcomponents/utils';

describe('utils', () => {
  it('styleFromWidth return correct values', () => {
    let result = styleFromWidth();
    expect(result).toEqual(undefined);

    result = styleFromWidth({ static: { value: 4, unit: 'px' } });
    expect(result).toEqual({
      msFlex: '0 0 0px',
      flex: '0 0 0px',
      maxWidth: '4px',
      minWidth: '4px',
    });

    result = styleFromWidth({ percentage: 10 });
    expect(result).toEqual({
      msFlex: '0 0 0px',
      flex: '0 0 0px',
      maxWidth: '10%',
      minWidth: '10%',
    });

    result = styleFromWidth({ scalar: 3 });
    expect(result).toEqual({
      msFlex: `${3} ${3} 0px`,
      flex: `${3} ${3} 0px`,
    });
  });

  it('should generate wrappedOnClickForItem callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const result = wrappedOnClickForItem(mockCallBack, mockCallBack2, { test: 'click' });
    result();
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack2.mock.calls.length).toEqual(1);
    expect(mockCallBack2.mock.calls[0][1]).toEqual({ test: 'click' });
  });

  it('should generate wrappedOnKeyDownForItem callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const result = wrappedOnKeyDownForItem(mockCallBack, mockCallBack2, { test: 'keyDown' });
    result({ nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack });
    result({ nativeEvent: { keyCode: 13 }, preventDefault: mockCallBack2 });
    expect(mockCallBack.mock.calls.length).toEqual(2);
    expect(mockCallBack2.mock.calls.length).toEqual(2);
    expect(mockCallBack2.mock.calls[0][1]).toEqual({ test: 'keyDown' });
    expect(mockCallBack2.mock.calls[1][1]).toEqual({ test: 'keyDown' });
  });

  it('should generate wrappedEventCallback callback', () => {
    const mockCallBack = jest.fn();
    const mockCallBack2 = jest.fn();

    const result = wrappedEventCallback(mockCallBack, mockCallBack2);
    result();
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack2.mock.calls.length).toEqual(1);
  });
});
