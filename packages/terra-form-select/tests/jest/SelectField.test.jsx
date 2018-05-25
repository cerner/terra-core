import React from 'react';
import SelectField from '../../src/SelectField';

it('should render a default SelectField component', () => {
  const select = (
    <SelectField label="Label" defaultValue="blue" selectId="select-id">
      <SelectField.Option value="blue" display="Blue" />
      <SelectField.Option value="green" display="Green" />
      <SelectField.Option value="purple" display="Purple" />
      <SelectField.Option value="red" display="Red" />
      <SelectField.Option value="violet" display="Violet" />
    </SelectField>
  );

  expect(shallow(select)).toMatchSnapshot();
});

it('should render a default SelectField component with attributes spread onto the select', () => {
  const select = (
    <SelectField label="Label" defaultValue="blue" selectId="select-id" selectAttrs={{ onClick: () => {} }}>
      <SelectField.Option value="blue" display="Blue" />
      <SelectField.Option value="green" display="Green" />
      <SelectField.Option value="purple" display="Purple" />
      <SelectField.Option value="red" display="Red" />
      <SelectField.Option value="violet" display="Violet" />
    </SelectField>
  );

  expect(shallow(select)).toMatchSnapshot();
});
