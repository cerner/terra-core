/* eslint-disable import/no-extraneous-dependencies, no-alert */
import React from 'react';
import { IntlProvider } from 'react-intl';
import Button from 'terra-button';
import ActionHeader from '../../src/ActionHeader';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

describe('ActionHeader', () => {
  // Snapshot Tests
  it('should render a default action header', () => {
    const actionHeader = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <ActionHeader />
      </IntlProvider>,
    );
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with title', () => {
    const actionHeader = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <ActionHeader title="Action Header" />
      </IntlProvider>,
    );
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with back button and title', () => {
    const actionHeader = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <ActionHeader title="Action Header" onBack={() => {}} />
      </IntlProvider>,
    );
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with close button and title', () => {
    const actionHeader = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <ActionHeader title="Action Header" onClose={() => {}} />
      </IntlProvider>,
    );
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with back and close buttons and title', () => {
    const actionHeader = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <ActionHeader title="Action Header" onBack={() => {}} onClose={() => {}} />
      </IntlProvider>,
    );
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with level three header element and title', () => {
    const actionHeader = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <ActionHeader title="Action Header" level={3} />
      </IntlProvider>,
    );
    expect(actionHeader).toMatchSnapshot();
  });

  it('should render an action header with custom button and title', () => {
    const actionHeader = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <ActionHeader title="Action Header" >
          <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
        </ActionHeader>
      </IntlProvider>,
    );
    expect(actionHeader).toMatchSnapshot();
  });
});

it('throws error on missing locale prop in Base', () => {
  try {
    render(<ActionHeader />);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
