import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl } from 'terra-enzyme-intl';
import {v4 as uuidv4}  from 'uuid';
import RollupTag from '../../src/RollupTag';

describe('Rollup Tag', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  it('should render rollup tag with the label "4 more"', () => {
    const wrapper = mountWithIntl(<RollupTag isCollapsed rollupCount={4} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rollup tag with the label "show less" when isCollapsed is false', () => {
    const wrapper = mountWithIntl(<RollupTag isCollapsed={false} rollupCount={3} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rollup tag with the label "show less" when isCollapsed is true and rollupCount is 0', () => {
    const wrapper = mountWithIntl(<RollupTag isCollapsed rollupCount={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});