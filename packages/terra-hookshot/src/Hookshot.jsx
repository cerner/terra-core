import React from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal';
import HookshotContent from './HookshotContent';
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
   * How the content should be positioned when the primary attachment is not available.
   * Valid values: 'auto', 'flip', and 'none'.
   */
  attachmentBehavior: PropTypes.oneOf(ATTACHMENT_BEHAVIORS),
  /**
   * Value in px of the margin to place between the target and the content.
   */
  attachmentMargin: PropTypes.number,
  /**
   * Reference to the bounding container, will use window if nothing is provided.
   */
  boundingRef: PropTypes.func,
  /**
   * The HookshotContent to be attached.
   */
  content: PropTypes.element.isRequired,
  /**
   * String pair separated by a space using values of top, middle, bottom, and left, center, right. (ex: 'top middle')
   */
  contentAttachment: PropTypes.oneOf(ATTACHMENT_POSITIONS).isRequired,
  /**
   * String pair of top and left offset, ie "10px -4px".
   */
  contentOffset: PropTypes.string,
  /**
   * Determines whether the content should be actively positioned via hookshot.
   */
  isEnabled: PropTypes.bool,
  /**
   * Should the content be presented.
   */
  isOpen: PropTypes.bool,
  /**
   * Callback function when the content has been positioned.
   */
  onPosition: PropTypes.func,
  /**
   * Required element that the content will hookshot to.
   */
  targetRef: PropTypes.func.isRequired,
  /**
   * String pair of top, middle, bottom, and left, center, right. Will mirror content if none provided. (ex: 'bottom middle')
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
  static now() {
    return performance.now();
  }

  constructor(props) {
    super(props);
    this.setContentNode = this.setContentNode.bind(this);
    this.getNodeRects = this.getNodeRects.bind(this);
    this.update = this.update.bind(this);
    this.tick = this.tick.bind(this);
    this.state = { isEnabled: props.isEnabled && props.isOpen };
    this.listenersAdded = false;
    this.lastCall = null;
    this.lastDuration = null;
    this.pendingTimeout = null;
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
    if (newProps.isEnabled !== this.props.isEnabled || newProps.isOpen !== this.props.isOpen) {
      this.setState({ isEnabled: newProps.isEnabled && newProps.isOpen });
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

  tick(event) {
    if (this.lastDuration && this.lastDuration > 16) {
      // Throttle to 60fps, in order to handle safari and mobile performance
      this.lastDuration = Math.min(this.lastDuration - 16, 100);

      // Just in case this is the last event, remember to position just once more
      this.pendingTimeout = setTimeout(this.tick, 100);
      return;
    }

    if (this.lastCall && (Hookshot.now() - this.lastCall) < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (this.pendingTimeout != null) {
      clearTimeout(this.pendingTimeout);
      this.pendingTimeout = null;
    }

    this.lastCall = Hookshot.now();
    this.update(event);
    this.lastDuration = Hookshot.now() - this.lastCall;
  }

  enableListeners() {
    const target = this.props.targetRef();
    if (target) {
      ['resize', 'scroll', 'touchmove'].forEach(event => window.addEventListener(event, this.tick));

      this.scrollParents = HookshotUtils.getScrollParents(target);
      this.scrollParents.forEach((parent) => {
        if (parent !== target.ownerDocument) {
          parent.addEventListener('scroll', this.tick);
        }
      });

      this.listenersAdded = true;
    }
  }

  disableListeners() {
    ['resize', 'scroll', 'touchmove'].forEach(event => window.removeEventListener(event, this.tick));

    const target = this.props.targetRef();
    if (this.scrollParents) {
      this.scrollParents.forEach((parent) => {
        if (parent !== target.ownerDocument) {
          parent.removeEventListener('scroll', this.tick);
        }
      });
    }
    this.listenersAdded = false;
  }

  position(event, resetCache) {
    if (resetCache) {
      this.cachedRects = this.getNodeRects();
    } else {
      if (this.props.boundingRef) {
        this.cachedRects.boundingRect = HookshotUtils.getBoundingRect(this.props.boundingRef());
      }
      this.cachedRects.targetRect = HookshotUtils.getBounds(this.props.targetRef());
    }

    const result = HookshotUtils.positionStyleFromBounds(
      this.cachedRects.boundingRect,
      this.cachedRects.targetRect,
      this.cachedRects.contentRect,
      this.cOffset,
      this.tOffset,
      this.cAttachment,
      this.tAttachment,
      this.props.attachmentMargin,
      this.props.attachmentBehavior,
    );

    let styleUpdated = false;
    if (this.contentNode.style.position !== result.style.position) {
      this.contentNode.style.position = result.style.position;
      styleUpdated = true;
    }
    const newTransform = `translate3d(${result.style.left}, ${result.style.top}, 0px)`;
    if (this.contentNode.style.transform !== newTransform) {
      this.contentNode.style.transform = newTransform;
      styleUpdated = true;
    }
    if (this.contentNode.style.opacity !== '1') {
      this.contentNode.style.opacity = '1';
      styleUpdated = true;
    }
    if (styleUpdated) {
      this.cachedRects.contentRect = HookshotUtils.getBounds(this.contentNode);
    }

    if (this.props.onPosition) {
      this.props.onPosition(
        event,
        this.cachedRects.targetRect,
        this.cachedRects.contentRect,
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
    const resetCache = !event || (event.type !== 'scroll' && event.type !== 'touchmove');
    this.position(event, resetCache);
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
    this.cAttachment = HookshotUtils.parseAttachment(contentAttachment);
    if (targetAttachment) {
      this.tAttachment = HookshotUtils.parseAttachment(targetAttachment);
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
