/* globals spyOn */

import React from 'react';
import intlContexts from './intl-context-setup';
import TimeInput from '../../src/TimeInput';

const handleOnChange = () => {
};

const handleOnBlur = () => {
};

it('should render a default time input', () => {
  const timeInput = <TimeInput name="time-input" />;
  const wrapper = shallow(timeInput, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with custom attributes', () => {
  const timeInput = <TimeInput name="time-input" inputAttributes={{ id: 'terra-time-input' }} />;
  const wrapper = shallow(timeInput, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with a default time', () => {
  const timeInput = <TimeInput name="time-input" value={'10:45'} />;
  const wrapper = shallow(timeInput, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with onChange', () => {
  const timeInput = <TimeInput name="time-input" onChange={handleOnChange} />;
  const wrapper = shallow(timeInput, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with onBlur', () => {
  const timeInput = <TimeInput name="time-input" onBlur={handleOnBlur} />;
  const wrapper = shallow(timeInput, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with onInputFocus', () => {
  const timeInput = <TimeInput name="time-input" onBlur={() => {}} />;
  const wrapper = shallow(timeInput, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a time input with 12 hour clock set', () => {
  const timeInput = <TimeInput name="time-input" variant="12-hour" />;
  const wrapper = shallow(timeInput, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should ignore invalid times properly', () => {
  const timeInput = <TimeInput name="time-input" value="11:2" />;
  const wrapper = shallow(timeInput, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.instance().state.hour).toEqual('');
  expect(wrapper.instance().state.minute).toEqual('');
});

it('should render a 24 hour timepicker properly on mobile devices', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" />;
  const wrapper = render(timeInput, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should set the labels with the correct htmlFor a 24 hour timepicker properly on mobile devices', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" minuteAttributes={{ id: 'id-1' }} hourAttributes={{ id: 'id-2' }} />;
  const wrapper = render(timeInput, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});

it('should render a 12 hour timepicker meridiem with buttons when viewed on a mobile device', () => {
  spyOn(window, 'matchMedia').and.returnValue({ matches: true });
  window.ontouchstart = 'true';

  const timeInput = <TimeInput name="time-input" variant="12-hour" />;
  const wrapper = render(timeInput, intlContexts.mountContext);
  expect(wrapper).toMatchSnapshot();
  delete window.ontouchstart;
});
