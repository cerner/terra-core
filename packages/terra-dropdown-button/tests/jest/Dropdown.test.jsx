import React from 'react';
import Dropdown from '../../src/_Dropdown';
import { Button } from '../../src/DropdownButton';

describe('Dropdown', () => {
  it('renders a default dropdown', () => {
    const wrapper = shallow(
      <Dropdown
        requestClose={() => {}}
        targetRef={() => {}}
        isOpen={false}
      >
        <Button label="1st Option" onClick={() => {}} />
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
        <Button label="1st Option" onClick={() => {}} />
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
        <Button label="1st Option" onClick={() => {}} />
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
        <Button label="1st Option" onClick={() => {}} />
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
        <Button label="1st Option" onClick={() => {}} />
        <Button label="2nd Option" onClick={() => {}} />
        <Button label="3rd Option" onClick={() => {}} />
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
