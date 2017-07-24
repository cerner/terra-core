import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';

import IconHelp from 'terra-icon/lib/icon/IconHelp';
import Button from 'terra-button';
import Alert from '../../src/Alert';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

describe('Alert with no props', () => {
  const defaultRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert />
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = mount(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('throws error on missing locale prop in Base', () => {
    try {
      shallow(<Alert />);
    } catch (e) {
      expect(e.message).toContain('add locale prop to Base component');
    }
  });
});

describe('Dismissible Alert that includes actions section', () => {
  const alertText = 'This is a test';
  const dismissibleRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert onDismiss={() => {}} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an alert component with a dismiss button', () => {
    const wrapper = mount(dismissibleRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type alert with text content', () => {
  const alertText = 'This is an alert.';
  const basicAlertRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.ALERT} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type alert', () => {
    const wrapper = mount(basicAlertRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type error with text content', () => {
  const alertText = 'This is an error.';
  const basicErrorRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.ERROR} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type error', () => {
    const wrapper = mount(basicErrorRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type warning with text content', () => {
  const alertText = 'This is an warning.';
  const basicWarningRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.WARNING} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type warning', () => {
    const wrapper = mount(basicWarningRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type advisory with text content', () => {
  const alertText = 'This is an advisory alert.';
  const basicAdvisoryRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.ADVISORY} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type advisory', () => {
    const wrapper = mount(basicAdvisoryRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type info with text content', () => {
  const alertText = 'This is an information alert.';
  const basicInfoRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.INFO} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type info', () => {
    const wrapper = mount(basicInfoRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type success with text content', () => {
  const alertText = 'This is a success alert.';
  const basicSuccessRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.SUCCESS} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type success', () => {
    const wrapper = mount(basicSuccessRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type custom with custom title and text content', () => {
  const alertText = 'This is a custom alert.';
  const alertCustomTitle = 'Help!';
  const basicCustomRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.CUSTOM} title={alertCustomTitle} customIcon={<IconHelp />} customStatusColor="orange" >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type custom', () => {
    const wrapper = mount(basicCustomRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type info with custom title and HTML content', () => {
  const alertText = 'Four score and seven years ago . . .';
  const alertHTML = <span>{alertText}</span>;
  const alertCustomTitle = 'Gettysburg Address';
  const basicHTMLContentRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.INFO} title={alertCustomTitle} >{alertHTML}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type info with custom title and HTML content', () => {
    const wrapper = mount(basicHTMLContentRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type success with an action button text content', () => {
  const alertText = 'This is a success alert.';
  const actionButtonRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.SUCCESS} action={<Button text="Action" size="medium" variant="primary" onClick={() => {}} />} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type success with an action button', () => {
    const wrapper = mount(actionButtonRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dismissable Alert of type custom with action button, custom title and text content', () => {
  const alertText = 'This is a custom alert.';
  const alertCustomTitle = 'Help!';
  const customActionDismissRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.CUSTOM} onDismiss={() => {}} title={alertCustomTitle} customIcon={<IconHelp />} customStatusColor="orange" action={<Button text="Action" size="medium" variant="primary" onClick={() => {}} />} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type custom with an action button', () => {
    const wrapper = mount(customActionDismissRender);
    expect(wrapper).toMatchSnapshot();
  });
});
