/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Pill.module.scss';
import Pill from './Pill';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The aria label string value for the pills container.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * The content to be shown in the pills container. Should only contain the sub-component pills.
   */
  children: PropTypes.node,
  /**
   * Determines if the Pill List is rolled up or not.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Callback function triggered on click/key press of the roll up pill
   */
  rollUpPillOnTrigger: PropTypes.func,
};

const defaultProps = {
  isCollapsed: false,
  rollUpPillOnTrigger: undefined,
};

const PillList = (props) => {
  const {
    ariaLabel,
    children,
    isCollapsed,
    rollUpPillOnTrigger,
  } = props;

  const theme = React.useContext(ThemeContext);
  const pillListRef = useRef();
  const rollUpPillRef = useRef();
  const [rollUpCount, setRollUpCount] = useState(0);

  const handleRollUp = () => {
    rollUpPillRef.current.removeAttribute('style');
    let pillListHeight = pillListRef.current.clientHeight;
    const rollUpPillStyles = rollUpPillRef.current.currentStyle || window.getComputedStyle(rollUpPillRef.current);
    const pillHeight = rollUpPillRef.current.offsetHeight + Math.round(parseFloat(rollUpPillStyles.marginTop)) + Math.round(parseFloat(rollUpPillStyles.marginBottom));

    if (pillListHeight <= pillHeight) {
      rollUpPillRef.current.style.display = 'none';
      return;
    }

    const childPills = pillListRef.current.querySelectorAll('[class*="pill-container"]');
    let index = childPills.length - 1;
    let hiddenPillCounter = 0;
    while (pillListHeight > pillHeight) {
      childPills[index].style.display = 'none';
      index -= 1;
      hiddenPillCounter += 1;
      pillListHeight = pillListRef.current.clientHeight;
    }
    setRollUpCount(hiddenPillCounter);
  };

  const handleExpansion = () => {
    rollUpPillRef.current.style.display = 'none';

    if (rollUpCount === 0) {
      return;
    }

    const childPills = pillListRef.current.querySelectorAll('[class*="pill-container"]');
    let index = childPills.length - 1;
    let hiddenPillCounter = rollUpCount;
    while (hiddenPillCounter > 0) {
      childPills[index].removeAttribute('style');
      index -= 1;
      hiddenPillCounter -= 1;
    }
    setRollUpCount(hiddenPillCounter);
  };

  useEffect(() => {
    if (isCollapsed) {
      handleRollUp();
    } else {
      handleExpansion();
    }
    pillListRef.current.style.visibility = 'visible';
  }, [isCollapsed]);

  const handleKeyDown = (event) => {
    rollUpPillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    if (event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) {
      rollUpPillOnTrigger();
    }
  };

  const handleMouseDown = () => {
    rollUpPillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
  };

  const handleRollUpPillOnTrigger = () => {
    rollUpPillOnTrigger();
  };

  const rollUpPill = (
    <div
      className={cx(['roll-up-pill'])}
      onClick={handleRollUpPillOnTrigger}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      ref={rollUpPillRef}
      role="button"
      tabIndex="0"
    >
      {`${rollUpCount} more...`}
    </div>
  );

  const PillListClassNames = cx([
    'pill-list',
    theme.className,
  ]);

  return (
    <div
      aria-label={ariaLabel}
      className={PillListClassNames}
      ref={pillListRef}
    >
      {children}
      {rollUpPill}
    </div>
  );
};

PillList.propTypes = propTypes;
PillList.defaultProps = defaultProps;

export default PillList;
export { Pill };
