import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './PopupFrame.scss';

const arrowAlignments = [
  'Start',
  'Center',
  'End',
];

const arrowPositions = [
  'Top',
  'Bottom',
  'Start',
  'End',
];

const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  /**
   * The child elements passed to the component.
   */
  arrow: PropTypes.element,
  content: PropTypes.element,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnResize: PropTypes.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: PropTypes.func,
  /**
   * The function that should be triggered when a close is indicated.
   */
  arrowPosition: PropTypes.oneOf(arrowPositions),
  /**
   * The function that should be triggered when a close is indicated.
   */
  constraintContainer: PropTypes.any,
};

const defaultProps = {
  arrow: undefined,
  content: undefined,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  closeOnResize: true,
  onRequestClose: undefined,
  arrowPosition: 'Top',
};

class PopupFrame extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleKeydown);
    }
    if (this.props.closeOnResize) {
      window.addEventListener('resize', this.handleResize); //might need debounce, and/or use resize observer
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleKeydown);
    }

    if (this.props.closeOnResize) {
      document.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize(event) {
    if (this.props.closeOnResize && this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  handleClickOutside(event) {
    if (this.props.closeOnOutsideClick && this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  handleKeydown(event) {
    if (event.keyCode === KEYCODES.ESCAPE && this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  render() {
    const { 
      arrow,
      content,
      closeOnEsc,
      closeOnOutsideClick,
      closeOnResize,
      onRequestClose,
      enableOnClickOutside,
      disableOnClickOutside,
      arrowPosition,
      constraintContainer,
      ...customProps,
    } = this.props;

    const frameClassNames = classNames([
      'terra-PopupFrame',
      { [`terra-PopupFrame--arrow${arrowPosition}`]: arrowPosition },
      customProps.className,
    ]);

    let constraintStyle;
    if (this.props.constraintContainer) {
      const rect = this.props.constraintContainer.getBoundingClientRect();
      constraintStyle = {maxHeight: rect.height.toString() + 'px', maxWidth: rect.width.toString() + 'px'};
    }

    return (
      <div {...customProps} className={frameClassNames} style={constraintStyle}>
        {arrow}
        <div className="terra-PopupFrame-content">
          {content}
        </div>
      </div>
    );
  }
}

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

export default PopupFrame;
