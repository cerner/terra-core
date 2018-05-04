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
