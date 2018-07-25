import React from 'react';
import NoResults from '../../src/_NoResults';
import intlContexts from './intl-context-setup';

describe('NoResults', () => {
  it('should render a default NoResults', () => {
    const wrapper = shallow(<NoResults value="value" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render NoResults with custom content', () => {
    const wrapper = shallow(<NoResults value="value" noResultContent={<div>Custom</div>} />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
