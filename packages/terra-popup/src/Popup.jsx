import React from 'react';
import PropTypes from 'prop-types';
import Hookshot from 'terra-hookshot';
import Portal from 'react-portal';
import PopupContent from './_PopupContent';
import PopupArrow from './_PopupArrow';
import PopupOverlay from './_PopupOverlay';
import PopupUtils from './_PopupUtils';
import PopupHeights from './PopupHeights';
import PopupWidths from './PopupWidths';

const ATTACHMENT_POSITIONS = [
  'top left',
  'top center',
  'top right',
  'middle left',
  'middle center',
  'middle right',
  'bottom left',
  'bottom center',
  'bottom right',
];

const propTypes = {
  /**
   * If the primary attachment in not available, how should the content be positioned. Options
   * include 'auto', 'flip', or 'none'.
   */
  attachmentBehavior: PropTypes.oneOf(Hookshot.attachmentBehaviors),
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
   * Attachment point for the popup, this will be mirrored to the target. Options include: 'top left',
   * 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left',
   * 'bottom center', or 'bottom right'.
   */
  contentAttachment: PropTypes.oneOf(ATTACHMENT_POSITIONS),
  /**
   * A string representation of the height in px, limited to:
   * 40, 80, 120, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880 or auto.
   */
  contentHeight: PropTypes.oneOf(Object.keys(PopupHeights)),
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760 or auto.
   */
  contentWidth: PropTypes.oneOf(Object.keys(PopupWidths)),
  /**
   * Should an arrow be placed at the attachment point.
   */
  isArrowDisplayed: PropTypes.bool,
  /**
   * Should the popup content have tab focus. Set this is your content doesn't contain any focusable elements.
   */
  isContentFocusDisabled: PropTypes.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: PropTypes.bool,
  /**
   * Should the popup be presented as open.
   */
  isOpen: PropTypes.bool,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
  /**
   * Attachment point for the target. Options include: 'top left', 'top center', 'top right', 'middle left', 'middle center',
   * 'middle right', 'bottom left', 'bottom center', or 'bottom right'.
   */
  targetAttachment: PropTypes.oneOf(ATTACHMENT_POSITIONS),
};

