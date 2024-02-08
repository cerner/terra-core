import React from 'react';
import MultiSelectField from '../../src/MultiSelectField';

it('should render MultiSelectField component with max height', () => {
  const select = (
    <MultiSelectField label="Label" defaultValue="blue" selectId="select-id" maxHeight={100}>
      <MultiSelectField.Option value="blue" display="Blue" />
      <MultiSelectField.Option value="green" display="Green" />
      <MultiSelectField.Option value="purple" display="Purple" />
      <MultiSelectField.Option value="red" display="Red" />
      <MultiSelectField.Option value="violet" display="Violet" />
    </MultiSelectField>
  );

  expect(enzymeIntl.shallowWithIntl(select).dive().dive()).toMatchSnapshot();
});

