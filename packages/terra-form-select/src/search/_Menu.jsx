import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { intlShape, injectIntl } from 'react-intl';
import {
  KEY_UP, KEY_DOWN, KEY_RETURN, KEY_HOME, KEY_END,
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
   * The content of the menu.
   */
  children: PropTypes.node,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * The value of the selected options.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The search value to filter the available options.
   */
  searchValue: PropTypes.string.isRequired,
  /**
   * Callback function triggered when the search criteria changes.
   */
  onSearch: PropTypes.func.isRequired,
  /**
   * Text for the clear option.
   */
  clearOptionDisplay: PropTypes.string,

  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when an option is deselected.
   */
  // onDeselect: PropTypes.func,

  /**
   * Callback function for option filtering. function(searchValue, option)
   */
  optionFilter: PropTypes.func,

  isAbove: PropTypes.bool,

  isInvalid: PropTypes.bool,
  maxHeight: PropTypes.number,
  // ariaLabel: PropTypes.string.isRequired,
  // ariaDescribedBy: PropTypes.string,
  // onSearch: PropTypes.func.isRequired,
  required: PropTypes.bool,
  // placeholder: PropTypes.string.isRequired,
  intl: intlShape.isRequired,

  // TODO: make this req'd
  selectInputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

const defaultProps = {
  isAbove: false,
  isInvalid: false,
  maxHeight: undefined,
  required: false,
};

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
  children,
  onSelect,
  value,
  searchValue,
  onSearch,
  optionFilter,
  noResultContent,
  clearOptionDisplay,
  isAbove,
  isInvalid,
  maxHeight,
  required,
  selectInputRef,
  intl,
}) {
  const [active, setActive] = React.useState(() => findActiveOption(children, { active: null, value }));

  const menuRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const listboxId = React.useRef(uniqueId('terra-form-select-menu-listbox-'));

  const handleMouseEnterOption = React.useCallback(option => (event) => {
    if (!option.props.disabled) {
      setActive(option.props.value);
    }

    if (option.props.onMouseEnter) {
      option.props.onMouseEnter(event);
    }
  }, []);

  const handleOptionClick = React.useCallback(option => (event) => {
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

    /** select active option, if present */
    } else if (keyCode === KEY_RETURN && active !== null) {
      event.preventDefault();
      const option = MenuUtil.findByValue(options, active);
      onSelect(option.props.value, option);
    }
  }, [active, onSelect, options]);

  // Update active option
  React.useEffect(() => {
    const activeOption = findActiveOption(options, { active, value });
    setActive(activeOption);
  }, [active, options, searchValue, value]);

  const activeDescendant = active !== null ? `terra-select-option-${active}` : undefined;
  useScrollToActiveOption(menuRef, activeDescendant);

  const menuClasses = cx([
    'menu',
    { 'is-above': isAbove },
    { 'is-focused': true }, // TODO: fixme
    { 'is-invalid': isInvalid },
  ]);

  /* eslint-disable react/forbid-dom-props */
  return (
    <div ref={menuRef} className={menuClasses}>
      <div className={cx('content')}>
        <input
          type="text"
          role="searchbox"
          className={cx('search-input')}
          onChange={onSearch}
          value={searchValue}
          onKeyDown={handleInputKeyDown}
        />
      </div>
      <ul
        role="listbox"
        className={cx('menu-list')}
        id={listboxId.current}
        style={{ maxHeight }}
        aria-label={intl.formatMessage({ id: 'Terra.form.select.menu' })}
        aria-activedescendant={activeDescendant}
        tabIndex="0"
        ref={listboxRef} // TODO: may not need
      >
        {options}
      </ul>
    </div>
  );
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default injectIntl(Menu);
