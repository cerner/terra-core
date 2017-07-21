import React from 'react';
import AppDelegate from 'terra-app-delegate';
import ModalManager from '../../src/ModalManager';

const TestContainer = () => (
  <div>Hello World</div>
);

const openModal = () => {};
const closeModal = () => {};
const pushModal = () => {};
const popModal = () => {};
const maximizeModal = () => {};
const minimizeModal = () => {};
const gainFocus = () => {};
const loseFocus = () => {};

const requiredProps = { openModal, closeModal, pushModal, popModal, maximizeModal, minimizeModal, gainFocus, loseFocus };

describe('ModalManger', () => {
  it('should render the ModalManager with defaults', () => {
    const modalManager = (
      <ModalManager
        {...requiredProps}
      >
        <TestContainer />
      </ModalManager>
    );

    const result = shallow(modalManager);
    expect(result).toMatchSnapshot();
  });

  describe('- sizes -', () => {
    it('should render the ModalManager with tiny size', () => {
      const modalManager = (
        <ModalManager
          size="tiny"
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });

    it('should render the ModalManager with small size', () => {
      const modalManager = (
        <ModalManager
          size="small"
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });

    it('should render the ModalManager with medium size', () => {
      const modalManager = (
        <ModalManager
          size="medium"
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });

    it('should render the ModalManager with large size', () => {
      const modalManager = (
        <ModalManager
          size="large"
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });

    it('should render the ModalManager with huge size', () => {
      const modalManager = (
        <ModalManager
          size="huge"
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });
  });

  describe('- isOpen -', () => {
    it('should render the ModalManager as open', () => {
      const modalManager = (
        <ModalManager
          isOpen
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });
  });

  describe('- isMaximized -', () => {
    it('should render the ModalManager as maximized', () => {
      const modalManager = (
        <ModalManager
          isMaximized
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });
  });

  describe('- isFocused -', () => {
    it('should render the ModalManager with focus trapped', () => {
      const modalManager = (
        <ModalManager
          isMaximized
          isFocused
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });
  });

  describe('- focus lost -', () => {
    it('should render the ModalManager with focus lost', () => {
      const modalManager = (
        <ModalManager
          isMaximized
          isFocused={false}
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });
  });

  describe('- app -', () => {
    it('should render the ModalManager with given AppDelegate as source', () => {
      const modalManager = (
        <ModalManager
          app={AppDelegate.create({
            disclose: () => {},
            dismiss: () => {},
          })}
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });
  });

  describe('- modal components -', () => {
    it('should render the ModalManager with given modal contents', () => {
      AppDelegate.getComponentForDisclosure = jest.fn()
        .mockReturnValueOnce(TestContainer)
        .mockReturnValueOnce(TestContainer);

      const modalManager = (
        <ModalManager
          modalComponentData={[{
            name: 'TestContainer',
            props: {
              display: 'NUMBER 1',
            },
            key: 'KEY_1',
          }, {
            name: 'TestContainer',
            props: {
              display: 'NUMBER 2',
            },
            key: 'KEY_2',
          }]}
          isOpen
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });

    it('should render the ModalManager with given modal contents when maximized', () => {
      AppDelegate.getComponentForDisclosure = jest.fn()
        .mockReturnValueOnce(TestContainer)
        .mockReturnValueOnce(TestContainer);

      const modalManager = (
        <ModalManager
          modalComponentData={[{
            name: 'TestContainer',
            props: {
              display: 'NUMBER 1',
            },
            key: 'KEY_1',
          }, {
            name: 'TestContainer',
            props: {
              display: 'NUMBER 2',
            },
            key: 'KEY_2',
          }]}
          isOpen
          isMaximized
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });

    it('should render the ModalManager with given modal contents when components cannot be retrieved', () => {
      AppDelegate.getComponentForDisclosure = jest.fn()
        .mockReturnValueOnce(undefined)
        .mockReturnValueOnce(undefined);

      const modalManager = (
        <ModalManager
          modalComponentData={[{
            name: 'TestContainer',
            props: {
              display: 'NUMBER 1',
            },
            key: 'KEY_1',
          }, {
            name: 'TestContainer',
            props: {
              display: 'NUMBER 2',
            },
            key: 'KEY_2',
          }]}
          isOpen
          isMaximized
          {...requiredProps}
        >
          <TestContainer />
        </ModalManager>
      );

      const result = shallow(modalManager);
      expect(result).toMatchSnapshot();
    });
  });
});
