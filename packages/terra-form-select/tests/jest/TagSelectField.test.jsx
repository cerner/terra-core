import React from 'react';
import TagSelectField from '../../src/TagSelectField';

it('should render TagSelectField component with max height', () => {
  const select = (
    <TagSelectField label="Label" defaultValue="blue" selectId="select-id" maxHeight={100}>
      <TagSelectField.Option value="blue" display="Blue" />
      <TagSelectField.Option value="green" display="Green" />
      <TagSelectField.Option value="purple" display="Purple" />
      <TagSelectField.Option value="red" display="Red" />
      <TagSelectField.Option value="violet" display="Violet" />
    </TagSelectField>
  );

  expect(enzymeIntl.shallowWithIntl(select).dive().dive()).toMatchSnapshot();
});
