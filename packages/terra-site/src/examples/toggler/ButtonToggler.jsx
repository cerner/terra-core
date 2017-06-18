import React from 'react';
import Toggler from 'terra-toggler/src/Toggler';
import Button from 'terra-button';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

const propTypes = {
  /**
   * Additional attributes for the Button component
   */
  buttonAttrs: PropTypes.object,
  /**
   * Content in the body of the toggler component that will be expanded or collapsed
   */
  children: PropTypes.node,
  /**
   * Sets the toggler initial state
   */
  closedButtonText: PropTypes.node,
  icon: PropTypes.element,
  /**
   * Sets the toggler initial state
   */
  isAnimated: PropTypes.bool,
  /**
   * Sets the toggler initial state
   */
  isInitiallyOpen: PropTypes.bool,
  /**
   * Sets the toggler initial state
   */
  onOpen: PropTypes.func,
  /**
   * Sets the toggler initial state
   */
  onClose: PropTypes.func,
  /**
   * Sets the toggler initial state
   */
  openedButtonText: PropTypes.node,
};

const defaultProps = {
  isInitiallyOpen: false,
  icon: <IconChevronRight />,
};

class ButtonToggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.isInitiallyOpen,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.isInitiallyOpen });
  }

  handleOnClick(e) {
    e.preventDefault();

    // Fire event from toggler handlers
    if (!this.state.open && this.props.onOpen) {
      this.props.onOpen();
    } else if (this.state.open && this.props.onClose) {
      this.props.onClose();
    }

    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

  render() {
    const { closedButtonText, icon, children, openedButtonText, buttonAttrs, ...customProps } = this.props;
    // Set openHeaderText to the same value as closedHeaderText if its not already set
    const normalizedOpenButtonText = this.props.openedButtonText || closedButtonText;
    const buttonText = !this.state.open ? closedButtonText : normalizedOpenButtonText;
    // const collapsiblePanelClass = classNames([
    //   { 'terra-CollapsiblePanel--is-open': this.state.open },
    //   { 'terra-CollapsiblePanel--is-collapsed': !(this.state.open) },
    //   customProps.className,
    // ]);

    return (
      <div {...customProps}>
        <Button {...buttonAttrs} aria-expanded={this.state.open} onClick={this.handleOnClick} icon={<span className="terra-CollapsiblePanel-icon">{icon}</span>}>{buttonText}</Button>
        <Toggler isOpen={this.state.open} isAnimated={this.props.isAnimated}>
          {this.props.children}
        </Toggler>
      </div>
    );
  }
}

ButtonToggler.propTypes = propTypes;
ButtonToggler.defaultProps = defaultProps;

export default ButtonToggler;
