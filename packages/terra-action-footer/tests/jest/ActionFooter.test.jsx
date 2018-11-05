import React from 'react';
import ActionFooter from '../../src/ActionFooter';

describe('ActionFooter', () => {
  // Snapshot Tests
  describe('Snapshot Tests', () => {
    it('should render an empty footer', () => {
      const component = <ActionFooter />;
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with only one start-actions button', () => {
      const component = <ActionFooter start={<button type="button">Start Button</button>} />;
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with only two start-actions buttons', () => {
      const component = (
        <ActionFooter
          start={(
            <div>
              <button type="button">Start Button 1</button>
              <button type="button">Start Button 2</button>
            </div>
)}
        />
      );
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with only an end-actions button', () => {
      const component = <ActionFooter end={<button type="button">End Button</button>} />;
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with only two end-actions buttons', () => {
      const component = (
        <ActionFooter
          end={(
            <div>
              <button type="button">End Button 1</button>
              <button type="button">End Button 2</button>
            </div>
)}
        />
      );
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with both start and end socket buttons', () => {
      const component = (
        <ActionFooter
          start={<button type="button">Start Button</button>}
          end={<button type="button">End Button</button>}
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

      it("should render an 'BlockActionFooter'", () => (
        expect(actionFooter.find('BlockActionFooter').length).toBe(1)
      ));

      it('should contain no start-actions class', () => (
        expect(actionFooter.find('.start-actions').length).toBe(0)
      ));

      it('should contain no end-actions class', () => (
        expect(actionFooter.find('.end-actions').length).toBe(0)
      ));
    });

    describe('with only a start action', () => {
      const actionFooter = shallow(<ActionFooter start="Start Action" />);

      it("should render an 'BlockActionFooter'", () => (
        expect(actionFooter.find('BlockActionFooter').length).toBe(1)
      ));

      it('should contain one start-actions class', () => (
        expect(actionFooter.find('.start-actions').length).toBe(1)
      ));

      it('should contain no end-actions class', () => (
        expect(actionFooter.find('.end-actions').length).toBe(0)
      ));
    });

    describe('with only an end action', () => {
      const actionFooter = shallow(<ActionFooter end="End Action" />);

      it("should render an 'BlockActionFooter'", () => (
        expect(actionFooter.find('BlockActionFooter').length).toBe(1)
      ));

      it('should contain no start-actions class', () => (
        expect(actionFooter.find('.start-actions').length).toBe(0)
      ));

      it('should contain one end-actions class', () => (
        expect(actionFooter.find('.end-actions').length).toBe(1)
      ));
    });

    describe('with both start and end actions', () => {
      const actionFooter = shallow(<ActionFooter start="Start Action" end="End Action" />);

      it("should render an 'BlockActionFooter'", () => (
        expect(actionFooter.find('BlockActionFooter').length).toBe(1)
      ));

      it('should contain one start-actions class', () => (
        expect(actionFooter.find('.start-actions').length).toBe(1)
      ));

      it('should contain one end-actions class', () => (
        expect(actionFooter.find('.end-actions').length).toBe(1)
      ));
    });
  });
});
