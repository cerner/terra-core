// Make Enzyme functions available in all test files without importing
/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Global helper file (axe-helper.js)
// import { configureAxe } from 'jest-axe';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.document = document;

// TODO: Test running jest with this removed and see if tests still work
// More info: https://github.com/cerner/terra-react-svg-loader/pull/1#discussion_r100876464
// Skip createElement warnings but fail tests on any other warning
// eslint-disable-next-line no-console
console.error = (message) => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};

const htmlTag = document.getElementsByTagName('html')[0];
htmlTag.setAttribute('dir', 'ltr');

// function configureAxe (defaultOptions = {}) {
//   /**
//    * Small wrapper for axe-core#run that enables promises (required for Jest),
//    * default options and injects html to be tested
//    * @param {string} html requires a html string to be injected into the body
//    * @param {object} [additionalOptions] aXe options to merge with default options
//    * @returns {promise} returns promise that will resolve with axe-core#run results object
//    */
//   return function axe (html, additionalOptions = {}) {
//     const [element, restore] = mount(html)
//     const options = merge({}, defaultOptions, additionalOptions)

//     return new Promise((resolve, reject) => {
//       axeCore.run(element, options, (err, results) => {
//         restore()
//         if (err) {
//           throw err;
//         }
//         resolve(results)
//       });
//     });
//   }
// }

// const axe = configureAxe();

// global.axe = axe;