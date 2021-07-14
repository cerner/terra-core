/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect, useRef, useState } from 'react';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Pill.module.scss';
import Pill from './Pill';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The string that labels the collection of pills, used in cased where the text label is not visible on the screen and required for minimum accessibility standards.
   * Providing this prop adds the `aria-label` attribute to the Pill List container element. (Required)
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * If a visible text label is used with the collection of pills, provide a string of the ID for the html element containing the visible text label.
   * Supplying the 'ariaLabelledBy' prop will override the 'ariaLabel' prop and adds the `aria-labelledby` attribute instead to the Pill List container element.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) For best practices, ensure the visible text in the html element `id` provided to the Pill List
   * `ariaLabelledby`prop matches the text provided to the `ariaLabel` prop, for consistency in the case of fallback or errors.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * If additional visible information text is used, provide a string containing the IDs for html elements that help describe the intent of the pills and the Pill List container.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * The content to be shown in the pills container. Should only contain the sub-component pills.
   */
  children: PropTypes.node,
  /**
   * Determines if the Pill List is rolled up or not.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Callback function triggered on click/key press of the roll-up pill
   */
  rollUpPillOnTrigger: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  ariaLabelledBy: undefined,
  ariaDescribedBy: undefined,
  children: undefined,
  isCollapsed: false,
  rollUpPillOnTrigger: undefined,
};

const PillList = (props) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    isCollapsed,
    rollUpPillOnTrigger,
    intl,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const pillListRef = useRef();
  const rollUpPillRef = useRef();
  const [rollUpCount, setRollUpCount] = useState(0);

  const handleRollUp = () => {
    rollUpPillRef.current.removeAttribute('style');
    let pillListHeight = pillListRef.current.clientHeight;
    const rollUpPillStyles = window.getComputedStyle(rollUpPillRef.current);
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

  useLayoutEffect(() => {
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
      {intl.formatMessage({ id: 'Terra.pills.rollupPillLabel' }, { pillsNotVisibleCount: rollUpCount })}
    </div>
  );

  const pillListClassNames = classNames(
    cx([
      'pill-list',
      theme.className,
    ]),
    customProps.className,
  );

  return (
    <div
      {...customProps}
      ref={pillListRef}
      aria-label={!ariaLabelledBy ? ariaLabel : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-live="polite"
      aria-relevant="removals"
      className={pillListClassNames}
    >
      <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.pills.pillListHint' }, { numberOfPills: children.length })} />
      {children}
      {rollUpPill}
    </div>
  );
};

PillList.propTypes = propTypes;
PillList.defaultProps = defaultProps;

export default injectIntl(PillList);
export { Pill };
