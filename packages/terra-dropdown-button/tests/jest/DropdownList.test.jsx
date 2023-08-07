import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { IntlProvider } from 'react-intl';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import translationsFile from '../../translations/en.json';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import DropdownList from '../../src/_DropdownList';
import { Item } from '../../src/DropdownButton';
import Util from '../../src/_DropdownListUtil';

const listRefMock = {
  childNodes: [
    { focus: jest.fn() },
    { focus: jest.fn() },
    { focus: jest.fn() },
  ],
};

const eventMock = {
  key: 'ArrowDown',
  keyCode: 40,
  target: { textContent: 0 },
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('Dropdown List', () => {
  it('renders a default dropdown list', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownList>,
    ).dive();

    expect(wrapper).toMatchSnapshot();
    // ensures both data attributes are added when list contains single item
    const item = wrapper.find('Item');
    expect(item.props()).toHaveProperty('data-terra-dropdown-list-item');
  });

  it('renders a dropdown list with a set width', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}} width="440px">
        <Item label="1st Option" onSelect={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list with multiple children', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list a non-default focused option', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list an active option', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ active: '3rd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list an active and focused option', () => {
    const wrapper = shallowWithIntl(
      <DropdownList requestClose={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option', active: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <DropdownList requestClose={() => {}}>
          <Item label="1st Option" onSelect={() => {}} />
          <Item label="2nd Option" onSelect={() => {}} />
          <Item label="3rd Option" onSelect={() => {}} />
        </DropdownList>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the aria-label property to empty on keydown on Mac', () => {
    //  Sets the mock return value for isMac
    jest.spyOn(Util, 'isMac').mockReturnValue(true);

    const wrapper = shallowWithIntl(
      <IntlProvider locale="en" messages={translationsFile}>
        <DropdownList id="dropdownList" requestClose={() => { }}>
          <Item id="firstItem" label="1st Option" onSelect={() => { }} />
          <Item label="2nd Option" onSelect={() => { }} />
          <Item label="3rd Option" onSelect={() => { }} />
        </DropdownList>
      </IntlProvider>,
    ).dive().dive();

    wrapper.instance().listRef = listRefMock;
    const firstListItem = wrapper.find('#firstItem');
    const firstListItemAriaLabelValue = firstListItem.props()['aria-label'];
    const expectedAriaLabelInitialValue = `${translationsFile['Terra.dropdownButton.expanded']}, 1st Option,(1 of 3)`;
    // Simulate keydown event
    wrapper.instance().handleKeyDown(eventMock);
    const updatedFirstListItemAriaLabelValue = wrapper.find('#firstItem').props()['aria-label'];
    const expectedAriaLabelValue = '1st Option,(1 of 3)';
    expect(firstListItemAriaLabelValue).toEqual(expectedAriaLabelInitialValue);
    expect(updatedFirstListItemAriaLabelValue).toEqual(expectedAriaLabelValue);
  });

  it('should set the aria-label property to empty on keydown on non-mac', () => {
    //  Sets the mock return value for isMac
    jest.spyOn(Util, 'isMac').mockReturnValue(false);

    const wrapper = shallowWithIntl(
      <IntlProvider locale="en" messages={translationsFile}>
        <DropdownList id="dropdownList" requestClose={() => { }}>
          <Item id="firstItem" label="1st Option" onSelect={() => { }} />
          <Item label="2nd Option" onSelect={() => { }} />
          <Item label="3rd Option" onSelect={() => { }} />
        </DropdownList>
      </IntlProvider>,
    ).dive().dive();

    wrapper.instance().listRef = listRefMock;
    const firstListItem = wrapper.find('#firstItem');
    const firstListItemAriaLabelValue = firstListItem.props()['aria-label'];
    const expectedAriaLabelInitialValueEDGE = `${translationsFile['Terra.dropdownButton.expanded']}, 1st Option`;
    // Simulate keydown event
    wrapper.instance().handleKeyDown(eventMock);
    const updatedFirstListItemAriaLabelValue = wrapper.find('#firstItem').props()['aria-label'];
    const expectedAriaLabelValueEDGE = '1st Option';
    expect(firstListItemAriaLabelValue).toEqual(expectedAriaLabelInitialValueEDGE);
    expect(updatedFirstListItemAriaLabelValue).toEqual(expectedAriaLabelValueEDGE);
  });
});
