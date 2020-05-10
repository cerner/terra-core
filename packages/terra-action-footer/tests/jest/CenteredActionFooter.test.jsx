import React from 'react';
import CenteredActionFooter from '../../src/CenteredActionFooter';

describe('CenteredActionFooter', () => {
  // Snapshot Tests
  describe('Snapshot Tests', () => {
    it('should render an empty footer', () => {
      const component = <CenteredActionFooter />;
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with an anchor', () => {
      const component = <CenteredActionFooter center={<a href="/">Test</a>} />;
      expect(shallow(component)).toMatchSnapshot();
    });

    it('should render a footer with two buttons', () => {
      const component = (
        <CenteredActionFooter
          center={(
            <div>
              <button type="button">Button 1</button>
              <button type="button">Button 2</button>
            </div>
)}
        />
      );
      expect(shallow(component)).toMatchSnapshot();
    });
  });

  // Prop Tests
  describe('Prop Tests', () => {
    describe('without a center action', () => {
      const centeredActionFooter = mount(<CenteredActionFooter />);

      it('should display no actions', () => (
        expect(centeredActionFooter).toMatchSnapshot()
      ));
    });

    describe('with a center action', () => {
      const centeredActionFooter = mount(<CenteredActionFooter center="Center Action" />);

      it('should display a center action', () => (
        expect(centeredActionFooter).toMatchSnapshot()
      ));
    });
  });

  // Structure Tests
  describe('Structure Tests', () => {
    describe('without a center action', () => {
      const centeredActionFooter = shallow(<CenteredActionFooter />);

      it('should contain the centered-action-footer class', () => (
        expect(centeredActionFooter.find('.centered-action-footer').length).toBe(1)
      ));

      it("should render an 'BlockActionFooter'", () => (
        expect(centeredActionFooter.find('BlockActionFooter').length).toBe(1)
      ));
    });

    describe('with a center action', () => {
      const centeredActionFooter = shallow(<CenteredActionFooter center="Center Action" />);

      it('should contain the centered-action-footer class', () => (
        expect(centeredActionFooter.find('.centered-action-footer').length).toBe(1)
      ));

      it("should render an 'BlockActionFooter'", () => (
        expect(centeredActionFooter.find('BlockActionFooter').length).toBe(1)
      ));
    });
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const component = mount(<CenteredActionFooter center="Center Action" />);
    expect(component).toMatchSnapshot();
  });
});
