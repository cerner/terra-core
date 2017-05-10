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
  children: PropTypes.node,
  /**
   * Callback function after expanded and after collapsed.
   **/
  handleToggled: React.PropTypes.func,
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
  isOpened: PropTypes.bool,
};

const defaultProps = {
  children: null,
  handleToggled: null,
  header: null,
  isAnimated: true,
  isOpened: false,
};

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: props.isOpened,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({ isOpened: !this.state.isOpened });
    if (this.props.handleToggled !== null) {
      this.props.handleToggled(event);
    }
  }

  render() {
    // Disable this rule because otherwise handleToggled get added to customProps and get applied to the article
    // It is used in above functions, just not part of this render
    // eslint-disable-next-line no-unused-vars
    const { header, isOpened, isAnimated, children, handleToggled, ...customProps } = this.props;

    const togglerClass = classNames([
      'terra-Toggler',
      { 'is-collapsed': !this.state.isOpened },
      { 'is-expanded': this.state.isOpened },
      { 'is-animated': isAnimated },
      customProps.className,
    ]);

    const ariaHidden = this.state.isOpened ? null : 'true';
    const ariaExpanded = this.state.isOpened ? 'true' : 'false';

    return (
      // TODO: Links in header shouldn't trigger collapse
      <article {...customProps} className={togglerClass} role="tablist">
        <Button size="small" variant="link" className="terra-Toggler-header" aria-expanded={ariaExpanded} onClick={this.handleToggle} >
          {header}
        </Button>
        <div className="terra-Toggler-content" role="tabpanel" aria-hidden={ariaHidden} >
          {children}
        </div>
      </article>
    );
  }
}

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
