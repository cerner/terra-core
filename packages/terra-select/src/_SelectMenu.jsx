import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './SelectMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  isHeightBounded: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  isHeightBounded: false,
  isWidthBounded: false,
};

const SelectMenu = (props) => {
  const menuClassNames = cx({ 'height-bounded': props.isHeightBounded });

  return (
    <ul className={menuClassNames}>
      {props.children}
    </ul>
  );
};

SelectMenu.propTypes = propTypes;
SelectMenu.defaultProps = defaultProps;

export default SelectMenu;
