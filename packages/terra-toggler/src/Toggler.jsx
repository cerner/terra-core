import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'terra-button';
import 'terra-base/lib/baseStyles';
import './Toggler.scss';

const propTypes = {
  /**
   * Content in the body of the panel that will be expanded or collapsed
   **/
  children: PropTypes.node.isRequired,
  /**
   * Callback function when the toggler is opened.
   **/
  onOpen: PropTypes.func,
  /**
   * Callback function when the toggler is closed.
   **/
  onClose: PropTypes.func,
  /**
   * Content in the ‘header’ section that acts as a trigger for the collapse/expand action
   **/
  header: PropTypes.node.isRequired,
  /**
   * Animates expanding and collapsing
   **/
  isAnimated: PropTypes.bool,
  /**
   * Expands or collapses content
   **/
  isOpen: PropTypes.bool,
};

const defaultProps = {
  children: null,
  onOpen: null,
  onClose: null,
  header: null,
  isAnimated: true,
  isOpen: false,
};

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.props.onClose !== null && this.state.isOpen) {
      this.props.onClose();
    } else if (this.props.onOpen !== null && !this.state.isOpen) {
      this.props.onOpen();
    }
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    // Disable this rule because otherwise onOpen and onClose get added to customProps and get applied to the article
    // It is used in above functions, just not part of this render
    // eslint-disable-next-line no-unused-vars
    const { header, isOpen, isAnimated, children, onOpen, onClose, ...customProps } = this.props;

    const togglerClass = classNames([
      'terra-Toggler',
      { 'is-collapsed': !this.state.isOpen },
      { 'is-expanded': this.state.isOpen },
      { 'is-animated': isAnimated },
      customProps.className,
    ]);

    const ariaHidden = this.state.isOpen ? 'false' : 'true';
    const ariaExpanded = this.state.isOpen ? 'true' : 'false';

    return (
      // TODO: Links in header shouldn't trigger collapse
      <article {...customProps} className={togglerClass} >
        <Button size="small" variant="link" className="terra-Toggler-header" aria-expanded={ariaExpanded} onClick={this.handleToggle} >
          {header}
        </Button>
        <div className="terra-Toggler-content" aria-hidden={ariaHidden} >
          {children}
        </div>
      </article>
    );
  }
}

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
