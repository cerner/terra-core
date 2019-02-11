/* global jest */

import React from 'react';
import Frame from '../../src/_Frame';
import intlContexts from './intl-context-setup';

describe('Frame', () => {
  it('should render a default variant', () => {
    const wrapper = shallow(<Frame />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant', () => {
    const wrapper = shallow(<Frame variant="tag" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant', () => {
    const wrapper = shallow(<Frame variant="multiple" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant', () => {
    const wrapper = shallow(<Frame variant="search" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant', () => {
    const wrapper = shallow(<Frame variant="tag" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default variant with a placeholder', () => {
    const wrapper = shallow(<Frame placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant with a placeholder', () => {
    const wrapper = shallow(<Frame variant="tag" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant with a placeholder', () => {
    const wrapper = shallow(<Frame variant="multiple" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant with a placeholder', () => {
    const wrapper = shallow(<Frame variant="search" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant with a placeholder', () => {
    const wrapper = shallow(<Frame variant="tag" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled default variant', () => {
    const wrapper = shallow(<Frame disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled combobox variant', () => {
    const wrapper = shallow(<Frame variant="tag" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled multiple variant', () => {
    const wrapper = shallow(<Frame variant="multiple" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled search variant', () => {
    const wrapper = shallow(<Frame variant="search" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled tag variant', () => {
    const wrapper = shallow(<Frame variant="tag" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid default variant', () => {
    const wrapper = shallow(<Frame isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid combobox variant', () => {
    const wrapper = shallow(<Frame variant="tag" isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid multiple variant', () => {
    const wrapper = shallow(<Frame variant="multiple" isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid search variant', () => {
    const wrapper = shallow(<Frame variant="search" isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid tag variant', () => {
    const wrapper = shallow(<Frame variant="tag" isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a custom dropdown', () => {
    const wrapper = shallow(<Frame variant="tag" dropdown={() => <div>Custom</div>} />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call a custom onBlur', () => {
    const mockBlur = jest.fn();
    const wrapper = shallow(<Frame onBlur={mockBlur} />, intlContexts.shallowContext);

    wrapper.simulate('focus');
    wrapper.simulate('blur');

    expect(mockBlur).toBeCalled();
  });

  it('should update the aria-live text when the search has no results', () => {
    const wrapper = mount(<Frame variant="tag" dropdown={() => <div>Custom</div>} />, intlContexts.shallowContext);

    wrapper.setState({ searchValue: 'qwqerewqrwqer' });
    jest.useFakeTimers();
    jest.runOnlyPendingTimers();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a clear option', () => {
    const wrapper = shallow(<Frame clearOptionDisplay="-Select-" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
