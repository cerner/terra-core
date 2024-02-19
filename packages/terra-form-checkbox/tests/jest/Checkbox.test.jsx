import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Checkbox from '../../src/Checkbox';

window.matchMedia = () => ({ matches: true });

it('should render a checkbox', () => {
  const checkBox = (<Checkbox labelText="Checkbox" />);
  const wrapper = enzyme.shallow(checkBox);
  expect(wrapper).toMatchSnapshot();
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
