import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import SearchSelectField from '../../src/SearchSelectField';

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

  expect(shallowWithIntl(select).dive()).toMatchSnapshot();
});

