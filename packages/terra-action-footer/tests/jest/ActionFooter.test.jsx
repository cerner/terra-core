import React from 'react';
import ActionFooter from '../../src/ActionFooter';

describe('ActionFooter', () => {
  // Snapshot Tests
  describe('Snapshot Tests', () => {
    it('should render an empty footer', () => {
      const component = <ActionFooter />;
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with only one start socket button', () => {
      const component = <ActionFooter start={<button>Start Socket</button>} />;
      expect(shallow(component)).toMatchSnapshot();
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
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with only an end socket button', () => {
      const component = <ActionFooter end={<button>End Socket</button>} />;
      expect(shallow(component)).toMatchSnapshot();
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
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with both start and end socket buttons', () => {
      const component = (
        <ActionFooter
          start={<button>Start Socket</button>}
          end={<button>End Socket</button>}
        />
      );
      expect(shallow(component)).toMatchSnapshot();
    });
  });

  // Prop Tests
  describe('Prop Tests', () => {
    describe('without start or end actions', () => {
      const actionFooter = mount(<ActionFooter />);

      it('should display no actions', () => (
        expect(actionFooter).toMatchSnapshot()
      ));
    });

    describe('with only a start action', () => {
      const actionFooter = mount(<ActionFooter start="Start Action" />);

      it('should only display a start action', () => (
        expect(actionFooter).toMatchSnapshot()
      ));
    });

    describe('with only an end action', () => {
      const actionFooter = mount(<ActionFooter end="End Action" />);

      it('should only display an end action', () => (
        expect(actionFooter).toMatchSnapshot()
      ));
    });

    describe('with both start and end actions', () => {
      const actionFooter = mount(<ActionFooter start="Start Action" end="End Action" />);

      it('should display both start and end actions', () => (
        expect(actionFooter).toMatchSnapshot()
      ));
    });
  });

  // Structure Tests
  describe('Structure Tests', () => {
    describe('without start or end actions', () => {
      const actionFooter = shallow(<ActionFooter />);

      it("should render an 'ActionFooterContainer'", () => (
        expect(actionFooter.find('ActionFooterContainer').length).toBe(1)
      ));

      it('should contain no socket class', () => (
        expect(actionFooter.find('.socket').length).toBe(0)
      ));

      it('should contain no empty-center class', () => (
        expect(actionFooter.find('.empty-center').length).toBe(0)
      ));
    });

    describe('with only a start action', () => {
      const actionFooter = shallow(<ActionFooter start="Start Action" />);

      it("should render an 'ActionFooterContainer'", () => (
        expect(actionFooter.find('ActionFooterContainer').length).toBe(1)
      ));

      it('should contain one socket class', () => (
        expect(actionFooter.find('.socket').length).toBe(1)
      ));

      it('should contain one empty-center class', () => (
        expect(actionFooter.find('.empty-center').length).toBe(1)
      ));
    });

    describe('with only an end action', () => {
      const actionFooter = shallow(<ActionFooter end="End Action" />);

      it("should render an 'ActionFooterContainer'", () => (
        expect(actionFooter.find('ActionFooterContainer').length).toBe(1)
      ));

      it('should contain one socket class', () => (
        expect(actionFooter.find('.socket').length).toBe(1)
      ));

      it('should contain one empty-center class', () => (
        expect(actionFooter.find('.empty-center').length).toBe(1)
      ));
    });

    describe('with both start and end actions', () => {
      const actionFooter = shallow(<ActionFooter start="Start Action" end="End Action" />);

      it("should render an 'ActionFooterContainer'", () => (
        expect(actionFooter.find('ActionFooterContainer').length).toBe(1)
      ));

      it('should contain two socket classes', () => (
        expect(actionFooter.find('.socket').length).toBe(2)
      ));

      it('should contain one empty-center class', () => (
        expect(actionFooter.find('.empty-center').length).toBe(1)
      ));
    });
  });
});
