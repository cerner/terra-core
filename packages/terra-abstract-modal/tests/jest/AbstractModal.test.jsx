import React from 'react';
import AbstractModalExample from './AbstractModalExample';

it('should shallow an open modal', () => {
  const modal = shallow(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 6000 z-index', () => {
  const modal = shallow(<AbstractModalExample zIndex="6000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 7000 z-index', () => {
  const modal = shallow(<AbstractModalExample zIndex="7000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 7000 z-index', () => {
  const modal = mount(<AbstractModalExample zIndex="7000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 8000 z-index', () => {
  const modal = shallow(<AbstractModalExample zIndex="8000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 8000 z-index', () => {
  const modal = mount(<AbstractModalExample zIndex="8000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 9000 z-index', () => {
  const modal = shallow(<AbstractModalExample zIndex="9000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 9000 z-index', () => {
  const modal = mount(<AbstractModalExample zIndex="9000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal set to fullscreen', () => {
  const modal = mount(<AbstractModalExample isFullscreen />);
  expect(modal).toMatchSnapshot();
});

it('should render the correct snapshot for iPhones', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPhone', writable: 'true' });

  const modal = mount(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should render the correct snapshot for iPads', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPad', writable: 'true' });

  const modal = mount(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should allow us to pass in a dom selector as a fallbackFocus', () => {
  const modal = mount(<AbstractModalExample fallbackFocus="#focusable-element" />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should allow us to pass in a dom element as fallbackFocus', () => {
  const modal = mount(<AbstractModalExample fallbackFocus={document.createElement('p')} />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should allow us to pass in a function as fallbackFocus', () => {
  const modal = mount(<AbstractModalExample fallbackFocus={() => {}} />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should render the correct snapshot for iPods', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPod', writable: 'true' });

  const modal = mount(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});
