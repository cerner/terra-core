// Make Enzyme functions available in all test files without importing
// eslint-disable-next-line import/no-extraneous-dependencies
import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// TODO: Test running jest with this removed and see if tests still work
// More info: https://github.com/cerner/terra-react-svg-loader/pull/1#discussion_r100876464
// Skip createElement warnings but fail tests on any other warning
// eslint-disable-next-line no-console
console.error = (message) => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};
