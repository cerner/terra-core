import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { disableFocusActiveStyles, disableFocusOnBlur, enableFocusActiveStyles } from './_paginationUtils';
import styles from './Paginator.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Sets aria-current attribute.
   */
  ariaCurrent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  /**
   * Sets aria-disabled attribute.
   */
  ariaDisabled: PropTypes.bool,
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Child elements passed in to buttons.
   */
  children: PropTypes.node,
  /**
   * Passed in CSS className.
   */
  className: PropTypes.string,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
};

class PaginatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);

    this.shouldShowFocus = true;
  }

  handleFocus(event) {
    if (this.shouldShowFocus) event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
  }

  handleMouseDown() {
    // Prevent button from showing focus styles when clicked
    this.shouldShowFocus = false;
    // Wait until after onFocus has been triggered on browsers where it will get triggered for click
    setTimeout(() => { this.shouldShowFocus = true; });
  }

  render() {
    const {
      ariaCurrent,
      ariaDisabled,
      ariaLabel,
      children,
      className,
      onClick,
    } = this.props;

    return (
      <button
        aria-current={ariaCurrent}
        aria-disabled={ariaDisabled}
        aria-label={ariaLabel}
        className={cx(className)}
        onBlur={(e) => disableFocusOnBlur(e)}
        onClick={onClick}
        onFocus={this.handleFocus}
        onKeyDown={(e) => enableFocusActiveStyles(e)}
        onKeyUp={(e) => disableFocusActiveStyles(e)}
        onMouseDown={this.handleMouseDown}
        type="button"
      >
        {children}
      </button>
    );
  }
}

PaginatorButton.propTypes = propTypes;

export default PaginatorButton;
