import React from 'react';
import DropdownButtonBase from '../../src/_DropdownButtonBase';
import { Button } from '../../src/DropdownButton';

describe('Dropdown Button Base', () => {
  it('renders a default DropdownButtonBase', () => {
    const wrapper = shallow(
      <DropdownButtonBase
        buttons={
          <Button label="1st option" onClick={() => {}} />
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
        buttons={
          <Button label="1st option" onClick={() => {}} />
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
        buttons={
          <Button label="1st option" onClick={() => {}} />
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
        buttons={
          <Button label="1st option" onClick={() => {}} />
        }
        isOpen
        requestClose={() => {}}
      >
        <div>test contents</div>
      </DropdownButtonBase>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
