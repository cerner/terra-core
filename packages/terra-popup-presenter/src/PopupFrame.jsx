import React, { PropTypes } from 'react';
import classNames from 'classnames';
import PopupArrow from './PopupArrow'
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
  children: PropTypes.node,
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
  arrowAlignment: PropTypes.oneOf(arrowAlignments),
  /**
   * The function that should be triggered when a close is indicated.
   */
  arrowPosition: PropTypes.oneOf(arrowPositions),
  /**
   * The function that should be triggered when a close is indicated.
   */
  showArrow: PropTypes.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  arrowPxOffset: PropTypes.number,
  /**
   * The function that should be triggered when a close is indicated.
   */
  constraintContainer: PropTypes.any,
};

const defaultProps = {
  children: [],
  closeOnEsc: true,
  closeOnOutsideClick: true,
  closeOnResize: true,
  onRequestClose: undefined,
  arrowAlignment: 'Center',
  arrowPosition: 'Top',
  showArrow: true,
};

class PopupFrame extends React.Component {
  static spacerFromOffset(offset, position) {
    const styleOffset = {};
    if (['Top','Bottom'].indexOf(position) >= 0) {
      styleOffset.width = offset.toString();
      styleOffset.maxWidth = 'calc(100% - 30px)';
    } else {
      styleOffset.height = offset.toString();
      styleOffset.maxHeight = 'calc(100% - 30px)';
    }
    return <div className="terra-PopupFrame-spacer" style={styleOffset} />;
  }

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
      children,
      closeOnEsc,
      closeOnOutsideClick,
      closeOnResize,
      onRequestClose,
      enableOnClickOutside,
      disableOnClickOutside,
      arrowAlignment,
      arrowPosition,
      showArrow,
      arrowPxOffset,
      constraintContainer,
      ...customProps,
    } = this.props;

    const frameClassNames = classNames([
      'terra-PopupFrame',
      { [`terra-PopupFrame--arrow${arrowPosition}`]: arrowPosition },
      customProps.className,
    ]);

    const arrowClassNames = classNames([
      'terra-PopupFrame-arrow',
      { [`terra-PopupFrame-arrow--align${arrowAlignment}`]: arrowAlignment },
    ]);

    let arrow;
    if (showArrow) {
      let offset = arrowPxOffset;
      if (arrowAlignment === 'Center') {
        offset *= 2;
      }
      arrow = <PopupArrow position={arrowPosition} offset={offset} />;
    }

    let constraintStyle;
    if (this.props.constraintContainer) {
      const rect = this.props.constraintContainer.getBoundingClientRect();
      constraintStyle = {maxHeight: rect.height.toString() + 'px', maxWidth: rect.width.toString() + 'px'};
    }

    return (
      <div {...customProps} className={frameClassNames} style={constraintStyle}>
        {arrow}
        <div className="terra-PopupFrame-children">
          {children}
        </div>
      </div>
    );
  }
}

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

export default PopupFrame;
