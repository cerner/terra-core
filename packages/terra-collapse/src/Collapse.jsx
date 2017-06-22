import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import Toggler from 'terra-toggler';
import 'terra-base/lib/baseStyles';
import './Collapse.scss';

const propTypes = {
  /**
   * Content in the body of the collapse component that will be expanded or collapsed
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets the text inside of the button when the collapse component is closed
   */
  closedButtonText: PropTypes.string.isRequired,
  /**
   * Used to set props and HTML attributes on the collapse button
   */
  buttonAttrs: PropTypes.object,
  /**
   * Icon displayed next to text content within the collapse button
   */
  icon: PropTypes.element,
  /**
   * Sets the collapse to be animated when it is opened or closed
   */
  isAnimated: PropTypes.bool,
  /**
   * Used to turn on animation on collapse button icon
   */
  isIconAnimated: PropTypes.bool,
  /**
   * Sets the collapse to only display and icon. Uses closedButtonText prop as an aria-label on the button.
   */
  isIconOnly: PropTypes.bool,
  /**
   * Sets the collapse initial state to open
   */
  isInitiallyOpen: PropTypes.bool,
  /**
   * Callback function triggered when collapse is closed
   */
  onClose: PropTypes.func,
  /**
   * Callback function triggered when collapse is opened
   */
  onOpen: PropTypes.func,
  /**
   * Sets the text inside of the button when the collapse component is open
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

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isInitiallyOpen,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isInitiallyOpen === this.props.isInitiallyOpen) {
      return;
    }

    this.setState({ isOpen: nextProps.isInitiallyOpen });
  }

  handleOnClick(e) {
    e.preventDefault();

    // Fire event from toggler handlers
    if (!this.state.isOpen && this.props.onOpen) {
      this.props.onOpen();
    } else if (this.state.isOpen && this.props.onClose) {
      this.props.onClose();
    }

    this.setState(prevState => ({
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
    const collapseClass = classNames([
      'terra-Collapse',
      { 'is-open': this.state.isOpen },
      { 'is-icon-animated': isIconAnimated },
      customProps.className,
    ]);

    let collapseButton;
    if (isIconOnly) {
      collapseButton = (
        <Button
          {...buttonAttrs}
          aria-expanded={this.state.isOpen}
          aria-label={closedButtonText}
          onClick={this.handleOnClick}
        >
          <span className="terra-Collapse-icon">{icon}</span>
        </Button>
      );
    } else {
      collapseButton = (
        <Button
          {...buttonAttrs}
          aria-expanded={this.state.isOpen}
          onClick={this.handleOnClick}
        >
          <Arrange
            align="center"
            fitStart={<span className="terra-Collapse-icon">{icon}</span>}
            fill={<span className="terra-Collapse-buttonText">{buttonText}</span>}
          />
        </Button>
      );
    }

    return (
      <div {...customProps} className={collapseClass}>
        {collapseButton}
        <Toggler isOpen={this.state.isOpen} isAnimated={this.props.isAnimated}>
          {this.props.children}
        </Toggler>
      </div>
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;
