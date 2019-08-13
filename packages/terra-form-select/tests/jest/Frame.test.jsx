/* global jest */

import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ComboboxFrame from '../../src/combobox/Frame';
import SingleSelectFrame from '../../src/single/Frame';
import MultipleFrame from '../../src/multiple/Frame';
import SearchFrame from '../../src/search/Frame';
import TagFrame from '../../src/tag/Frame';

describe('Frame', () => {
  it('should render a default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant', () => {
    const wrapper = shallowWithIntl(<MultipleFrame />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant', () => {
    const wrapper = shallowWithIntl(<SearchFrame />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant', () => {
    const wrapper = shallowWithIntl(<TagFrame />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<MultipleFrame placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<SearchFrame placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<TagFrame placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled combobox variant', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled multiple variant', () => {
    const wrapper = shallowWithIntl(<MultipleFrame disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled search variant', () => {
    const wrapper = shallowWithIntl(<SearchFrame disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled tag variant', () => {
    const wrapper = shallowWithIntl(<TagFrame disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid combobox variant', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid multiple variant', () => {
    const wrapper = shallowWithIntl(<MultipleFrame isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid search variant', () => {
    const wrapper = shallowWithIntl(<SearchFrame isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid tag variant', () => {
    const wrapper = shallowWithIntl(<TagFrame isInvalid />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a custom dropdown', () => {
    const wrapper = shallowWithIntl(<TagFrame dropdown={() => <div>Custom</div>} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call a custom onBlur', () => {
    const mockBlur = jest.fn();
    const wrapper = shallowWithIntl(<SingleSelectFrame onBlur={mockBlur} />);

    wrapper.simulate('focus');
    wrapper.simulate('blur');

    expect(mockBlur).toBeCalled();
  });

  it('should render a clear option', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame clearOptionDisplay="-Select-" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a required default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame required />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a required Frame', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame required />);
    expect(wrapper).toMatchSnapshot();
  });
});
