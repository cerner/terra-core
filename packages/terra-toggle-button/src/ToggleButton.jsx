import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import Toggle from 'terra-toggle';
import styles from './ToggleButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content in the body of the toggle-button component that will be expanded or toggle-buttond
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets the text inside of the button when the toggle-button component is closed
   */
  closedButtonText: PropTypes.string.isRequired,
  /**
   * Used to set props and HTML attributes on the toggle-button button
   */
  // eslint-disable-next-line react/forbid-prop-types
  buttonAttrs: PropTypes.object,
  /**
   * Icon displayed next to text content within the toggle-button button
   */
  icon: PropTypes.element,
  /**
   * Sets the toggle-button to be animated when it is opened or closed
   */
  isAnimated: PropTypes.bool,
  /**
   * Used to turn on animation on toggle-button button icon
   */
  isIconAnimated: PropTypes.bool,
  /**
   * Sets the toggle-button to only display and icon. Uses closedButtonText prop as an aria-label on the button.
   */
  isIconOnly: PropTypes.bool,
  /**
   * Sets the toggle-button initial state to open
   */
  isInitiallyOpen: PropTypes.bool,
  /**
   * Callback function triggered when toggle-button is closed
   */
  onClose: PropTypes.func,
  /**
   * Callback function triggered when toggle-button is opened
   */
  onOpen: PropTypes.func,
  /**
   * Sets the text inside of the button when the toggle-button component is open
   */
  openedButtonText: PropTypes.string,
};

const defaultProps = {
  isAnimated: false,
  isIconAnimated: false,
  isIconOnly: false,
  isInitiallyOpen: false,
  icon: <IconChevronRight />,
};

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isInitiallyOpen,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.preventDefault();

    // Fire event from toggle handlers
    if (!this.state.isOpen && this.props.onOpen) {
      this.props.onOpen();
    } else if (this.state.isOpen && this.props.onClose) {
      this.props.onClose();
    }

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const {
      buttonAttrs,
      children,
      closedButtonText,
      icon,
      isAnimated,
      isIconAnimated,
      isIconOnly,
      isInitiallyOpen,
      onClose,
      onOpen,
      openedButtonText,
      ...customProps
    } = this.props;
    // Set openHeaderText to the same value as closedHeaderText if its not already set
    const normalizedOpenButtonText = openedButtonText || closedButtonText;
    const buttonText = !this.state.isOpen ? closedButtonText : normalizedOpenButtonText;
    const text = isIconOnly ? closedButtonText : buttonText;
    const toggleButtonClass = cx([
      'button',
      { 'is-open': this.state.isOpen },
      { 'is-icon-animated': isIconAnimated },
      customProps.className,
    ]);

    const button = (
      <Button
        {...buttonAttrs}
        isIconOnly={isIconOnly}
        icon={<span className={cx('icon')}>{icon}</span>}
        aria-expanded={this.state.isOpen}
        text={text}
        onClick={this.handleOnClick}
      />
    );

    return (
      <div {...customProps} className={toggleButtonClass}>
        {button}
        <Toggle isOpen={this.state.isOpen} isAnimated={this.props.isAnimated}>
          {this.props.children}
        </Toggle>
      </div>
    );
  }
}

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
