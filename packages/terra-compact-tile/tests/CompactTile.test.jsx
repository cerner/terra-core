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
  const display1 = <CompactTile.Display text="display 1" />;
  const displays = [display1];
  const compactTile = shallow(<CompactTile displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with 2 displays', () => {
  const display1 = <CompactTile.Display text="display 1" />;
  const display2 = <CompactTile.Display text="display 2" />;
  const displays = [display1, display2];
  const compactTile = shallow(<CompactTile displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with 3 displays', () => {
  const display1 = <CompactTile.Display text="display 1" />;
  const display2 = <CompactTile.Display text="display 2" />;
  const display3 = <CompactTile.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const compactTile = shallow(<CompactTile displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render with a display and graphic', () => {
  const testElement = <img alt="Graphic" />;
  const display1 = <CompactTile.Display text="display 1" icon={testElement} />;
  const displays = [display1];
  const compactTile = shallow(<CompactTile displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render truncated display', () => {
  const display1 = <CompactTile.Display text="display1display1display1display1display1display1display1display1" isTruncated />;
  const displays = [display1];
  const compactTile = shallow(<CompactTile displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render a comment', () => {
  const comment = <CompactTile.Comment text="comment" textStyle="attention" isTruncated={false} />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    comment,
  };
  const compactTile = shallow(<CompactTile {...params} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render 1 left theme display', () => {
  const display1 = <CompactTile.Display text="display 1" />;
  const displays = [display1];
  const compactTile = shallow(<CompactTile textEmphasis="left" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render 2 left theme displays', () => {
  const display1 = <CompactTile.Display text="display 1" />;
  const display2 = <CompactTile.Display text="display 2" />;
  const displays = [display1, display2];
  const compactTile = shallow(<CompactTile textEmphasis="left" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render 3 left theme displays', () => {
  const display1 = <CompactTile.Display text="display 1" />;
  const display2 = <CompactTile.Display text="display 2" />;
  const display3 = <CompactTile.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const compactTile = shallow(<CompactTile textEmphasis="left" displays={displays} />);
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
  const display1 = <CompactTile.Display text="display 1" />;
  const display2 = <CompactTile.Display text="display 2" />;
  const displays = [display1, display2];
  const compactTile = shallow(<CompactTile layout="oneColumn" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});

it('should render two columns', () => {
  const display1 = <CompactTile.Display text="display 1" />;
  const display2 = <CompactTile.Display text="display 2" />;
  const displays = [display1, display2];
  const compactTile = shallow(<CompactTile layout="twoColumns" displays={displays} />);
  expect(compactTile).toMatchSnapshot();
});
