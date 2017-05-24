import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import onClickOutside from 'react-onclickoutside'
import PopupFrame from './PopupFrame'
import PopupArrow from './PopupArrow'
import TetherComponent from './TetherComponent'

const propTypes = {
  /**
   * Should the popup trigger a close event on esc keydown.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * Should the popup trigger a close event click outside.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Content to be displayed within the popup.
   */
  content: PropTypes.element,
  /**
   * Attachment point for the popup, this will be mirrored to the target.
   */
  contentAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions).isRequired,
  /**
   * Should the popup be presented as open.
   */
  isOpen: PropTypes.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func,
  /**
   * Should an arrow be placed at the attachment point.
   */
  showArrow: PropTypes.bool,
  /**
   * Presenting element for the popup.
   */
  target: PropTypes.element.isRequired,
};

const MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

const MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

const defaultProps = {
  isOpen: false,
  showArrow: false,
};

const WrappedPopupFrame = onClickOutside(PopupFrame);

class PopupPresenter extends React.Component {

  static mirrorAttachment(attachment) {
    const parsedValue = PopupPresenter.parseStringPosition(attachment);
    let horizontal = parsedValue.horizontal;
    let vertical = parsedValue.vertical;

    if (parsedValue.vertical === 'middle') {
      horizontal = MIRROR_LR[parsedValue.horizontal];
    } else {
      vertical = MIRROR_TB[parsedValue.vertical];
    }

    return vertical + ' ' + horizontal;
  }

  static parseStringPosition(value) {
    const [vertical, horizontal] = value.split(' ');
    return {vertical, horizontal};
  }

  static attachPositionFromAlignment(alignment, start, length) {
    if (alignment === 'center') {
      return start + length / 2;
    }else if (alignment === 'right'){
      return start + length;
    }
    return start;
  }

  static arrowPositionFromBounds(targetBounds, popUpBounds, attachment, offset) {
    if (['top', 'bottom'].indexOf(attachment.vertical) >= 0) {
      if (popUpBounds.left + popUpBounds.width - offset >= targetBounds.left && popUpBounds.left + offset <= targetBounds.left + targetBounds.width) {
        if (targetBounds.top < popUpBounds.top) {
          return 'top'
        } else if (targetBounds.bottom < popUpBounds.bottom) {
          return 'bottom'
        }
      }
    } else {
      if (popUpBounds.top + popUpBounds.height - offset >= targetBounds.top && popUpBounds.top + offset <= targetBounds.top + targetBounds.height) {
        if (targetBounds.left < popUpBounds.left) {
          return 'left'
        } else if (targetBounds.right < popUpBounds.right) {
          return 'right'
        }
      }
    }
  }

  constructor(props) {
    super(props);
    this.handleTetherRepositioned = this.handleTetherRepositioned.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
    this.setFrameNode = this.setFrameNode.bind(this);
  }

  setArrowPosition(targetBounds, popUpBounds) {
    const parsedAttachment = PopupPresenter.parseStringPosition(this.props.contentAttachment);
    const position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds, parsedAttachment, PopupArrow.arrowSize);

    if (!position) {
      this._arrowNode.classList.remove(PopupArrow.positionClasses['top']);
      this._arrowNode.classList.remove(PopupArrow.positionClasses['bottom']);
      this._arrowNode.classList.remove(PopupArrow.positionClasses['left']);
      this._arrowNode.classList.remove(PopupArrow.positionClasses['right']);
      return;
    }

    this._arrowNode.classList.remove(PopupArrow.oppositePositionClasses[position])
    this._frameNode.classList.remove(PopupFrame.oppositePositionClasses[position])

    this._arrowNode.classList.add(PopupArrow.positionClasses[position]);
    this._frameNode.classList.add(PopupFrame.positionClasses[position]);

