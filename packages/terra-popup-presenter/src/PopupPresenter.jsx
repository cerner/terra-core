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
const ARROW_CLASSES = [
  'terra-PopupArrow--alignTop',
  'terra-PopupArrow--alignBottom',
  'terra-PopupArrow--alignLeft',
  'terra-PopupArrow--alignRight',
];

const FRAME_CLASSES = [
  'terra-PopupFrame--arrowTop',
  'terra-PopupFrame--arrowBottom',
  'terra-PopupFrame--arrowLeft',
  'terra-PopupFrame--arrowRight',
];

const defaultProps = {
  isOpen: false,
  showArrow: false,
};

const WrappedPopupFrame = onClickOutside(PopupFrame);

class PopupPresenter extends React.Component {

  static mirrorAttachment(attachment) {
    const parsedValue = parePopupPresenter.parseStringPosition(attachment);
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

  static arrowPositionFromBounds(targetBounds, popUpBounds) {
    const pointOverlap = this.cornersOverlapByPopup(targetBounds, popUpBounds);

    if (pointOverlap.topLeft && pointOverlap.topRight && pointOverlap.bottomLeft && pointOverlap.bottomRight) {
      return [];
    }

    if (pointOverlap.topLeft && pointOverlap.topRight) {
      return ['bottom'];
    }

    if (pointOverlap.topRight && pointOverlap.bottomRight) {
      return ['left'];
    }

    if (pointOverlap.bottomLeft && pointOverlap.bottomRight) {
      return ['top'];
    }

    if (pointOverlap.topLeft && pointOverlap.bottomLeft) {
      return ['right'];
    }

    if (pointOverlap.topLeft) {
      return ['top', 'left'];
    }

    if (pointOverlap.topRight) {
      return ['top', 'right'];
    }

    if (pointOverlap.bottomLeft) {
      return ['bottom', 'left'];
    }

    if (pointOverlap.bottomRight) {
      return ['bottom', 'right'];
    }

    return ['top', 'bottom', 'left', 'right'];
  }

  static cornersOverlapByPopup(targetBounds, popUpBounds) {
    const pointOverlap = {};
    const topLeft = {x: targetBounds.left, y: targetBounds.top};
    const topRight = {x: targetBounds.left + targetBounds.width, y: targetBounds.top};
    const bottomLeft = {x: targetBounds.left, y: targetBounds.top + targetBounds.height};
    const bottomRight = {x: targetBounds.left + targetBounds.width, y: targetBounds.top + targetBounds.height};

    pointOverlap.topLeft = this.isPointContainedWithinBounds(topLeft, popUpBounds);
    pointOverlap.topRight = this.isPointContainedWithinBounds(topRight, popUpBounds);
    pointOverlap.bottomLeft = this.isPointContainedWithinBounds(bottomLeft, popUpBounds);
    pointOverlap.bottomRight = this.isPointContainedWithinBounds(bottomRight, popUpBounds);

    return pointOverlap;
  }

  static isPointContainedWithinBounds(point, bounds) {
    if (point.x < bounds.left || point.x > bounds.left + bounds.width) {
      return false;
    } else if (point.y < bounds.top || point.y > bounds.top + bounds.height) {
      return false;
    }
    return true;
  }

  constructor(props) {
    super(props);
    this.handleTetherRepositioned = this.handleTetherRepositioned.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
    this.setFrameNode = this.setFrameNode.bind(this);
  }

  attachPositionFromAlignment(alignment, start, length) {
    if (alignment === 'Middle') {
      return start + length / 2;
    }else if (alignment === 'End'){
      return start + length;
    }
    return start;
  }

  setArrowPosition(targetBounds, popUpBounds) {
    const position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds);
    const targetAttachment = PopupPresenter.mirrorAttachment(this.props.contentAttachment);

    if (position) {
      return;
    }

    if (position.indexOf('top') >= 0) {
      this._arrowNode.style.top = this.horizontalOffset(targetBounds, popUpBounds, targetAttachment, this.props.contentAttachment, ARROW_OFFSET);
      this._arrowNode.classList.add(ARROW_CLASSES[0]);
      this._frameNode.classList.add(FRAME_CLASSES[0]);
    } else if (position.indexOf('bottom') >= 0) {
      this._arrowNode.style.top = this.horizontalOffset(targetBounds, popUpBounds, targetAttachment, this.props.contentAttachment, ARROW_OFFSET);
      this._arrowNode.classList.add(ARROW_CLASSES[1]);
      this._frameNode.classList.add(FRAME_CLASSES[1]);
    } else if (position.indexOf('left') >= 0) { 
      this._arrowNode.style.top = this.verticalOffset(targetBounds, popUpBounds, targetAttachment, this.props.contentAttachment, ARROW_OFFSET);
      this._arrowNode.classList.add(ARROW_CLASSES[2]);
      this._frameNode.classList.add(FRAME_CLASSES[2]);
    } else {
      this._arrowNode.style.top = this.verticalOffset(targetBounds, popUpBounds, targetAttachment, this.props.contentAttachment, ARROW_OFFSET);
      this._arrowNode.classList.add(ARROW_CLASSES[3]);
      this._frameNode.classList.add(FRAME_CLASSES[3]);
    }
  }

