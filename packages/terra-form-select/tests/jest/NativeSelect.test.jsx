import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import NativeSelect from '../../src/native-select/NativeSelect';

describe('NativeSelect', () => {
  it('should render a default NativeSelect', () => {
    const wrapper = shallowWithIntl(
      <NativeSelect
        id="test-id"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
