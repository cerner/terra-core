import React from 'react';
import CenteredActionFooter from '../../src/CenteredActionFooter';

describe('CenteredActionFooter', () => {
  // Snapshot Tests
  describe('Snapshot Tests', () => {
    it('should render an empty footer', () => {
      const component = <CenteredActionFooter />;
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a footer with an anchor', () => {
      const component = (
        <CenteredActionFooter
          center={<a href="/">Test</a>}
        />
      );
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a footer with two buttons', () => {
      const component = (
        <CenteredActionFooter
          center={
            <div>
              <button>Button 1</button>
              <button>Button 2</button>
            </div>
          }
        />
      );
      const wrapper = shallow(component);
      expect(wrapper).toMatchSnapshot();
    });
  });

  // Prop Tests
  describe('Prop Tests', () => {
    it('should render an EmptyActionFooter without a center prop', () => {
      const component = <CenteredActionFooter />;
      const wrapper = mount(component);
      expect(wrapper.prop('center')).toEqual(undefined);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(1);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(0);
      expect(wrapper.text()).toEqual('');
      expect(wrapper.contains(<div className="empty-action-footer" />)).toEqual(true);
    });

    it('should default to an EmptyActionFooter when given a falsey center prop', () => {
      const falseyList = ['', false, null, undefined, NaN, 0];
      falseyList.forEach((f) => {
        const wrapper = mount(<CenteredActionFooter center={f} />);
        expect(wrapper.find('EmptyActionFooter').length).toEqual(1);
        expect(wrapper.find('ActionFooterContainer').length).toEqual(0);
        expect(wrapper.text()).toEqual('');
        expect(wrapper.contains(<div className="empty-action-footer" />)).toEqual(true);
      });
    });

    it('should render an ActionFooterContainer with a div containing two spans as the center prop', () => {
      const center = (
        <div>
          <span>One</span>
          <span>Two</span>
        </div>
      );
      const wrapper = mount(<CenteredActionFooter center={center} />);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(0);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(1);
      expect(wrapper.text()).toEqual('OneTwo');
      expect(wrapper.contains(center)).toEqual(true);
    });
  });

  // Structure Tests
  describe('Structure Tests', () => {
    it('should render an EmptyActionFooter', () => {
      const wrapper = mount(<CenteredActionFooter />);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(1);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(0);
      expect(wrapper.find('EmptyActionFooter').children().hasClass('empty-action-footer')).toEqual(true);
    });

    it('should render an ActionFooterContainer', () => {
      const wrapper = mount(<CenteredActionFooter center="Example" />);
      expect(wrapper.find('EmptyActionFooter').length).toEqual(0);
      expect(wrapper.find('ActionFooterContainer').length).toEqual(1);
      expect(wrapper.find('ActionFooterContainer').children().hasClass('action-footer-container')).toEqual(true);
    });
  });
});
