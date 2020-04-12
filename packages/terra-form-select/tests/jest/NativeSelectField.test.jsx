import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import NativeSelectField from '../../src/native-select/NativeSelectField';

describe('NativeSelectField', () => {
  it('should render a default NativeSelectField', () => {
    const wrapper = shallowWithIntl(
      <NativeSelectField
        selectId="test-id"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
