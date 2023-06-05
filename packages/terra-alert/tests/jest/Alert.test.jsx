import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconDiamondSymbol from 'terra-icon/lib/icon/IconDiamondSymbol';
import IconError from 'terra-icon/lib/icon/IconError';
import IconGapChecking from 'terra-icon/lib/icon/IconGapChecking';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import Button from 'terra-button';
import Alert from '../../src/Alert';

const mockUUID = '00000000-0000-0000-0000-000000000000';
jest.mock('uuid', () => ({ v4: () => mockUUID }));

describe('Alert with no props', () => {
  it('should render a default component', () => {
    const wrapper = mountWithIntl(<Alert />);

    const alert = wrapper.find('Alert');
    expect(alert.prop('customColorClass')).toEqual('custom-default-color');
    expect(alert.prop('disableAlertActionFocus')).toEqual(false);
    expect(alert.prop('type')).toEqual('alert');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default notification banner with default props', () => {
    const wrapper = shallowWithIntl(<Alert />).dive();

    const alertDiv = wrapper.find('div.alert-base');
    const alertContentDiv = wrapper.find('div.body');
    expect(alertDiv.prop('className')).toEqual('alert-base alert wide');
    expect(alertDiv.prop('role')).toEqual('alert');
    expect(alertContentDiv.prop('tabIndex')).toEqual('-1');
    expect(wrapper.find(IconAlert).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.alert');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert with props', () => {
  it('should render an alert with provided role', () => {
    const wrapper = shallowWithIntl(<Alert role="status" />).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base alert wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconAlert).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.alert');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render disableAlertActionFocus when provided', () => {
    const wrapper = mountWithIntl(<Alert disableAlertActionFocus />);

    const alert = wrapper.find('Alert');
    expect(alert.prop('disableAlertActionFocus')).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dismissible Alert that includes actions section', () => {
  it('should render an alert component with a dismiss button', () => {
    const mockOnDismiss = jest.fn();
    const wrapper = shallowWithIntl(<Alert onDismiss={mockOnDismiss}>This is a test</Alert>).dive();

    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find(Button).prop('text')).toEqual('Terra.alert.dismiss');
    expect(wrapper.find(Button).prop('onClick')).toEqual(mockOnDismiss);
    expect(wrapper.find(Button).prop('variant')).toEqual('neutral');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type alert with text content', () => {
  it('should render an Alert component of type alert', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.ALERT}>This is a test</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base alert wide');
    expect(alertDiv.prop('role')).toEqual('alert');
    expect(wrapper.find(IconAlert).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.alert');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type error with text content', () => {
  it('should render an Alert component of type error', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.ERROR}>This is an error.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base error wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconError).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.error');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type warning with text content', () => {
  it('should render an Alert component of type warning', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.WARNING}>This is an warning.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base warning wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconWarning).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.warning');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type advisory with text content', () => {
  it('should render an Alert component of type advisory', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.ADVISORY}>This is an advisory alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base advisory wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.advisory');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type unsatisfied', () => {
  it('should render an unsatisfied Alert', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.UNSATISFIED}>This is an unsatisfied alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base unsatisfied wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconGapChecking).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.unsatisfied');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type unverified', () => {
  it('should render an unverified Alert', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.UNVERIFIED}>This is an unverified alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base unverified wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconDiamondSymbol).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.unverified');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type info with text content', () => {
  it('should render an Alert component of type info', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.INFO}>This is an information alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base info wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconInformation).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.info');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type success with text content', () => {
  it('should render an Alert component of type success', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.SUCCESS}>This is a success alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base success wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconSuccess).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.success');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type custom with custom title and text content', () => {
  it('should render an Alert component of type custom', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.CUSTOM} title="Help!" customIcon={<IconHelp />} customColorClass="terra-alert-custom-orange-color">This is a custom alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base custom wide terra-alert-custom-orange-color');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconHelp).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Help!');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type info with custom title and HTML content', () => {
  it('should render an Alert component of type info with custom title and HTML content', () => {
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.INFO} title="Gettysburg Address"><span>Four score and seven years ago . . .</span></Alert>);

    expect(wrapper.prop('title')).toEqual('Gettysburg Address');
    expect(wrapper.prop('type')).toEqual('info');
    expect(wrapper.find('span').text()).toEqual('Four score and seven years ago . . .');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type success with an action button text content', () => {
  it('should render an Alert component of type success with an action button', () => {
    const mockOnClick = jest.fn();
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.SUCCESS} action={<Button text="Action" variant={Button.Opts.Variants.EMPHASIS} onClick={mockOnClick} />}>This is a success alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base success wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconSuccess).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.success');
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find(Button).prop('text')).toEqual('Action');
    expect(wrapper.find(Button).prop('onClick')).toEqual(mockOnClick);
    expect(wrapper.find(Button).prop('variant')).toEqual('emphasis');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dismissable Alert of type custom with action button, custom title and text content', () => {
  it('should render an Alert component of type custom with an action button', () => {
    const mockOnClick = jest.fn();
    const mockOnDismiss = jest.fn();
    const wrapper = shallowWithIntl(<Alert type={Alert.Opts.Types.CUSTOM} onDismiss={mockOnDismiss} title="Help!" customIcon={<IconHelp />} customColorClass="terra-alert-custom-orange-color" action={<Button text="Action" variant={Button.Opts.Variants.EMPHASIS} onClick={mockOnClick} />}>This is a custom alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base custom wide terra-alert-custom-orange-color');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconHelp).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Help!');
    const buttons = wrapper.find(Button);
    expect(buttons.length).toEqual(2);
    // action button
    expect(buttons.at(0).prop('text')).toEqual('Action');
    expect(buttons.at(0).prop('onClick')).toEqual(mockOnClick);
    expect(buttons.at(0).prop('variant')).toEqual('emphasis');
    // dismiss button
    expect(buttons.at(1).prop('text')).toEqual('Terra.alert.dismiss');
    expect(buttons.at(1).prop('onClick')).toEqual(mockOnDismiss);
    expect(buttons.at(1).prop('variant')).toEqual('neutral');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dismissible Alert', () => {
  let wrapper;

  describe('Custom Alert with no title prop', () => {
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

  describe('Custom Alert with custom title', () => {
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

  describe('Success Alert with no title prop', () => {
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

  describe('Success Alert with blank title', () => {
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
