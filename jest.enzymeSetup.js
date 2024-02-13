// Make Enzyme functions available in all test files without importing
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-curly-newline */
import Enzyme, { mount, render, shallow } from 'enzyme';
import { mockIntl, mountWithIntl, renderWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.enzyme = { mount, render, shallow };
global.enzymeIntl = { mockIntl, mountWithIntl, renderWithIntl, shallowWithIntl };