  horizontalOffset(targetBounds, popUpBounds, targetAttachment, contentAttachment, offset) {
    if (this.horizontalSegmentIntersected(targetBounds, popUpBounds, offset)) {
      const insetStart = popUpBounds.left + offset;
      const insetEnd = popUpBounds.left + popUpBounds.width - offset;
      const targetStart = targetBounds.left;
      const targetEnd = targetBounds.left + targetBounds.width;

      const targetAlignment = PopupPresenter.arrowAlignmentFromAttachment(targetAttachment);
      const targetAttachPosition = this.attachPositionFromAlignment(targetAlignment, targetBounds.left, targetBounds.width);

      const contentAlignment = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
      const contentAttachPosition = this.attachPositionFromAlignment(contentAlignment, popUpBounds.left, popUpBounds.width);

      if (targetAttachPosition >= insetStart && targetAttachPosition <= insetEnd) {
        return Math.abs(contentAttachPosition - targetAttachPosition).toString() + 'px';
      }
    }
    return '';
  }

  verticalOffset(targetBounds, popUpBounds, targetAttachment, contentAttachment, offset) {
    if (this.verticalSegmentIntersected(targetBounds, popUpBounds)) {
      const insetStart = popUpBounds.top + offset;
      const insetEnd = popUpBounds.top + popUpBounds.height - offset;
      const targetStart = targetBounds.top;
      const targetEnd = targetBounds.top + targetBounds.height;

      const targetAlignment = PopupPresenter.arrowAlignmentFromAttachment(targetAttachment);
      const targetAttachPosition = this.attachPositionFromAlignment(targetAlignment, targetBounds.top, targetBounds.height);

      const contentAlignment = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
      const contentAttachPosition = this.attachPositionFromAlignment(contentAlignment, popUpBounds.top, popUpBounds.height);

      if (targetAttachPosition >= insetStart && targetAttachPosition <= insetEnd) {
        return Math.abs(contentAttachPosition - targetAttachPosition).toString() + 'px';
      }
    }
    return '';
  }

  horizontalSegmentIntersected(targetBounds, popUpBounds, arrowOffset) {
    const firstStart = popUpBounds.left + arrowOffset;
    const firstEnd = popUpBounds.left + popUpBounds.width - arrowOffset;
    const secondStart = targetBounds.left;
    const secondEnd = targetBounds.left + targetBounds.width;

    return this.segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd);
  }

  verticalSegmentIntersected(targetBounds, popUpBounds, arrowOffset) {
    const firstStart = popUpBounds.top + arrowOffset;
    const firstEnd = popUpBounds.top + popUpBounds.height - arrowOffset;
    const secondStart = targetBounds.top;
    const secondEnd = targetBounds.top + targetBounds.height;

    return this.segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd);
  }

  segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd) {
    if ((firstStart >= secondStart && firstStart<= secondEnd) || (firstEnd >= secondStart && firstEnd <= secondEnd)) {
      return true;
    } else if ((secondStart >= firstStart && secondStart<= firstEnd) || (secondEnd >= firstStart && secondEnd <= firstEnd)) {
      return true;
    }
    return false;
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
      contentAttachment,
      contentOffset,
      isOpen,
      onRequestClose,
      onUpdate,
      optimizations,
      renderElementTag,
      renderElementTo,
      showArrow,
      target,
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
      targetAttachment: PopupPresenter.mirrorAttachment(contentAttachment),
    };

    return <TetherComponent {...tetherOptions} />;
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
