import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { intlShape, injectIntl } from 'react-intl';
import {
  KEY_UP, KEY_DOWN, KEY_RETURN, KEY_HOME, KEY_END, KEY_TAB,
} from 'keycode-js';
import uniqueId from 'lodash.uniqueid';
import ClearOption from '../shared/_ClearOption';
import MenuUtil from '../shared/_MenuUtil';
import NoResults from '../shared/_NoResults';
import useScrollToActiveOption from '../shared/useScrollToActiveOption';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * IDs that describe the search input
   */
  ariaDescribedBy: PropTypes.string.isRequired,
  /**
   * Used to define a string that labels the select component to screen readers.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * @private Visually hidden component designed to feed screen reader text to read.
   */
  ariaLiveRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  /**
   * The content of the menu.
   */
  children: PropTypes.node,
  /**
   * The value of the selected options.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Callback function triggered when the search criteria changes.
   */
  onSearch: PropTypes.func.isRequired,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Text for the clear option.
   */
  clearOptionDisplay: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
  /**
   * Whether the menu list should be displayed above or not
   */
  isAbove: PropTypes.bool,
  /**
   * Whether the select is in an invalid state.
   */
  isInvalid: PropTypes.bool,
  /**
   * The max height of the dropdown.
   */
  maxHeight: PropTypes.number,
  /**
   * The id of this menu
   */
  menuId: PropTypes.string.isRequired,
  /**
   * Ref object of the parent select's input
   */
  menuInputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when tab is pressed on the menu
   */
  onTabDown: PropTypes.func.isRequired,
  /**
   * Whether the menu was opened from the toggle button or not
   */
  openedFromToggle: PropTypes.bool,
  /**
   * Callback function for option filtering. function(searchValue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * The search value to filter the available options.
   */
  searchValue: PropTypes.string.isRequired,
  /**
   * Ref object of the parent select
   */
  selectInputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

const defaultProps = {
  isAbove: false,
  isInvalid: false,
  maxHeight: undefined,
  openedFromToggle: false,
  required: false,
};

// TODO: moveme
function findActiveOption(children, { active = null, value = '' } = {}) {
  const options = MenuUtil.flatten(children, true);

  // no options => no active
  if (options.length === 0) {
    return null;
  }

  // active exists and is in the given options list
  if (active !== null && options.find(option => MenuUtil.isEqual(option.props.value, active))) {
    return active;
  }

  // active should default to the selected value, if present
  const selectedOption = options.find(option => (Array.isArray(value)
    ? MenuUtil.includes(value, option.props.value)
    : MenuUtil.isEqual(value, option.props.value)));

  return selectedOption !== undefined ? selectedOption.props.value : options[0].props.value;
}

