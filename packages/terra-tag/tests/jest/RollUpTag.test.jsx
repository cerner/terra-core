import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import RollupTag from '../../src/_RollupTag';

describe('Rollup Tag', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  it('should render rollup tag with the label "4 more"', () => {
    const wrapper = enzymeIntl.mountWithIntl(<RollupTag isCollapsed rollupCount={4} />);
    const rollUpTag = wrapper.find('RollUpTag');
    expect(rollUpTag.prop('rollupCount')).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rollup tag with the label "show less" when isCollapsed is false', () => {
    const wrapper = enzymeIntl.mountWithIntl(<RollupTag isCollapsed={false} rollupCount={3} />);
    const labelTag = wrapper.find('span');
    expect(labelTag).toBeDefined();
    expect(wrapper.find('RollUpTag').prop('isCollapsed')).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rollup tag with the label "show less" when isCollapsed is true and rollupCount is 0', () => {
    const wrapper = enzymeIntl.mountWithIntl(<RollupTag isCollapsed rollupCount={0} />);
    const rollUpTag = wrapper.find('RollUpTag');
    expect(rollUpTag.prop('rollupCount')).toBe(0);
    expect(rollUpTag.prop('isCollapsed')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
