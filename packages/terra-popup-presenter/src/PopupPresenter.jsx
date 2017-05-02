import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import onClickOutside from 'react-onclickoutside'
import PopupFrame from './PopupFrame'
import TetherComponent from './TetherComponent'

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  constraints: PropTypes.array,
  content: PropTypes.element,
  contentAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions).isRequired,
  contentOffset: PropTypes.string,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  target: PropTypes.element.isRequired,
  targetAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions),
  targetOffset: PropTypes.string,
};

const defaultProps = {
  isOpen: false,
};

const WrappedPopupFrame = onClickOutside(PopupFrame);

class PopupPresenter extends React.Component {

  render () {
    const {
      className, 
      closeOnEsc,
      closeOnOutsideClick,
      constraints,
      content,
      contentAttachment,
      contentOffset,
      isOpen,
      onRequestClose,
      target,
      targetAttachment,
      targetOffset,
      ...customProps 
    } = this.props; // eslint-disable-line no-unused-vars

    let wrappedContent;
    if (isOpen && content) {
      wrappedContent = (
        <WrappedPopupFrame 
          className={className}
          closeOnEsc={closeOnEsc}
          closeOnOutsideClick={closeOnOutsideClick}
          onRequestClose={onRequestClose}>{content}
        </WrappedPopupFrame>
      );
    }

    const tetherOptions = {
      contentAttachment,
      isEnabled: true,
      target,
    };

    //Optional parameters
    if (wrappedContent) {
      tetherOptions.content = wrappedContent;
    }
    if (constraints) {
      tetherOptions.constraints = constraints;
    }
    if (contentOffset) {
      tetherOptions.offset = contentOffset;
    }
    if (targetOffset) {
      tetherOptions.targetOffset = targetOffset;
    }
    if (targetAttachment) {
      tetherOptions.targetAttachment = targetAttachment;
    }

    return <TetherComponent {...tetherOptions} />;
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
