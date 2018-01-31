// Make Enzyme functions available in all test files without importing
/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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

window.matchMedia = () => ({ matches: true });

const htmlTag = document.getElementsByTagName('html')[0];
htmlTag.setAttribute('dir', 'ltr');
