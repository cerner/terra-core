import React from 'react';
import ActionFooterContainer from '../../src/_ActionFooterContainer';

describe('ActionFooterContainer', () => {
  // Snapshot Tests
  describe('Snapshot Tests', () => {
    it('should render an empty footer', () => {
      const actionFooterContainer = <ActionFooterContainer />;
      expect(shallow(actionFooterContainer)).toMatchSnapshot();
    });

    it('should render a footer with some actions', () => {
      const actionFooterContainer = <ActionFooterContainer>Some actions</ActionFooterContainer>;
      expect(shallow(actionFooterContainer)).toMatchSnapshot();
    });
  });

  // Prop Tests
  describe('Prop Tests', () => {
    describe('without actions', () => {
      const actionFooterContainer = mount(<ActionFooterContainer />);

      it('should display no actions', () => (
        expect(actionFooterContainer).toMatchSnapshot()
      ));
    });

    describe('with actions', () => {
      const content = 'Some content';
      const actionFooterContainer = mount(<ActionFooterContainer>{content}</ActionFooterContainer>);

      it('should display no actions', () => (
        expect(actionFooterContainer).toMatchSnapshot()
      ));
    });
  });

  // Structure Tests
  describe('Structure Tests', () => {
    describe('without actions', () => {
      const actionFooterContainer = shallow(<ActionFooterContainer />);

      it('should contain the action-footer-container class', () => (
        expect(actionFooterContainer.find('.action-footer-container').length).toBe(1)
      ));

      it('should not contain the with-actions class', () => (
        expect(actionFooterContainer.find('.with-actions').length).toBe(0)
      ));
    });

    describe('with actions', () => {
      const component = (
        <ActionFooterContainer>
          Some actions
        </ActionFooterContainer>
      );
      const actionFooterContainer = shallow(component);

      it('should contain the action-footer-container class', () => (
        expect(actionFooterContainer.find('.action-footer-container').length).toBe(1)
      ));

      it('should contain the with-actions class', () => (
        expect(actionFooterContainer.find('.with-actions').length).toBe(1)
      ));
    });
  });
});
