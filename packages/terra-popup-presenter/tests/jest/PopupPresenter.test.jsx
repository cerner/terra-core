import React from 'react';
import PopupDefaultExample from './PopupDefaultExample';
import PopupAllPropsExample from './PopupAllPropsExample';
import PopupBoundedExample from './PopupBoundedExample';

const defaultPresenter = <PopupDefaultExample />;

// Snapshot Tests
it('should render a default component', () => {
  const popup = shallow(defaultPresenter);
  expect(popup).toMatchSnapshot();
});

// Prop Tests
it('should have the class terra-PopupPresenter-element', () => {
  const popup = shallow(<PopupAllPropsExample />);
  expect(popup).toMatchSnapshot();
  // expect(wrapper.prop('className')).toContain('terra-PopupPresenter-element');
});

it('should have the class terra-PopupPresenter-element', () => {
  const popup = shallow(<PopupAllPropsExample />);
  expect(popup).toMatchSnapshot();
  // expect(wrapper.prop('className')).toContain('terra-PopupPresenter-element');
});

it('should have the class terra-PopupPresenter-element', () => {
  const popup = shallow(<PopupBoundedExample />);
  expect(popup).toMatchSnapshot();
  // expect(wrapper.prop('className')).toContain('terra-PopupPresenter-element');
});
