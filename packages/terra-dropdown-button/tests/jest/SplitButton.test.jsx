import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { IntlProvider } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
import translationsFile from '../../translations/en.json';

import SplitButton, { Item } from '../../src/SplitButton';

let mockSpyUuid;
beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

describe('Dropdown Button', () => {
  it('should render a default split type', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a split type with multiple children', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a disabled split type', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" disabled onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a block split type', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" isBlock onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a compact split type', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" isCompact onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render an open split type', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    wrapper.setState({ isOpen: true });

    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should render a split type with custom attributes', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <SplitButton primaryOptionLabel="Primary Option" test-custom-attribute other-custom-attribute="purple" onSelect={() => {}}>
        <Item label="1st Option" onSelect={() => {}} />
      </SplitButton>,
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SplitButton primaryOptionLabel="Primary Option" onSelect={() => {}}>
          <Item label="1st Option" onSelect={() => {}} />
        </SplitButton>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should set the aria-label property from ./translations', () => {
    const buttonAttrs = {
      'aria-label': 'Button Aria Label',
    };
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en" messages={translationsFile}>
        <SplitButton label="1st Option" buttonAttrs={buttonAttrs} id="splitDropDown">
          <Item label="PDF" onSelect={() => {}} />
        </SplitButton>
      </IntlProvider>,
    ).dive().dive();
    wrapper.setState({ selectText: 'PDF' });
    const splitButtonAriaLabelValue = wrapper.find('#splitDropDown > button + button').prop('aria-label');
    expect(splitButtonAriaLabelValue).toEqual(`PDF, ${translationsFile['Terra.dropdownButton.selected']}, ${translationsFile['Terra.dropdownButton.moreOptions']}, ${buttonAttrs['aria-label']}`);
  });
});
