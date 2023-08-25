/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Fieldset from '../../src/Fieldset';

let mockSpyUuid;
beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockImplementation(() => '00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

it('should render a default component', () => {
  const field = (<Fieldset />);
  const wrapper = shallow(field);
  expect(wrapper).toMatchSnapshot();
});

it('should render a Fieldset when all the possible props are passed into it', () => {
  const input = (
    <Fieldset
      legend="Text"
      className="fieldset-custom"
      legendAttrs={{ className: 'healtheintent-legend' }}
      help="This is a test input"
      required
    >
      <input type="radio" value="Test" />
    </Fieldset>
  );

  const wrapper = shallow(input);

  const legendTag = wrapper.find('.healtheintent-legend');
  expect(legendTag.prop('id')).toEqual('terra-fieldset-legend-00000000-0000-0000-0000-000000000000');

  const smallTag = wrapper.find('.help-text');
  expect(smallTag.prop('id')).toEqual('terra-fieldset-help-00000000-0000-0000-0000-000000000000');

  const inputTag = wrapper.find('.fieldset-children > input');
  expect(inputTag.prop('aria-labelledby')).toEqual('terra-fieldset-legend-00000000-0000-0000-0000-000000000000 terra-fieldset-help-00000000-0000-0000-0000-000000000000');

  expect(wrapper).toMatchSnapshot();
});

it('should render a Fieldset without legend and helptext', () => {
  const input = (
    <Fieldset
      className="fieldset-custom"
      legendAttrs={{ className: 'healtheintent-legend' }}
      required
    >
      <input type="radio" value="Test" />
    </Fieldset>
  );

  const wrapper = shallow(input);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <Fieldset />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
