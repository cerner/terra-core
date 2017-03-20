import React from 'react';
import ClinicalItemView from '../../src/ClinicalItemView';

// Snapshot Tests
it('should render a default component', () => {
  const clinicalItemView = shallow(<ClinicalItemView />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render with 1 display', () => {
  const display1 = <ClinicalItemView.Display text="display 1" />;
  const displays = [display1];
  const clinicalItemView = shallow(<ClinicalItemView displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render with 2 displays', () => {
  const display1 = <ClinicalItemView.Display text="display 1" />;
  const display2 = <ClinicalItemView.Display text="display 2" />;
  const displays = [display1, display2];
  const clinicalItemView = shallow(<ClinicalItemView displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render with 3 displays', () => {
  const display1 = <ClinicalItemView.Display text="display 1" />;
  const display2 = <ClinicalItemView.Display text="display 2" />;
  const display3 = <ClinicalItemView.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const clinicalItemView = shallow(<ClinicalItemView displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render with a display and graphic', () => {
  const testElement = <img alt="Graphic" />;
  const display1 = <ClinicalItemView.Display text="display 1" icon={testElement} />;
  const displays = [display1];
  const clinicalItemView = shallow(<ClinicalItemView displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render truncated display', () => {
  const display1 = <ClinicalItemView.Display text="display1display1display1display1display1display1display1display1" isTruncated />;
  const displays = [display1];
  const clinicalItemView = shallow(<ClinicalItemView displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render a comment', () => {
  const comment = <ClinicalItemView.Comment text="comment" textStyle="attention" isTruncated={false} />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    comment,
  };
  const clinicalItemView = shallow(<ClinicalItemView {...params} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render 1 start theme display', () => {
  const display1 = <ClinicalItemView.Display text="display 1" />;
  const displays = [display1];
  const clinicalItemView = shallow(<ClinicalItemView textEmphasis="start" displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render 2 start theme displays', () => {
  const display1 = <ClinicalItemView.Display text="display 1" />;
  const display2 = <ClinicalItemView.Display text="display 2" />;
  const displays = [display1, display2];
  const clinicalItemView = shallow(<ClinicalItemView textEmphasis="start" displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render 3 start theme displays', () => {
  const display1 = <ClinicalItemView.Display text="display 1" />;
  const display2 = <ClinicalItemView.Display text="display 2" />;
  const display3 = <ClinicalItemView.Display text="display 3" />;
  const displays = [display1, display2, display3];
  const clinicalItemView = shallow(<ClinicalItemView textEmphasis="start" displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render a start accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    startAccessory: testElement,
  };
  const clinicalItemView = shallow(<ClinicalItemView {...params} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render a end accessory', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    endAccessory: testElement,
  };
  const clinicalItemView = shallow(<ClinicalItemView {...params} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render an accessory top aligned', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    startAccessory: testElement,
    accessoryAlignment: 'alignTop',
  };
  const clinicalItemView = shallow(<ClinicalItemView {...params} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render an accessory center aligned', () => {
  const testElement = <img alt="Graphic" />;
  const params = {
    layout: 'oneColumn',
    textEmphasis: 'default',
    displays: [],
    startAccessory: testElement,
    accessoryAlignment: 'alignCenter',
  };
  const clinicalItemView = shallow(<ClinicalItemView {...params} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render one column', () => {
  const display1 = <ClinicalItemView.Display text="display 1" />;
  const display2 = <ClinicalItemView.Display text="display 2" />;
  const displays = [display1, display2];
  const clinicalItemView = shallow(<ClinicalItemView layout="oneColumn" displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});

it('should render two columns', () => {
  const display1 = <ClinicalItemView.Display text="display 1" />;
  const display2 = <ClinicalItemView.Display text="display 2" />;
  const displays = [display1, display2];
  const clinicalItemView = shallow(<ClinicalItemView layout="twoColumns" displays={displays} />);
  expect(clinicalItemView).toMatchSnapshot();
});
