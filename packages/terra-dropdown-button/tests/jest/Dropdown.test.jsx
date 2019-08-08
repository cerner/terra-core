import React from 'react';
import Dropdown from '../../src/_Dropdown';
import { Item } from '../../src/DropdownButton';

describe('Dropdown', () => {
  it('renders a default dropdown', () => {
    const wrapper = shallow(
      <Dropdown
        requestClose={() => {}}
        targetRef={() => {}}
        isOpen={false}
      >
        <Item label="1st Option" onSelect={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an open dropdown', () => {
    const wrapper = shallow(
      <Dropdown
        requestClose={() => {}}
        targetRef={() => {}}
        isOpen
      >
        <Item label="1st Option" onSelect={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown with a bounding ref', () => {
    const wrapper = shallow(
      <Dropdown
        requestClose={() => {}}
        targetRef={() => {}}
        boundingRef={() => {}}
        isOpen={false}
      >
        <Item label="1st Option" onSelect={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown with a set width', () => {
    const wrapper = shallow(
      <Dropdown
        requestClose={() => {}}
        targetRef={() => {}}
        isOpen={false}
        width="470px"
      >
        <Item label="1st Option" onSelect={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown with multiple children', () => {
    const wrapper = shallow(
      <Dropdown
        requestClose={() => {}}
        targetRef={() => {}}
        isOpen={false}
      >
        <Item label="1st Option" onSelect={() => {}} />
        <Item label="2nd Option" onSelect={() => {}} />
        <Item label="3rd Option" onSelect={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
