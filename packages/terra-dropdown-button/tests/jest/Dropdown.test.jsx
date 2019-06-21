import React from 'react';
import Dropdown from '../../src/_Dropdown';
import DropdownButton from '../../src/DropdownButton';

describe('Dropdown', () => {
  it('renders a default dropdown', () => {
    const wrapper = shallow(
      <Dropdown
        handleRequestClose={() => {}}
        targetRef={() => {}}
        isOpen={false}
      >
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an open dropdown', () => {
    const wrapper = shallow(
      <Dropdown
        handleRequestClose={() => {}}
        targetRef={() => {}}
        isOpen
      >
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown with a bounding ref', () => {
    const wrapper = shallow(
      <Dropdown
        handleRequestClose={() => {}}
        targetRef={() => {}}
        boundingRef={() => {}}
        isOpen={false}
      >
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown with a set width', () => {
    const wrapper = shallow(
      <Dropdown
        handleRequestClose={() => {}}
        targetRef={() => {}}
        isOpen={false}
        width="470px"
      >
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown with multiple children', () => {
    const wrapper = shallow(
      <Dropdown
        handleRequestClose={() => {}}
        targetRef={() => {}}
        isOpen={false}
      >
        <DropdownButton.Option label="1st Option" callback={() => {}} />
        <DropdownButton.Option label="2nd Option" callback={() => {}} />
        <DropdownButton.Option label="3rd Option" callback={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
