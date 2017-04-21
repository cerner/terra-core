import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './PopupFrame.scss';

const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  closeOnEsc: PropTypes.bool,
};

const defaultProps = {
  children: [],
  closeOnEsc: false,
};

class PopupFrame extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }

  handleClickOutside(event) {
    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
  }

  handleKeydown(event) {
    if (event.keyCode === KEYCODES.ESCAPE) {
      this.props.onClickOutside(event);
    }
  }

  render() {
    const { children, onClickOutside, enableOnClickOutside, disableOnClickOutside, ...customProps } = this.props;
    const frameClassNames = classNames([
      'terra-PopupFrame',
      customProps.className,
    ]);

    return (
      <div {...customProps} className={frameClassNames}>
        {children}
      </div>
    );
  }
}

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

export default PopupFrame;
