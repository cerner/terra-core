import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import NoResults from '../../src/_NoResults';

describe('NoResults', () => {
  it('should render a default NoResults', () => {
    const wrapper = shallowWithIntl(<NoResults value="value" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render NoResults with custom content', () => {
    const wrapper = shallowWithIntl(<NoResults value="value" noResultContent={<div>Custom</div>} />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
