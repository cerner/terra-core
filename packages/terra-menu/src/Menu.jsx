import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Menu.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-Menu--default',
};

const Menu = (props) => (
  <div />
);

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
