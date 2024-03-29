import React from 'react';
import { SearchSelectField } from '../../src';

it('should render SearchSelectField component with max height', () => {
  const select = (
    <SearchSelectField label="Label" defaultValue="blue" selectId="select-id" maxHeight={100}>
      <SearchSelectField.Option value="blue" display="Blue" />
      <SearchSelectField.Option value="green" display="Green" />
      <SearchSelectField.Option value="purple" display="Purple" />
      <SearchSelectField.Option value="red" display="Red" />
      <SearchSelectField.Option value="violet" display="Violet" />
    </SearchSelectField>
  );

  expect(enzymeIntl.shallowWithIntl(select).dive()).toMatchSnapshot();
});

