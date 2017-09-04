import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import classNames from 'classnames/bind';
import HookshotContent from './_HookshotContent';
import HookshotUtils from './_HookshotUtils';

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

const ATTACHMENT_BEHAVIORS = [
  'auto',
  'flip',
  'none',
];

const propTypes = {
  /**
   * If the primary attachment in not available, how should the content be positioned.
   */
  attachmentBehavior: PropTypes.oneOf(ATTACHMENT_BEHAVIORS),
  /**
   * Value in px of the margin to place between the target and the content.
   */
  attachmentMargin: PropTypes.number,
  /**
   * Reference to the bonding container, wil use window if nothing is provided.
   */
  boundingRef: PropTypes.func,
  /**
   * The HookshotContent to be attached.
   */
  content: PropTypes.element.isRequired,
  /**
   * String pair seperated by a space using values of top, middle, bottom, and left, center, right.
   */
  contentAttachment: PropTypes.oneOf(ATTACHMENT_POSITIONS).isRequired,
  /**
   * String pair of top and left offset, ie "10px -4px".
   */
  contentOffset: PropTypes.string,
  /**
   * Should content be actively positioned via hookshot.
   */
  isEnabled: PropTypes.bool,
  /**
   * Should element be presented.
   */
  isOpen: PropTypes.bool,
  /**
   * Callback function when the content have been positioned.
   */
  onPosition: PropTypes.func,
  /**
   * Required element that the content will hookshot to.
   */
  targetRef: PropTypes.func.isRequired,
  /**
   * String pair of top, middle, bottom, and left, center, right. Will mirror content is none provided.
   */
  targetAttachment: PropTypes.oneOf(ATTACHMENT_POSITIONS),
  /**
   * String pair of top and left offset, ie "10px -4px".
   */
  targetOffset: PropTypes.string,
};

const defaultProps = {
  attachmentMargin: 0,
  attachmentBehavior: 'auto',
  contentOffset: '0 0',
  isEnabled: false,
  isOpen: false,
  targetOffset: '0 0',
};

class Hookshot extends React.Component {
  constructor(props) {
    super(props);
    this.setContentNode = this.setContentNode.bind(this);
    this.getNodeRects = this.getNodeRects.bind(this);
    this.update = this.update.bind(this);
    this.state = { isEnabled: props.isEnabled };
    this.listenersAdded = false;
  }

  componentDidMount() {
    if (this.state.isEnabled) {
      if (!this.listenersAdded) {
        this.enableListeners();
      }
      this.update();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isEnabled !== this.props.isEnabled) {
      this.setState({ isEnabled: newProps.isEnabled });
    }
  }

  componentDidUpdate() {
    if (this.state.isEnabled) {
      if (!this.listenersAdded) {
        this.enableListeners();
      }
      this.update();
    } else {
      this.disableListeners();
    }
  }

  componentWillUnmount() {
    this.destroy();
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  getNodeRects() {
    const targetRect = HookshotUtils.getBounds(this.props.targetRef());
    const contentRect = HookshotUtils.getBounds(this.contentNode);
    const boundingRect = HookshotUtils.getBoundingRect(this.props.boundingRef ? this.props.boundingRef() : 'window');
    return { targetRect, contentRect, boundingRect };
  }

  enableListeners() {
    const target = this.props.targetRef();
    if (target) {
      ['resize', 'scroll', 'touchmove'].forEach(event => window.addEventListener(event, this.update));

      this.scrollParents = HookshotUtils.getScrollParents(target);
      this.scrollParents.forEach((parent) => {
        if (parent !== target.ownerDocument) {
          parent.addEventListener('scroll', this.update);
        }
      });

      this.listenersAdded = true;
    }
  }

  disableListeners() {
    ['resize', 'scroll', 'touchmove'].forEach(event => window.removeEventListener(event, this.update));

    const target = this.props.targetRef();
    if (this.scrollParents) {
      this.scrollParents.forEach((parent) => {
        if (parent !== target.ownerDocument) {
          parent.removeEventListener('scroll', this.update);
        }
      });
    }
    this.listenersAdded = false;
  }

  position(event) {
    const rects = this.getNodeRects();
    const result = HookshotUtils.positionStyleFromBounds(
      rects.boundingRect,
      rects.targetRect,
      rects.contentRect,
      this.cOffset,
      this.tOffset,
      this.cAttachment,
      this.tAttachment,
      this.props.attachmentMargin,
      this.props.attachmentBehavior,
    );
    if (this.contentNode.style.position !== result.style.position) {
      this.contentNode.style.position = result.style.position;
    }
    const newTransform = `translate3d(${result.style.left}, ${result.style.top}, 0px)`
    if (this.contentNode.style.transform !== newTransform) {
      this.contentNode.style.transform = newTransform;
    }
    if (this.contentNode.style.opacity !== '1.0') {
      this.contentNode.style.opacity = '1.0';
    }

    if (this.props.onPosition) {
      this.props.onPosition(
        event,
        rects.targetRect,
        HookshotUtils.getBounds(this.contentNode),
        result.positions.cCoords.attachment,
        result.positions.tCoords.attachment,
        result.positions.tCoords.offset,
      );
    }
  }

  destroy() {
    this.disableListeners();
    this.contentNode = null;
  }

  update(event) {
    if (!this.props.targetRef() || !this.contentNode) {
      return;
    }

    this.updateHookshot(event);
  }

  updateHookshot(event) {
    this.position(event);
  }

  cloneContent(content) {
    return React.cloneElement(content, { refCallback: this.wrappedRefCallback(content) });
  }

  wrappedRefCallback(content) {
    const initialRefCallback = content.props.refCallback;

    return (node) => {
      this.setContentNode(node);

      if (initialRefCallback) {
        initialRefCallback(node);
      }
    };
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      attachmentBehavior,
      attachmentMargin,
      boundingRef,
      content,
      contentAttachment,
      contentOffset,
      isEnabled,
      isOpen,
      targetRef,
      targetAttachment,
      targetOffset,
      onPosition,
    } = this.props;
    /* eslint-enable no-unused-vars */
    if (!isOpen) {
      return null;
    }

    this.cOffset = HookshotUtils.parseOffset(contentOffset);
    this.tOffset = HookshotUtils.parseOffset(targetOffset);
    this.cAttachment = HookshotUtils.parseStringPair(contentAttachment);
    if (targetAttachment) {
      this.tAttachment = HookshotUtils.parseStringPair(targetAttachment);
    } else {
      this.tAttachment = HookshotUtils.mirrorAttachment(this.cAttachment);
    }

    if (document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl') {
      this.cOffset = HookshotUtils.switchOffsetToRTL(this.cOffset);
      this.tOffset = HookshotUtils.switchOffsetToRTL(this.tOffset);
      this.cAttachment = HookshotUtils.switchAttachmentToRTL(this.cAttachment);
      this.tAttachment = HookshotUtils.switchAttachmentToRTL(this.tAttachment);
    }

    const clonedContent = this.cloneContent(content);

    return (
      <Portal isOpened={isOpen}>
        {clonedContent}
      </Portal>
    );
  }
}

Hookshot.propTypes = propTypes;
Hookshot.defaultProps = defaultProps;
Hookshot.attachmentPositions = ATTACHMENT_POSITIONS;
Hookshot.attachmentBehaviors = ATTACHMENT_BEHAVIORS;
Hookshot.Utils = HookshotUtils;
Hookshot.Content = HookshotContent;

export default Hookshot;
