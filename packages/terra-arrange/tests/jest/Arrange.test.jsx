import React from 'react';
import Arrange from '../../src/Arrange';

describe('Arrange', () => {
  const fitStart = <img src="http:///uploads/2016/09/telegraph-1.jpg" alt="panda" />;
  const fitEnd = React.createElement('a', { href: 'http://www.example.com' });
  const text = 'FIll text';
  const fill = <div>{text}</div>;
  // Snapshot Tests
  describe('default', () => {
    const arrange = <Arrange fitStart={fitStart} fill={fill} fitEnd={fitEnd} />;

    it('should render a arrange component with given fit and fill', () => {
      const wrapper = shallow(arrange);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when two fits and one fill is passed with align set', () => {
    it('should render a arrange component with fit and fill aligned to top', () => {
      const arrangeAlignAll = <Arrange fitEnd={fitEnd} fill={fill} />;
      const wrapper = shallow(arrangeAlignAll);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a arrange component with fit and fill aligned to center', () => {
      const arrangeAlignAll = <Arrange fitEnd={fitEnd} fill={fill} align="center" />;
      const wrapper = shallow(arrangeAlignAll);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a arrange component with fit and fill aligned to bottom', () => {
      const arrangeAlignAll = <Arrange fitStart={fitStart} fill={fill} align="bottom" />;
      const wrapper = shallow(arrangeAlignAll);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a arrange component with fit and fill aligned to stretch', () => {
      const arrangeAlignAll = <Arrange fitStart={fitStart} fill={fill} align="stretch" />;
      const wrapper = shallow(arrangeAlignAll);
      expect(wrapper).toMatchSnapshot();
    });
  });

  // Prop Tests
  describe('props validation', () => {
    it('should log error in console when no fit provided', () => {
      try {
        shallow(<Arrange fill={fill} />);
      } catch (object) {
        expect(object.message).toContain('At least one of the props: [fitStart, fitEnd] should be supplied.');
      }
    });
  });

  it('should have all prop set correctly', () => {
    const arrange = <Arrange fitStart={fitStart} fitEnd={fitEnd} fill={fill} align="center" />;
    const wrapper = shallow(arrange);
    expect(wrapper.unrendered.props.fitStart.type).toEqual('img');
    expect(wrapper.unrendered.props.fitEnd.type).toEqual('a');
    expect(wrapper.unrendered.props.fill.type).toEqual('div');
    expect(wrapper.unrendered.props.align).toEqual('center');
  });

  it('should have align prop undefined when align not pass', () => {
    const arrange = <Arrange fitStart={fitStart} fill={fill} />;
    const wrapper = shallow(arrange);
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.unrendered.props.alignFitStart).toEqual(undefined);
    expect(wrapper.unrendered.props.alignFitEnd).toEqual(undefined);
    expect(wrapper.unrendered.props.alignFill).toEqual(undefined);
  });

  // Structure test
  it('should have fit and fill with the default class when align is not set', () => {
    const arrange = <Arrange fitStart={fitStart} fitEnd={fitEnd} fill={fill} />;
    const wrapper = shallow(arrange);
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.childAt(0).hasClass('fit')).toEqual(true);
    expect(wrapper.childAt(1).hasClass('fill')).toEqual(true);
    expect(wrapper.childAt(2).hasClass('fit')).toEqual(true);
  });

  it('should have fit and fill with the required class when fitStart and fill set to top and stretch"', () => {
    const arrange = <Arrange fitStart={fitStart} fitEnd={fitEnd} fill={fill} alignFitStart="center" alignFill="stretch" />;
    const wrapper = shallow(arrange);
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.childAt(0).hasClass('fit center')).toEqual(true);
    expect(wrapper.childAt(1).hasClass('fill stretch')).toEqual(true);
    expect(wrapper.childAt(2).hasClass('fit')).toEqual(true);
  });

  it('should have fit and fill with the required class when fitStart, fitEnd and fill set to stretch, bottom and stretch"', () => {
    const arrange = <Arrange fitStart={fitStart} fitEnd={fitEnd} fill={fill} alignFitStart="stretch" alignFill="stretch" alignFitEnd="bottom" />;
    const wrapper = shallow(arrange);
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.childAt(0).hasClass('fit stretch')).toEqual(true);
    expect(wrapper.childAt(1).hasClass('fill stretch')).toEqual(true);
    expect(wrapper.childAt(2).hasClass('fit bottom')).toEqual(true);
  });

  it('should have child with the correct class when align is set to stretch', () => {
    const arrange = <Arrange fitStart={fitStart} fitEnd={fitEnd} fill={fill} align="stretch" />;
    const wrapper = shallow(arrange);
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.childAt(0).hasClass('fit stretch')).toEqual(true);
    expect(wrapper.childAt(1).hasClass('fill stretch')).toEqual(true);
    expect(wrapper.childAt(2).hasClass('fit stretch')).toEqual(true);
  });

  it('should have child with the correct class when align is set and overwrites individual fit and fill ', () => {
    const arrange = <Arrange fitStart={fitStart} fitEnd={fitEnd} fill={fill} align="stretch" alignFitStart="center" />;
    const wrapper = shallow(arrange);
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.childAt(0).hasClass('fit stretch')).toEqual(true);
    expect(wrapper.childAt(1).hasClass('fill stretch')).toEqual(true);
    expect(wrapper.childAt(2).hasClass('fit stretch')).toEqual(true);
  });

  // Custom prop testing
  it('should render a arrange component with given className and id', () => {
    const className = 'testA testB testC';
    const arrange = <Arrange fitStart={fitStart} fill={fill} className={className} id="testkey" />;
    const wrapper = shallow(arrange);
    expect(wrapper).toMatchSnapshot();
  });
});
