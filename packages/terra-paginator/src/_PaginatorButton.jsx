import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
};

class PaginatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false };
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);

    this.shouldShowFocus = true;
  }

  handleOnBlur() {
    this.setState({ focused: false });
  }

  handleOnKeyDown(event) {
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: true });
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ focused: true });
    }
  }

  handleOnKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
      this.setState({ focused: true });
    }
  }

  handleFocus() {
    if (this.shouldShowFocus) this.setState({ focused: true });
  }

  handleMouseDown() {
    // Prevent button from showing focus styles when clicked
    this.shouldShowFocus = false;
    // Wait until after onFocus has been triggered on browsers where it will get triggered for click
    setTimeout(() => { this.shouldShowFocus = true; });
  }

  render() {
    const {
      children,
      onClick,
      ...customProps
    } = this.props;

    const buttonClasses = cx([
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
    ]);

    return (
      <button
        className={cx([customProps.className, buttonClasses])}
        onBlur={this.handleOnBlur}
        onClick={onClick}
        onFocus={this.handleFocus}
        onKeyDown={this.handleOnKeyDown}
        onKeyUp={this.handleOnKeyUp}
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
