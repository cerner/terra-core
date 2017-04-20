import React, { PropTypes } from 'react';
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
  'bottom right'
]

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  attachment: PropTypes.oneOf(attachmentPositions).isRequired,
  content: PropTypes.element,
  enabled: PropTypes.bool,
  offset: PropTypes.string,
  // optimizations: PropTypes.object,
  renderElementTag: PropTypes.string,
  renderElementTo: PropTypes.any,
  style: PropTypes.object,
  target: PropTypes.element.isRequired,
  targetAttachment: PropTypes.oneOf(attachmentPositions),
  targetModifier: PropTypes.string,
  targetOffset: PropTypes.string
};

const defaultProps = {
  renderElementTag: 'div',
  renderElementTo: null
};

class Popup extends React.Component {

  componentDidMount () {
    this._targetNode = ReactDOM.findDOMNode(this);
    this._update();
  }

  componentDidUpdate () {
    this._update();
  }

  componentWillUnmount () {
    this._destroy();
  }

  disable = () => this._tether.disable();

  enable = () => this._tether.enable();

  position = () => this._tether.position();

  _destroy = () => {
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

  _update = () => {
    const { content, renderElementTag, renderElementTo } = this.props;

    // if no element component provided, bail out
    if (!content) {
      // destroy Tether elements if they have been created
      if (this._tether) {
        this._destroy();
      }
      return;
    }

    // create element node container if it hasn't been yet
    if (!this._elementParentNode) {
      // create a node that we can stick our content Component in
      this._elementParentNode = document.createElement(renderElementTag);

      // append node to the end of the body
      const renderTo = renderElementTo || document.body;
      renderTo.appendChild(this._elementParentNode);
    }

    // render element component into the DOM
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this, content, this._elementParentNode, () => {
        // don't update Tether until the subtree has finished rendering
        this._updateTether();
      }
    )
  }

  _updateTether = () => {
    const { renderElementTag, renderElementTo, ...customProps } = this.props // eslint-disable-line no-unused-vars
    const tetherOptions = {
      target: this._targetNode,
      element: this._elementParentNode,
      ...customProps
    }

    if (!this._tether) {
      this._tether = new Tether(tetherOptions);
    } else {
      this._tether.setOptions(tetherOptions);
    }

    this._tether.position();
  }

  render () {
    return this.props.target
  }
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

export default Popup;
