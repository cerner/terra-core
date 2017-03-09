import React from 'react';
import CompactCard from '../../src/CompactCard';

// Snapshot Tests
it('should render a default component', () => {
  const compactCard = shallow(<CompactCard />);
  expect(compactCard).toMatchSnapshot();
});

it('should render with 1 display', () => {
  const display1 = <CompactCard.Display text="display 1" />;
  const displays = [display1];
  const compactCard = shallow(<CompactCard displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render with 2 displays', () => {
  const display1 = <CompactCard.Display text="display 1" />;
  const display2 = <CompactCard.Display text="display 2" />;
  const displays = [display1, display2];
  const compactCard = shallow(<CompactCard displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render with 3 displays', () => {
  const display1 = <CompactCard.Display text="display 1" />;
  const display2 = <CompactCard.Display text="display 2" />;
  const display3 = <CompactCard.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const compactCard = shallow(<CompactCard displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render with a display and graphic', () => {
  const testElement = <img alt="Graphic" />;
  const display1 = <CompactCard.Display text="display 1" icon={testElement} />;
  const displays = [display1];
  const compactCard = shallow(<CompactCard displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render truncated display', () => {
  const display1 = <CompactCard.Display text="display1display1display1display1display1display1display1display1" isTruncated />;
  const displays = [display1];
  const compactCard = shallow(<CompactCard displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render a comment', () => {
  const comment = <CompactCard.Comment text="comment" textStyle="attention" isTruncated={false} />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    comment,
  };
  const compactCard = shallow(<CompactCard {...params} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render 1 left theme display', () => {
  const display1 = <CompactCard.Display text="display 1" />;
  const displays = [display1];
  const compactCard = shallow(<CompactCard textEmphasis="left" displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render 2 left theme displays', () => {
  const display1 = <CompactCard.Display text="display 1" />;
  const display2 = <CompactCard.Display text="display 2" />;
  const displays = [display1, display2];
  const compactCard = shallow(<CompactCard textEmphasis="left" displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render 3 left theme displays', () => {
  const display1 = <CompactCard.Display text="display 1" />;
  const display2 = <CompactCard.Display text="display 2" />;
  const display3 = <CompactCard.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const compactCard = shallow(<CompactCard textEmphasis="left" displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render a left accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    leftAccessory: testElement,
  };
  const compactCard = shallow(<CompactCard {...params} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render a right accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    rightAccessory: testElement,
  };
  const compactCard = shallow(<CompactCard {...params} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render an accessory top aligned', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    leftAccessory: testElement,
    accessoryAlignment: 'alignTop',
  };
  const compactCard = shallow(<CompactCard {...params} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render an accessory center aligned', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    leftAccessory: testElement,
    accessoryAlignment: 'alignCenter',
  };
  const compactCard = shallow(<CompactCard {...params} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render one column', () => {
  const display1 = <CompactCard.Display text="display 1" />;
  const display2 = <CompactCard.Display text="display 2" />;
  const displays = [display1, display2];
  const compactCard = shallow(<CompactCard layout="oneColumn" displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});

it('should render two columns', () => {
  const display1 = <CompactCard.Display text="display 1" />;
  const display2 = <CompactCard.Display text="display 2" />;
  const displays = [display1, display2];
  const compactCard = shallow(<CompactCard layout="twoColumns" displays={displays} />);
  expect(compactCard).toMatchSnapshot();
});
