import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import Popup from './Popup';
import PopupArrow from './PopupArrow';// consider dot notation
import PopupOverlay from './PopupOverlay';
import TetherComponent from './TetherComponent';
import './PopupPresenter.scss';

const MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left',
};

const MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top',
};

const BASE_WIDTH = 16;
const BASE_HEIGHT = 9;

const DIMENSIONS = [
  '10x',
  '25x',
  '50x',
  '75x',
  '100x',
];

const DIMENSIONS_MAP = {
  '10x': 10,
  '25x': 25,
  '50x': 50,
  '75x': 75,
  '100x': 100,
};

const COMBINE = () => {
  const combinations = [];
  for (let i = 0; i < DIMENSIONS.length; i += 1) {
    for (let j = 0; j < DIMENSIONS.length; j += 1) {
      combinations.push(`${DIMENSIONS[i]} ${DIMENSIONS[j]}`);
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
  children: PropTypes.node.isRequired,
  /**
   * CSS classnames that are append to the arrow.
   */
  classNameArrow: PropTypes.string,
  /**
   * CSS classnames that are append to the popup content body.
   */
  classNameContent: PropTypes.string,
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
   * Should an arrow be placed at the attachment point.
   */
  isArrowDisplayed: PropTypes.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: PropTypes.bool,
  /**
   * Should the popup be presented as open.
   */
  isOpen: PropTypes.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Presenting element for the popup to anchor to.
   */
  targetRef: PropTypes.func.isRequired,
};

const defaultProps = {
  classNameArrow: null,
  classNameContent: null,
  classNameOverlay: null,
  contentAttachment: 'top center',
  contentDimensions: '25x 25x',
  isArrowDisplayed: false,
  isHeaderDisabled: false,
  isOpen: false,
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

    return `${vertical} ${horizontal}`;
  }

  static parseStringPair(value) {
    const [vertical, horizontal] = value.split(' ');
    return { vertical, horizontal };
  }

  static attachPositionFromAlignment(alignment, start, length) {
    if (alignment === 'center') {
      return start + (length / 2);
    } else if (alignment === 'right') {
      return start + length;
    }
    return start;
  }

  static arrowPositionFromBounds(targetBounds, popUpBounds, attachment, offset) {
    if (['top', 'bottom'].indexOf(attachment.vertical) >= 0) {
      if ((popUpBounds.left + popUpBounds.width) - offset >= targetBounds.left && popUpBounds.left + offset <= targetBounds.left + targetBounds.width) {
        if (targetBounds.top < popUpBounds.top) {
          return 'top';
        } else if (targetBounds.bottom < popUpBounds.bottom) {
          return 'bottom';
        }
      }
    } else if ((popUpBounds.top + popUpBounds.height) - offset >= targetBounds.top && popUpBounds.top + offset <= targetBounds.top + targetBounds.height) {
      if (targetBounds.left < popUpBounds.left) {
        return 'left';
      } else if (targetBounds.right < popUpBounds.right) {
        return 'right';
      }
    }
    return undefined;
  }

  static leftOffset(targetBounds, popUpBounds, arrowAlignment, offset) {
    const targetAttachPosition = PopupPresenter.attachPositionFromAlignment(arrowAlignment, targetBounds.left, targetBounds.width);
    const popupAttachPosition = PopupPresenter.attachPositionFromAlignment(arrowAlignment, popUpBounds.left, popUpBounds.width);

    const leftOffset = targetAttachPosition - popupAttachPosition;

    let leftPosition = offset;
    if (arrowAlignment === 'right') {
      leftPosition = popUpBounds.width - offset;
    } else if (arrowAlignment === 'center') {
      leftPosition = popUpBounds.width / 2;
    }

    let newLeftPosition = leftPosition + leftOffset;
    if (newLeftPosition > popUpBounds.width - offset) {
      newLeftPosition = popUpBounds.width - offset;
    } else if (newLeftPosition < offset) {
      newLeftPosition = offset;
    }

    return `${(offset + newLeftPosition).toString()}px`;
  }

  static topOffset(targetBounds, popUpBounds, offset) {
    const targetAttachPosition = targetBounds.top + (targetBounds.height / 2);
    const popupAttachPosition = popUpBounds.top + (popUpBounds.height / 2);

    const topOffset = targetAttachPosition - popupAttachPosition;
    const topPosition = popUpBounds.height / 2;

    let newTopPosition = topPosition + topOffset;
    if (newTopPosition > popUpBounds.height - offset) {
      newTopPosition = popUpBounds.height - offset;
    } else if (newTopPosition < offset) {
      newTopPosition = offset;
    }

    return `${(offset + newTopPosition).toString()}px`;
  }

  static primaryArrowPosition(attachment) {
    const parsedAttachment = PopupPresenter.parseStringPair(attachment);
    const isVerticalPosition = ['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0;
    return isVerticalPosition ? parsedAttachment.vertical : parsedAttachment.horizontal;
  }

  static createPortalContent(tetherContent, useOverlay, classNameOverlay) {
    if (!useOverlay) {
      return tetherContent;
    }

    return (
      <PopupOverlay className={classNameOverlay}>
        {tetherContent}
      </PopupOverlay>
    );
  }

  constructor(props) {
    super(props);
    this.handleTetherRepositioned = this.handleTetherRepositioned.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
    this.setPopupNode = this.setPopupNode.bind(this);
  }

  setArrowPosition(targetBounds, popUpBounds) {
    const parsedAttachment = PopupPresenter.parseStringPair(this.props.contentAttachment);
    const position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds, parsedAttachment, PopupArrow.arrowSize);

    if (!position) {
      this.arrowNode.classList.remove(PopupArrow.positionClasses.top);
      this.arrowNode.classList.remove(PopupArrow.positionClasses.bottom);
      this.arrowNode.classList.remove(PopupArrow.positionClasses.left);
      this.arrowNode.classList.remove(PopupArrow.positionClasses.right);
      return;
    }

    this.arrowNode.classList.remove(PopupArrow.oppositePositionClasses[position]);
    this.popupNode.classList.remove(Popup.oppositePositionClasses[position]);

    this.arrowNode.classList.add(PopupArrow.positionClasses[position]);
    this.popupNode.classList.add(Popup.positionClasses[position]);

    if (['top', 'bottom'].indexOf(position) >= 0) {
      this.arrowNode.style.left = PopupPresenter.leftOffset(targetBounds, popUpBounds, parsedAttachment.horizontal, PopupArrow.arrowSize);
    } else {
      this.arrowNode.style.top = PopupPresenter.topOffset(targetBounds, popUpBounds, PopupArrow.arrowSize);
    }
  }

  setArrowNode(node) {
    this.arrowNode = node;
  }

  setPopupNode(node) {
    this.popupNode = node;
  }

  handleTetherRepositioned(event, targetBounds, presenterBounds) {
    if (this.arrowNode && this.popupNode) {
      this.setArrowPosition(targetBounds, presenterBounds);
    }
  }

  createPopup(children, contentDimensions, boundingFrame, attachment, arrow, onRequestClose, isHeaderDisabled, classNameContent) {
    const parsedDimenions = PopupPresenter.parseStringPair(contentDimensions);
    const boundsProps = {
      contentWidth: BASE_WIDTH * DIMENSIONS_MAP[parsedDimenions.horizontal],
      contentHeight: BASE_HEIGHT * DIMENSIONS_MAP[parsedDimenions.vertical],
    };

    if (boundingFrame) {
      boundsProps.contentHeightMax = boundingFrame.clientHeight;
      boundsProps.contentWidthMax = boundingFrame.clientWidth;
    } else {
      boundsProps.contentHeightMax = window.innerHeight;
      boundsProps.contentWidthMax = window.innerWidth;
    }

    return (
      <Popup
        {...boundsProps}
        arrow={arrow}
        arrowPosition={PopupPresenter.primaryArrowPosition(attachment)}
        classNameContent={classNameContent}
        closeOnEsc
        closeOnOutsideClick
        closeOnResize
        isHeaderDisabled={isHeaderDisabled}
        onRequestClose={onRequestClose}
        refCallback={this.setPopupNode}
      >
        {children}
      </Popup>
    );
  }

  render() {
    const {
      boundingRef,
      children,
      classNameArrow,
      classNameContent,
      classNameOverlay,
      contentAttachment,
      contentDimensions,
      isArrowDisplayed,
      isHeaderDisabled,
      isOpen,
      onRequestClose,
      targetRef,
      ...customProps
    } = this.props; // eslint-disable-line no-unused-vars

    const boundingFrame = boundingRef ? boundingRef() : undefined;

    let popup;
    if (isOpen && children) {
      let arrow;
      if (isArrowDisplayed) {
        arrow = <PopupArrow className={classNameArrow} refCallback={this.setArrowNode} />;
      }
      popup = this.createPopup(children, contentDimensions, boundingFrame, contentAttachment, arrow, onRequestClose, isHeaderDisabled, classNameContent);
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
        targetRef={targetRef}
        targetAttachment={PopupPresenter.mirrorAttachment(contentAttachment)}
      />
    );

    return (
      <Portal {...customProps} isOpened={isOpen}>
        {PopupPresenter.createPortalContent(tetherCotent, !allowScrolling, classNameOverlay)}
      </Portal>
    );
  }
}

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

export default PopupPresenter;