const defaultProps = {
  attachmentBehavior: 'auto',
  boundingRef: null,
  classNameArrow: null,
  classNameContent: null,
  classNameOverlay: null,
  contentAttachment: 'top center',
  contentHeight: '80',
  contentWidth: '240',
  isArrowDisplayed: false,
  isContentFocusDisabled: false,
  isHeaderDisabled: false,
  isOpen: false,
};

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnPosition = this.handleOnPosition.bind(this);
    this.setArrowNode = this.setArrowNode.bind(this);
    this.validateContentNode = this.validateContentNode.bind(this);
    this.handleOnResize = this.handleOnResize.bind(this);
    this.handleOnContentResize = this.handleOnContentResize.bind(this);
    this.isContentSized = props.contentHeight !== 'auto' && props.contentWidth !== 'auto';
    this.contentHeight = PopupHeights[props.contentHeight];
    this.contentWidth = PopupWidths[props.contentWidth];
  }

  componentWillReceiveProps(newProps) {
    this.isContentSized = newProps.contentHeight !== 'auto' && newProps.contentWidth !== 'auto';
    this.contentHeight = PopupHeights[newProps.contentHeight];
    this.contentWidth = PopupWidths[newProps.contentWidth];
  }

  setArrowPosition(contentPosition, targetPosition) {
    const arrowPosition = PopupUtils.getArrowPosition(contentPosition, targetPosition, PopupArrow.Opts.arrowSize, PopupContent.Opts.cornerSize);
    if (!arrowPosition) {
      this.arrowNode.removeAttribute(PopupArrow.Opts.positionAttr);
      return;
    }
    this.arrowNode.setAttribute(PopupArrow.Opts.positionAttr, arrowPosition);

    if (arrowPosition === 'top' || arrowPosition === 'bottom') {
      this.arrowNode.style.left = PopupUtils.leftOffset(contentPosition, targetPosition, PopupArrow.Opts.arrowSize, PopupContent.Opts.cornerSize);
      this.arrowNode.style.top = '';
    } else {
      this.arrowNode.style.left = '';
      this.arrowNode.style.top = PopupUtils.topOffset(contentPosition, targetPosition, PopupArrow.Opts.arrowSize, PopupContent.Opts.cornerSize);
    }
  }

  setArrowNode(node) {
    this.arrowNode = node;
  }

  handleOnPosition(event, positions) {
    if (this.arrowNode) {
      this.setArrowPosition(positions.content, positions.target);
    }
  }

  handleOnContentResize() {
    this.isContentSized = this.props.contentHeight !== 'auto' && this.props.contentWidth !== 'auto';
    this.contentHeight = PopupHeights[this.props.contentHeight];
    this.contentWidth = PopupWidths[this.props.contentWidth];
    this.forceUpdate();
  }

  handleOnResize(event, width) {
    // Close the popup if the window width is resized.
    if (window.innerWidth !== width) {
      this.windowWidth = window.innerWidth;
      this.props.onRequestClose();
    } else {
      this.isContentSized = this.props.contentHeight !== 'auto' && this.props.contentWidth !== 'auto';
      this.contentHeight = PopupHeights[this.props.contentHeight];
      this.contentWidth = PopupWidths[this.props.contentWidth];
      this.forceUpdate();
    }
  }

  validateContentNode(node) {
    if (node) {
      const contentRect = Hookshot.Utils.getBounds(node);
      if (this.contentHeight !== contentRect.height || this.contentWidth !== contentRect.width) {
        this.contentHeight = contentRect.height;
        this.contentWidth = contentRect.width;
        this.forceUpdate();
      }
      this.isContentSized = true;
    }
  }

  createPopupContent(boundingFrame, showArrow) {
    const boundsProps = {
      contentHeight: PopupHeights[this.props.contentHeight] || PopupHeights['80'],
      contentWidth: PopupWidths[this.props.contentWidth] || PopupWidths['240'],
    };
    if (boundsProps.contentHeight <= 0 && this.contentHeight) {
      boundsProps.contentHeight = this.contentHeight;
    }
    if (boundsProps.contentWidth <= 0 && this.contentWidth) {
      boundsProps.contentWidth = this.contentWidth;
    }

    if (boundingFrame) {
      boundsProps.contentHeightMax = boundingFrame.clientHeight;
      boundsProps.contentWidthMax = boundingFrame.clientWidth;
    } else {
      boundsProps.contentHeightMax = window.innerHeight;
      boundsProps.contentWidthMax = window.innerWidth;
    }

    let arrow;
    if (showArrow) {
      arrow = <PopupArrow className={this.props.classNameArrow} refCallback={this.setArrowNode} />;
    }

    return (
      <PopupContent
        {...boundsProps}
        arrow={arrow}
        classNameInner={this.props.classNameContent}
        isHeaderDisabled={this.props.isHeaderDisabled}
        onRequestClose={this.props.onRequestClose}
        onContentResize={this.handleOnContentResize}
        onResize={this.handleOnResize}
        refCallback={this.validateContentNode}
        releaseFocus={this.props.releaseFocus}
        requestFocus={this.props.requestFocus}
        isHeightAutomatic={this.props.contentHeight === 'auto'}
        isWidthAutomatic={this.props.contentWidth === 'auto'}
        isFocusedDisabled={this.props.isContentFocusDisabled}
      >
        {this.props.children}
      </PopupContent>
    );
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      attachmentBehavior,
      boundingRef,
      children,
      classNameArrow,
      classNameContent,
      classNameOverlay,
      contentAttachment,
      contentHeight,
      contentWidth,
      isArrowDisplayed,
      isContentFocusDisabled,
      isHeaderDisabled,
      isOpen,
      onRequestClose,
      releaseFocus,
      requestFocus,
      targetRef,
      targetAttachment,
    } = this.props;
    /* eslint-enable no-unused-vars */

    if (!isOpen) {
      return null;
    }

    let tAttachment;
    const cAttachment = PopupUtils.parseAttachment(contentAttachment);
    if (targetAttachment) {
      tAttachment = PopupUtils.parseAttachment(targetAttachment);
    } else {
      tAttachment = PopupUtils.mirrorAttachment(cAttachment);
    }

    let cOffset;
    const showArrow = isArrowDisplayed && contentAttachment !== 'middle center';
    if (showArrow) {
      cOffset = PopupUtils.getContentOffset(cAttachment, tAttachment, this.props.targetRef(), PopupArrow.Opts.arrowSize, PopupContent.Opts.cornerSize);
    }
    const hookshotContent = this.createPopupContent(boundingRef ? boundingRef() : undefined, showArrow);

    return (
      <div>
        <Portal isOpened={isOpen}>
          <PopupOverlay className={this.props.classNameOverlay} />
        </Portal>
        <Hookshot
          attachmentBehavior={attachmentBehavior}
          attachmentMargin={showArrow ? PopupArrow.Opts.arrowSize : 0}
          boundingRef={boundingRef}
          contentAttachment={cAttachment}
          contentOffset={cOffset}
          isEnabled={this.isContentSized}
          isOpen={isOpen}
          onPosition={this.handleOnPosition}
          targetRef={targetRef}
          targetAttachment={tAttachment}
        >
          {hookshotContent}
        </Hookshot>
      </div>
    );
  }
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;
Popup.Opts = {
  attachmentPositions: ATTACHMENT_POSITIONS,
  heights: PopupHeights,
  widths: PopupWidths,
};

export default Popup;
