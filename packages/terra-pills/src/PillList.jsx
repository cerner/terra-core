/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import {
  KEY_SPACE, KEY_RETURN, KEY_RIGHT, KEY_LEFT,
} from 'keycode-js';
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
  const focusableNodes = [];
  const pillListRef = useRef();
  const rollUpPillRef = useRef();
  const focusableNodeIndex = useRef();
  const focusedNode = useRef(0);
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

  const setTabIndex = (val) => {
    const currentNode = focusableNodeIndex.current ? pillListRef.current.querySelector(`[data-terra-focusable-pill="${focusableNodeIndex.current}"]`) : null;
    if (currentNode) {
      currentNode.setAttribute('tabIndex', val);
    }
  };

  const focusCurrentNode = () => {
    const currentNode = focusableNodeIndex.current ? pillListRef.current.querySelector(`[data-terra-focusable-pill="${focusableNodeIndex.current}"]`) : null;
    if (currentNode) {
      currentNode.focus();
    }
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

    if (focusableNodes.length > 0) {
      focusableNodeIndex.current = focusableNodes[focusedNode.current].id;
      setTabIndex('0');
      focusCurrentNode();
    }
  };

  useEffect(() => {
    const pills = pillListRef.current.childNodes;
    for (let i = 1; i < pills.length - 1; i += 1) {
      pills[i].setAttribute('tabindex', '-1');
    }

    focusedNode.current = 0;
    if (!isCollapsed && focusableNodes.length > 0) {
      focusableNodeIndex.current = focusableNodes[focusedNode.current].id;
      setTabIndex('0');
    }

    if (isCollapsed) {
      pillListRef.current.lastChild.setAttribute('tabindex', 0);
      focusableNodeIndex.current = pillListRef.current;
      setTabIndex('0');
    }
  }, []);

  useLayoutEffect(() => {
    if (isCollapsed) {
      handleRollUp();
    } else {
      handleExpansion();
    }
    pillListRef.current.style.visibility = 'visible';
  }, [isCollapsed]);

  const handleRollUpPillKeyDown = (event) => {
    rollUpPillRef.current.setAttribute('data-terra-pillList-show-focus-styles', 'true');
    if (event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) {
      rollUpPillOnTrigger();
    }
  };

  const handleRollUpPillMouseDown = () => {
    rollUpPillRef.current.setAttribute('data-terra-pillList-show-focus-styles', 'false');
  };

  const handleRollUpPillOnTrigger = () => {
    rollUpPillOnTrigger();
  };

  const rollUpPill = (
    <div
      className={cx(['roll-up-pill'])}
      onClick={handleRollUpPillOnTrigger}
      onKeyDown={handleRollUpPillKeyDown}
      onMouseDown={handleRollUpPillMouseDown}
      ref={rollUpPillRef}
      role="button"
      tabIndex="0"
      data-terra-pillList-show-focus-styles
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

  const handlePillListKeyDown = (event) => {
    if (event.keyCode === KEY_RIGHT) {
      event.preventDefault();

      if (focusedNode.current + 1 < focusableNodes.length) {
        setTabIndex('-1');
        focusedNode.current += 1;
        focusableNodeIndex.current = focusableNodes[focusedNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
      }
    }

    if (event.keyCode === KEY_LEFT) {
      event.preventDefault();
      if (focusedNode.current >= 1) {
        setTabIndex('-1');
        focusedNode.current -= 1;
        focusableNodeIndex.current = focusableNodes[focusedNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
      }
    }
  };

  const handlePillListOnClick = (event) => {
    const currentElement = event.target.parentElement.getAttribute('data-terra-focusable-pill');
    const currentIndex = focusableNodes.findIndex((element) => element.id === currentElement);

    if (currentElement && currentIndex >= 0) {
      setTabIndex('-1');
      focusedNode.current = currentIndex;
      focusableNodeIndex.current = focusableNodes[focusedNode.current].id;
      setTabIndex('0');
      focusCurrentNode();
    }

    focusCurrentNode();
  };

  const renderChildren = (pills) => {
    const items = React.Children.map(pills, (pill, index) => {
      if (pill) {
        return React.cloneElement(pill, { 'data-terra-focusable-pill': `index-${index}` });
      }
      return undefined;
    });

    items.map(item => {
      if (item.props.onSelect || item.props.onRemove) {
        focusableNodes.push({ id: item.props['data-terra-focusable-pill'] });
      }
      return undefined;
    });

    return items;
  };

  const pillListProps = {};
  pillListProps.onKeyDown = handlePillListKeyDown;
  pillListProps.onClick = handlePillListOnClick;

  return (
    <div
      {...customProps}
      {...pillListProps}
      ref={pillListRef}
      aria-label={!ariaLabelledBy ? ariaLabel : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-live="polite"
      aria-relevant="removals"
      className={pillListClassNames}
      tabIndex="-1"
    >
      <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.pills.pillListHint' }, { numberOfPills: children && children.length })} />
      {children ? renderChildren(children) : []}
      {rollUpPill}
    </div>
  );
};

PillList.propTypes = propTypes;
PillList.defaultProps = defaultProps;

export default injectIntl(PillList);
export { Pill };
