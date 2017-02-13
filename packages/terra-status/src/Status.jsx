import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/status.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-Status--default',
};

class Status extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    const { name, variant, ...customProps } = this.props;
    const classes = classNames(['terra-Status',
      variant,
      this.state.isSelected && 'u-selected',
      customProps.className,
    ]);


    if (!name) {
      return null;
    }
    if (!variant) {
      return null;
    }
    return (<button
      {...customProps}
      className={classes}
      onClick={this.handleClick}
    >Terra, {name}</button>);
  }
}

Status.propTypes = propTypes;
Status.defaultProps = defaultProps;

export default Status;
