/* eslint-disable import/no-extraneous-dependencies, no-alert */
import React from 'react';
import Button from 'terra-button';
import intlContexts from './intl-context-setup';
import ActionHeader from '../../src/ActionHeader';

describe('ActionHeader', () => {
  // Snapshot Tests
  it('should render a default action header', () => {
    const actionHeader = <ActionHeader />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with title', () => {
    const actionHeader = <ActionHeader title="Action Header" />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with back button and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onBack={() => {}} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with close button and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onClose={() => {}} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with back and close buttons and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onBack={() => {}} onClose={() => {}} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with level three header element and title', () => {
    const actionHeader = <ActionHeader title="Action Header" level={3} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with custom button and title', () => {
    const actionHeader = <ActionHeader title="Action Header"><Button text="Custom Button" onClick={() => alert('You clicked me!')} /></ActionHeader>;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with multiple custom buttons and title', () => {
    const actionHeader = <ActionHeader title="Action Header"><span><Button text="Custom Button" onClick={() => alert('You clicked me!')} /><Button text="Custom Button" onClick={() => alert('You clicked me!')} /></span></ActionHeader>;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with maximize button and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onMaximize={() => {}} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with minimize button and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onMinimize={() => {}} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with next and previous buttons and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onNext={() => {}} onPrevious={() => {}} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with title and next button but without previous button', () => {
    const actionHeader = <ActionHeader title="Action Header" onNext={() => {}} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with title and previous button but without next buttons', () => {
    const actionHeader = <ActionHeader title="Action Header" onPrevious={() => {}} />;
    const wrapper = shallow(actionHeader, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});

it('throws error on missing locale prop in Base', () => {
  try {
    render(<ActionHeader />);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
