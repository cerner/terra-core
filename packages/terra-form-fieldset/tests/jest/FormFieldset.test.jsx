/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Fieldset from '../../src/Fieldset';

const mockUUID = '00000000-0000-0000-0000-000000000000';
jest.mock('uuid', () => ({ v4: () => mockUUID }));

it('should render a default component', () => {
  const field = (<Fieldset />);
  const wrapper = shallow(field);
  expect(wrapper).toMatchSnapshot();
});

it('should set the alert message ID', () => {
  const alertContent = wrapper.find('.section');
  expect(alertContent.prop('id')).toEqual(`alert-message-${mockUUID}`);
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

  const legend = wrapper.find('.healtheintent-legend');
  expect(legend.prop('id')).toEqual(`terra-fieldset-legend-${mockUUID}`);
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
