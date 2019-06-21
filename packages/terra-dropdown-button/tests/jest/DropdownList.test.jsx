import React from 'react';
import DropdownList from '../../src/_DropdownList';
import DropdownButton from '../../src/DropdownButton';

describe('Dropdown List', () => {
  it('renders a default dropdown list', () => {
    const wrapper = shallow(
      <DropdownList handleRequestClose={() => {}}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list with a set width', () => {
    const wrapper = shallow(
      <DropdownList handleRequestClose={() => {}} width="440px">
        <DropdownButton.Option label="1st Option" callback={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list with multiple children', () => {
    const wrapper = shallow(
      <DropdownList handleRequestClose={() => {}}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
        <DropdownButton.Option label="2nd Option" callback={() => {}} />
        <DropdownButton.Option label="3rd Option" callback={() => {}} />
      </DropdownList>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list a non-default focused option', () => {
    const wrapper = shallow(
      <DropdownList handleRequestClose={() => {}}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
        <DropdownButton.Option label="2nd Option" callback={() => {}} />
        <DropdownButton.Option label="3rd Option" callback={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list an active option', () => {
    const wrapper = shallow(
      <DropdownList handleRequestClose={() => {}}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
        <DropdownButton.Option label="2nd Option" callback={() => {}} />
        <DropdownButton.Option label="3rd Option" callback={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ active: '3rd Option' });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a dropdown list an active and focused option', () => {
    const wrapper = shallow(
      <DropdownList handleRequestClose={() => {}}>
        <DropdownButton.Option label="1st Option" callback={() => {}} />
        <DropdownButton.Option label="2nd Option" callback={() => {}} />
        <DropdownButton.Option label="3rd Option" callback={() => {}} />
      </DropdownList>,
    );
    wrapper.setState({ focused: '2nd Option', active: '2nd Option' });

    expect(wrapper).toMatchSnapshot();
  });
});
