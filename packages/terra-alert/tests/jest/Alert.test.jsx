import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconDiamondSymbol from 'terra-icon/lib/icon/IconDiamondSymbol';
import IconError from 'terra-icon/lib/icon/IconError';
import IconGapChecking from 'terra-icon/lib/icon/IconGapChecking';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import Button from 'terra-button';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { v4 as uuidv4 } from 'uuid';
import Alert from '../../src/Alert';

let mockSpyUuid;
beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

describe('Alert with no props', () => {
  it('should render a default component', () => {
    const wrapper = enzymeIntl.mountWithIntl(<Alert />);

    const alert = wrapper.find('Alert');
    expect(alert.prop('customColorClass')).toEqual('custom-default-color');
    expect(alert.prop('disableAlertActionFocus')).toEqual(false);
    expect(alert.prop('type')).toEqual('alert');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default notification banner with default props', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Alert />).dive();

    const alertDiv = wrapper.find('div.alert-base');
    const alertFocusDiv = wrapper.find('div.focus-container');
    expect(alertDiv.prop('className')).toEqual('alert-base alert wide');
    expect(alertDiv.prop('role')).toEqual('alert');
    expect(alertFocusDiv.prop('tabIndex')).toEqual('-1');
    expect(wrapper.find(IconAlert).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.alert');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert with props', () => {
  it('should render an alert with provided role', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Alert role="status" />).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base alert wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconAlert).length).toEqual(1);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.alert');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render disableAlertActionFocus when provided', () => {
    const wrapper = enzymeIntl.mountWithIntl(<Alert disableAlertActionFocus />);

    const alert = wrapper.find('Alert');
    expect(alert.prop('disableAlertActionFocus')).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an alert with provided title', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Alert title="Custom Title" />).dive();
    const alertTitle = wrapper.find('.title');

    expect(alertTitle.prop('children')).toEqual(
      [
        <VisuallyHiddenText text="Terra.alert.alert," />,
        'Custom Title',
      ],
    );
    expect(alertTitle.text()).toEqual('<VisuallyHiddenText />Custom Title');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Dismissible Alert that includes actions section', () => {
  it('should render an alert component with a dismiss button', () => {
    const mockOnDismiss = jest.fn();
    const wrapper = enzymeIntl.shallowWithIntl(<Alert onDismiss={mockOnDismiss}>This is a test</Alert>).dive();

    const dismissButton = wrapper.find(Button);
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.alert');
    expect(dismissButton.length).toEqual(1);
    expect(dismissButton.prop('text')).toEqual('Terra.alert.dismiss');
    expect(dismissButton.prop('onClick')).toEqual(mockOnDismiss);
    expect(dismissButton.prop('variant')).toEqual('neutral');
    expect(dismissButton.prop('aria-describedby')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type alert with text content', () => {
  it('should render an Alert component of type alert', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.ALERT}>This is a test</Alert>).dive();

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
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.ERROR}>This is an error.</Alert>).dive();

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
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.WARNING}>This is an warning.</Alert>).dive();

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
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.ADVISORY}>This is an advisory alert.</Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base advisory wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find('.title').text()).toEqual('Terra.alert.advisory');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type unsatisfied', () => {
  it('should render an unsatisfied Alert', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.UNSATISFIED}>This is an unsatisfied alert.</Alert>).dive();

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
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.UNVERIFIED}>This is an unverified alert.</Alert>).dive();

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
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.INFO}>This is an information alert.</Alert>).dive();

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
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.SUCCESS}>This is a success alert.</Alert>).dive();

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
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.CUSTOM} title="Help!" customIcon={<IconHelp />} customColorClass="terra-alert-custom-orange-color">This is a custom alert.</Alert>).dive();

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
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.INFO} title="Gettysburg Address"><span>Four score and seven years ago . . .</span></Alert>).dive();

    const alertDiv = wrapper.find('div.alert-base');
    expect(alertDiv.prop('className')).toEqual('alert-base info wide');
    expect(alertDiv.prop('role')).toEqual('status');
    expect(wrapper.find(IconInformation).length).toEqual(1);
    expect(wrapper.find('.title').prop('children')).toEqual(
      [
        <VisuallyHiddenText text="Terra.alert.info," />,
        'Gettysburg Address',
      ],
    );
    expect(wrapper.find('.title').text()).toEqual('<VisuallyHiddenText />Gettysburg Address');
    expect(wrapper.find('.section').find('span').text()).toEqual('Four score and seven years ago . . .');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Alert of type success with an action button text content', () => {
  it('should render an Alert component of type success with an action button', () => {
    const mockOnClick = jest.fn();
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.SUCCESS} action={<Button text="Action" variant={Button.Opts.Variants.EMPHASIS} onClick={mockOnClick} />}>This is a success alert.</Alert>).dive();

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

