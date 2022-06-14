import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, renderWithIntl } from '@cerner/terra-enzyme-intl';
import ComboboxFrame from '../../src/combobox/Frame';
import SingleSelectFrame from '../../src/single/Frame';
import MultipleFrame from '../../src/multiple/Frame';
import SearchFrame from '../../src/search/Frame';
import TagFrame from '../../src/tag/Frame';

describe('Frame', () => {
  it('should render a default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant', () => {
    const wrapper = shallowWithIntl(<MultipleFrame />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant', () => {
    const wrapper = shallowWithIntl(<SearchFrame />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant', () => {
    const wrapper = shallowWithIntl(<TagFrame />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame placeholder="Placeholder" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame placeholder="Placeholder" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<MultipleFrame placeholder="Placeholder" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<SearchFrame placeholder="Placeholder" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant with a placeholder', () => {
    const wrapper = shallowWithIntl(<TagFrame placeholder="Placeholder" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame disabled />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled combobox variant', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame disabled />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled multiple variant', () => {
    const wrapper = shallowWithIntl(<MultipleFrame disabled />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled search variant', () => {
    const wrapper = shallowWithIntl(<SearchFrame disabled />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled tag variant', () => {
    const wrapper = shallowWithIntl(<TagFrame disabled />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame isInvalid />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid combobox variant', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame isInvalid />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid multiple variant', () => {
    const wrapper = shallowWithIntl(<MultipleFrame isInvalid />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid search variant', () => {
    const wrapper = shallowWithIntl(<SearchFrame isInvalid />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid tag variant', () => {
    const wrapper = shallowWithIntl(<TagFrame isInvalid />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an incomplete default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame isIncomplete />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an incomplete combobox variant', () => {
    const wrapper = shallowWithIntl(<ComboboxFrame isIncomplete />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an incomplete multiple variant', () => {
    const wrapper = shallowWithIntl(<MultipleFrame isIncomplete />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an incomplete search variant', () => {
    const wrapper = shallowWithIntl(<SearchFrame isIncomplete />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an incomplete tag variant', () => {
    const wrapper = shallowWithIntl(<TagFrame isIncomplete />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a custom dropdown', () => {
    const wrapper = shallowWithIntl(<TagFrame dropdown={() => <div>Custom</div>} />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call a custom onBlur', () => {
    const mockBlur = jest.fn();
    const wrapper = shallowWithIntl(<SingleSelectFrame onBlur={mockBlur} />).dive();

    wrapper.simulate('focus');
    wrapper.simulate('blur');

    expect(mockBlur).toBeCalled();
  });

  it('should call custom onClick for multi-select frame', () => {
    const mockClick = jest.fn();
    const wrapper = shallowWithIntl(<MultipleFrame onClick={mockClick} />).dive();

    wrapper.simulate('click');

    expect(mockClick).toBeCalled();
  });

  it('should call custom on click for tag frame', () => {
    const mockClick = jest.fn();
    const wrapper = shallowWithIntl(<TagFrame onClick={mockClick} />).dive();

    wrapper.simulate('click');

    expect(mockClick).toBeCalled();
  });

  it('should render a clear option', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame clearOptionDisplay="-Select-" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a required default variant', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame required />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a required Frame', () => {
    const wrapper = shallowWithIntl(<SingleSelectFrame required />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className for default variant', () => {
    const wrapper = renderWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SingleSelectFrame />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className for combobox variant', () => {
    const wrapper = renderWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <ComboboxFrame />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className for multiple variant', () => {
    const wrapper = renderWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <MultipleFrame />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className for search variant', () => {
    const wrapper = renderWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SearchFrame />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className for tag variant', () => {
    const wrapper = renderWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <TagFrame />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
