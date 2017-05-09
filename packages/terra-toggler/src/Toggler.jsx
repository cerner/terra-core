import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'terra-button';
import 'terra-base/lib/baseStyles';
import './Toggler.scss';

const propTypes = {
  header: PropTypes.element.isRequired,
  isCollapsed: PropTypes.bool,
  handleToggled: React.PropTypes.func,
  children: PropTypes.node,
};

const defaultProps = {
  isCollapsed: true,
  handleToggled: null,
  children: null,
};

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: props.isCollapsed,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({ isCollapsed: !this.state.isCollapsed });
    if (this.props.handleToggled !== null) {
      this.props.handleToggled(event);
    }
  }

  render() {
    // Disable this rule because otherwise handleToggled get added to customProps and get applied to the article
    // It is used in above functions, just not part of this render
    // eslint-disable-next-line no-unused-vars
    const { header, isCollapsed, children, handleToggled, ...customProps } = this.props;

    const togglerClass = classNames([
      'terra-Toggler',
      { 'is-collapsed': this.state.isCollapsed },
      { 'is-expanded': !this.state.isCollapsed },
      customProps.className,
    ]);

    const ariaHidden = isCollapsed ? null : 'true';

    return (
      // TODO: Links in header shouldn't trigger collapse
      <article {...customProps} className={togglerClass}>
        <Button size="small" variant="link" className="terra-Toggler-header" onClick={this.handleToggle} >
          {header}
        </Button>
        <div className="terra-Toggler-content" aria-hidden={ariaHidden}>
          {children}
        </div>
      </article>
    );
  }
}

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
