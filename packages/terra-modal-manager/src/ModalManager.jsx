import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modal from 'terra-modal';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';
import SlideGroup from 'terra-slide-group';
import getBreakpoints from 'terra-responsive-element/lib/breakpoints';

import './ModalManager.scss';

const propTypes = {
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   */
  app: AppDelegate.propType,

  /**
   * Components that will receive the ModalManager's AppDelegate configuration. Components given as children must appropriately handle an `app` prop.
   */
  children: PropTypes.node,

  /**
   * From `connect`. The Array of component data (key, name, and props) that will be used to instantiate the Modal's inner components.
   */
  modalComponentData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    props: PropTypes.object,
  })),

  /**
   * From `connect`. The desired size of the modal.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * From `connect`. The focus state of the modal.
   */
  isFocused: PropTypes.bool,

  /**
   * From `connect`. The presentation state of the modal.
   */
  isOpen: PropTypes.bool,

  /**
   * From `connect`. The maximization state of the modal.
   */
  isMaximized: PropTypes.bool,

  /**
   * From `connect`. A function that dispatches an `open` action.
   */
  openModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `close` action.
   */
  closeModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `push` action.
   */
  pushModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `pop` action.
   */
  popModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `maximize` action.
   */
  maximizeModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `minimize` action.
   */
  minimizeModal: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `loseFocus` action for the Modal to lose the focus.
   */
  loseFocus: PropTypes.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `gainFocus` action for the Modal to gain focus.
   */
  gainFocus: PropTypes.func.isRequired,
};

const defaultProps = {
  isFocused: true,
  isOpen: false,
  isMaximized: false,
  size: 'small',
  modalComponentData: [],
};

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    // I'm tracking the responsive-fullscreen state outside of React and Redux state to limit the number of
    // renderings that occur.
    this.forceFullscreenModal = false;

    this.updateFullscreenState = this.updateFullscreenState.bind(this);
    this.buildModalComponents = this.buildModalComponents.bind(this);
  }

  componentDidMount() {
    this.updateFullscreenState();
    window.addEventListener('resize', this.updateFullscreenState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateFullscreenState);
  }

  updateFullscreenState() {
    const previousFullscreenState = this.forceFullscreenModal;

    this.forceFullscreenModal = window.innerWidth < getBreakpoints().small;

    // Only update the modal if it's minimized, open, and changing states.
    if (!this.props.isMaximized && this.props.isOpen && previousFullscreenState !== this.forceFullscreenModal) {
      this.forceUpdate();
    }
  }

  buildModalComponents() {
    const { modalComponentData, isFocused, isMaximized, pushModal, popModal, closeModal, maximizeModal, minimizeModal, loseFocus, gainFocus } = this.props;

    return modalComponentData.map((componentData, index) => {
      const ComponentClass = AppDelegate.getComponentForDisclosure(componentData.name);

      if (!ComponentClass) {
        return undefined;
      }

      const appDelegate = AppDelegate.create({
        disclose: (data) => {
          pushModal(data);
        },
        dismiss: (index > 0 ?
          (data) => {
            popModal(data);
          } :
          (data) => {
            closeModal(data);
          }
        ),
        closeDisclosure: (data) => { closeModal(data); },
        goBack: index > 0 ? (data) => { popModal(data); } : null,
        maximize: !isMaximized ? (data) => { maximizeModal(data); } : null,
        minimize: isMaximized ? (data) => { minimizeModal(data); } : null,
        releaseFocus: !isFocused ? (data) => { gainFocus(data); } : null,
        requestFocus: isFocused ? (data) => { loseFocus(data); } : null,
      });

      return <ComponentClass key={componentData.key} {...componentData.props} app={appDelegate} />;
    });
  }

  /**
   * The provided child components are cloned and provided with an AppDelegate instance that contains a new disclose
   * function that will allow for modal presentation. If an AppDelegate was already provided to the ModalManager through
   * props, its implementations will be used for APIs not implemented by the ModalManager.
   */
  buildChildren() {
    const { app, children, openModal } = this.props;

    return React.Children.map(children, (child) => {
      const childAppDelegate = AppDelegate.clone(app, {
        disclose: (data) => {
          if (data.preferredType === 'modal' || !app) {
            openModal(data);
          } else {
            app.disclose(data);
          }
        },
      });

      return React.cloneElement(child, { app: childAppDelegate });
    });
  }

  render() {
    const { closeModal, size, isFocused, isOpen, isMaximized } = this.props;

    const modalClassNames = classNames([
      'terra-ModalManager-modal',
      { [`terra-ModalManager-modal--${size}`]: !(isMaximized || this.forceFullscreenModal) },
    ]);

    return (
      <div className="terra-ModalManager">
        {this.buildChildren()}
        <Modal
          isFocused={isFocused}
          isOpen={isOpen}
          isFullscreen={isMaximized || this.forceFullscreenModal}
          classNameModal={modalClassNames}
          onRequestClose={closeModal}
          closeOnEsc
          closeOnOutsideClick={false}
          ariaLabel="Modal"
        >
          <SlideGroup items={this.buildModalComponents()} isAnimated />
        </Modal>
      </div>
    );
  }
}

ModalManager.propTypes = propTypes;
ModalManager.defaultProps = defaultProps;

export default ModalManager;
