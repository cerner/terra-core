import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom'
import Tether from 'tether'
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
]

const propTypes = {
  classes: PropTypes.object,
  classPrefix: PropTypes.string,
  content: PropTypes.element,
  constraints: PropTypes.array,
  contentAttachment: PropTypes.oneOf(attachmentPositions).isRequired,
  contentOffset: PropTypes.string,
  isEnabled: PropTypes.bool,
  optimizations: PropTypes.object,
  renderElementTag: PropTypes.string,
  renderElementTo: PropTypes.any,
  target: PropTypes.element.isRequired,
  targetAttachment: PropTypes.oneOf(attachmentPositions),
  targetModifier: PropTypes.string,
  targetOffset: PropTypes.string,
  onUpdate: PropTypes.func,
  onRepositioned: PropTypes.func,
};

const defaultProps = {
  renderElementTag: 'div',
  renderElementTo: null,
};

class TetherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.setTargetNode = this.setTargetNode.bind(this);
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
    this._tether.disable();
  }

  enable() {
    this._tether.enable();
  }

  position() {
    this._tether.position();
  }
  
  _destroy() {
    if (this._elementParentNode) {
      ReactDOM.unmountComponentAtNode(this._elementParentNode);
      this._elementParentNode.parentNode.removeChild(this._elementParentNode);
    }

    if (this._tether) {
      this._tether.off('update');
      this._tether.off('repositioned');
      this._tether.destroy();
    }

    this._elementParentNode = null;
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

    if (!this._elementParentNode) {
      this._elementParentNode = document.createElement(renderElementTag);

      const renderTo = renderElementTo || document.body;
      renderTo.appendChild(this._elementParentNode);
    }

    ReactDOM.unstable_renderSubtreeIntoContainer(
      this, content, this._elementParentNode, () => {
        this._updateTether();
      }
    )
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
      tetherOptions.enabled = isEnabled;
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

  attachmentOverlap(target, presenter)
  {
    const targetBounds = Tether.Utils.getBounds(this._targetNode);
    const presenterBounds = Tether.Utils.getBounds(this._elementParentNode);
    return {targetBounds, presenterBounds};
  }

  handleOnUpdate(event) {
    if (this.props.onUpdate) {
      this.props.onUpdate(event, this.attachmentOverlap());
    }
  }

  handleOnRepositioned(event) {
    if (this.props.onRepositioned) {
      this.props.onRepositioned(event, this.attachmentOverlap());
    }
  }

  setTargetNode(node) {
    this._targetNode = node;
  }

  render () {
    const {
      classes,
      classPrefix,
      content,
      constraints,
      contentAttachment,
      contentOffset,
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
      'terra-TetherComponent',
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
