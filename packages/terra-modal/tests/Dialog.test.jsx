import React from 'react';
import Dialog from '../src/Dialog';

const ariaLabel = 'ariaLabeltest';
const dummyFn = () => {};

describe('<Dialog />', () => {
  it('allows to set full screen', () => {
    const wrapper = shallow(
      <Dialog
        ariaLabel={ariaLabel}
        onRequestClose={dummyFn}
        isFullScreen
      />,
    );
    expect(wrapper.hasClass('terra-Modal--fullScreen')).toEqual(true);
  });

  it('allows to set size', () => {
    const wrapper = shallow(
      <Dialog
        ariaLabel={ariaLabel}
        onRequestClose={dummyFn}
        size="tiny"
      />,
    );
    expect(wrapper.hasClass('terra-Modal--tiny')).toEqual(true);
  });

  it('calls onRequestClose function after click', () => {
    const mockCloseFn = jest.fn();
    const wrapper = shallow(
      <Dialog
        ariaLabel={ariaLabel}
        onRequestClose={mockCloseFn}
      />,
    );
    wrapper.find('.terra-Modal--close').simulate('click');
    expect(mockCloseFn).toHaveBeenCalledTimes(1);
  });

  it('allows to remove close button', () => {
    const wrapper = shallow(
      <Dialog
        ariaLabel={ariaLabel}
        onRequestClose={dummyFn}
        hasCloseButton={false}
      />,
    );
    expect(wrapper.find('.terra-Modal--close').exists()).toBe(false);
  });

  it('requires ariaLabel prop', () => {
    try {
      shallow(<Dialog onRequestClose={dummyFn} />);
    } catch (e) {
      expect(e.message).toContain('The prop `ariaLabel` is marked as required');
    }
  });

  it('requires onRequestClose prop', () => {
    try {
      shallow(<Dialog />);
    } catch (e) {
      expect(e.message).toContain('The prop `onRequestClose` is marked as required');
    }
  });

  it('renders header correctly', () => {
    const header = <div>I am a header</div>;
    const wrapper = shallow(
      <Dialog
        ariaLabel={ariaLabel}
        onRequestClose={dummyFn}
        header={header}
      />,
    );
    const headerWrapper = wrapper.find('.terra-Modal-header').childAt(0);
    expect(headerWrapper.contains(header)).toBe(true);
  });

  it('renders body correctly', () => {
    const body = <div>I am a body</div>;
    const wrapper = shallow(
      <Dialog
        ariaLabel={ariaLabel}
        onRequestClose={dummyFn}
        body={body}
      />,
    );
    const headerWrapper = wrapper.find('.terra-Modal-body').childAt(0);
    expect(headerWrapper.contains(body)).toBe(true);
  });

  it('renders footer correctly', () => {
    const footer = <div>I am a footer</div>;
    const wrapper = shallow(
      <Dialog
        ariaLabel={ariaLabel}
        onRequestClose={dummyFn}
        footer={footer}
      />,
    );
    expect(wrapper.childAt(2).contains(footer)).toBe(true);
  });
});
