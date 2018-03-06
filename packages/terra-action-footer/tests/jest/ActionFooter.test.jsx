import React from 'react';
import ActionFooter from '../../src/ActionFooter';

describe('ActionFooter', () => {
  // Snapshot Tests
  describe('Snapshot Tests', () => {
    it('should render an empty footer', () => {
      const component = <ActionFooter />;
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a footer with only one start socket button', () => {
      const component = <ActionFooter start={<button>Start Socket</button>} />;
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a footer with only two start socket buttons', () => {
      const component = (
        <ActionFooter
          start={
            <div>
              <button>Start Socket 1</button>
              <button>Start Socket 2</button>
            </div>
          }
        />
      );
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a footer with only an end socket button', () => {
      const component = <ActionFooter end={<button>End Socket</button>} />;
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a footer with only two end socket buttons', () => {
      const component = (
        <ActionFooter
          end={
            <div>
              <button>End Socket 1</button>
              <button>End Socket 2</button>
            </div>
          }
        />
      );
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a footer with both start and end socket buttons', () => {
      const component = (
        <ActionFooter
          start={<button>Start Socket</button>}
          end={<button>End Socket</button>}
        />
      );
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });
  });

  // Prop Tests
  describe('Prop Tests', () => {
    it('should render an EmptyActionFooter without start and end props', () => {
      const component = <ActionFooter />;
      const wrapper = mount(component);
      expect(wrapper.prop('center')).toEqual(undefined);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(1);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(0);
      expect(wrapper.text()).toEqual('');
      expect(wrapper.contains(<div className="empty-action-footer" />)).toEqual(true);
    });

    it('should default to an EmptyActionFooter when given falsey start and end props', () => {
      const falseyList = ['', false, null, undefined, NaN, 0];
      falseyList.forEach(start => (
        falseyList.forEach((end) => {
          const wrapper = mount(<ActionFooter start={start} end={end} />);
          expect(wrapper.find('EmptyActionFooter').length).toEqual(1);
          expect(wrapper.find('ActionFooterContainer').length).toEqual(0);
          expect(wrapper.text()).toEqual('');
          expect(wrapper.contains(<div className="empty-action-footer" />)).toEqual(true);
        })
      ));
    });

    it('should render an ActionFooterContainer with a div containing two spans as the start prop', () => {
      const start = (
        <div>
          <span>One</span>
          <span>Two</span>
        </div>
      );
      const wrapper = mount(<ActionFooter start={start} />);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(0);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(1);
      expect(wrapper.text()).toEqual('OneTwo');
      expect(wrapper.contains(start)).toEqual(true);
    });

    it('should render an ActionFooterContainer with a div containing two spans as the end prop', () => {
      const end = (
        <div>
          <span>One</span>
          <span>Two</span>
        </div>
      );
      const wrapper = mount(<ActionFooter end={end} />);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(0);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(1);
      expect(wrapper.text()).toEqual('OneTwo');
      expect(wrapper.contains(end)).toEqual(true);
    });

    it('should render an ActionFooterContainer with complex start and end props', () => {
      const start = (
        <div>
          <button>Start One</button>
          <button>Start Two</button>
          <button>Start Three</button>
        </div>
      );
      const end = (
        <div>
          <span>End One</span>
          <span>End Two</span>
        </div>
      );
      const wrapper = mount(<ActionFooter start={start} end={end} />);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(0);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(1);
      expect(wrapper.text()).toEqual('Start OneStart TwoStart ThreeEnd OneEnd Two');
      expect(wrapper.contains(start)).toEqual(true);
      expect(wrapper.contains(end)).toEqual(true);
    });
  });

  // Structure Tests
  describe('Structure Tests', () => {
    it('should render an EmptyActionFooter', () => {
      const wrapper = mount(<ActionFooter />);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(1);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(0);
      expect(wrapper.find('EmptyActionFooter').children().hasClass('empty-action-footer')).toEqual(true);
    });

    it('should render an ActionFooterContainer', () => {
      const wrapper = mount(<ActionFooter start="Start" end="End" />);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(0);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(1);
      expect(wrapper.find('ActionFooterContainer').children().hasClass('action-footer-container')).toEqual(true);
    });
  });
});