function Menu({
  ariaDescribedBy,
  ariaLabel,
  ariaLiveRef,
  children,
  clearOptionDisplay,
  intl,
  isAbove,
  isInvalid,
  maxHeight,
  menuId,
  noResultContent,
  onSearch,
  onSelect,
  onTabDown,
  openedFromToggle,
  optionFilter,
  placeholder,
  required,
  searchValue,
  selectInputRef,
  value,
}) {
  const [active, setActive] = React.useState(() => findActiveOption(children, { active: null, value }));

  const menuRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const menuInputRef = React.useRef(null);
  const listboxId = React.useRef(uniqueId('terra-form-select-menu-listbox-'));

  const handleMouseEnterOption = React.useCallback(option => (event) => {
    if (!option.props.disabled) {
      setActive(option.props.value);
    }

    if (option.props.onMouseEnter) {
      option.props.onMouseEnter(event);
    }
  }, []);

  const handleOptionClick = React.useCallback(option => () => {
    if (option.props.disabled) {
      return;
    }

    onSelect(option.props.value, option);

    const { current: selectInput } = selectInputRef;
    if (selectInput) {
      selectInput.focus();
    }
  }, [onSelect, selectInputRef]);

  const decorateOptions = React.useCallback((object) => React.Children.map(object, (option) => {
    if (option.type.isOption) {
      const isActive = option.props.value === active;

      return React.cloneElement(option, {
        id: `terra-select-option-${option.props.value}`,
        isActive,
        isCheckable: false,
        isSelected: MenuUtil.isSelected(value, option.props.value),
        variant: 'search',
        onClick: handleOptionClick(option),
        onMouseEnter: handleMouseEnterOption(option),
        ...isActive && { 'data-select-active': true },
      });
    }

    if (option.type.isOptGroup) {
      return React.cloneElement(option, {}, decorateOptions(option.props.children));
    }

    return option;
  }), [active, handleMouseEnterOption, handleOptionClick, value]);

  const options = React.useMemo(() => {
    const memoizedOptions = MenuUtil.filter(children, searchValue, optionFilter);

    if (memoizedOptions.length === 0) {
      return <NoResults noResultContent={noResultContent} value={searchValue} />;
    }

    const shouldShowClearOption = clearOptionDisplay && memoizedOptions.length > 0 && !searchValue;
    if (shouldShowClearOption) {
      memoizedOptions.unshift(<ClearOption display={clearOptionDisplay} value="" />);
    }

    return decorateOptions(memoizedOptions);
  }, [children, clearOptionDisplay, decorateOptions, noResultContent, optionFilter, searchValue]);

  const handleInputKeyDown = React.useCallback((event) => {
    const { keyCode } = event;

    /** make previous option active */
    if (keyCode === KEY_UP) {
      event.preventDefault();
      const previousOption = MenuUtil.findPrevious(options, active);
      setActive(previousOption);

    /** make next option active */
    } else if (keyCode === KEY_DOWN) {
      event.preventDefault();
      const nextOption = MenuUtil.findNext(options, active);
      setActive(nextOption);

    /** make first option active */
    } else if (keyCode === KEY_HOME) {
      event.preventDefault();
      const firstOption = MenuUtil.findFirst(options);
      setActive(firstOption);

    /** make last option active */
    } else if (keyCode === KEY_END) {
      event.preventDefault();
      const lastOption = MenuUtil.findLast(options);
      setActive(lastOption);

    /** close menu and pass event to select */
    } else if (keyCode === KEY_TAB) {
      // TODO: maybe rename this?
      if (onTabDown) {
        onTabDown(event);
      }

    /** select active option, if present */
    } else if (keyCode === KEY_RETURN && active !== null) {
      event.preventDefault();
      const option = MenuUtil.findByValue(options, active);
      onSelect(option.props.value, option);
    }
  }, [active, onSelect, onTabDown, options]);

  // Update active option
  React.useEffect(() => {
    const activeOption = findActiveOption(options, { active, value });
    setActive(activeOption);
  }, [active, options, searchValue, value]);

  const activeDescendant = active !== null ? `terra-select-option-${active}` : undefined;
  useScrollToActiveOption(menuRef, activeDescendant);

  // Determine what we focus on onMount
  React.useEffect(() => {
    // opened from toggle button: focus on listbox
    if (openedFromToggle) {
      const { current: listbox } = listboxRef;
      listbox.focus();
      return;
    }

    // focus on the input
    const { current: input } = menuInputRef;
    if (input) {
      input.focus();
    }
  }, [openedFromToggle]);

  // update aria live declaratively
  React.useEffect(() => {
    const { current: ariaLive } = ariaLiveRef;
    // TODO: add aria live manipulation
  }, [ariaLiveRef]);

  const menuClasses = cx([
    'menu',
    { 'is-above': isAbove },
    { 'is-focused': true }, // TODO: fixme
    { 'is-invalid': isInvalid },
  ]);

  /* eslint-disable react/forbid-dom-props */
  return (
    // TODO: does this top level div also need 'aria-describedby'?
    <div ref={menuRef} id={menuId} className={menuClasses}>
      <div className={cx('display')} aria-label={ariaLabel}>
        <div className={cx('content')}>
          <input
            aria-controls={listboxId.current}
            aria-describedby={ariaDescribedBy}
            aria-label={ariaLabel}
            aria-required={required}
            className={cx('search-input')} // TODO: fix my styles
            onChange={onSearch}
            onKeyDown={handleInputKeyDown}
            placeholder={placeholder}
            ref={menuInputRef}
            required={required}
            role="searchbox"
            type="text"
            value={searchValue}
          />
        </div>
      </div>
      {/* TODO: add toggle button (just close the dropdown) */}
      <ul
        role="listbox"
        className={cx('menu-list')}
        id={listboxId.current}
        style={{ maxHeight }}
        aria-label={intl.formatMessage({ id: 'Terra.form.select.menu' })}
        aria-activedescendant={activeDescendant}
        tabIndex="0"
        ref={listboxRef}
      >
        {options}
      </ul>
    </div>
  );
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default injectIntl(Menu);
