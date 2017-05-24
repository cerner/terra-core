import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import Tether from 'tether'
import TetherOverlay from './TetherOverlay';
import './TetherComponent.scss';

const attachmentPositions = [
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
   * A hash of tether classes which should be changed or disabled.
   */
  classes: PropTypes.object,
  /**
   * The prefix placed at the beginning of the default classes.
   */
  classPrefix: PropTypes.string,
  /**
   * Rule set to pass to tether, contraining the content to.
   */
  constraints: PropTypes.array,
  /**
   * Content to display within the tethered frame.
   */
  content: PropTypes.element,
  /**
   * String pair of top, middle, bottom, and left, center, right.
   */
  contentAttachment: PropTypes.oneOf(attachmentPositions).isRequired,
  /**
   * String pair of top and left offset, ie "10px -4px".  
   */
  contentOffset: PropTypes.string,
  /**
   * Should tethering be disabled following the initial presentation.
   */
  disableOnPosition: PropTypes.bool,
  /**
   * Should the scrolling eatin overlay be injected.
   */
  disablePageScroll: PropTypes.bool,
  /**
   * Should element be tethered to the page.
   */
  isEnabled: PropTypes.bool,
  /**
   * The ability to disable "gpu" and "moveElement" optimizations.
   */
  optimizations: PropTypes.object,
  /**
   * Element tag for the containg element.
   */
  renderElementTag: PropTypes.string,
  /**
   * Html reference to have content appended to.
   */
  renderElementTo: PropTypes.any,
  /**
   * Required element to be presented and tethered to.
   */
  target: PropTypes.element.isRequired,
  /**
   * String pair of top, middle, bottom, and left, center, right.
   */
  targetAttachment: PropTypes.oneOf(attachmentPositions),
  /**
   * Can be set to 'visible' or 'scroll-handle'.
   */
  targetModifier: PropTypes.string,
  /**
   * String pair of top and left offset, ie "10px -4px".
   */
  targetOffset: PropTypes.string,
  /**
   * Callback function when each tether component is adjusted.
   */
  onUpdate: PropTypes.func,
  /**
   * Callback function when the tether is moved.
   */
  onRepositioned: PropTypes.func,
};

const defaultProps = {
  disableOnPosition: false,
  disablePageScroll: false,
  renderElementTag: 'div',
  renderElementTo: null,
};

class TetherComponent extends React.Component {
  static isNodeInsideModal(node) {
    if (node) {
      let parentNode = node.parentNode;
      while (parentNode && parentNode.classList) {
        if (parentNode.classList.contains('terra-Modal')) {
          return true;
          break;
        }
        parentNode = parentNode.parentNode;
      }
    }
    return false;
  }

  constructor(props) {
    super(props);
    this.setTargetNode = this.setTargetNode.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.handleOnRepositioned = this.handleOnRepositioned.bind(this);
  }

  componentDidMount() {
    this._targetInsideModal = TetherComponent.isNodeInsideModal(this._targetNode);
    this._update();
  }

  componentDidUpdate() {
    this._update();
  }

  componentWillUnmount() {
    this._destroy();
  }

  disable() {
    if (this._tether) {
      this._tether.disable();
    }
  }

  enable() {
    if (this._tether) {
      this._tether.enable();
    }
  }

  position() {
    if (this._tether) {
      this._tether.position();
    }
  }

  _destroy() {
    if (this._elementParentNode) {
      ReactDOM.unmountComponentAtNode(this._elementParentNode);
      this._elementParentNode.parentNode.removeChild(this._elementParentNode);
    }

    if (this._overlayParentNode) {
      ReactDOM.unmountComponentAtNode(this._overlayParentNode);
      this._overlayParentNode.parentNode.removeChild(this._overlayParentNode);
    }

    if (this._tether) {
      this._tether.off('update');
      this._tether.off('repositioned');
      this._tether.destroy();
    }

    this._elementParentNode = null;
    this._overlayParentNode = null;
    this._tether = null;
  }

