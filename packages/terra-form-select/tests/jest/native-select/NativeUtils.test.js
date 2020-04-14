import {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  getDisplay,
  getFirstValue,
} from '../../../src/native-select/NativeUtils';

const mockIntl = {
  formatMessage: () => 'mock-test-display',
};

const testOptions = [
  {
    display: '1',
    value: 'value-1',
  },
  {
    display: '2',
    value: 'value-2',
  },
  {
    display: '3',
    value: 'value-3',
  },
  {
    display: '4',
    value: 'value-4',
  },
];

const testOptGroups = [
  {
    display: 'Group 1',
    childOptions: [
      {
        display: '1',
        value: 'value-1',
      },
      {
        display: '2',
        value: 'value-2',
      },
    ],
  },
  {
    display: 'Group 2',
    childOptions: [
      {
        display: '3',
        value: 'value-3',
      },
      {
        display: '4',
        value: 'value-4',
      },
    ],
  },
];

describe('NativeUtils', () => {
  // getDisplay
  it('should return valid displays for getDisplay with placeholder', () => {
    expect(getDisplay(defaultPlaceholderValue, [], {}, mockIntl)).toEqual('mock-test-display');
    expect(getDisplay(defaultPlaceholderValue, [], { display: 'custom-test-display' }, mockIntl)).toEqual('custom-test-display');
    expect(getDisplay('custom-test-value', [], { value: 'custom-test-value' }, mockIntl)).toEqual('mock-test-display');
    expect(getDisplay('custom-test-value', [], { value: 'custom-test-value', display: 'custom-test-display' }, mockIntl)).toEqual('custom-test-display');
  });

  it('should return valid displays for getDisplay with options', () => {
    expect(getDisplay('value-1', testOptions, {})).toEqual('1');
    expect(getDisplay('value-2', testOptions, {})).toEqual('2');
    expect(getDisplay('value-3', testOptions, {})).toEqual('3');
    expect(getDisplay('value-4', testOptions, {})).toEqual('4');
  });

  it('should return valid displays for getDisplay with optGroups', () => {
    expect(getDisplay('value-1', testOptGroups, {})).toEqual('1');
    expect(getDisplay('value-2', testOptGroups, {})).toEqual('2');
    expect(getDisplay('value-3', testOptGroups, {})).toEqual('3');
    expect(getDisplay('value-4', testOptGroups, {})).toEqual('4');
  });

  // getFirstValue
  it('should return valid values for getFirstValue with placeholder', () => {
    expect(getFirstValue([], {})).toEqual(defaultPlaceholderValue);
    expect(getFirstValue([], { value: 'custom-test-value' })).toEqual('custom-test-value');
  });

  it('should return valid values for getFirstValue with options', () => {
    expect(getFirstValue(testOptions)).toEqual('value-1');
  });

  it('should return valid values for getFirstValue with optGroups', () => {
    expect(getFirstValue(testOptGroups)).toEqual('value-1');
  });

  // isCurrentPlaceholder
  it('should return valid displays for getDisplay with optGroups', () => {
    expect(isCurrentPlaceholder(defaultPlaceholderValue)).toEqual(false);
    expect(isCurrentPlaceholder(defaultPlaceholderValue, {})).toEqual(true);
    expect(isCurrentPlaceholder('custom-test-value', { value: 'custom-test-value' })).toEqual(true);
    expect(isCurrentPlaceholder('custom-false-value', { value: 'custom-test-value' })).toEqual(false);
  });
});
