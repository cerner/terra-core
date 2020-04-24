import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ComboboxField from '../../src/ComboboxField';

it('should render ComboboxField component with max height', () => {
  const select = (
    <ComboboxField label="Label" defaultValue="blue" selectId="select-id" maxHeight={100}>
      <ComboboxField.Option value="blue" display="Blue" />
      <ComboboxField.Option value="green" display="Green" />
      <ComboboxField.Option value="purple" display="Purple" />
      <ComboboxField.Option value="red" display="Red" />
      <ComboboxField.Option value="violet" display="Violet" />
    </ComboboxField>
  );

  expect(shallowWithIntl(select).dive()).toMatchSnapshot();
});

