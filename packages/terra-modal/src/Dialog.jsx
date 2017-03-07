import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from 'terra-button';
import CloseButton from 'terra-icon/lib/icon/themeable/close.svg';

/**
 * The <Dialog/> component contains the information in a modal, including header/body/footer.
 * It supports scrolling of body content and fixed footer at the bottom if the body overflows.
 * It supports full-screen dialog and sizes with max-width at different breakpoints.
 */
const propTypes = {
  /**
   * Set aria-label for modal dialog
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Set modal dialog to full screen
   */
  isFullScreen: PropTypes.bool,
  /**
   * Set the max-width for modal dialog
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Set the height of modal dialog in px, max-height = windows.height * 85
   */
  height: PropTypes.number,
  /**
   * Callback function for closing the modal
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Displays close button on the top right(ltr) of container
   */
  hasCloseButton: PropTypes.bool,
  /**
   * Modal header
   */
  header: PropTypes.element,
  /**
  * Modal body
  */
  body: PropTypes.element,
  /**
  * Modal footer
  */
  footer: PropTypes.element,
};


const defaultProps = {
  isFullScreen: false,
  size: 'medium',
  hasCloseButton: true,
};

class Dialog extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.updateBodyHeight = this.updateBodyHeight.bind(this);
  }

  componentDidMount() {
    this.updateBodyHeight();
    window.addEventListener('resize', this.updateBodyHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBodyHeight);
  }

  updateBodyHeight() {
    const headerHeight = this.dialog.firstElementChild.offsetHeight;
    const footerHeight = this.dialog.lastElementChild.offsetHeight;
    const headerfooter = headerHeight + footerHeight;
    if (this.props.isFullScreen) {
      this.setState({
        bodyHeight: window.innerHeight - headerfooter,
        bodyMaxHeight: undefined,
      });
    } else if (this.props.height) {
      const height = Math.min(
        this.props.height - headerfooter,
        (window.innerHeight * 0.85) - headerfooter,
      );
      this.setState({
        bodyHeight: height,
        bodyMaxHeight: undefined,
      });
    } else {
      this.setState({
        bodyMaxHeight: (window.innerHeight * 0.85) - headerfooter,
        bodyHeight: undefined,
      });
    }
  }

  render() {
    const bodyStyle = {
      maxHeight: this.state.bodyMaxHeight,
      height: this.state.bodyHeight,
    };
    const dialogClass = classNames(
      'terra-Modal-dialog',
      `terra-Modal--${this.props.size}`,
      { 'terra-Modal--fullScreen': this.props.isFullScreen },
    );
    return (
      <div
        role="dialog"
        tabIndex={-1}
        aria-label={this.props.ariaLabel}
        className={dialogClass}
        ref={(dialog) => { this.dialog = dialog; }}
      >
        <div className="terra-Modal-header">
          <div>{this.props.header}</div>
          {this.props.hasCloseButton &&
            <Button
              aria-label="modal-close"
              title="modal-close"
              className="terra-Modal--close"
              icon={<CloseButton />}
              onClick={this.props.onRequestClose}
            />
          }
        </div>
        <div className="terra-Modal-body" style={bodyStyle}>
          {this.props.body}
        </div>
        <div>
          {this.props.footer}
        </div>
      </div>
    );
  }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
