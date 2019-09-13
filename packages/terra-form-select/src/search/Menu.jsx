import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { intlShape, injectIntl } from 'react-intl';
import {
  KEY_UP, KEY_DOWN, KEY_RETURN, KEY_HOME, KEY_END, KEY_TAB, KEY_ESCAPE,
} from 'keycode-js';
import uniqueId from 'lodash.uniqueid';
import ClearOption from '../shared/_ClearOption';
import MenuUtil from '../shared/_MenuUtil';
import NoResults from '../shared/_NoResults';
import useScrollToActiveOption from '../shared/useScrollToActiveOption';
import findActiveOption from '../shared/findActiveOption';
import findNextActiveOption from '../shared/findNextActiveOption';
import findPreviousActiveOption from '../shared/findPreviousActiveOption';
import findFirstOption from '../shared/findFirstOption';
import findLastOption from '../shared/findLastOption';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * IDs that describe the search input and menu
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
   * The menu's input value.
   */
  inputValue: PropTypes.string,
  /**
   * The max height of the dropdown.
   */
  maxHeight: PropTypes.number,
  /**
   * The id of this menu
   */
  menuId: PropTypes.string.isRequired,
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered by the toggle button or tab keypress to close the menu
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Callback function triggered when the search criteria changes.
   */
  onSearch: PropTypes.func.isRequired,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func.isRequired,
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
  /**
   * The value of the selected options.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  children: [],
  clearOptionDisplay: undefined,
  inputValue: '',
  isAbove: false,
  isInvalid: false,
  maxHeight: undefined,
  openedFromToggle: false,
  optionFilter: undefined,
  required: false,
  value: undefined,
};


function Menu({
  ariaDescribedBy,
  ariaLabel,
  ariaLiveRef,
  children,
  clearOptionDisplay,
  inputValue,
  intl,
  isAbove,
  isInvalid,
  maxHeight,
  menuId,
  noResultContent,
  onRequestClose,
  onSearch,
  onSelect,
  openedFromToggle,
  optionFilter,
  placeholder,
  required,
  searchValue,
  value,
}) {
  const [activeOption, setActiveOption] = React.useState(() => findActiveOption(children, { activeOption: null, value }));

  const menuRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const menuInputRef = React.useRef(null);
  const noResultsRef = React.useRef(false);
  const listboxId = React.useRef(uniqueId('terra-form-select-menu-listbox-'));

  const handleMouseEnterOption = React.useCallback(option => (event) => {
    if (!option.props.disabled) {
      setActiveOption(option);
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
  }, [onSelect]);

  const decorateOptions = React.useCallback((object) => React.Children.map(object, (option) => {
    if (option.type.isOption) {
      const activeValue = activeOption ? activeOption.props.value : undefined;
      const isActive = MenuUtil.isEqual(option.props.value, activeValue);

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
  }), [activeOption, handleMouseEnterOption, handleOptionClick, value]);

  const options = React.useMemo(() => {
    const memoizedOptions = MenuUtil.filter(children, searchValue, optionFilter);

    if (memoizedOptions.length === 0) {
      noResultsRef.current = true;
      return <NoResults noResultContent={noResultContent} value={searchValue} />;
    }

    noResultsRef.current = false;
    const shouldShowClearOption = clearOptionDisplay && memoizedOptions.length > 0 && !searchValue;
    if (shouldShowClearOption) {
      memoizedOptions.unshift(<ClearOption display={clearOptionDisplay} value="" />);
    }

    return decorateOptions(memoizedOptions);
  }, [children, clearOptionDisplay, decorateOptions, noResultContent, optionFilter, searchValue]);

  const handleInputKeyDown = React.useCallback((event) => {
    const { keyCode } = event;
    const activeValue = activeOption ? activeOption.props.value : null;

    /** make previous option active */
    if (keyCode === KEY_UP) {
      event.preventDefault();
      const previousOption = findPreviousActiveOption(options, activeValue);
      setActiveOption(previousOption);

    /** make next option active */
    } else if (keyCode === KEY_DOWN) {
      event.preventDefault();
      const nextOption = findNextActiveOption(options, activeValue);
      setActiveOption(nextOption);

    /** make first option active */
    } else if (keyCode === KEY_HOME) {
      event.preventDefault();
      const firstOption = findFirstOption(options);
      setActiveOption(firstOption);

    /** make last option active */
    } else if (keyCode === KEY_END) {
      event.preventDefault();
      const lastOption = findLastOption(options);
      setActiveOption(lastOption);

    /** close menu and pass event to select */
    } else if (keyCode === KEY_TAB || keyCode === KEY_ESCAPE) {
      if (onRequestClose) {
        onRequestClose(event);
      }

    /** select active option, if present */
    } else if (keyCode === KEY_RETURN && activeOption) {
      event.preventDefault();
      onSelect(activeOption.props.value, activeOption);
    }
  }, [activeOption, onRequestClose, onSelect, options]);

  // Update active option
  React.useEffect(() => {
    const newActiveOption = findActiveOption(options, { activeOption, value });
    setActiveOption(newActiveOption);
  }, [activeOption, options, searchValue, value]);

  const activeDescendant = activeOption ? `terra-select-option-${activeOption.props.value}` : undefined;
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
    const { current: noResults } = noResultsRef;
    const { current: listbox } = listboxRef;

    /* without an aria-live component, we can't do anything */
    if (!ariaLive) {
      return;
    }

    /* no options to display */
    if (noResults) {
      ariaLive.innerText = intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: searchValue });
      return;
    }

    // Detects if option is clear option and provides accessible text
    if (clearOptionDisplay) {
      const activeOptionElement = listbox.querySelector('[data-select-active]');
      if (activeOptionElement && activeOptionElement.hasAttribute('data-terra-select-clear-option')) {
        ariaLive.innerText = intl.formatMessage({ id: 'Terra.form.select.clearSelect' });
        return;
      }
    }

    if (activeOption) {
      const isClearSelectOption = activeOption.props.display === '' && activeOption.props.value === '';
      const activeSelected = MenuUtil.isEqual(value, activeOption.props.value);

      if (isClearSelectOption) {
        ariaLive.innerText = intl.formatMessage({ id: 'Terra.form.select.clearSelect' });
      } else if (activeSelected) {
        ariaLive.innerText = intl.formatMessage({ id: 'Terra.form.select.selectedText' }, { text: activeOption.props.display });
      } else {
        ariaLive.innerText = activeOption.props.display;
      }
    } else {
      ariaLive.innerText = '';
    }
  });

  const menuClasses = cx([
    'menu',
    { 'is-above': isAbove },
    { 'is-focused': true }, // TODO: fixme
    { 'is-invalid': isInvalid },
  ]);

  /* eslint-disable react/forbid-dom-props */
  return (
    <div ref={menuRef} id={menuId} className={menuClasses} aria-describedby={ariaDescribedBy}>
      <div className={cx('menu-container')}>
        <div className={cx('display')} aria-label={ariaLabel}>
          <div className={cx('content')}>
            <input
              data-terra-select-menu-input
              aria-controls={listboxId.current}
              aria-describedby={ariaDescribedBy}
              aria-label={ariaLabel}
              aria-required={required}
              className={cx('search-input')}
              onChange={onSearch}
              onKeyDown={handleInputKeyDown}
              placeholder={placeholder}
              ref={menuInputRef}
              required={required}
              role="searchbox"
              type="text"
              value={inputValue}
            />
          </div>
        </div>
        <div className={cx(['toggle', 'toggle-narrow'])}>
          <button
            type="button"
            className={cx('toggle-btn')}
            aria-label={intl.formatMessage({ id: 'Terra.form.select.close' })}
            data-terra-form-select-toggle-button
            onClick={onRequestClose}
          >
            <span className={cx('arrow-icon')} data-terra-form-select-toggle-button-icon />
          </button>
        </div>
      </div>
      <ul
        role="listbox"
        className={cx(['menu-list', { 'is-above': isAbove }])}
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
