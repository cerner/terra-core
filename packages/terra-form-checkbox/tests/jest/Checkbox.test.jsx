import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { v4 as uuidv4 } from 'uuid';
import Checkbox from '../../src';

let mockSpyUuid;
beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

window.matchMedia = () => ({ matches: true });

it('should render a checkbox', () => {
  const checkBox = (<Checkbox labelText="Checkbox" />);
  const wrapper = enzyme.shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a checkbox using id prop', () => {
  const checkBox = (<Checkbox id="testId" labelText="Checkbox" />);
  const wrapper = enzyme.shallow(checkBox);

  const label = wrapper.find('.label');
  const input = wrapper.find('.native-input');

  expect(label.props().htmlFor).toBe('testId');
  expect(input.props().id).toBe('testId');
});

it('should render a checkbox without id prop', () => {
  const checkBox = (<Checkbox labelText="Checkbox" />);
  const wrapper = enzyme.shallow(checkBox);

  const label = wrapper.find('.label');
  const input = wrapper.find('.native-input');

  expect(label.props().htmlFor).toBe('00000000-0000-0000-0000-000000000000');
  expect(input.props().id).toBe('00000000-0000-0000-0000-000000000000');
});

it('should render an uncontrolled checkbox', () => {
  const checkBox = (<Checkbox defaultChecked labelText="Checkbox" />);
  const wrapper = enzyme.shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a controlled checkbox', () => {
  const checkBox = (<Checkbox checked onChange={() => {}} labelText="Checkbox" />);
  const wrapper = enzyme.shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled checkbox', () => {
  const checkBox = (<Checkbox checked onChange={() => {}} labelText="Checkbox" disabled />);
  const wrapper = enzyme.shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a checkbox with a hidden label', () => {
  const checkBox = (<Checkbox checked onChange={() => {}} labelText="Checkbox" isLabelHidden />);
  const wrapper = enzyme.shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ChoiceField with a checkbox', () => {
  const choiceField = (
    <Checkbox
      labelText="Do you have any Children?"
      labelTextAttrs={{ className: 'healtheintent-label-text' }}
      name="children_present"
      value="children_present"
      inputAttrs={{ className: 'healtheintent-application' }}
      isInline={false}
    />
  );

  const wrapper = enzyme.shallow(choiceField);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = enzyme.mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <Checkbox
        labelText="Do you have any Children?"
        labelTextAttrs={{ className: 'healtheintent-label-text' }}
        name="children_present"
        value="children_present"
        inputAttrs={{ className: 'healtheintent-application' }}
        isInline={false}
      />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
