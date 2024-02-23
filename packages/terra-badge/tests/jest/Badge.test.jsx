import React from 'react';
import Badge from '../../src/Badge';

const iconValue = <img alt="Test icon" />;
// Snapshot Tests
it('should render a default component with nothing', () => {
  const wrapper = enzymeIntl.shallowWithIntl(<Badge />).dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with text and large size', () => {
  const wrapper = enzymeIntl.shallowWithIntl(<Badge size="large" text="Large" />).dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with text and secondary intent', () => {
  const wrapper = enzymeIntl.shallowWithIntl(<Badge text="Secondary" intent="secondary" />).dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with icon and medium size', () => {
  const wrapper = enzymeIntl.shallowWithIntl(<Badge size="medium" icon={iconValue} />).dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with icon and warning intent', () => {
  const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} intent="warning" />).dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component in the order, icon and text with medium size', () => {
  const wrapper = enzymeIntl.shallowWithIntl(<Badge text="Test value" size="medium" icon={iconValue} />).dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component in the order, text and icon with info intent', () => {
  const wrapper = enzymeIntl.shallowWithIntl(<Badge text="Test value" icon={iconValue} intent="info" isReversed />).dive();
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with visually hidden text', () => {
  const wrapper = enzymeIntl.shallowWithIntl(<Badge text="3" visuallyHiddenText="Risk Score 3" />).dive();
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
// With only text prop
describe('Badge with only text', () => {
  // With default props
  it('should have the class terra-Badge--default and terra-Badge--small', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge text="Test value" />).dive();
    expect(wrapper.prop('className')).toContain('badge small default');
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  // Only intent props
  it('and only intent props, should have the class terra-Badge--primary and terra-Badge--small', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge text="Test value" intent="primary" />).dive();
    expect(wrapper.prop('className')).toContain('badge small primary');
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  // Only size props
  it('and only size props, should have the class terra-Badge--default and terra-Badge--huge', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge text="Test value" size="huge" />).dive();
    expect(wrapper.prop('className')).toContain('badge huge default');
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });
});

describe('Badge with only icon', () => {
  // With default props
  it('should have the class terra-Badge--default, terra-Badge--small and has-icon', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} />).dive();
    expect(wrapper.prop('className')).toContain('badge has-icon small default');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
  });

  // Only intent props
  it('and only intent props, should have the class terra-Badge--primary, terra-Badge--small and has-icon', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} intent="primary" />).dive();
    expect(wrapper.prop('className')).toContain('badge has-icon small primary');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
  });

  // Only size props
  it('and only size props, should have the class terra-Badge--default, terra-Badge--huge and has-icon', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} size="huge" />).dive();
    expect(wrapper.prop('className')).toContain('badge has-icon huge default');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
  });
});

describe('Badge with icon and text', () => {
  // With default props
  it('should have the class terra-Badge--default, terra-Badge--small, has-icon with icon followed by text', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} text="Test value" />).dive();
    expect(wrapper.prop('className')).toContain('badge has-icon small default');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });
  // Reversed order for icon and text
  it('should have the class terra-Badge--default, terra-Badge--small, has-icon and is-reversed with text followed by icon', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} text="Test value" isReversed />).dive();
    expect(wrapper.prop('className')).toContain('badge has-icon is-reversed small default');
    expect(wrapper.childAt(1).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  // With size prop
  it('should have the class terra-Badge--default, terra-Badge--tiny and has-icon with icon followed by text', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} text="Test value" size="tiny" />).dive();
    expect(wrapper.prop('className')).toContain('badge has-icon tiny default');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  // With intent prop
  it('should have the class terra-Badge--primary, terra-Badge--small and has-icon with icon followed by text', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} text="Test value" intent="primary" />).dive();
    expect(wrapper.prop('className')).toContain('badge has-icon small primary');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });
});

describe('Badge with additional props', () => {
  // With custom props
  it('should have the class terra-Badge--primary, terra-Badge--small and has-icon with icon followed by text', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Badge icon={iconValue} text="Test value" intent="primary" lang="English" className="negative" />).dive();
    expect(wrapper.prop('className')).toContain('badge has-icon small primary negative');
    expect(wrapper.prop('lang')).toEqual('English');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const wrapper = enzymeIntl.mountWithIntl(<Badge text="Test value" />);
    expect(wrapper).toMatchSnapshot();
  });
});
