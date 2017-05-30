import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import Tether from 'tether'

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
   * The content to be tethered.
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
   * Should element be tethered to the page.
   */
  isEnabled: PropTypes.bool,
  /**
   * The ability to disable "gpu" and "moveElement" optimizations.
   */
  optimizations: PropTypes.object,
  /**
   * Required element to be presented and tethered to.
   */
  targetRef: PropTypes.func.isRequired,
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
};

class TetherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setElementNode = this.setElementNode.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.handleOnRepositioned = this.handleOnRepositioned.bind(this);
  }

  componentDidMount() {
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
    if (this._elementNode) {
      // ReactDOM.unmountComponentAtNode(this._elementNode);
      this._elementNode.parentNode.removeChild(this._elementNode);
    }

    if (this._tether) {
      this._tether.off('update');
      this._tether.off('repositioned');
      this._tether.destroy();
    }

    this._elementNode = null;
    this._tether = null;
  }

  _update() {
    const { content } = this.props;

    if (!content) {
      if (this._tether) {
        this._destroy();
      }
      return;
    }

    this._updateTether();
  }

  _updateTether() {
    const { 
      isEnabled,
      targetRef,
      content,
      contentAttachment,
      contentOffset,
      ...customProps 
      } = this.props; // eslint-disable-line no-unused-vars

    const tetherOptions = {
      attachment: contentAttachment,
      element: this._elementNode,
      target: targetRef(),
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
    const targetBounds = Tether.Utils.getBounds(this.props.targetRef());
    const presenterBounds = Tether.Utils.getBounds(this._elementNode);
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

  setElementNode(node) {
    this._elementNode = node;
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
      isEnabled,
      optimizations,
      targetRef,
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
      <div {...customProps} className={wrapperClassNames} ref={this.setElementNode}>
        {content}
      </div>
    );
  }
}

TetherComponent.propTypes = propTypes;
TetherComponent.defaultProps = defaultProps;
TetherComponent.attachmentPositions = attachmentPositions;

export default TetherComponent;
