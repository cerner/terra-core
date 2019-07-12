import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Item.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The text that is displayed on the option.
   */
  label: PropTypes.string.isRequired,
  /**
   * The function that is called when the option is clicked or enter/space is pressed with it focused.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * @private
   * Whether or not the option should show active styles
   */
  isActive: PropTypes.bool,
  /**
   * @private
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func,
};

/* eslint-disable jsx-a11y/click-events-have-key-events */
// Keyboard events are handled in _DropdownList.jsx
const Item = ({
  label, onClick, isActive, requestClose, ...customProps
}) => (
  <li>
    <div
      {...customProps}
      onClick={() => { requestClose(); onClick(); }}
      role="button"
      tabIndex="0"
      className={cx([
        'item',
        { active: isActive },
      ])}
    >
      {label}
    </div>
  </li>
);

Item.propTypes = propTypes;

export default Item;
