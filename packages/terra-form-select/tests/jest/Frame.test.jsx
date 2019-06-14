/* global jest */

import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Frame from '../../src/_Frame';

describe('Frame', () => {
  it('should render a default variant', () => {
    const wrapper = shallowWithIntl(<Frame />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="multiple" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="search" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Frame placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Frame variant="multiple" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Frame variant="search" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled default variant', () => {
    const wrapper = shallowWithIntl(<Frame disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled combobox variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled multiple variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="multiple" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled search variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="search" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled tag variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid default variant', () => {
    const wrapper = shallowWithIntl(<Frame isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid combobox variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid multiple variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="multiple" isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid search variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="search" isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid tag variant', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a custom dropdown', () => {
    const wrapper = shallowWithIntl(<Frame variant="tag" dropdown={() => <div>Custom</div>} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call a custom onBlur', () => {
    const mockBlur = jest.fn();
    const wrapper = shallowWithIntl(<Frame onBlur={mockBlur} />);

    wrapper.simulate('focus');
    wrapper.simulate('blur');

    expect(mockBlur).toBeCalled();
  });

  it('should render a clear option', () => {
    const wrapper = shallowWithIntl(<Frame clearOptionDisplay="-Select-" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a required default variant', () => {
    const wrapper = shallowWithIntl(<Frame required />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a required Frame', () => {
    const wrapper = shallowWithIntl(<Frame required />);
    expect(wrapper).toMatchSnapshot();
  });
});
