import React from 'react';
import FlexBox from '../../src/FlexBox';
import { StyleSheetTestUtils } from 'aphrodite';

describe('FlexBox', () => {

  // Snapshot Tests
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render a default component with just height and width defined', () => {
    const wrapper = shallow(<FlexBox width="40%" height="400px" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a flexbox component with all parent container display properties defined', () => {
    const wrapper = shallow(<FlexBox className="parent" element="header" display="inline-flex" flexDirection="column" flexWrap="wrap" justifyContent="center" alignItems="stretch" alignContent="flex-start" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a flexbox component with all child container display properties defined', () => {
    const wrapper = shallow(<FlexBox className="child" order={0} flexGrow={0} flexShrink={0} flexBasis="20%" alignSelf="center" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a flexbox component with the min and max sizing props', () => {
    const wrapper = shallow(<FlexBox minWidth="40%" minHeight="400px" maxWidth="40%" maxHeight="400px" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a flexbox component with shorthand flex-flow prop', () => {
    const wrapper = shallow(<FlexBox flexFlow="column wrap" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a flexbox component with shorthand flex prop', () => {
    const wrapper = shallow(<FlexBox flex="0 0 20%" />);
    expect(wrapper).toMatchSnapshot();
  });
});