describe('Dismissible Alert of type custom with action button, custom title and text content', () => {
  it('should render an Alert component of type custom with an action button', () => {
    const mockOnClick = jest.fn();
    const mockOnDismiss = jest.fn();
    const wrapper = enzymeIntl.shallowWithIntl(<Alert type={Alert.Opts.Types.CUSTOM} onDismiss={mockOnDismiss} title="Help!" customIcon={<IconHelp />} customColorClass="terra-alert-custom-orange-color" action={<Button text="Action" variant={Button.Opts.Variants.EMPHASIS} onClick={mockOnClick} />}>This is a custom alert.</Alert>).dive();

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

describe('Notifications titles', () => {
  let wrapper;

  describe('Custom notification with no title prop', () => {
    beforeEach(() => {
      wrapper = enzymeIntl.shallowWithIntl(
        <Alert
          type={Alert.Opts.Types.CUSTOM}
          onDismiss={() => { }}
          customIcon={<IconHelp />}
        >
          This is a custom alert.
        </Alert>,
      ).dive();
    });
    it('should set the notification message ID', () => {
      const alertContent = wrapper.find('.section');
      expect(alertContent.prop('id')).toEqual('alert-message-00000000-0000-0000-0000-000000000000');
    });

    it('should have no title', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.length).toEqual(0);
    });

    it('should set the dismiss button aria-describedby to the notification description', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual('alert-message-00000000-0000-0000-0000-000000000000');
    });
  });

  describe('Custom notification with custom title', () => {
    beforeEach(() => {
      wrapper = enzymeIntl.shallowWithIntl(
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
      expect(alertContent.prop('id')).toEqual('alert-message-00000000-0000-0000-0000-000000000000');
    });

    it('should set the alert title ID', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('id')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    });

    it('should set the alert title', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('children')).toEqual(['', 'Help!']);
      expect(alertTitle.text()).toEqual('Help!');
    });

    it('should set the dismiss button aria-describedby to the alert title', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    });
  });

  describe('Success notification with no title prop', () => {
    beforeEach(() => {
      wrapper = enzymeIntl.shallowWithIntl(
        <Alert
          type={Alert.Opts.Types.SUCCESS}
          onDismiss={() => { }}
        >
          This is a success alert.
        </Alert>,
      ).dive();
    });

    it('should set the notification message ID', () => {
      const alertContent = wrapper.find('.section');
      expect(alertContent.prop('id')).toEqual('alert-message-00000000-0000-0000-0000-000000000000');
    });

    it('should set the notification title ID', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('id')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    });

    it('should use the default title', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('children')).toEqual([undefined, 'Terra.alert.success']);
      expect(alertTitle.text()).toEqual('Terra.alert.success');
    });

    it('should set the dismiss button aria-describedby to the notification title', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    });
  });

  describe('Success notification with blank title', () => {
    beforeEach(() => {
      wrapper = enzymeIntl.shallowWithIntl(
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
      expect(alertTitle.prop('children')).toEqual(['', 'Terra.alert.success']);
      expect(alertTitle.text()).toEqual('Terra.alert.success');
    });

    it('should set the notification message ID', () => {
      const alertContent = wrapper.find('.section');
      expect(alertContent.prop('id')).toEqual('alert-message-00000000-0000-0000-0000-000000000000');
    });

    it('should set the notification title ID', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('id')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    });

    it('should set the dismiss button aria-describedby to the notification title', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    });
  });

  describe('Success notification with title', () => {
    beforeEach(() => {
      wrapper = enzymeIntl.shallowWithIntl(
        <Alert
          type={Alert.Opts.Types.SUCCESS}
          title="Custom Success Title"
          onDismiss={() => { }}
        >
          This is a success alert.
        </Alert>,
      ).dive();
    });

    it('should use the custom title', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('children')).toEqual(
        [
          <VisuallyHiddenText text="Terra.alert.success," />,
          'Custom Success Title',
        ],
      );
      expect(alertTitle.text()).toEqual('<VisuallyHiddenText />Custom Success Title');
    });

    it('should set the notification message ID', () => {
      const alertContent = wrapper.find('.section');
      expect(alertContent.prop('id')).toEqual('alert-message-00000000-0000-0000-0000-000000000000');
    });

    it('should set the notification title ID', () => {
      const alertTitle = wrapper.find('.title');
      expect(alertTitle.prop('id')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    });

    it('should set the dismiss button aria-describedby to the notification title', () => {
      const dismissButton = wrapper.find('Button');
      expect(dismissButton.prop('aria-describedby')).toEqual('alert-title-00000000-0000-0000-0000-000000000000');
    });
  });
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });

  const wrapper = enzymeIntl.shallowWithIntl(<Alert type="success" />);
  const headerContainer = wrapper.dive().dive();
  expect(headerContainer).toMatchSnapshot();
});
