import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';

import IconHelp from 'terra-icon/lib/icon/IconHelp';
import Button from 'terra-button';
import Alert from '../../src/Alert';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

describe('1. Alert with no props', () => {
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

describe('2. Dismissible Alert that includes actions section', () => {
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

describe('3. Alert of type alert with text content', () => {
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

describe('4. Alert of type error with text content', () => {
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

describe('5. Alert of type warning with text content', () => {
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

describe('6. Alert of type gap-checking with text content', () => {
  const alertText = 'This is a gap-checking alert.';
  const basicGapCheckingRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.GAP_CHECKING} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type gap-checking', () => {
    const wrapper = mount(basicGapCheckingRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('7. Alert of type advisory with text content', () => {
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

describe('8. Alert of type info with text content', () => {
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

describe('9. Alert of type success with text content', () => {
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

describe('10. Alert of type outside records with text content', () => {
  const alertText = 'This is an outside records alert.';
  const basicOutsideRecordsRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.OUTSIDE_RECORDS} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type confirmation', () => {
    const wrapper = mount(basicOutsideRecordsRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('11. Alert of type custom with custom title and text content', () => {
  const alertText = 'This is a custom alert.';
  const alertCustomTitle = 'Help!';
  const basicCustomRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.CUSTOM} title={alertCustomTitle} customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} customStatusColor="orange" >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type custom', () => {
    const wrapper = mount(basicCustomRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('12. Alert of type info with custom title and HTML content', () => {
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

describe('13. Alert of type success with an action button text content', () => {
  const alertText = 'This is a success alert.';
  const actionButtonRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.SUCCESS} alertAction={<Button text="Action" size="medium" variant="primary" onClick={() => {}} />} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type success with an action button', () => {
    const wrapper = mount(actionButtonRender);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('14. Dismissable Alert of type custom with action button, custom title and text content', () => {
  const alertText = 'This is a custom alert.';
  const alertCustomTitle = 'Help!';
  const customActionDismissRender = (
    <IntlProvider locale={locale} messages={messages}>
      <Alert type={Alert.Opts.Types.CUSTOM} onDismiss={() => {}} title={alertCustomTitle} customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} customStatusColor="orange" alertAction={<Button text="Action" size="medium" variant="primary" onClick={() => {}} />} >{alertText}</Alert>
    </IntlProvider>
  );

  // Snapshot Tests
  it('should render an Alert component of type custom with an action button', () => {
    const wrapper = mount(customActionDismissRender);
    expect(wrapper).toMatchSnapshot();
  });
});
