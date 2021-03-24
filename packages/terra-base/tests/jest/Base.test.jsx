import React from 'react';
import * as terraI18n from 'terra-i18n';

import Base from '../../src/Base';

jest.mock('terra-i18n');

// Missing locale test
it('throws error for missing required locale', () => {
  // eslint-disable-next-line no-console
  console.error = jest.fn();
  const messages = { Terra: 'Terra' };

  shallow(<Base customMessages={messages}>String</Base>);
  // eslint-disable-next-line no-console
  expect(console.error).toHaveBeenCalled();
});

// Snapshot Tests
it('should support rendering a string', () => {
  const base = shallow(<Base>String</Base>);
  expect(base).toMatchSnapshot();
});

it('should support rendering an array of children', () => {
  const base = shallow(
    <Base>
      <div>1</div>
      <div>2</div>
    </Base>,
  );
  expect(base).toMatchSnapshot();
});

it('should render with strict mode when strict mode enabled', () => {
  const base = shallow(<Base strictMode>String</Base>);
  expect(base).toMatchSnapshot();
});

describe('base handles i18n data loading', () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.error = jest.fn();
  });

  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.error.mockClear();
  });

  it('renders as expected when i18n data loads successfully', () => {
    terraI18n.i18nLoader = jest.fn();
    expect(() => shallow(<Base locale="en">String</Base>)).not.toThrowError();
    expect(terraI18n.i18nLoader).toHaveBeenCalled();
    // eslint-disable-next-line no-console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('logs error when i18n data fails to load', () => {
    terraI18n.i18nLoader = jest.fn(() => {
      throw new Error('failed to load data.');
    });
    expect(() => shallow(<Base locale="en">String</Base>)).not.toThrowError();
    expect(terraI18n.i18nLoader).toHaveBeenCalled();
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalled();
  });

  it('throws error when i18n data fails to load', () => {
    terraI18n.i18nLoader = jest.fn(() => {
      throw new Error('failed to load data.');
    });
    expect(() => shallow(<Base locale="en" throwOnI18nLoadError>String</Base>)).toThrowError();
    expect(terraI18n.i18nLoader).toHaveBeenCalled();
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalled();
  });
});
