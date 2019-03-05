import React from 'react';
import Select from '../../src/Select';
import Option from '../../src/_Option';
import OptGroup from '../../src/_OptGroup';
import intlContexts from './intl-context-setup';

describe('Select', () => {
  it('should render a default variant', () => {
    const wrapper = shallow(<Select />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant', () => {
    const wrapper = shallow(<Select variant="tag" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant', () => {
    const wrapper = shallow(<Select variant="multiple" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant', () => {
    const wrapper = shallow(<Select variant="search" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant', () => {
    const wrapper = shallow(<Select variant="tag" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default variant with a placeholder', () => {
    const wrapper = shallow(<Select placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a combobox variant with a placeholder', () => {
    const wrapper = shallow(<Select variant="tag" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multiple variant with a placeholder', () => {
    const wrapper = shallow(<Select variant="multiple" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a search variant with a placeholder', () => {
    const wrapper = shallow(<Select variant="search" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a tag variant with a placeholder', () => {
    const wrapper = shallow(<Select variant="tag" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled default variant', () => {
    const wrapper = shallow(<Select disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled combobox variant', () => {
    const wrapper = shallow(<Select variant="tag" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled multiple variant', () => {
    const wrapper = shallow(<Select variant="multiple" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled search variant', () => {
    const wrapper = shallow(<Select variant="search" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled tag variant', () => {
    const wrapper = shallow(<Select variant="tag" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid default variant', () => {
    const wrapper = shallow(<Select isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid combobox variant', () => {
    const wrapper = shallow(<Select variant="tag" isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid multiple variant', () => {
    const wrapper = shallow(<Select variant="multiple" isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid search variant', () => {
    const wrapper = shallow(<Select variant="search" isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an invalid tag variant', () => {
    const wrapper = shallow(<Select variant="tag" isInvalid />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });


  it('should render a select with an option', () => {
    const wrapper = render(
      <Select>
        <Option value="value" display="display" />
      </Select>,
      intlContexts.shallowContext,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a select with multiple options', () => {
    const wrapper = render(
      <Select>
        <Option value="value-1" display="display-1" />
        <Option value="value-2" display="display-2" />
      </Select>,
      intlContexts.shallowContext,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a select with an optgroup and an option', () => {
    const wrapper = render(
      <Select>
        <OptGroup label="OptGroup label">
          <Option value="value" display="display" />
        </OptGroup>
      </Select>,
      intlContexts.shallowContext,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a select with an optgroup and multiple options', () => {
    const wrapper = render(
      <Select>
        <OptGroup label="OptGroup label">
          <Option value="value-1" display="display-1" />
          <Option value="value-2" display="display-2" />
        </OptGroup>
      </Select>,
      intlContexts.shallowContext,
    );
    expect(wrapper).toMatchSnapshot();
  });


  it('should call onBlur', () => {
    const mockBlur = jest.fn();
    const wrapper = shallow(<Select onBlur={mockBlur} />, intlContexts.shallowContext);

    wrapper.simulate('focus');
    wrapper.simulate('blur');

    expect(mockBlur).toBeCalled();
  });

  it('should call onFocus', () => {
    const mockFocus = jest.fn();
    const wrapper = shallow(<Select onFocus={mockFocus} />, intlContexts.shallowContext);

    wrapper.simulate('focus');

    expect(mockFocus).toBeCalled();
  });

  it('should call onClick', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Select onClick={mockClick} />, intlContexts.shallowContext);

    wrapper.simulate('click');

    expect(mockClick).toBeCalled();
  });
});
