import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { IntlProvider } from 'react-intl';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import translationsFile from '../../translations/en.json';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import DropdownButton, { Item, Variants } from '../../src/DropdownButton';

describe('Dropdown Button', () => {
  it('should render a default dropdown type', () => {
    const wrapper = shallowWithIntl(
      <DropdownButton label="Primary Option">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with multiple children', () => {
    const wrapper = shallowWithIntl(
      <DropdownButton label="Primary Option" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an emphasis dropdown type', () => {
    const wrapper = shallowWithIntl(
      <DropdownButton label="Primary Option" variant={Variants.EMPHASIS}>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled dropdown type', () => {
    const wrapper = shallowWithIntl(
      <DropdownButton label="Primary Option" isDisabled>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a block dropdown type', () => {
    const wrapper = shallowWithIntl(
      <DropdownButton label="Primary Option" isBlock>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a compact dropdown type', () => {
    const wrapper = shallowWithIntl(
      <DropdownButton label="Primary Option" isCompact>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an open dropdown', () => {
    const wrapper = shallowWithIntl(
      <DropdownButton label="Primary Option">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    wrapper.setState({ isOpen: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a split type with custom attributes', () => {
    const wrapper = shallowWithIntl(
      <DropdownButton label="Primary Option" test-custom-attribute other-custom-attribute="purple">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownButton>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <DropdownButton label="Primary Option">
          <Item label="1st Option" onSelect={() => {}} />
        </DropdownButton>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the aria-label property from ./translations', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en" messages={translationsFile}>
        <DropdownButton label="Primary Option" id="dropDown" />
      </IntlProvider>,
    ).dive().dive();
    wrapper.setState({ selectText: 'PDF' });
    const dropdownButtonAriaLabelValue = wrapper.find('#dropDown button').prop('aria-label');
    expect(dropdownButtonAriaLabelValue).toEqual(`PDF, ${translationsFile['Terra.dropdownButton.selected']}`);
  });
});
