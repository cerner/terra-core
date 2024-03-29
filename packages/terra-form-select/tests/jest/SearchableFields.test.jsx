import React from 'react';
import {
  ComboboxField,
  MultiSelectField,
  SearchSelectField,
  TagSelectField,
} from '../../src';

it('should render the selectId to the input field in ComboboxField component', () => {
  const select = (
    <ComboboxField label="Label" defaultValue="blue" selectId="select-id">
      <ComboboxField.Option value="blue" display="Blue" />
      <ComboboxField.Option value="green" display="Green" />
      <ComboboxField.Option value="purple" display="Purple" />
      <ComboboxField.Option value="red" display="Red" />
      <ComboboxField.Option value="violet" display="Violet" />
    </ComboboxField>
  );

  expect(enzymeIntl.shallowWithIntl(select).dive()).toMatchSnapshot();
});

it('should render the selectId to the input field in MultiSelectField component', () => {
  const select = (
    <MultiSelectField label="Label" defaultValue="blue" selectId="select-id">
      <MultiSelectField.Option value="blue" display="Blue" />
      <MultiSelectField.Option value="green" display="Green" />
      <MultiSelectField.Option value="purple" display="Purple" />
      <MultiSelectField.Option value="red" display="Red" />
      <MultiSelectField.Option value="violet" display="Violet" />
    </MultiSelectField>
  );

  expect(enzymeIntl.shallowWithIntl(select).dive().dive()).toMatchSnapshot();
});

it('should render the selectId to the input field in SearchSelectField component', () => {
  const select = (
    <SearchSelectField label="Label" defaultValue="blue" selectId="select-id">
      <SearchSelectField.Option value="blue" display="Blue" />
      <SearchSelectField.Option value="green" display="Green" />
      <SearchSelectField.Option value="purple" display="Purple" />
      <SearchSelectField.Option value="red" display="Red" />
      <SearchSelectField.Option value="violet" display="Violet" />
    </SearchSelectField>
  );

  expect(enzymeIntl.shallowWithIntl(select).dive()).toMatchSnapshot();
});

it('should render the selectId to the input field in TagSelectField component', () => {
  const select = (
    <TagSelectField label="Label" defaultValue="blue" selectId="select-id">
      <TagSelectField.Option value="blue" display="Blue" />
      <TagSelectField.Option value="green" display="Green" />
      <TagSelectField.Option value="purple" display="Purple" />
      <TagSelectField.Option value="red" display="Red" />
      <TagSelectField.Option value="violet" display="Violet" />
    </TagSelectField>
  );

  expect(enzymeIntl.shallowWithIntl(select).dive().dive()).toMatchSnapshot();
});
