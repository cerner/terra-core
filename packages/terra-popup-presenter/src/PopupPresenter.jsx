import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import onClickOutside from 'react-onclickoutside';
import Popup from './Popup';
import PopupArrow from './PopupArrow';// consider dot notation
import PopupOverlay from './PopupOverlay';
import TetherComponent from './TetherComponent';
import Portal from 'react-portal';

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

const propTypes = {
  /**
   * Bounding container for the popup.
   */
  boundingRef: PropTypes.func,
  /**
   * The content to be displayed within the popup.
   */
  content: PropTypes.element,
  /**
   * Attachment point for the popup, this will be mirrored to the target.
   */
  contentAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions),
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
  targetRef: PropTypes.func,
  /**
   * String representation of the z-index.
   */
  zIndex: PropTypes.string,
};

const defaultProps = {
  content: undefined,
  contentAttachment: 'top center',
  isOpen: false,
  showArrow: false,
  zIndex: '',
};

const WrappedPopup = onClickOutside(Popup);

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

  static leftOffset(targetBounds, popUpBounds, arrowAlignment, offset) {
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

  static topOffset(targetBounds, popUpBounds, offset) {
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

  static setArrowPosition(targetBounds, popUpBounds, attachment, arrowNode, frameNode) {
    const parsedAttachment = PopupPresenter.parseStringPosition(attachment);
    const position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds, parsedAttachment, PopupArrow.arrowSize);

    if (!position) {
      arrowNode.classList.remove(PopupArrow.positionClasses['top']);
      arrowNode.classList.remove(PopupArrow.positionClasses['bottom']);
      arrowNode.classList.remove(PopupArrow.positionClasses['left']);
      arrowNode.classList.remove(PopupArrow.positionClasses['right']);
      return;
    }

    arrowNode.classList.remove(PopupArrow.oppositePositionClasses[position])
    frameNode.classList.remove(Popup.oppositePositionClasses[position])

    arrowNode.classList.add(PopupArrow.positionClasses[position]);
    frameNode.classList.add(Popup.positionClasses[position]);

    if (['top', 'bottom'].indexOf(position) >= 0) {
      arrowNode.style.left = PopupPresenter.leftOffset(targetBounds, popUpBounds, parsedAttachment.horizontal, PopupArrow.arrowSize); 
    } else {
      arrowNode.style.top = PopupPresenter.topOffset(targetBounds, popUpBounds, PopupArrow.arrowSize);
    }
  }

  constructor(props) {
    super(props);
    this.handleTetherRepositioned = this.handleTetherRepositioned.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
    this.setFrameNode = this.setFrameNode.bind(this);
  }

  handleTetherRepositioned(event, targetBounds, presenterBounds) {
    if (this._arrowNode && this._frameNode) {
      PopupPresenter.setArrowPosition(targetBounds, presenterBounds, this.props.contentAttachment, this._arrowNode, this._frameNode);
    }
  }

  setArrowNode(node) {
    this._arrowNode = node;
  }

  setFrameNode(node) {
    this._frameNode = node;
  }

  createPopup(content, boundingFrame, attachment, arrow, onRequestClose) {
    let popupClasses;
    if (arrow) {
      const parsedAttachment = PopupPresenter.parseStringPosition(this.props.contentAttachment);
      const isVerticalPosition = ['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0;
      const position = isVerticalPosition ? parsedAttachment.vertical : parsedAttachment.horizontal;
      popupClasses = Popup.positionClasses[position];
    }

    let popupStyle;
    if (boundingFrame) {
      popupStyle = {maxWidth: boundingFrame.clientWidth, maxHeight: boundingFrame.clientHeight};  
    }

    const popupProps = {
      arrow,
      content,
      className: popupClasses,
      onRequestClose,
      refCallback: this.setFrameNode,
      style: popupStyle,
    };

    return <WrappedPopup {...popupProps} />;
  }

  createPortalContent(tetherContent, boundingFrame, zIndex, useOverlay) {
    const overlayStyle = {zIndex};
    // if (boundingFrame) {
    //   overlayStyle.maxWidth = boundingFrame.clientWidth;
    //   overlayStyle.maxHeight = boundingFrame.clientHeight;  
    // }

    if (!useOverlay) {
      return tetherContent;
    }

    return (
      <PopupOverlay style={overlayStyle}>
        {tetherContent}
      </PopupOverlay>
    );
  }

  render () {
    const {
      boundingRef,
      classes,
      content,
      contentOffset,
      contentAttachment,
      isOpen,
      onRequestClose,
      onUpdate,
      optimizations,
      renderElementTag,
      renderElementTo,
      showArrow,
      targetModifier,
      targetOffset,
      zIndex,
      ...customProps,
    } = this.props; // eslint-disable-line no-unused-vars

    const boundingFrame = boundingRef ? boundingRef() : undefined;

    let popup;
    if (isOpen && content) {
      let arrow;
      if (showArrow) {
        arrow = <PopupArrow refCallback={this.setArrowNode} />;
      }
      popup = this.createPopup(content, boundingFrame, contentAttachment, arrow, onRequestClose);
    }
  
    const disableScrolling = true;
    const constraints = [
      {
        to: (boundingFrame || 'window'),
        attachment: 'together',
        pin: true,
      },
    ];  

    const tetherOptions = {
      ...customProps,
      classPrefix: 'terra-PopupPresenter',
      constraints,
      content: popup,
      contentAttachment,
      disableOnPosition: disableScrolling,
      isEnabled: true,
      onRepositioned: this.handleTetherRepositioned,
      targetAttachment: PopupPresenter.mirrorAttachment(contentAttachment),
      style: {zIndex},
    };

    const tetherCotent = <TetherComponent {...tetherOptions} />;

    return (
      <Portal {...customProps} isOpened={isOpen}>
        {this.createPortalContent(tetherCotent, boundingRef, zIndex, disableScrolling)}
      </Portal>
    );
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
