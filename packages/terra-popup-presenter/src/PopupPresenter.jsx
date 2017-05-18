import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import onClickOutside from 'react-onclickoutside'
import PopupFrame from './PopupFrame'
import PopupArrow from './PopupArrow'
import TetherComponent from './TetherComponent'

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  content: PropTypes.element,
  contentAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions).isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  showArrow: PropTypes.bool,
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

const ARROW_OFFSET = 10;
const ARROW_CLASSES = {
  top: 'terra-PopupArrow--alignTop',
  bottom: 'terra-PopupArrow--alignBottom',
  left: 'terra-PopupArrow--alignStart',
  right: 'terra-PopupArrow--alignEnd',
};

const FRAME_CLASSES = {
  top: 'terra-PopupFrame--arrowTop',
  bottom: 'terra-PopupFrame--arrowBottom',
  left: 'terra-PopupFrame--arrowStart',
  right: 'terra-PopupFrame--arrowEnd',
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

  static arrowPositionFromBounds(targetBounds, popUpBounds, contentAttachment, offset) {
    const parsedAttachment = PopupPresenter.parseStringPosition(contentAttachment);

    if (['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0) {
      if (targetBounds.top < popUpBounds.top && popUpBounds.top > offset) {
        return 'top'
      } else if (targetBounds.bottom < popUpBounds.bottom && popUpBounds.bottom > offset) {
        return 'bottom'
      }
    } else {
      if (targetBounds.left < popUpBounds.left && popUpBounds.left > offset) {
        return 'left'
      } else if (targetBounds.right < popUpBounds.right && popUpBounds.right > offset) {
        return 'right'
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
    const isVerticalPosition = ['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0;
    const originalPosition = isVerticalPosition ? parsedAttachment.vertical : parsedAttachment.horizontal;
    const position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds, this.props.contentAttachment, ARROW_OFFSET);

    if (!position) {
      this._frameNode.classList.remove(FRAME_CLASSES[originalPosition]);
      return;
    }

    if (position !== originalPosition) {
      this._frameNode.classList.remove(FRAME_CLASSES[originalPosition]);
      this._frameNode.classList.add(FRAME_CLASSES[position]);
    }

    this._arrowNode.classList.add(ARROW_CLASSES[position]);
    if (isVerticalPosition) {
      this._arrowNode.style.left = this.leftOffset(targetBounds, popUpBounds, parsedAttachment.horizontal, ARROW_OFFSET); 
    } else {
      this._arrowNode.style.top = this.topOffset(targetBounds, popUpBounds, ARROW_OFFSET);
    }
  }

  leftOffset(targetBounds, popUpBounds, arrowAlignment, offset) {
    const insetRange = popUpBounds.width - offset * 2;
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
    if (newLeftPosition > popUpBounds.width) {
      newLeftPosition = popUpBounds.width;
    } else if (newLeftPosition < 0) {
      newLeftPosition = 0;
    }

    const scaledPosition = (insetRange / popUpBounds.width) * newLeftPosition;

    return (offset + scaledPosition).toString() + 'px';
  }

  topOffset(targetBounds, popUpBounds, offset) {
    const insetRange = popUpBounds.height - offset * 2;
    const popupStart = popUpBounds.top;
    const popupEnd = popUpBounds.top + popUpBounds.height;

    const targetAttachPosition = targetBounds.top + targetBounds.height / 2;
    const popupAttachPosition = popUpBounds.top + popUpBounds.height / 2;

    const topOffset = targetAttachPosition - popupAttachPosition;
    const topPosition = popUpBounds.height / 2;

    let newTopPosition = topPosition + topOffset;
    if (newTopPosition > popUpBounds.height) {
      newTopPosition = popUpBounds.height;
    } else if (newTopPosition < 0) {
      newTopPosition = 0;
    }

    const scaledPosition = (insetRange / popUpBounds.height) * newTopPosition;

    return (offset + scaledPosition).toString() + 'px';
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
      if (showArrow) {
        arrow = <PopupArrow refCallback={this.setArrowNode} />;
      }

      const frameProps = {
        arrow,
        content,
        closeOnEsc,
        closeOnOutsideClick,
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
      disableAfterPosition: true,
      disablePageScrolling: true,
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
