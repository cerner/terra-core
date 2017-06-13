import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import PopupContent from './_PopupContent';
import PopupArrow from './_PopupArrow';
import PopupOverlay from './_PopupOverlay';
import TetherComponent from './_TetherComponent';
import './Popup.scss';

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
   * CSS classnames that are append to the popup content inner.
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
   * A string pair of breakpoint sizes, ('10x', '25x', '50x', '75x', '10x'), i.e. 'vertical horizontal'
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
   * Target element for the popup to anchor to.
   */
  targetRef: PropTypes.func.isRequired,
};

const defaultProps = {
  boundingRef: null,
  classNameArrow: null,
  classNameContent: null,
  classNameOverlay: null,
  contentAttachment: 'top center',
  contentDimensions: '25x 25x',
  isArrowDisplayed: false,
  isHeaderDisabled: false,
  isOpen: false,
};

class Popup extends React.Component {

  static mirrorAttachment(attachment) {
    const parsedValue = Popup.parseStringPair(attachment);
    let horizontal = parsedValue.horizontal;
    let vertical = parsedValue.vertical;

    if (parsedValue.vertical === 'middle') {
      horizontal = MIRROR_LR[parsedValue.horizontal];
    } else {
      vertical = MIRROR_TB[parsedValue.vertical];
    }

    return `${vertical} ${horizontal}`;
  }

  static getContentOffset(attachment, targetNode, arrowOffset) {
    const offset = { vertical: 0, horizontal: 0 };
    if (targetNode) {
      if (Popup.isVerticalAttachment(attachment) && targetNode.clientWidth <= arrowOffset * 2) {
        if (attachment.horizontal === 'left') {
          offset.horizontal = arrowOffset - (targetNode.clientWidth / 2);
        } else if (attachment.horizontal === 'right') {
          offset.horizontal = -(arrowOffset - (targetNode.clientWidth / 2));
        }
      }
    }
    return offset;
  }

  static parseStringPair(value) {
    const [vertical, horizontal] = value.split(' ');
    return { vertical, horizontal };
  }

  static isVerticalAttachment(attachment) {
    return attachment.vertical !== 'middle';
  }

  static arrowPositionFromBounds(targetBounds, contentBounds, isVerticalAttachment, arrowOffset) {
    if (isVerticalAttachment) {
      if ((contentBounds.left + contentBounds.width) - arrowOffset >= targetBounds.left && contentBounds.left + arrowOffset <= targetBounds.left + targetBounds.width) {
        if (targetBounds.top < contentBounds.top) {
          return 'top';
        } else if (targetBounds.bottom < contentBounds.bottom) {
          return 'bottom';
        }
      }
    } else if ((contentBounds.top + contentBounds.height) - arrowOffset >= targetBounds.top && contentBounds.top + arrowOffset <= targetBounds.top + targetBounds.height) {
      if (targetBounds.left < contentBounds.left) {
        return 'left';
      } else if (targetBounds.right < contentBounds.right) {
        return 'right';
      }
    }
    return undefined;
  }

  static leftOffset(targetBounds, contentBounds, arrowOffset, contentOffset, attachment) {
    let offset;
    if (contentOffset.horizontal !== 0 || attachment.horizontal === 'center') {
      offset = (targetBounds.left - contentBounds.left) + arrowOffset + (targetBounds.width / 2);
    } else if (attachment.horizontal === 'right') {
      offset = (targetBounds.left - contentBounds.left) + targetBounds.width;
    } else {
      offset = (targetBounds.left - contentBounds.left) + (2 * arrowOffset);
    }

    if (offset < 2 * arrowOffset) {
      offset = 2 * arrowOffset;
    } else if (offset > contentBounds.width) {
      offset = contentBounds.width;
    }
    return `${offset}px`;
  }

  static topOffset(targetBounds, contentBounds, arrowOffset) {
    let offset = (targetBounds.top - contentBounds.top) + arrowOffset + (targetBounds.height / 2);
    if (offset < 2 * arrowOffset) {
      offset = 2 * arrowOffset;
    } else if (offset > contentBounds.height) {
      offset = contentBounds.height;
    }
    return (`${offset}px`);
  }

