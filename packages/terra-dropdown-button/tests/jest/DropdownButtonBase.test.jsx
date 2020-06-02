import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import DropdownButtonBase from '../../src/_DropdownButtonBase';
import { Item } from '../../src/DropdownButton';

describe('Dropdown Button Base', () => {
  it('renders a default DropdownButtonBase', () => {
    const wrapper = shallow(
      <DropdownButtonBase
        items={
          <Item label="1st option" onSelect={() => {}} />
        }
        isOpen={false}
        requestClose={() => {}}
      >
        <div>test contents</div>
      </DropdownButtonBase>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a disabled DropdownButtonBase', () => {
    const wrapper = shallow(
      <DropdownButtonBase
        items={
          <Item label="1st option" onSelect={() => {}} />
        }
        isOpen={false}
        requestClose={() => {}}
        isDisabled={false}
      >
        <div>test contents</div>
      </DropdownButtonBase>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a block DropdownButtonBase', () => {
    const wrapper = shallow(
      <DropdownButtonBase
        items={
          <Item label="1st option" onSelect={() => {}} />
        }
        isOpen={false}
        requestClose={() => {}}
        isBlock
      >
        <div>test contents</div>
      </DropdownButtonBase>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an open DropdownButtonBase', () => {
    const wrapper = shallow(
      <DropdownButtonBase
        items={
          <Item label="1st option" onSelect={() => {}} />
        }
        isOpen
        requestClose={() => {}}
      >
        <div>test contents</div>
      </DropdownButtonBase>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <DropdownButtonBase
          items={
            <Item label="1st option" onSelect={() => {}} />
          }
          isOpen
          requestClose={() => {}}
        >
          <div>test contents</div>
        </DropdownButtonBase>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
