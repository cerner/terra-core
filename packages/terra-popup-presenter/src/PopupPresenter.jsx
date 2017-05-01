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
  onClose: PropTypes.close,
  target: PropTypes.element.isRequired,
  targetAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions),
  targetOffset: PropTypes.string,
};

const defaultProps = {
  isOpen: false,
  renderElementTag: 'div',
  renderElementTo: null,
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

    let clickOutsideHandler;
    if (closeOnOutsideClick) {
      clickOutsideHandler = this.handleClickOutside;
    }

    let wrappedContent;
    if (isOpen && content) {
      wrappedContent = (
        <WrappedPopupFrame 
          className={className}
          closeOnEsc={closeOnEsc}
          closeOnOutsideClick={closeOnOutsideClick}
          onClose={onRequestClose}>{content}
        </WrappedPopupFrame>
      );
    }

    return (
      <TetherComponent
        constraints={constraints}
        content={wrappedContent}
        contentAttachment={contentAttachment}
        contentOffset={contentOffset}
        isEnabled={true}
        target={target}
        targetAttachment={targetAttachment}
        targetOffset={targetOffset}
      />
    );
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