  static primaryArrowPosition(attachment) {
    return Popup.isVerticalAttachment(attachment) ? attachment.vertical : attachment.horizontal;
  }

  static createPortalContent(content, useOverlay, classNameOverlay) {
    if (!useOverlay) {
      return content;
    }

    return (
      <PopupOverlay className={classNameOverlay}>
        {content}
      </PopupOverlay>
    );
  }

  constructor(props) {
    super(props);
    this.handleTetherRepositioned = this.handleTetherRepositioned.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.offset = { vertical: 0, horizontal: 0 };
  }

  componentDidUpdate() {
    this.offset = { vertical: 0, horizontal: 0 };
  }

  setArrowPosition(targetBounds, contentBounds) {
    const isVerticalAttachment = Popup.isVerticalAttachment(this.attachment);
    const position = Popup.arrowPositionFromBounds(targetBounds, contentBounds, isVerticalAttachment, PopupArrow.arrowSize);

    if (!position) {
      this.arrowNode.classList.remove(PopupArrow.positionClasses.top);
      this.arrowNode.classList.remove(PopupArrow.positionClasses.bottom);
      this.arrowNode.classList.remove(PopupArrow.positionClasses.left);
      this.arrowNode.classList.remove(PopupArrow.positionClasses.right);
      return;
    }

    this.arrowNode.classList.remove(PopupArrow.oppositePositionClasses[position]);
    this.contentNode.classList.remove(PopupContent.oppositePositionClasses[position]);

    this.arrowNode.classList.add(PopupArrow.positionClasses[position]);
    this.contentNode.classList.add(PopupContent.positionClasses[position]);

    if (isVerticalAttachment) {
      this.arrowNode.style.left = Popup.leftOffset(targetBounds, contentBounds, PopupArrow.arrowSize, this.offset, this.attachment);
    } else {
      this.arrowNode.style.top = Popup.topOffset(targetBounds, contentBounds, PopupArrow.arrowSize);
    }
  }

  setArrowNode(node) {
    this.arrowNode = node;
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  handleTetherRepositioned(event, targetBounds, contentBounds) {
    if (this.arrowNode && this.contentNode) {
      this.setArrowPosition(targetBounds, contentBounds);
    }
  }

  createPopupContent(boundingFrame) {
    const parsedDimenions = Popup.parseStringPair(this.props.contentDimensions);
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

    let arrow;
    let arrowPosition;
    if (this.props.isArrowDisplayed && this.props.contentAttachment !== 'middle center') {
      this.offset = Popup.getContentOffset(this.attachment, this.props.targetRef(), PopupArrow.arrowSize);
      arrow = <PopupArrow className={this.props.classNameArrow} refCallback={this.setArrowNode} />;
      arrowPosition = Popup.primaryArrowPosition(this.attachment);
    }

    return (
      <PopupContent
        {...boundsProps}
        arrow={arrow}
        arrowPosition={arrowPosition}
        classNameInner={this.props.classNameContent}
        closeOnEsc
        closeOnOutsideClick
        closeOnResize
        isHeaderDisabled={this.props.isHeaderDisabled}
        onRequestClose={this.props.onRequestClose}
        refCallback={this.setContentNode}
      >
        {this.props.children}
      </PopupContent>
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

    let portalContent = children;
    if (isOpen) {
      this.attachment = Popup.parseStringPair(contentAttachment);

      const boundingFrame = boundingRef ? boundingRef() : undefined;
      const popupContent = this.createPopupContent(boundingFrame);
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
          classPrefix="terra-Popup"
          constraints={constraints}
          content={popupContent}
          contentAttachment={contentAttachment}
          contentOffset={`${this.offset.vertical} ${this.offset.horizontal}`}
          isEnabled
          onRepositioned={this.handleTetherRepositioned}
          targetRef={targetRef}
          targetAttachment={Popup.mirrorAttachment(contentAttachment)}
        />
      );

      portalContent = Popup.createPortalContent(tetherCotent, !allowScrolling, classNameOverlay);
    }

    return (
      <Portal {...customProps} isOpened={isOpen}>
        {portalContent}
      </Portal>
    );
  }
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

export default Popup;
