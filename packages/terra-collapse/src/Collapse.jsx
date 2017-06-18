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
  isAnimated: false,
  isInitiallyOpen: false,
  icon: <IconChevronRight />,
};

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isInitiallyOpen,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
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
    const { closedButtonText, icon, children, openedButtonText, buttonAttrs, isInitiallyOpen, isAnimated, onOpen, onClose, ...customProps } = this.props;
    // Set openHeaderText to the same value as closedHeaderText if its not already set
    const normalizedOpenButtonText = this.props.openedButtonText || closedButtonText;
    const buttonText = !this.state.isOpen ? closedButtonText : normalizedOpenButtonText;
    const collapseClass = classNames([
      'terra-Collapse',
      { 'is-open': this.state.isOpen },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={collapseClass}>
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
