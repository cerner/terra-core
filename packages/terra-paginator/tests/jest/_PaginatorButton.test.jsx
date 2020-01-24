import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import PaginatorButton from '../../src/_PaginatorButton';

describe('Paginator', () => {
  it('should render a default paginator button', () => {
    const paginatorButton = <PaginatorButton id="test-button" />;
    const wrapper = mountWithIntl(paginatorButton);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled paginator button', () => {
    const paginatorButton = <PaginatorButton id="test-button" disabled />;
    const wrapper = shallowWithIntl(paginatorButton);

    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it('should render a passed in child', () => {
    const paginatorButton = <PaginatorButton id="test-button"><span>test</span></PaginatorButton>;
    const wrapper = shallowWithIntl(paginatorButton);

    expect(wrapper).toMatchSnapshot();
  });
});
