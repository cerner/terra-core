import React from 'react';
import LoadingOverlay from '../../src/LoadingOverlay';

describe('LoadingOverlay', () => {
  const defaultRender = <LoadingOverlay />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terra-Overlay').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terra-LoadingOverlay', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terra-LoadingOverlay');
  });
});
