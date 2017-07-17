import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import PopupContent from './_PopupContent';
import PopupArrow from './_PopupArrow';
import PopupOverlay from './_PopupOverlay';
import TetherComponent from './_TetherComponent';
import PopupUtils from './_PopupUtils';
import './Popup.scss';

const HEIGHT_KEYS = ['40', '80', '120', '160', '240', '320', '400', '480', '560', '640', '720', '800', '880'];
const HEIGHT_VALUES = [40, 80, 120, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880];

const WIDTH_KEYS = ['160', '240', '320', '640', '960', '1280', '1760'];
const WIDTH_VALUES = [160, 240, 320, 640, 960, 1280, 1760];

const CREATE_MAPPING = ((keys, values) => {
  const combinations = {};
  for (let i = 0; i < keys.length; i += 1) {
    combinations[keys[i]] = values[i];
  }
  return combinations;
});

const WIDTH_MAPPING = CREATE_MAPPING(WIDTH_KEYS, WIDTH_VALUES);
const HEIGHT_MAPPING = CREATE_MAPPING(HEIGHT_KEYS, HEIGHT_VALUES);

const propTypes = {
  /**
   * The children to be displayed as content within the popup.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Target element for the popup to anchor to.
   */
  targetRef: PropTypes.func.isRequired,
  /**
   * Bounding container for the popup, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
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
   * A string representation of the height in px, limited to:
   * 40, 80, 120, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880
   */
  contentHeight: PropTypes.oneOf(HEIGHT_KEYS),
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760
   */
  contentWidth: PropTypes.oneOf(WIDTH_KEYS),
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
};

const defaultProps = {
  boundingRef: null,
  classNameArrow: null,
  classNameContent: null,
  classNameOverlay: null,
  contentAttachment: 'top center',
  contentHeight: '80',
  contentWidth: '240',
  isArrowDisplayed: false,
  isHeaderDisabled: false,
  isOpen: false,
};

class Popup extends React.Component {

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
    const isVertical = PopupUtils.isVerticalAttachment(this.attachment);
    const position = PopupUtils.arrowPositionFromBounds(targetBounds, contentBounds, isVertical, PopupArrow.arrowSize, PopupContent.cornerSize);

    this.contentNode.style.margin = '';
    if (!position) {
      this.arrowNode.removeAttribute(PopupArrow.positionAttrs.top);
      this.arrowNode.removeAttribute(PopupArrow.positionAttrs.bottom);
      this.arrowNode.removeAttribute(PopupArrow.positionAttrs.left);
      this.arrowNode.removeAttribute(PopupArrow.positionAttrs.right);
      return;
    }

    this.arrowNode.removeAttribute(PopupArrow.mirroredPositionAttrs[position]);
    this.contentNode.removeAttribute(PopupContent.mirroredPositionAttrs[position]);

    this.arrowNode.setAttribute(PopupArrow.positionAttrs[position], 'true');
    this.contentNode.setAttribute(PopupContent.positionAttrs[position], 'true');

    if (isVertical) {
      this.arrowNode.style.left = PopupUtils.leftOffset(targetBounds, contentBounds, PopupArrow.arrowSize, PopupContent.cornerSize, this.offset, this.attachment);
    } else {
      this.arrowNode.style.top = PopupUtils.topOffset(targetBounds, contentBounds, PopupArrow.arrowSize, PopupContent.cornerSize);
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
    const boundsProps = {
      contentWidth: WIDTH_MAPPING[this.props.contentWidth],
      contentHeight: HEIGHT_MAPPING[this.props.contentHeight],
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
    let contentStyle;
    if (this.props.isArrowDisplayed && this.props.contentAttachment !== 'middle center') {
      this.offset = PopupUtils.getContentOffset(this.attachment, this.props.targetRef(), PopupArrow.arrowSize, PopupContent.cornerSize);
      arrow = <PopupArrow className={this.props.classNameArrow} refCallback={this.setArrowNode} />;
      arrowPosition = PopupUtils.primaryArrowPosition(this.attachment);
      contentStyle = PopupUtils.primaryMarginStyle(this.attachment, PopupContent.popupMargin);
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
        style={contentStyle}
      >
        {this.props.children}
      </PopupContent>
    );
  }

  createPortalContent(content, useOverlay) {
    if (!useOverlay) {
      return content;
    }

    return (
      <PopupOverlay className={this.props.classNameOverlay}>
        {content}
      </PopupOverlay>
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
      contentHeight,
      contentWidth,
      isArrowDisplayed,
      isHeaderDisabled,
      isOpen,
      onRequestClose,
      targetRef,
      ...customProps
    } = this.props; // eslint-disable-line no-unused-vars

    let portalContent = children;
    if (isOpen) {
      let bidiContentAttachment = contentAttachment;
      this.isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
      if (this.isRTL) {
        bidiContentAttachment = PopupUtils.switchAttachmentToRTL(bidiContentAttachment);
      }

      this.attachment = PopupUtils.parseStringPair(bidiContentAttachment);

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
          contentAttachment={bidiContentAttachment}
          contentOffset={`${this.offset.vertical} ${this.offset.horizontal}`}
          isEnabled
          onRepositioned={this.handleTetherRepositioned}
          targetRef={targetRef}
          targetAttachment={PopupUtils.mirrorAttachment(bidiContentAttachment)}
        />
      );

      portalContent = this.createPortalContent(tetherCotent, !allowScrolling);
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
