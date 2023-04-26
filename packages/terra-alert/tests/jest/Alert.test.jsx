import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import Button from 'terra-button';
import Alert from '../../src/Alert';

const mockUUID = '00000000-0000-0000-0000-000000000000';
jest.mock('uuid', () => ({ v4: () => mockUUID }));

describe('Alert with no props', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = mountWithIntl(<Alert />);
    expect(wrapper).toMatchSnapshot();
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

describe('Alert of type unsatisfied', () => {
  it('should render an unsatisfied Alert', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.UNSATISFIED}>This is an unsatisfied alert.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type unverified', () => {
  it('should render an unverified Alert', () => {
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.UNVERIFIED}>This is an unverified alert.</Alert>);
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
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.CUSTOM} title="Help!" customIcon={<IconHelp />} customColorClass="terra-alert-custom-orange-color">This is a custom alert.</Alert>);
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
    const wrapper = mountWithIntl(<Alert type={Alert.Opts.Types.CUSTOM} onDismiss={() => { }} title="Help!" customIcon={<IconHelp />} customColorClass="terra-alert-custom-orange-color" action={<Button text="Action" variant={Button.Opts.Variants.EMPHASIS} onClick={() => { }} />}>This is a custom alert.</Alert>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dismissible Alert', () => {
  let wrapper;

  describe('of type custom with no title', () => {
    beforeEach(() => {
      wrapper = shallowWithIntl(
        <Alert
          type={Alert.Opts.Types.CUSTOM}
          onDismiss={() => { }}
          customIcon={<IconHelp />}
        >
          This is a custom alert.
        </Alert>,
      ).dive();
    });
    it('should set the alert message ID', () => {
      const alertContent = wrapper.find('.section');
      expect(alertContent.prop('id')).toEqual(`alert-message-${mockUUID}`);
    });

    it('should set the dismiss button aria-describedby to the alert description', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual(`alert-message-${mockUUID}`);
    });
  });

  describe('of type custom with custom title', () => {
    beforeEach(() => {
      wrapper = shallowWithIntl(
        <Alert
          type={Alert.Opts.Types.CUSTOM}
          title="Help!"
          onDismiss={() => { }}
          customIcon={<IconHelp />}
        >
          This is a custom alert.
        </Alert>,
      ).dive();
    });

    it('should set the alert message ID', () => {
      const alertContent = wrapper.find('.section');
      expect(alertContent.prop('id')).toEqual(`alert-message-${mockUUID}`);
    });

    it('should set the alert title ID', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('id')).toEqual(`alert-title-${mockUUID}`);
    });

    it('should set the dismiss button aria-describedby to the alert title', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual(`alert-title-${mockUUID}`);
    });
  });

  describe('of type success with no title', () => {
    beforeEach(() => {
      wrapper = shallowWithIntl(
        <Alert
          type={Alert.Opts.Types.SUCCESS}
          onDismiss={() => { }}
        >
          This is a success alert.
        </Alert>,
      ).dive();
    });

    it('should set the alert message ID', () => {
      const alertContent = wrapper.find('.section');
      expect(alertContent.prop('id')).toEqual(`alert-message-${mockUUID}`);
    });

    it('should set the alert title ID', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('id')).toEqual(`alert-title-${mockUUID}`);
    });

    it('should set the dismiss button aria-describedby to the alert title', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual(`alert-title-${mockUUID}`);
    });
  });

  describe('of type success with blank title', () => {
    beforeEach(() => {
      wrapper = shallowWithIntl(
        <Alert
          type={Alert.Opts.Types.SUCCESS}
          title=""
          onDismiss={() => { }}
        >
          This is a success alert.
        </Alert>,
      ).dive();
    });

    it('should use the default title', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('children')).toEqual('Terra.alert.success');
    });

    it('should set the alert message ID', () => {
      const alertContent = wrapper.find('.section');
      expect(alertContent.prop('id')).toEqual(`alert-message-${mockUUID}`);
    });

    it('should set the alert title ID', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('id')).toEqual(`alert-title-${mockUUID}`);
    });

    it('should set the dismiss button aria-describedby to the alert title', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual(`alert-title-${mockUUID}`);
    });
  });
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });

  const wrapper = shallowWithIntl(<Alert type="success" />);
  const headerContainer = wrapper.dive().dive();
  expect(headerContainer).toMatchSnapshot();
});
