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
  closedButtonText: PropTypes.node.isRequired,
  /**
   * Icon displayed next to text content within the collapse button
   */
  icon: PropTypes.element.isRequired,
  /**
   * Used to set props and HTML attributes on the collapse button
   */
  buttonAttrs: PropTypes.object,
  /**
   * Sets the collapse to be animated when it is opened or closed
   */
  isAnimated: PropTypes.bool,
  /**
   * Sets the collapse initial state to open
   */
  isInitiallyOpen: PropTypes.bool,
  /**
   * Callback function triggered when collapse is opened
   */
  onOpen: PropTypes.func,
  /**
   * Callback function triggered when collapse is closed
   */
  onClose: PropTypes.func,
  /**
   * Sets the text inside of the button when the collapse component is open
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
    const { closedButtonText, icon, children, openedButtonText, buttonAttrs, isInitiallyOpen, isAnimated, onOpen, onClose, ...customProps } = this.props;
    // Set openHeaderText to the same value as closedHeaderText if its not already set
    const normalizedOpenButtonText = openedButtonText || closedButtonText;
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
