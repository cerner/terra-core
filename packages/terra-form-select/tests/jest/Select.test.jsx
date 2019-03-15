import React from 'react';
import { shallowWithIntl } from 'terra-enzyme-intl';
import Select from '../../src/Select';

describe('Select', () => {
  it('should render a default variant', () => {
    const wrapper = shallowWithIntl(<Select />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant', () => {
    const wrapper = shallowWithIntl(<Select variant="tag" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant', () => {
    const wrapper = shallowWithIntl(<Select variant="multiple" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant', () => {
    const wrapper = shallowWithIntl(<Select variant="search" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant', () => {
    const wrapper = shallowWithIntl(<Select variant="tag" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Select placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Select variant="tag" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Select variant="multiple" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Select variant="search" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Select variant="tag" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled default variant', () => {
    const wrapper = shallowWithIntl(<Select disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled combobox variant', () => {
    const wrapper = shallowWithIntl(<Select variant="tag" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled multiple variant', () => {
    const wrapper = shallowWithIntl(<Select variant="multiple" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled search variant', () => {
    const wrapper = shallowWithIntl(<Select variant="search" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled tag variant', () => {
    const wrapper = shallowWithIntl(<Select variant="tag" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid default variant', () => {
    const wrapper = shallowWithIntl(<Select isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid combobox variant', () => {
    const wrapper = shallowWithIntl(<Select variant="tag" isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid multiple variant', () => {
    const wrapper = shallowWithIntl(<Select variant="multiple" isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid search variant', () => {
    const wrapper = shallowWithIntl(<Select variant="search" isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid tag variant', () => {
    const wrapper = shallowWithIntl(<Select variant="tag" isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onBlur', () => {
    const mockBlur = jest.fn();
    const wrapper = shallowWithIntl(<Select onBlur={mockBlur} />);

    wrapper.simulate('focus');
    wrapper.simulate('blur');

    expect(mockBlur).toBeCalled();
  });

  it('should call onFocus', () => {
    const mockFocus = jest.fn();
    const wrapper = shallowWithIntl(<Select onFocus={mockFocus} />);

    wrapper.simulate('focus');

    expect(mockFocus).toBeCalled();
  });

  it('should call onClick', () => {
    const mockClick = jest.fn();
    const wrapper = shallowWithIntl(<Select onClick={mockClick} />);

    wrapper.simulate('click');

    expect(mockClick).toBeCalled();
  });

  it('should render a clear option', () => {
    const wrapper = shallowWithIntl(<Select allowClear />);
    expect(wrapper).toMatchSnapshot();
  });
});
