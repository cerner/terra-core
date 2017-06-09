import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import Button from 'terra-button';
import Alert, { AlertTypes } from '../../src/Alert';

describe('1. Alert with no props', () => {
  const defaultRender = <Alert />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type alert when no props given including IconAlert icon and default alert title', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.childAt(0).childAt(0).find(IconAlert)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Alert!');
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--alert', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--alert');
  });

  it('default alert should have one child with className terr-Alert-body', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.childAt(0).prop('className')).toContain('terra-Alert-body');
  });

  it('default alert body should have two children one for the icon section and one for the content section', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.childAt(0).children()).toHaveLength(2);
    expect(wrapper.childAt(0).childAt(0).prop('className')).toContain('terra-Alert-icon');
    expect(wrapper.childAt(0).childAt(1).prop('className')).toContain('terra-Alert-section');
  });

  it('default alert content section should have two children one for the title and one for the content', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.childAt(0).childAt(1).children()).toHaveLength(2);
    expect(wrapper.childAt(0).childAt(1).childAt(0).prop('className')).toContain('terra-Alert-title');
    expect(wrapper.childAt(0).childAt(1).childAt(0).type()).toEqual('strong');
    expect(wrapper.childAt(0).childAt(1).childAt(1).prop('className')).toContain('terra-Alert-content');
  });
});

describe('2. Dismissible Alert that includes actions section', () => {
  const alertText = 'This is a test';
  const dismissibleRender = <Alert onDismiss={() => {}} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an alert component with a dismiss button', () => {
    const wrapper = shallow(dismissibleRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type alert when no props given including IconAlert icon and default alert title', () => {
    const wrapper = shallow(dismissibleRender);
    expect(wrapper.childAt(0).childAt(0).find(IconAlert)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Alert!');
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--alert', () => {
    const wrapper = shallow(dismissibleRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--alert');
  });

  it('dismissible alert should have two children with className terra-Alert-body and terra-Alert-actions', () => {
    const wrapper = shallow(dismissibleRender);
    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.childAt(0).prop('className')).toContain('terra-Alert-body');
    expect(wrapper.childAt(1).prop('className')).toContain('terra-Alert-actions');
  });

  it('dismissible alert body should have two children one for the icon section and one for the content section', () => {
    const wrapper = shallow(dismissibleRender);
    expect(wrapper.childAt(0).children()).toHaveLength(2);
    expect(wrapper.childAt(0).childAt(0).prop('className')).toContain('terra-Alert-icon');
    expect(wrapper.childAt(0).childAt(1).prop('className')).toContain('terra-Alert-section');
  });

  it('dismissible alert content section should have two children one for the title and one for the content', () => {
    const wrapper = shallow(dismissibleRender);
    expect(wrapper.childAt(0).childAt(1).children()).toHaveLength(2);
    expect(wrapper.childAt(0).childAt(1).childAt(0).prop('className')).toContain('terra-Alert-title');
    expect(wrapper.childAt(0).childAt(1).childAt(0).type()).toEqual('strong');
    expect(wrapper.childAt(0).childAt(1).childAt(1).prop('className')).toContain('terra-Alert-content');
  });

  it('dismissible alert actions should have one child for the dismiss button', () => {
    const wrapper = shallow(dismissibleRender);
    expect(wrapper.childAt(1).children()).toHaveLength(1);
    expect(wrapper.childAt(1).find(Button)).toHaveLength(1);
  });
});

