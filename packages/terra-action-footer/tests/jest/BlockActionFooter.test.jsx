import React from 'react';
import BlockActionFooter from '../../src/BlockActionFooter';

describe('BlockActionFooter', () => {
  // Snapshot Tests
  describe('Snapshot Tests', () => {
    it('should render an empty footer', () => {
      const blockActionFooter = <BlockActionFooter />;
      expect(shallow(blockActionFooter)).toMatchSnapshot();
    });

    it('should render a footer with some actions', () => {
      const blockActionFooter = <BlockActionFooter>Some actions</BlockActionFooter>;
      expect(shallow(blockActionFooter)).toMatchSnapshot();
    });
  });

  // Prop Tests
  describe('Prop Tests', () => {
    describe('without actions', () => {
      const blockActionFooter = mount(<BlockActionFooter />);

      it('should display no actions', () => (
        expect(blockActionFooter).toMatchSnapshot()
      ));
    });

    describe('with actions', () => {
      const content = 'Some content';
      const blockActionFooter = mount(<BlockActionFooter>{content}</BlockActionFooter>);

      it('should display no actions', () => (
        expect(blockActionFooter).toMatchSnapshot()
      ));
    });
  });

  // Structure Tests
  describe('Structure Tests', () => {
    describe('without actions', () => {
      const blockActionFooter = shallow(<BlockActionFooter />);

      it('should contain the block-action-footer class', () => (
        expect(blockActionFooter.find('.block-action-footer').length).toBe(1)
      ));

      it('should not contain the with-actions class', () => (
        expect(blockActionFooter.find('.with-actions').length).toBe(0)
      ));
    });

    describe('with actions', () => {
      const component = (
        <BlockActionFooter>
          Some actions
        </BlockActionFooter>
      );
      const blockActionFooter = shallow(component);

      it('should contain the block-action-footer class', () => (
        expect(blockActionFooter.find('.block-action-footer').length).toBe(1)
      ));

      it('should contain the with-actions class', () => (
        expect(blockActionFooter.find('.with-actions').length).toBe(1)
      ));
    });
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const component = mount(
      <BlockActionFooter
        start={<button type="button">Start Button</button>}
        end={<button type="button">End Button</button>}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
