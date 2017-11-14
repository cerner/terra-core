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
  let menuRef = null;
  const menuClassNames = cx({ 'height-bounded': props.isHeightBounded }, 'menu-list');

  const handleOnKeyDown = (event) => {
    const key = String.fromCharCode(event.nativeEvent.keyCode);
    const childrenCount = React.Children.count(props.children);
    if (menuRef) {
      for (let i = 0; i < childrenCount; i += 1) {
        const child = menuRef.children[i];
        if (child && child.tabIndex === 0 && child.textContent.startsWith(key)) {
          child.focus();
          break;
        }
      }
    }
  };

  return (
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    <ul
      role="listbox"
      className={menuClassNames}
      onKeyDown={handleOnKeyDown}
      ref={(node) => { if (node) { menuRef = node; } }}
    >
      {/* eslint-enable jsx-a11y/no-static-element-interactions */}
      {props.children}
    </ul>
  );
};

SelectMenu.propTypes = propTypes;
SelectMenu.defaultProps = defaultProps;

export default SelectMenu;
