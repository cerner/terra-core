/* eslint-disable no-console */
import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';

import IconHelp from 'terra-icon/lib/icon/IconHelp';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import Alert from '../../src/Alert';
import styles from '../../src/terra-dev-site/doc/example/colors.module.scss';

const cx = classNames.bind(styles);

describe('Alert with no props', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = mountWithIntl(<Alert />);
    expect(wrapper).toMatchSnapshot();
  });

  it('throws error on missing locale prop in Base', () => {
    global.console = { error: jest.fn() };

    expect(() => {
      render(<Alert />);
    }).toThrowError();
    expect(console.error).toBeCalledWith(expect.stringContaining('Component is internationalized, and must be wrapped in terra-base'));
  });
});

describe('Dismissible Alert that includes actions section', () => {
  // Snapshot Tests
  it('should render an alert component with a dismiss button', () => {
    const wrapper = mountWithIntl(<Alert onDismiss={() => { }}>This is a test</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type alert with text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type alert', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.ALERT}>This is a test</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type error with text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type error', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.ERROR}>This is an error.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type warning with text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type warning', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.WARNING}>This is an warning.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type advisory with text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type advisory', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.ADVISORY}>This is an advisory alert.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type info with text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type info', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.INFO}>This is an information alert.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type success with text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type success', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.SUCCESS}>This is a success alert.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type custom with custom title and text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type custom', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.CUSTOM} title="Help!" customIcon={<IconHelp />} customColorClass={cx(['terra-alert-custom-orange-color'])}>This is a custom alert.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type info with custom title and HTML content', () => {
  // Snapshot Tests
  it('should render an Alert component of type info with custom title and HTML content', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.INFO} title="Gettysburg Address"><span>Four score and seven years ago . . .</span></Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type success with an action button text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type success with an action button', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.SUCCESS} action={<Button text="Action" variant={Button.Opts.Variants.EMPHASIS} onClick={() => { }} />}>This is a success alert.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dismissable Alert of type custom with action button, custom title and text content', () => {
  // Snapshot Tests
  it('should render an Alert component of type custom with an action button', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.CUSTOM} onDismiss={() => { }} title="Help!" customIcon={<IconHelp />} customColorClass={cx(['terra-alert-custom-orange-color'])} action={<Button text="Action" variant={Button.Opts.Variants.EMPHASIS} onClick={() => { }} />}>This is a custom alert.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});
