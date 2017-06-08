import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import Alert, { AlertTypes } from '../../src/Alert';

describe('Alert with no props', () => {
  const defaultRender = <Alert />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render an Alert of type alert when no props given including IconAlert icon and default alert title', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find(IconAlert)).toHaveLength(1);
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

describe('Alert of type alert with text content', () => {
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
    expect(wrapper.find(IconAlert)).toHaveLength(1);
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

describe('Alert of type error with text content', () => {
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
    expect(wrapper.find(IconError)).toHaveLength(1);
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
