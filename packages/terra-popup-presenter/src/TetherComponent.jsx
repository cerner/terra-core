import React, { PropTypes } from 'react';
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
]

const propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  content: PropTypes.element,
  constraints: PropTypes.array,
  contentAttachment: PropTypes.oneOf(attachmentPositions).isRequired,
  contentOffset: PropTypes.string,
  id: PropTypes.string,
  isEnabled: PropTypes.bool,
  optimizations: PropTypes.object,
  renderElementTag: PropTypes.string,
  renderElementTo: PropTypes.any,
  style: PropTypes.object,
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
  componentDidMount() {
    this._targetNode = ReactDOM.findDOMNode(this);
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
    } else {
      this._tether.setOptions(tetherOptions);
    }

    this._tether.position();
  }

  render () {
    return this.props.target;
  }
}

TetherComponent.propTypes = propTypes;
TetherComponent.defaultProps = defaultProps;
TetherComponent.attachmentPositions = attachmentPositions;

export default TetherComponent;
