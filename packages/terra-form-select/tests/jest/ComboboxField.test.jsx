import React from 'react';
import { ComboboxField } from '../../src';

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

  expect(enzymeIntl.shallowWithIntl(select).dive()).toMatchSnapshot();
});

