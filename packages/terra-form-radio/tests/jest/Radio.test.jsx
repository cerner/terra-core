import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Radio from '../../src';

window.matchMedia = () => ({ matches: true });

it('should render a radio', () => {
  const radioButton = (<Radio labelText="Radio" />);
  const wrapper = enzyme.shallow(radioButton);
  expect(wrapper).toMatchSnapshot();
});

it('should render an uncontrolled radio', () => {
  const radioButton = (<Radio defaultChecked labelText="Radio" />);
  const wrapper = enzyme.shallow(radioButton);
  expect(wrapper).toMatchSnapshot();
});

it('should render a controlled radio', () => {
  const radioButton = (<Radio checked onChange={() => {}} labelText="Radio" />);
  const wrapper = enzyme.shallow(radioButton);
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled radio', () => {
  const radioButton = (<Radio checked onChange={() => {}} labelText="Radio" disabled />);
  const wrapper = enzyme.shallow(radioButton);
  expect(wrapper).toMatchSnapshot();
});

it('should render a radio with a hidden label', () => {
  const radioButton = (<Radio checked onChange={() => {}} labelText="Radio" isLabelHidden />);
  const wrapper = enzyme.shallow(radioButton);
  expect(wrapper).toMatchSnapshot();
});

it('should render a ChoiceField with a radio', () => {
  const choiceField = (
    <Radio
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
      <Radio labelText="Radio" />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