  _update() {
    const { content, renderElementTag, renderElementTo } = this.props;

    if (!content) {
      if (this._tether) {
        this._destroy();
      }
      return;
    }

    const renderTo = renderElementTo || document.body;
    if (!this._elementParentNode) {
      const elementClassNames = classNames([
        'terra-TetherComponent-element',
        { 'terra-TetherComponent-element--modal': this._targetInsideModal },
      ]);

      this._elementParentNode = document.createElement(renderElementTag);
      this._elementParentNode.className = elementClassNames;
      renderTo.appendChild(this._elementParentNode);
    }

    const renderSubContent = () => {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this, content, this._elementParentNode, () => {
          this._updateTether();
        }
      );
    };

  
    if (this.props.disablePageScroll) {
      const overlay = <TetherOverlay displayAboveModal={this._targetInsideModal} />;

      if (!this._overlayParentNode) {
        this._overlayParentNode = document.createElement(renderElementTag);
        this._overlayParentNode.style.cssText = 'top: 0px;left: 0px;position: absolute;';
        renderTo.appendChild(this._overlayParentNode);
      }

      ReactDOM.unstable_renderSubtreeIntoContainer(
        this, overlay, this._overlayParentNode, () => {
          renderSubContent();
        }
      );
    } else {
      renderSubContent();
    }
  }

  _updateTether() {
    const { 
      renderElementTag,
      renderElementTo,
      isEnabled,
      target,
      content,
      contentAttachment,
      contentOffset,
      ...customProps 
      } = this.props; // eslint-disable-line no-unused-vars

    const tetherOptions = {
      attachment: contentAttachment,
      element: this._elementParentNode,
      target: this._targetNode,
      ...customProps,
    }

    //Aliased parameters
    if (contentOffset) {
      tetherOptions.offset = contentOffset;
    }
    if (isEnabled !== undefined) {
      tetherOptions.enabled = true;
    }

    if (!this._tether) {
      this._tether = new Tether(tetherOptions);
      this._tether.on('update', this.handleOnUpdate);
      this._tether.on('repositioned', this.handleOnRepositioned);
    } else {
      this._tether.setOptions(tetherOptions);
    }

    this._tether.position();
  }

  getNodeBounds()
  {
    const targetBounds = Tether.Utils.getBounds(this._targetNode);
    const presenterBounds = Tether.Utils.getBounds(this._elementParentNode);
    return {targetBounds, presenterBounds};
  }

  handleOnUpdate(event) {
    if (this.props.onUpdate) {
      const bounds = this.getNodeBounds();
      this.props.onUpdate(event, bounds.targetBounds, bounds.presenterBounds);
    }
  }

  handleOnRepositioned(event) {
    if (this.props.disableOnPosition) {
      this.disable();
    }

    if (this.props.onRepositioned) {
      const bounds = this.getNodeBounds();
      this.props.onRepositioned(event, bounds.targetBounds, bounds.presenterBounds);
    }
  }

  setTargetNode(node) {
    this._targetNode = node;
  }

  render () {
    const {
      classes,
      classPrefix,
      constraints,
      content,
      contentAttachment,
      contentOffset,
      disableOnPosition,
      disablePageScroll,
      isEnabled,
      optimizations,
      renderElementTag,
      renderElementTo,
      target,
      targetAttachment,
      targetModifier,
      targetOffset,
      onUpdate,
      onRepositioned,
      ...customProps 
    } = this.props;

    const wrapperClassNames = classNames([
      'terra-TetherComponent-element',
      customProps.className,
    ]);

    return (
      <div {...customProps} className={wrapperClassNames} ref={this.setTargetNode}>
        {this.props.target}
      </div>
    );
  }
}

TetherComponent.propTypes = propTypes;
TetherComponent.defaultProps = defaultProps;
TetherComponent.attachmentPositions = attachmentPositions;

export default TetherComponent;
