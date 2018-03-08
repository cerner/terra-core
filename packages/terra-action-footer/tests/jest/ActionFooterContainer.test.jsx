import React from 'react';
import ActionFooterContainer from '../../src/_ActionFooterContainer';

describe('ActionFooterContainer', () => {
  // Snapshot Tests
  describe('Snapshot Tests', () => {
    it('should render an empty footer', () => {
      const actionFooterContainer = <ActionFooterContainer />;
      expect(shallow(actionFooterContainer)).toMatchSnapshot();
    });

    it('should render a footer with some content', () => {
      const actionFooterContainer = (
        <ActionFooterContainer>
          Some Content
        </ActionFooterContainer>
      );
      expect(shallow(actionFooterContainer)).toMatchSnapshot();
    });
  });

  // Prop Tests
  describe('Prop Tests', () => {
    describe('without content', () => {
      const actionFooterContainer = mount(<ActionFooterContainer />);

      it('should display no actions', () => (
        expect(actionFooterContainer.text()).toEqual('')
      ));
    });

    describe('with content', () => {
      const content = 'Some content';
      const component = (
        <ActionFooterContainer>
          {content}
        </ActionFooterContainer>
      );
      const actionFooterContainer = mount(component);

      it('should display no actions', () => (
        expect(actionFooterContainer.text()).toEqual(content)
      ));
    });
  });

  // Structure Tests
  describe('Structure Tests', () => {
    describe('without content', () => {
      const actionFooterContainer = shallow(<ActionFooterContainer />);

      it('should contain the action-footer-container class', () => (
        expect(actionFooterContainer.find('.action-footer-container').length).toBe(1)
      ));

      it('should contain the is-empty class', () => (
        expect(actionFooterContainer.find('.is-empty').length).toBe(1)
      ));

      it('should not contain the has-children class', () => (
        expect(actionFooterContainer.find('.has-children').length).toBe(0)
      ));
    });

    describe('with content', () => {
      const component = (
        <ActionFooterContainer>
          Some content
        </ActionFooterContainer>
      );
      const actionFooterContainer = shallow(component);

      it('should contain the action-footer-container class', () => (
        expect(actionFooterContainer.find('.action-footer-container').length).toBe(1)
      ));

      it('should contain the has-children class', () => (
        expect(actionFooterContainer.find('.has-children').length).toBe(1)
      ));

      it('should not contain the is-empty class', () => (
        expect(actionFooterContainer.find('.is-empty').length).toBe(0)
      ));
    });
  });
});
