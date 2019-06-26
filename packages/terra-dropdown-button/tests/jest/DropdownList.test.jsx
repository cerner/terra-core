import React from 'react';
import DropdownList from '../../src/_DropdownList';
import { Button } from '../../src/DropdownButton';

describe('Dropdown List', () => {
  it('renders a default dropdown list', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list with a set width', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}} width="440px">
        <Button label="1st Option" onClick={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list with multiple children', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
        <Button label="2nd Option" onClick={() => {}} />
        <Button label="3rd Option" onClick={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list a non-default focused option', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
        <Button label="2nd Option" onClick={() => {}} />
        <Button label="3rd Option" onClick={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list an active option', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
        <Button label="2nd Option" onClick={() => {}} />
        <Button label="3rd Option" onClick={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ active: '3rd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list an active and focused option', () => {
    const wrapper = shallow(
      <DropdownList requestClose={() => {}}>
        <Button label="1st Option" onClick={() => {}} />
        <Button label="2nd Option" onClick={() => {}} />
        <Button label="3rd Option" onClick={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option', active: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });
});
