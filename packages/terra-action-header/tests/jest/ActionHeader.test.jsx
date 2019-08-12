/* eslint-disable no-alert, no-console */
import React from 'react';
import Button from 'terra-button';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ActionHeader from '../../src/ActionHeader';

describe('ActionHeader', () => {
  // Snapshot Tests
  it('should render a default action header', () => {
    const actionHeader = <ActionHeader />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with title', () => {
    const actionHeader = <ActionHeader title="Action Header" />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with back button and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onBack={() => {}} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with close button and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onClose={() => {}} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with back and close buttons and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onBack={() => {}} onClose={() => {}} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with level three header element and title', () => {
    const actionHeader = <ActionHeader title="Action Header" level={3} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with custom button and title', () => {
    const actionHeader = <ActionHeader title="Action Header"><Button text="Custom Button" onClick={() => alert('You clicked me!')} /></ActionHeader>;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with multiple custom buttons and title', () => {
    const actionHeader = (
      <ActionHeader title="Action Header">
        <span>
          <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
          <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
        </span>
      </ActionHeader>
    );
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with maximize button and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onMaximize={() => {}} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with minimize button and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onMinimize={() => {}} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with next and previous buttons and title', () => {
    const actionHeader = <ActionHeader title="Action Header" onNext={() => {}} onPrevious={() => {}} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with title, enabled next button, and disabled previous button', () => {
    const actionHeader = <ActionHeader title="Action Header" onNext={() => {}} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an action header with title, enabled previous button, and disabled next button', () => {
    const actionHeader = <ActionHeader title="Action Header" onPrevious={() => {}} />;
    const wrapper = shallowWithIntl(actionHeader);
    expect(wrapper).toMatchSnapshot();
  });
});
