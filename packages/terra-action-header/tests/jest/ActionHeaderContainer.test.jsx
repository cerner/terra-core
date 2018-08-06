import React from 'react';
import intlContexts from './intl-context-setup';
import ActionHeaderContainer from '../../src/_ActionHeaderContainer';

describe('ActionHeaderContainer', () => {
  describe('Snapshot Tests', () => {
    it('should render a container with a border', () => {
      const actionHeaderContainer = <ActionHeaderContainer title="Action Header" level={1} />;
      const wrapper = shallow(actionHeaderContainer, intlContexts.shallowContext);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a container with no border', () => {
      const actionHeaderContainer = <ActionHeaderContainer title="Action Header" isBorderless level={1} />;
      const wrapper = shallow(actionHeaderContainer, intlContexts.shallowContext);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Structure Tests', () => {
    describe('with isBorderless not set', () => {
      const actionHeaderContainer = shallow(<ActionHeaderContainer title="Action Header" level={1} />);

      it('should contain the with-border class', () => {
        expect(actionHeaderContainer.find('.with-border').length).toBe(1);
      });
    });

    describe('with isBorderless set to false', () => {
      const actionHeaderContainer = shallow((
        <ActionHeaderContainer
          title="Action Header"
          level={1}
          isBorderless={false}
        />));

      it('should contain the with-border class', () => {
        expect(actionHeaderContainer.find('.with-border').length).toBe(1);
      });
    });

    describe('with isBorderless set to true', () => {
      const actionHeaderContainer = shallow(<ActionHeaderContainer title="Action Header" level={1} isBorderless />);

      it('should contain the with-border class', () => {
        expect(actionHeaderContainer.find('.with-border').length).toBe(0);
      });
    });
  });
});
