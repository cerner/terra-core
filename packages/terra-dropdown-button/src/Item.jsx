import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Item.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The text that is displayed on the option.
   */
  label: PropTypes.string.isRequired,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func.isRequired,
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
  label, onSelect, isActive, metaData, requestClose, ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  /*
    Having the li element with tabIndex -1 is important for VoiceOver in Safari, without it pressing VO + left/right will
    navigate outside the dropdown with the dropdown still open if nothing else is pressed after opening the menu.
  */
  return (
    <li tabIndex="-1" role="presentation">
      <div
        {...customProps}
        onClick={(event) => {
          requestClose(() => {
            onSelect(event, metaData);
          });
        }}
        role="menuitem"
        tabIndex="0"
        className={cx(
          'item',
          { active: isActive },
          theme.className,
        )}
      >
        {label}
      </div>
    </li>
  );
};

Item.propTypes = propTypes;

export default Item;