describe('3. Alert of type alert with text content', () => {
  const alertText = 'This is an alert.';
  const basicAlertRender = <Alert type={AlertTypes.ALERT} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type alert', () => {
    const wrapper = shallow(basicAlertRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type alert including IconAlert icon and default alert title', () => {
    const wrapper = shallow(basicAlertRender);
    expect(wrapper.childAt(0).childAt(0).find(IconAlert)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Alert!');
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--alert', () => {
    const wrapper = shallow(basicAlertRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--alert');
  });
});

describe('4. Alert of type error with text content', () => {
  const alertText = 'This is an error.';
  const basicErrorRender = <Alert type={AlertTypes.ERROR} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type error', () => {
    const wrapper = shallow(basicErrorRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type error including IconError icon and default error title', () => {
    const wrapper = shallow(basicErrorRender);
    expect(wrapper.childAt(0).childAt(0).find(IconError)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Error!');
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--error', () => {
    const wrapper = shallow(basicErrorRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--error');
  });
});

describe('5. Alert of type warning with text content', () => {
  const alertText = 'This is an warning.';
  const basicWarningRender = <Alert type={AlertTypes.WARNING} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type warning', () => {
    const wrapper = shallow(basicWarningRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type warning including IconWarning icon and default warning title', () => {
    const wrapper = shallow(basicWarningRender);
    expect(wrapper.childAt(0).childAt(0).find(IconWarning)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Warning!');
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--warning', () => {
    const wrapper = shallow(basicWarningRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--warning');
  });
});

describe('6. Alert of type required with text content', () => {
  const alertText = 'This is a required warning.';
  const basicRequiredRender = <Alert type={AlertTypes.REQUIRED} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type required', () => {
    const wrapper = shallow(basicRequiredRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type required including IconRequired icon and default required title', () => {
    const wrapper = shallow(basicRequiredRender);
    expect(wrapper.childAt(0).childAt(0).find(IconRequired)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Required!');
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--required', () => {
    const wrapper = shallow(basicRequiredRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--required');
  });
});

describe('7. Alert of type advisory with text content', () => {
  const alertText = 'This is an advisory alert.';
  const basicAdvisoryRender = <Alert type={AlertTypes.ADVISORY} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type advisory', () => {
    const wrapper = shallow(basicAdvisoryRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type advisory including IconDiamond icon and default advisory title', () => {
    const wrapper = shallow(basicAdvisoryRender);
    expect(wrapper.childAt(0).childAt(0).find(IconDiamond)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Advisory!');
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--advisory', () => {
    const wrapper = shallow(basicAdvisoryRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--advisory');
  });
});

describe('8. Alert of type information with text content', () => {
  const alertText = 'This is an information alert.';
  const basicInformationRender = <Alert type={AlertTypes.INFORMATION} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type information', () => {
    const wrapper = shallow(basicInformationRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type information including IconInformation icon and default information title', () => {
    const wrapper = shallow(basicInformationRender);
    expect(wrapper.childAt(0).childAt(0).find(IconInformation)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Information!');
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--information', () => {
    const wrapper = shallow(basicInformationRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--information');
  });
});

describe('9. Alert of type confirmation with text content', () => {
  const alertText = 'This is a confirmation alert.';
  const basicConfirmationRender = <Alert type={AlertTypes.CONFIRMATION} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type confirmation', () => {
    const wrapper = shallow(basicConfirmationRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type confirmation including IconSuccess icon and default confirmation title', () => {
    const wrapper = shallow(basicConfirmationRender);
    expect(wrapper.childAt(0).childAt(0).find(IconSuccess)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Confirmed!');
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--confirmation', () => {
    const wrapper = shallow(basicConfirmationRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--confirmation');
  });
});

describe('10. Alert of type custom with custom title and text content', () => {
  const alertText = 'This is a custom alert.';
  const alertCustomTitle = 'Help!';
  const basicCustomRender = <Alert type={AlertTypes.CUSTOM} title={alertCustomTitle} customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} customStatusColor="orange" >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type custom', () => {
    const wrapper = shallow(basicCustomRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type custom including configured IconHelp icon, custom status color and custom title', () => {
    const wrapper = shallow(basicCustomRender);
    expect(wrapper.childAt(0).childAt(0).find(IconHelp)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual(alertCustomTitle);
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
    expect(wrapper.prop('style')).toEqual({ color: 'orange' });
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--custom', () => {
    const wrapper = shallow(basicCustomRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--custom');
    expect(wrapper.childAt(0).childAt(1).prop('className')).toContain('terra-Alert-section--custom');
  });
});

describe('11. Alert of type information with custom title and HTML content', () => {
  const alertText = 'Four score and seven years ago . . .';
  const alertHTML = <span>{alertText}</span>;
  const alertCustomTitle = 'Gettysburg Address';
  const basicHTMLContentRender = <Alert type={AlertTypes.INFORMATION} title={alertCustomTitle} >{alertHTML}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type information with custom title and HTML content', () => {
    const wrapper = shallow(basicHTMLContentRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type information including configured custom title with HTML content', () => {
    const wrapper = shallow(basicHTMLContentRender);
    expect(wrapper.childAt(0).childAt(0).find(IconInformation)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual(alertCustomTitle);
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
    expect(wrapper.childAt(0).childAt(1).childAt(1).childAt(0)
            .type()).toEqual('span');
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--information', () => {
    const wrapper = shallow(basicHTMLContentRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--information');
  });
});

describe('12. Alert of type confirmation with an action button text content', () => {
  const alertText = 'This is a confirmation alert.';
  const actionButtonRender = <Alert type={AlertTypes.CONFIRMATION} alertAction={<Button text="Action" size="medium" variant="primary" onClick={() => {}} />} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type confirmation with an action button', () => {
    const wrapper = shallow(actionButtonRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type confirmation including IconSuccess icon, default confirmation title and an action button', () => {
    const wrapper = shallow(actionButtonRender);
    expect(wrapper.childAt(0).childAt(0).find(IconSuccess)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual('Confirmed!');
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
    expect(wrapper.childAt(1).find(Button)).toHaveLength(1);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--confirmation and actions section with class terra-Alert-actions', () => {
    const wrapper = shallow(actionButtonRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--confirmation');
    expect(wrapper.childAt(1).prop('className')).toContain('terra-Alert-actions');
  });
});

describe('13. Dismissable Alert of type custom with action button, custom title and text content', () => {
  const alertText = 'This is a custom alert.';
  const alertCustomTitle = 'Help!';
  const customActionDismissRender = <Alert type={AlertTypes.CUSTOM} onDismiss={() => {}} title={alertCustomTitle} customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} customStatusColor="orange" alertAction={<Button text="Action" size="medium" variant="primary" onClick={() => {}} />} >{alertText}</Alert>;

  // Snapshot Tests
  it('should render an Alert component of type custom with an action button', () => {
    const wrapper = shallow(customActionDismissRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type custom including configured IconHelp icon, custom status color, custom title and action button', () => {
    const wrapper = shallow(customActionDismissRender);
    expect(wrapper.childAt(0).childAt(0).find(IconHelp)).toHaveLength(1);
    expect(wrapper.childAt(0).childAt(1).childAt(0).text()).toEqual(alertCustomTitle);
    expect(wrapper.childAt(0).childAt(1).childAt(1).text()).toEqual(alertText);
    expect(wrapper.prop('style')).toEqual({ color: 'orange' });
    expect(wrapper.childAt(1).find(Button)).toHaveLength(2);
  });

  // Structure Tests
  it('should have the class terra-Alert and terra-Alert--custom and actions element should have classes terra-Alert-actions and terra-Alert-actions--custom', () => {
    const wrapper = shallow(customActionDismissRender);
    expect(wrapper.prop('className')).toContain('terra-Alert');
    expect(wrapper.prop('className')).toContain('terra-Alert--custom');
    expect(wrapper.childAt(0).childAt(1).prop('className')).toContain('terra-Alert-section--custom');
    expect(wrapper.childAt(1).prop('className')).toContain('terra-Alert-actions');
    expect(wrapper.childAt(1).prop('className')).toContain('terra-Alert-actions--custom');
  });
});
