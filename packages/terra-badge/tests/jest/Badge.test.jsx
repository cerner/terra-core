import React from 'react';
import Badge from '../../src/Badge';

const iconValue = <img alt="Test icon" />;
// Snapshot Tests
it('should render a default component with nothing', () => {
  const wrapper = shallow(<Badge />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with text and large size', () => {
  const wrapper = shallow(<Badge size="large" text="Large" />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with text and secondary intent', () => {
  const wrapper = shallow(<Badge text="Secondary" intent="secondary" />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with icon and medium size', () => {
  const wrapper = shallow(<Badge size="medium" icon={iconValue} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component with icon and warning intent', () => {
  const wrapper = shallow(<Badge icon={iconValue} intent="warning" />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component in the order, icon and text with medium size', () => {
  const wrapper = shallow(<Badge text="Test value" size="medium" icon={iconValue} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render a badge component in the order, text and icon with info intent', () => {
  const wrapper = shallow(<Badge text="Test value" icon={iconValue} intent="info" isReversed />);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
// With only text prop
describe('Badge with only text', () => {
  // With default props
  it('should have the class terra-Badge--default and terra-Badge--small', () => {
    const wrapper = shallow(<Badge text="Test value" />);
    expect(wrapper.prop('className')).toContain('badge small default');
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  // Only intent props
  it('and only intent props, should have the class terra-Badge--primary and terra-Badge--small', () => {
    const wrapper = shallow(<Badge text="Test value" intent="primary" />);
    expect(wrapper.prop('className')).toContain('badge small primary');
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  // Only size props
  it('and only size props, should have the class terra-Badge--default and terra-Badge--huge', () => {
    const wrapper = shallow(<Badge text="Test value" size="huge" />);
    expect(wrapper.prop('className')).toContain('badge huge default');
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });
});

describe('Badge with only icon', () => {
  // With default props
  it('should have the class terra-Badge--default and terra-Badge--small', () => {
    const wrapper = shallow(<Badge icon={iconValue} />);
    expect(wrapper.prop('className')).toContain('badge small default');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
  });

  // Only intent props
  it('and only intent props, should have the class terra-Badge--primary and terra-Badge--small', () => {
    const wrapper = shallow(<Badge icon={iconValue} intent="primary" />);
    expect(wrapper.prop('className')).toContain('badge small primary');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
  });

  // Only size props
  it('and only size props, should have the class terra-Badge--default and terra-Badge--huge', () => {
    const wrapper = shallow(<Badge icon={iconValue} size="huge" />);
    expect(wrapper.prop('className')).toContain('badge huge default');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
  });
});

describe('Badge with icon and text', () => {
  // With default props
  it('should have the class terra-Badge--default and terra-Badge--small with icon followed by text', () => {
    const wrapper = shallow(<Badge icon={iconValue} text="Test value" />);
    expect(wrapper.prop('className')).toContain('badge small default');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });
  // Reversed order for icon and text
  it('should have the class terra-Badge--default and terra-Badge--small with text followed by icon', () => {
    const wrapper = shallow(<Badge icon={iconValue} text="Test value" isReversed />);
    expect(wrapper.prop('className')).toContain('badge small default');
    expect(wrapper.childAt(1).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  // With size prop
  it('should have the class terra-Badge--default and terra-Badge--tiny with icon followed by text', () => {
    const wrapper = shallow(<Badge icon={iconValue} text="Test value" size="tiny" />);
    expect(wrapper.prop('className')).toContain('badge tiny default');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });

  // With intent prop
  it('should have the class terra-Badge--primary and terra-Badge--small with icon followed by text', () => {
    const wrapper = shallow(<Badge icon={iconValue} text="Test value" intent="primary" />);
    expect(wrapper.prop('className')).toContain('badge small primary');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });
});


describe('Badge with additional props', () => {
  // With custom props
  it('should have the class terra-Badge--primary and terra-Badge--small with icon followed by text', () => {
    const wrapper = shallow(<Badge icon={iconValue} text="Test value" intent="primary" lang="English" className="negative" />);
    expect(wrapper.prop('className')).toContain('badge small primary negative');
    expect(wrapper.prop('lang')).toEqual('English');
    expect(wrapper.childAt(0).is('img')).toEqual(true);
    expect(wrapper.find('.text').text()).toEqual('Test value');
  });
});
