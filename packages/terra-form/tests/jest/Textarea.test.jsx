import React from 'react';
import Textarea from '../../src/Textarea';

it('should render a default TextArea component', () => {
  const textarea = <Textarea />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextArea when all the possible props are passed into it', () => {
  const textarea = (
    <Textarea
      name="description"
      cols={15}
      rows={5}
      required
    />);

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the Textarea', () => {
  const textarea = <Textarea defaultValue="foo" />;
  const wrapper = mount(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just a default value is passed into the Textarea', () => {
  const textarea = <Textarea value="foo" onChange={() => {}} />;
  const wrapper = mount(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a small textbox appropriately', () => {
  const textarea = <Textarea size="small" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a medium textbox appropriately', () => {
  const textarea = <Textarea size="medium" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a large textbox appropriately', () => {
  const textarea = <Textarea size="large" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a full size textbox appropriately', () => {
  const textarea = <Textarea size="full" />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should set the rows attribute appropriate when it is passed into the textarea', () => {
  const textarea = <Textarea size="small" rows={7} />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should set the onChange and onFocus functions appropriately when the textarea is autoResizable', () => {
  const textarea = <Textarea isAutoResizable onFocus={() => {}} onChange={() => {}} />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});
