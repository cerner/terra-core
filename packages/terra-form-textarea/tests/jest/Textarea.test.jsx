/* globals spyOn */
import React from 'react';
import Textarea from '../../src/Textarea';

it('should render a default TextArea component', () => {
  const textarea = <Textarea />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextArea when all the possible props are passed into it', () => {
  const textarea = (
    <Textarea
      name="description"
      rows={5}
      required
    />
  );

  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the Textarea', () => {
  const textarea = <Textarea defaultValue="foo" />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just a default value is passed into the Textarea', () => {
  const textarea = <Textarea value="foo" onChange={() => {}} />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a small textbox appropriately', () => {
  const textarea = <Textarea size="small" />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a medium textbox appropriately', () => {
  const textarea = <Textarea size="medium" />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a large textbox appropriately', () => {
  const textarea = <Textarea size="large" />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a full size textbox appropriately', () => {
  const textarea = <Textarea size="full" />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should set the rows attribute appropriate when it is passed into the textarea', () => {
  const textarea = <Textarea size="small" rows={7} />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should set the onChange and onFocus functions appropriately when the textarea is autoResizable', () => {
  const textarea = <Textarea isAutoResizable onFocus={() => {}} onChange={() => {}} />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should set the textarea as auto resizable when isAutoResizable is passed into the component', () => {
  const textarea = <Textarea isAutoResizable />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should set the textarea to resizable when viewed on a large device', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: false });
  const textarea = <Textarea isAutoResizable />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should not set the textarea to resizable when viewed on browser with ontouchstart', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const textarea = <Textarea isAutoResizable />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();

  delete window.ontouchstart;
});

it('should not set the textarea to resizable when viewed on browser with DocumentTouch', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.DocumentTouch = () => {};
  window.DocumentTouch.prototype = Document.prototype;

  const textarea = <Textarea isAutoResizable />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();

  delete window.DocumentTouch;
});

it('should not set the textarea to resizable when viewed on browser with maxTouchPoints', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  navigator.maxTouchPoints = 1;

  const textarea = <Textarea isAutoResizable />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();

  navigator.maxTouchPoints = 0;
});

it('should not set the textarea to resizable when viewed on browser with msMaxTouchPoints', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  navigator.msMaxTouchPoints = 1;

  const textarea = <Textarea isAutoResizable />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();

  navigator.msMaxTouchPoints = null;
});

it('should set the textarea to disabled when passed into the component', () => {
  const textarea = <Textarea disabled />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should set the textarea to invalid when isInvalid is passed into the component', () => {
  const textarea = <Textarea isInvalid />;
  const wrapper = render(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should set the ref when refCallback is passed into the component', () => {
  const refCallback = jest.fn();

  const textarea = <Textarea refCallback={refCallback} />;
  const wrapper = mount(textarea);

  expect(refCallback).toHaveBeenCalledWith(wrapper.find('textarea').instance());
});
