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
import VisuallyHiddenText from 'terra-visually-hidden-text';
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
  /**
   * Role attribute value to be assigned to the pill
   */
  role: PropTypes.string,
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
    pillProps.role = 'button';
  }

  const pillButtonProps = {};
  if (onSelect) {
    pillButtonProps.onClick = handleOnClick;
  }

  const removeButtonProps = {};
  if (onRemove) {
    removeButtonProps.onClick = handleOnRemove;
  }

  let pillInteractionHint;
  if (onSelect && onRemove) {
    pillInteractionHint = 'Pill is selectable via Space Bar or Enter key and removable via Delete or Back Space key';
  } else if (onSelect) {
    pillInteractionHint = 'Pill is selectable via Space Bar or Enter key';
  } else if (onRemove) {
    pillInteractionHint = 'Pill is removable via Delete or Back Space key';
  }

  const theme = React.useContext(ThemeContext);
  const pillClassNames = cx([
    'pill-container',
    { 'is-focusable': !!onSelect || !!onRemove },
    { 'is-selectable': !!onSelect },
    { 'is-selectable-and-removable': !!onSelect && !!onRemove },
    theme.className,
  ]);
  const pillLabelClassNames = cx([
    'pill-label',
    { 'is-selectable': !!onSelect },
    { 'is-removable': !!onRemove },
    { 'is-selectable-and-removable': !!onSelect && !!onRemove },
  ]);
  const removeButtonClassNames = cx([
    'remove-button',
  ]);

  return (
    <div
      {...pillProps}
      className={pillClassNames}
      data-terra-pills-show-focus-styles="true"
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
          <IconClear className={cx('clear-icon')} />
        </div>
      )}
      {pillInteractionHint && <VisuallyHiddenText text={pillInteractionHint} />}
    </div>
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
