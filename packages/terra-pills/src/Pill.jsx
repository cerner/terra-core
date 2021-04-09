import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import {
  KEY_SPACE,
  KEY_RETURN,
  KEY_DELETE,
  KEY_BACK_SPACE,
} from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import IconClear from 'terra-icon/lib/icon/IconClear';
import styles from './Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The label text of the pill component.
   */
  label: PropTypes.string.isRequired,
  /**
   * A callback function to execute when the pill is removed. If specified, the pill will be removable.
   */
  onRemove: PropTypes.func,
  /**
   * A callback function to execute when the pill is selected. If specified, the pill will be selectable.
   */
  onSelect: PropTypes.func,
  /**
   * Callback to expose pill element's ref for popup placement.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  onRemove: undefined,
  onSelect: undefined,
  refCallback: undefined,
};

const Pill = (props) => {
  const {
    label,
    onRemove,
    onSelect,
    refCallback,
  } = props;

  const pillRef = useRef();

  useEffect(() => {
    if (refCallback) {
      refCallback(pillRef.current);
    }
  }, [refCallback]);

  const handleOnClick = () => {
    onSelect();
  };

  const handleOnRemove = () => {
    onRemove();
  };

  const handleOnKeyDown = (event) => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    if ((event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) && onSelect) {
      onSelect();
    } else if ((event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && onRemove) {
      onRemove();
    }
  };

  const handleOnMouseDown = () => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
  };

  const pillProps = {};
  if (onSelect || onRemove) {
    pillProps.tabIndex = '0';
    pillProps.onKeyDown = handleOnKeyDown;
    pillProps.onMouseDown = handleOnMouseDown;
  }

  const pillButtonProps = {};
  if (onSelect) {
    pillButtonProps.onClick = handleOnClick;
    pillButtonProps.role = 'button';
  } else {
    pillButtonProps.role = 'note';
  }

  const removeButtonProps = {};
  if (onRemove) {
    removeButtonProps.onClick = handleOnRemove;
    removeButtonProps.role = 'button';
  }

  const theme = React.useContext(ThemeContext);
  const pillClassNames = cx([
    'pill-container',
    { 'is-focusable': !!onSelect || !!onRemove },
    theme.className,
  ]);
  const pillLabelClassNames = cx([
    'pill-label',
    { 'is-selectable': !!onSelect },
    { 'is-removable': !!onRemove },
  ]);
  const removeButtonClassNames = cx([
    'remove-button',
    { 'is-removable': !!onRemove },
  ]);

  return (
    <>
      <div
        {...pillProps}
        className={pillClassNames}
        ref={pillRef}
      >
        <div
          {...pillButtonProps}
          className={pillLabelClassNames}
        >
          {label}
        </div>
        {onRemove && (
          <div
            {...removeButtonProps}
            className={removeButtonClassNames}
          >
            <IconClear height="0.57143rem" width="0.57143rem" />
          </div>
        )}
      </div>
    </>
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
