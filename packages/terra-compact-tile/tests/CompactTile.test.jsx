import React from 'react';
import initStoryshots from 'storyshots';
import CompactTile from '../src/CompactTile';

// Run snapshot tests for react-storybook
initStoryshots();

// Snapshot Tests
it('should render a default component', () => {
  const compactTile = shallow(<CompactTile />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with 1 display', () => {
  const display1 = <Display text="display 1" />;
  const displays = [display1];
  const compactTile = shallow(<CompactTile displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with 2 displays', () => {
  const display1 = <Display text="display 1" />;
  const display2 = <Display text="display 2" />;
  const displays = [display1, display2];
  const compactTile = shallow(<CompactTile displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with 3 displays', () => {
  const display1 = <Display text="display 1" />;
  const display2 = <Display text="display 2" />;
  const display3 = <Display text="display 3" />;
  const displays = [display1, display2, display3];
  const compactTile = shallow(<CompactTile displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with a display and graphic', () => {
  const testElement = <img alt="Graphic" />;
const display1 = <Display text="display 1" icon={ testElement } />;
const displays = [display1];
const compactTile = shallow(<CompactTile displays={displays} />);
expect(compactTile).toMatchSnapshot();
});

it('should render truncated display', () => {
  const display1 = <Display text="display1display1display1display1display1display1display1display1"
isTruncated={true} />;
const displays = [display1];
const compactTile = shallow(<CompactTile displays={displays} />);
expect(compactTile).toMatchSnapshot();
});

it('should render a comment', () => {
  const comment = <Comment text="comment" style="attention" isTruncated={false} />;
  const params = {
    layout: 'oneColumn',
    theme: 'defaultTheme',
    displays: [],
    comment,
  };
  const compactTile = shallow(<CompactTile {...params} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render 1 left theme display', () => {
  const display1 = <Display text="display 1" />;
  const displays = [display1];
  const compactTile = shallow(<CompactTile theme="leftEmphasisTheme" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render 2 left theme displays', () => {
  const display1 = <Display text="display 1" />;
  const display2 = <Display text="display 2" />;
  const displays = [display1, display2];
  const compactTile = shallow(<CompactTile theme="leftEmphasisTheme" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render 3 left theme displays', () => {
  const display1 = <Display text="display 1" />;
  const display2 = <Display text="display 2" />;
  const display3 = <Display text="display 3" />;
  const displays = [display1, display2, display3];
  const compactTile = shallow(<CompactTile theme="leftEmphasisTheme" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render a left accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    theme: 'defaultTheme',
    displays: [],
    leftAccessory: testElement,
  };
  const compactTile = shallow(<CompactTile {...params} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render a right accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    theme: 'defaultTheme',
    displays: [],
    rightAccessory: testElement,
  };
  const compactTile = shallow(<CompactTile {...params} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render an accessory top aligned', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    theme: 'defaultTheme',
    displays: [],
    leftAccessory: testElement,
    accessoryAlignment: 'alignTop',
  };
  const compactTile = shallow(<CompactTile {...params} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render an accessory center aligned', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    theme: 'defaultTheme',
    displays: [],
    leftAccessory: testElement,
    accessoryAlignment: 'alignCenter',
  };
  const compactTile = shallow(<CompactTile {...params} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render one column', () => {
  const display1 = <Display text="display 1" />;
  const display2 = <Display text="display 2" />;
  const displays = [display1, display2];
  const compactTile = shallow(<CompactTile layout="oneColumn" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render two columns', () => {
  const display1 = <Display text="display 1" />;
  const display2 = <Display text="display 2" />;
  const displays = [display1, display2];
  const compactTile = shallow(<CompactTile layout="twoColumns" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});


// Prop Tests
it('should have the class terra-CompactTile--default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terra-CompactTile terra-CompactTile--default');
});

it('should have the class terra-CompactTile--primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper.prop('className')).toContain('terra-CompactTile terra-CompactTile--primary');
});


// Event Tests
it('should toggle the class u-selected on default', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-CompactTile--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-CompactTile--default').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

it('should toggle the class u-selected on primary', () => {
  const wrapper = shallow(primaryVariety);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-CompactTile--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.terra-CompactTile--primary').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
