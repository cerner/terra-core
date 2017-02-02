// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Skip createElement warnings but fail tests on any other warning
/* eslint-disable no-console */
console.error = (message) => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};

// Mock storybook-addon-options
jest.mock('@kadira/storybook-addon-options');
// Mock storybook-addon-i18n-tools npm module
jest.mock('storybook-addon-i18n-tools', () => {});

/* eslint-enable no-console */