    if (['top', 'bottom'].indexOf(position) >= 0) {
      this._arrowNode.style.left = this.leftOffset(targetBounds, popUpBounds, parsedAttachment.horizontal, PopupArrow.arrowSize); 
    } else {
      this._arrowNode.style.top = this.topOffset(targetBounds, popUpBounds, PopupArrow.arrowSize);
    }
  }

  leftOffset(targetBounds, popUpBounds, arrowAlignment, offset) {
    const targetAttachPosition = PopupPresenter.attachPositionFromAlignment(arrowAlignment, targetBounds.left, targetBounds.width);
    const popupAttachPosition = PopupPresenter.attachPositionFromAlignment(arrowAlignment, popUpBounds.left, popUpBounds.width);

    const leftOffset = targetAttachPosition - popupAttachPosition;

    let leftPosition = 0;
    if (arrowAlignment === 'right') {
      leftPosition = popUpBounds.width;
    } else if (arrowAlignment === 'center') {
      leftPosition = popUpBounds.width / 2;
    }

    let newLeftPosition = leftPosition + leftOffset;
    if (newLeftPosition > popUpBounds.width - offset) {
      newLeftPosition = popUpBounds.width - offset;
    } else if (newLeftPosition < offset) {
      newLeftPosition = offset;
    }

    return (offset + newLeftPosition).toString() + 'px';
  }

  topOffset(targetBounds, popUpBounds, offset) {
    const targetAttachPosition = targetBounds.top + targetBounds.height / 2;
    const popupAttachPosition = popUpBounds.top + popUpBounds.height / 2;

    const topOffset = targetAttachPosition - popupAttachPosition;
    const topPosition = popUpBounds.height / 2;

    let newTopPosition = topPosition + topOffset;
    if (newTopPosition > popUpBounds.height - offset) {
      newTopPosition = popUpBounds.height - offset;
    } else if (newTopPosition < offset) {
      newTopPosition = offset;
    }

    return (offset + newTopPosition).toString() + 'px';
  }

  handleTetherRepositioned(event, targetBounds, presenterBounds) {
    if (this._arrowNode) {
      this.setArrowPosition(targetBounds, presenterBounds);
    }
  }

  setArrowNode(node) {
    this._arrowNode = node;
  }

  setFrameNode(node) {
    this._frameNode = node;
  }

  render () {
    const {
      classes,
      closeOnEsc,
      closeOnOutsideClick,
      content,
      contentOffset,
      isOpen,
      onRequestClose,
      onUpdate,
      optimizations,
      renderElementTag,
      renderElementTo,
      showArrow,
      targetModifier,
      targetOffset,
      ...customProps 
    } = this.props; // eslint-disable-line no-unused-vars

    let wrappedContent;
    if (isOpen && content) {
      let arrow;
      let frameClasses;
      if (showArrow) {
        arrow = <PopupArrow refCallback={this.setArrowNode} />;

        const parsedAttachment = PopupPresenter.parseStringPosition(this.props.contentAttachment);
        const isVerticalPosition = ['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0;
        const position = isVerticalPosition ? parsedAttachment.vertical : parsedAttachment.horizontal;
        frameClasses = PopupFrame.positionClasses[position];
      }

      const frameProps = {
        arrow,
        className: frameClasses,
        closeOnEsc,
        closeOnOutsideClick,
        content,
        onRequestClose,
        refCallback: this.setFrameNode,
      };

      wrappedContent = <WrappedPopupFrame {...frameProps} />;
    }
  
    const constraints = [
      {
        to: 'window',
        attachment: 'together',
        pin: true,
      },
    ];  

    const tetherOptions = {
      ...customProps,
      classPrefix: 'terra-Popup',
      constraints,
      content: wrappedContent,
      // disableOnPosition: true,
      // disablePageScroll: true,
      isEnabled: true,
      onRepositioned: this.handleTetherRepositioned,
      targetAttachment: PopupPresenter.mirrorAttachment(this.props.contentAttachment),
    };

    return <TetherComponent {...tetherOptions} />;
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
