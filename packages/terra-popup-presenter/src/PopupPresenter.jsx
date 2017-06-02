import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
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

const DIMENSIONS = [
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
];

const HEIGHT_VALUES = {
  tiny: 306,
  small: 432,
  medium: 558,
  large: 684,
  huge: 810,
};

const WIDTH_VALUES = {
  tiny: 544,
  small: 768,
  medium: 992,
  large: 1216,
  huge: 1440,
};

const COMBINE = () => {
  const combinations = [];
  for (let i = 0; i < DIMENSIONS.length; i += 1) {
    for (let j = 0; j < DIMENSIONS.length; j += 1) {
      combinations.push(DIMENSIONS[i] + ' ' + DIMENSIONS[j]);
    }
  }
  return combinations;
};

const DIMENSION_COMBINATIONS = COMBINE();

const propTypes = {
  /**
   * Bounding container for the popup, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
  /**
   * The children to be displayed as content within the popup.
   */
  children: PropTypes.node,
  /**
   * CSS classnames that are append to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * Attachment point for the popup, this will be mirrored to the target.
   */
  contentAttachment: PropTypes.oneOf(TetherComponent.attachmentPositions),
  /**
   * A string pair of breakpoint sizes, ('tiny', 'small', 'medium', 'large', 'huge'), i.e. 'vertical horizontal'
   */
  contentDimensions: PropTypes.oneOf(DIMENSION_COMBINATIONS),
  /**
   * Should the default header be disabled at small form factor.
   */
  disableHeader: PropTypes.bool,
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
};

const defaultProps = {
  children: [],
  classNameOverlay: null,
  contentAttachment: 'top center',
  contentDimensions: 'medium medium',
  disableHeader: false,
  isOpen: false,
  showArrow: false,
};

class PopupPresenter extends React.Component {

  static mirrorAttachment(attachment) {
    const parsedValue = PopupPresenter.parseStringPair(attachment);
    let horizontal = parsedValue.horizontal;
    let vertical = parsedValue.vertical;

    if (parsedValue.vertical === 'middle') {
      horizontal = MIRROR_LR[parsedValue.horizontal];
    } else {
      vertical = MIRROR_TB[parsedValue.vertical];
    }

    return vertical + ' ' + horizontal;
  }

  static parseStringPair(value) {
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

  static setArrowPosition(targetBounds, popUpBounds, attachment, arrowNode, popupNode) {
    const parsedAttachment = PopupPresenter.parseStringPair(attachment);
    const position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds, parsedAttachment, PopupArrow.arrowSize);

    if (!position) {
      arrowNode.classList.remove(PopupArrow.positionClasses['top']);
      arrowNode.classList.remove(PopupArrow.positionClasses['bottom']);
      arrowNode.classList.remove(PopupArrow.positionClasses['left']);
      arrowNode.classList.remove(PopupArrow.positionClasses['right']);
      return;
    }

    arrowNode.classList.remove(PopupArrow.oppositePositionClasses[position])
    popupNode.classList.remove(Popup.oppositePositionClasses[position])

    arrowNode.classList.add(PopupArrow.positionClasses[position]);
    popupNode.classList.add(Popup.positionClasses[position]);

    if (['top', 'bottom'].indexOf(position) >= 0) {
      arrowNode.style.left = PopupPresenter.leftOffset(targetBounds, popUpBounds, parsedAttachment.horizontal, PopupArrow.arrowSize); 
    } else {
      arrowNode.style.top = PopupPresenter.topOffset(targetBounds, popUpBounds, PopupArrow.arrowSize);
    }
  }

  static primaryArrowPosition(attachment) {
    const parsedAttachment = PopupPresenter.parseStringPair(attachment);
    const isVerticalPosition = ['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0;
    return isVerticalPosition ? parsedAttachment.vertical : parsedAttachment.horizontal;
  }

  constructor(props) {
    super(props);
    this.handleTetherRepositioned = this.handleTetherRepositioned.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
    this.setPopupNode = this.setPopupNode.bind(this);
  }

  handleTetherRepositioned(event, targetBounds, presenterBounds) {
    if (this._arrowNode && this._popupNode) {
      PopupPresenter.setArrowPosition(targetBounds, presenterBounds, this.props.contentAttachment, this._arrowNode, this._popupNode);
    }
  }

  setArrowNode(node) {
    this._arrowNode = node;
  }

  setPopupNode(node) {
    this._popupNode = node;
  }

  createPopup(children, contentDimensions, boundingFrame, attachment, arrow, onRequestClose, disableHeader) {
    let boundsProps;
    if (boundingFrame) {
      boundsProps = {
        contentHeightMax: boundingFrame.clientHeight,
        contentWidthMax: boundingFrame.clientWidth,
      };
    } else {
      boundsProps = {
        contentHeightMax: window.innerHeight,
        contentWidthMax: window.innerWidth,
      };
    }

    if (contentDimensions) {
      const parsedDimenions = PopupPresenter.parseStringPair(contentDimensions);
      boundsProps.contentWidth = WIDTH_VALUES[parsedDimenions.horizontal];
      boundsProps.contentHeight = HEIGHT_VALUES[parsedDimenions.vertical];
    }

    return (
      <Popup
        {...boundsProps}
        arrow={arrow}
        arrowPosition={PopupPresenter.primaryArrowPosition(attachment)}
        closeOnEsc
        closeOnOutsideClick
        closeOnResize
        disableHeader={disableHeader}
        isResponsive
        onRequestClose={onRequestClose}
        refCallback={this.setPopupNode}
      >
        {children}
      </Popup>
    );
  }

  createPortalContent(tetherContent, useOverlay, classNameOverlay) {
    if (!useOverlay) {
      return tetherContent;
    }

    return (
      <PopupOverlay className={classNameOverlay}>
        {tetherContent}
      </PopupOverlay>
    );
  }

  render () {
    const {
      boundingRef,
      children,
      classNameOverlay,
      contentAttachment,
      contentDimensions,
      disableHeader,
      isOpen,
      onRequestClose,
      showArrow,
      targetRef,
      zIndex,
      ...customProps,
    } = this.props; // eslint-disable-line no-unused-vars

    const boundingFrame = boundingRef ? boundingRef() : undefined;

    let popup;
    if (isOpen && children) {
      let arrow;
      if (showArrow) {
        arrow = <PopupArrow refCallback={this.setArrowNode} />;
      }
      popup = this.createPopup(children, contentDimensions, boundingFrame, contentAttachment, arrow, onRequestClose, disableHeader, customProps);
    }
  
    const allowScrolling = false;
    const constraints = [
      {
        to: (boundingFrame || 'window'),
        attachment: 'together',
        pin: true,
      },
    ];  

    const tetherCotent = (
      <TetherComponent
        classPrefix="terra-PopupPresenter"
        constraints={constraints}
        content={popup}
        contentAttachment={contentAttachment}
        disableOnPosition={!allowScrolling}
        isEnabled
        onRepositioned={this.handleTetherRepositioned}
        style={{zIndex: '7001'}}
        targetRef={targetRef}
        targetAttachment={PopupPresenter.mirrorAttachment(contentAttachment)}
      />
    );

    return (
      <Portal {...customProps} isOpened={isOpen}>
        {this.createPortalContent(tetherCotent, !allowScrolling, classNameOverlay)}
      </Portal>
    );
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
