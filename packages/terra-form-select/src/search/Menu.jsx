import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { polyfill } from 'react-lifecycles-compat';
import { injectIntl, intlShape } from 'react-intl';
import * as KeyCode from 'keycode-js';
import uniqueId from 'lodash.uniqueid';
import ClearOption from '../shared/_ClearOption';
import NoResults from '../shared/_NoResults';
import MenuUtil from '../shared/_MenuUtil';
import SharedUtil from '../shared/_SharedUtil';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

/* Disabling this rule because props used in getDerivedStateFromProps return false positives. */
/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * The content of the menu.
   */
  children: PropTypes.node,
  /**
   * Select element ref.
   */
  select: PropTypes.instanceOf(Element),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
  /**
   * Input element ref used in select component.
   */
  input: PropTypes.instanceOf(Element),
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
  onDeselect: PropTypes.func,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Callback function for option filtering. function(searchValue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * The search value to filter the available options.
   */
  searchValue: PropTypes.string,
  /**
   * The value of the selected options.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * @private Visually hidden component designed to feed screen reader text to read.
   */
  visuallyHiddenComponent: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),

  // TODO: these are new
  isAbove: PropTypes.bool,
  isInvalid: PropTypes.bool,
  maxHeight: PropTypes.number,
  ariaLabel: PropTypes.string.isRequired,
  ariaDescribedBy: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

const defaultProps = {
  children: undefined,
  input: undefined,
  clearOptionDisplay: undefined,
  noResultContent: undefined,
  onDeselect: undefined,
  optionFilter: undefined,
  searchValue: undefined,
  select: undefined,
  visuallyHiddenComponent: undefined,
  value: undefined,

  // TODO: these are new
  isAbove: false,
  isInvalid: false,
  maxHeight: undefined,
  ariaDescribedBy: undefined,
  required: false,
};

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.menuInputRef = React.createRef(null);

    this.clearScrollTimeout = this.clearScrollTimeout.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
    this.clone = this.clone.bind(this);
  }

  /**
   * Updates the component state when new props are received.
   * @param {Object} props - The received props.
   * @param {Object} state - The current state of the component.
   * @return {Object} - The new state object.
   */
  static getDerivedStateFromProps(props, state) {
    const {
      clearOptionDisplay, searchValue, noResultContent,
    } = props;

    let children;
    let hasNoResults = false;
    const hasMaxSelection = false;
    const hasAddOption = false;

    children = MenuUtil.filter(props.children, props.searchValue, props.optionFilter);
    children = MenuUtil.updateSelectionState(children, props);

    if (children.length === 0) {
      children.push(<NoResults noResultContent={noResultContent} value={searchValue} />);
      hasNoResults = true;
    }

    if (MenuUtil.shouldShowClearOption({
      clearOptionDisplay, searchValue, hasAddOption, hasNoResults,
    })) {
      children.unshift(<ClearOption display={clearOptionDisplay} value="" />);
    }

    return {
      children,
      searchValue,
      hasMaxSelection,
      hasNoResults,
      active: MenuUtil.getActiveOptionFromProps(props, children, state),
    };
  }

  componentDidMount() {
    // document.addEventListener('keydown', this.handleKeyDown);

    const { current: input } = this.menuInputRef;

    if (input) {
      input.focus();
    }
    /**
     * Without this detection for ontouchstart and the early return, VoiceOver on iOS will read the
     * first option twice when the menu is opened. First due to aria-live update in componentDidMount
     * and another time because we shift focus to the dropdown and VoiceOver on iOS will read the
     * first option in the dropdown. To mitigate this, the following conditional
     * check opts-out of the aria-live update if browser supports ontouchstart which iOS supports.
     */
    if ('ontouchstart' in window) return;
    this.updateCurrentActiveScreenReader();
  }

  componentDidUpdate() {
    this.updateNoResultsScreenReader();
    this.scrollIntoView();
  }

  componentWillUnmount() {
    this.clearScrollTimeout();
    if (this.state.closedViaKeyEvent) {
      if (this.props.input) {
        this.props.input.focus();
      }
    }
    // document.removeEventListener('keydown', this.handleKeyDown);
  }

  isActiveSelected() {
    return this.state.active === this.props.value;
  }

  updateNoResultsScreenReader() {
    if (this.liveRegionTimeOut) {
      clearTimeout(this.liveRegionTimeOut);
    }

    this.liveRegionTimeOut = setTimeout(() => {
      const { hasNoResults } = this.state;

      const {
        intl,
        visuallyHiddenComponent,
        searchValue,
      } = this.props;

      // Race condition can occur between calling timeout and unmounting this component.
      if (!visuallyHiddenComponent || !visuallyHiddenComponent.current) {
        return;
      }

      if (hasNoResults) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: searchValue });
      } else {
        visuallyHiddenComponent.current.innerText = '';
      }
    }, 1000);
  }

  updateCurrentActiveScreenReader() {
    const {
      intl,
      clearOptionDisplay,
      visuallyHiddenComponent,
    } = this.props;

    const clearSelectTxt = intl.formatMessage({ id: 'Terra.form.select.clearSelect' });

    if (this.menu !== null) {
      this.menu.setAttribute('aria-activedescendant', `terra-select-option-${this.state.active}`);
    }

    // Announces options to screen readers as user navigates through them via keyboard
    if (!visuallyHiddenComponent || !visuallyHiddenComponent.current) {
      return;
    }

    // Detects if option is clear option and provides accessible text
    if (clearOptionDisplay) {
      const active = this.menu.querySelector('[data-select-active]');
      if (active && active.hasAttribute('data-terra-select-clear-option')) {
        visuallyHiddenComponent.current.innerText = clearSelectTxt;
      }
    }

    const element = MenuUtil.findByValue(this.props.children, this.state.active);
    if (element) {
      if (element.props.display === '' && element.props.value === '') {
        // Used for case where users selects clear option and opens
        // dropdown again and navigates to clear option
        visuallyHiddenComponent.current.innerText = clearSelectTxt;
      } else if (this.isActiveSelected()) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.selectedText' }, { text: element.props.display });
      } else {
        visuallyHiddenComponent.current.innerText = element.props.display;
      }
    }
  }

  /**
   * Clears the scroll timeout.
   */
  clearScrollTimeout() {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = null;
  }

  /**
   * Clones the menu content with the necessary events.
   * @param {ReactNode} object - The node being cloned.
   * @return {array} - A cloned copy of the object.
   */
  clone(object) {
    return React.Children.map(object, (option) => {
      if (option.type.isOption) {
        return React.cloneElement(option, {
          id: `terra-select-option-${option.props.value}`,
          isActive: option.props.value === this.state.active,
          isCheckable: false,
          isSelected: MenuUtil.isSelected(this.props.value, option.props.value),
          variant: 'search',
          onMouseDown: () => { this.downOption = option; },
          onMouseUp: event => this.handleOptionClick(event, option),
          onMouseEnter: event => this.handleMouseEnter(event, option),
          ...(option.props.value === this.state.active) && { 'data-select-active': true },
        });
      } if (option.type.isOptGroup) {
        return React.cloneElement(option, {}, this.clone(option.props.children));
      }
      return option;
    });
  }

  /**
   * Handles keyboard interactions within the dropdown.
   * @param {event} event - The key down event.
   */
  handleKeyDown(event) {
    const { keyCode } = event;
    const { active, children } = this.state;
    const { intl, onSelect } = this.props;

    const selectedTxt = intl.formatMessage({ id: 'Terra.form.select.selected' });

    if (keyCode === KeyCode.KEY_UP) {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: MenuUtil.findPrevious(children, active) });
      this.updateCurrentActiveScreenReader();
    } else if (keyCode === KeyCode.KEY_DOWN) {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: MenuUtil.findNext(children, active) });
      this.updateCurrentActiveScreenReader();
    } else if (keyCode === KeyCode.KEY_RETURN && active !== null) {
      event.preventDefault();
      this.setState({ closedViaKeyEvent: true });

      const option = MenuUtil.findByValue(children, active);
      // Handles communicating the case where a clear option is selected to screen readers
      if (this.props.clearOptionDisplay) {
        const activeOption = this.menu.querySelector('[data-select-active]');
        if (activeOption && activeOption.hasAttribute('data-terra-select-clear-option')) {
          this.props.visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.selectCleared' });
        }
      }
      // Handles communicating the case where a regular option is selected to screen readers.
      /*
        Detecting if browser is not Safari before updating aria-live as there is some odd behaivor
        with VoiceOver on desktop, that causes the selected option to be read twice when this is
        is added to aria-live container.
        When we shift focus back to select, VoiceOver automatically reads the display text.
        Using aria-hidden on the display does not prevent VO from reading the display text and so it
        results in reading the display text followed by reading the aria-live message which is
        the display text + 'selected'
        */
      if (!SharedUtil.isSafari()) {
        this.props.visuallyHiddenComponent.current.innerText = `${option.props.display} ${selectedTxt}`;
      }
      onSelect(option.props.value, option);
    } else if (keyCode === KeyCode.KEY_HOME) {
      event.preventDefault();
      this.setState({ active: MenuUtil.findFirst(children) });
    } else if (keyCode === KeyCode.KEY_END) {
      event.preventDefault();
      this.setState({ active: MenuUtil.findLast(children) });
    }
  }

  /**
   * Communicates the selection or deselection of an option.
   * @param {event} event - The click event triggering the callback.
   * @param {ReactNode} option - The option that was clicked.
   */
  handleOptionClick(event, option) {
    if (option.props.disabled || option !== this.downOption) {
      return;
    }

    const { input, onSelect } = this.props;

    onSelect(option.props.value, option);
    if (input) {
      input.focus();
    }
  }

  /**
   * Sets the hovered option as the active value.
   * @param {event} event - The mouse enter event.
   * @param {ReactNode} option - The option that received the mouse enter event.
   */
  handleMouseEnter(event, option) {
    // Prevents setting the active option on mouse enter if the keyboard scrolled the view.
    if (this.scrollTimeout) {
      return;
    }

    if (!option.props.disabled) {
      this.setState({ active: option.props.value });
    }

    if (option.props.onMouseEnter) {
      option.props.onMouseEnter(event);
    }
  }

  handleInputKeyDown(event) {
    event.preventDefault();
    const { current: input } = this.menuInputRef;

    if (input) {
      input.focus();
    }
  }

  /**
   * Scrolls the active option into view.
   * Options already in view will not scroll.
   * Options above the dropdown will be scrolled to the top of the menu.
   * Options below the dropdown will be scrolled to the bottom of the menu.
   */
  scrollIntoView() {
    const activeOption = this.menu.querySelector('[data-select-active]');
    if (!this.state.active || activeOption === null) {
      return;
    }

    const dropdownRect = this.menu.parentNode.getBoundingClientRect();
    const optionRect = activeOption.getBoundingClientRect();

    if (optionRect.top < dropdownRect.top) {
      activeOption.scrollIntoView();
    } else if (optionRect.bottom > dropdownRect.bottom) {
      activeOption.scrollIntoView(false);
    }
  }

  handleSearch(event) {
    event.preventDefault();
    const { onSearch } = this.props;
    const searchValue = event.target.value;

    console.warn('menu search', { searchValue });
    // this.setState({
    //   isOpen: true,
    //   hasSearchChanged: true,
    //   searchValue,
    // });

    if (onSearch) {
      onSearch(searchValue);
    }

    // this.positionDropdown();
  }

  render() {
    // return (
    //   /**
    //    * Note: role="listbox" and aria-activedescendant needed for VoiceOver on iOS to properly
    //    * shift the virtual indicator to this DOM element when dropdown is rendered. If you modify these
    //    * attributes, you'll need to manually verify that the virtual indicator on iOS is still shifted
    //    * to the dropdown / the selected item in the dropdown if an item is selected when the dropdown
    //    * is opened.
    //    */
    //   <ul
    //     id="terra-select-menu"
    //     role="listbox"
    //     className={cx('menu')}
    //     aria-label={this.props.intl.formatMessage({ id: 'Terra.form.select.menu' })}
    //     ref={(menu) => { this.menu = menu; }}
    //     {...(this.state.active !== null ? { 'aria-activedescendant': `terra-select-option-${this.state.active}` } : {})}
    //     tabIndex="0"
    //   >
    //     {this.clone(this.state.children)}
    //   </ul>
    // );
    const {
      isAbove,
      isInvalid,
      intl,
      maxHeight,
      ariaLabel,
      ariaDescribedBy,
      placeholder,
      required,
      searchValue,
      onSearch,
    } = this.props;

    const { active } = this.state;

    const menuClasses = cx([
      'menu',
      { 'is-above': isAbove },
      { 'is-focused': true }, // TODO: fixme
      { 'is-invalid': isInvalid },
    ]);

    const menuId = 'terra-select-menu'; // TODO: make prop
    const listboxId = uniqueId('terra-form-select-menu-listbox-');
    const activeDescendant = active !== null ? `terra-select-option-${active}` : undefined;

    /* eslint-disable react/forbid-dom-props */
    return (
      <div role="menu" tabIndex="-1" id={menuId} className={menuClasses} onKeyDown={this.handleKeyDown}>
        <div
          role="application"
          className={cx('display')}
          aria-controls={listboxId}
          // aria-expanded="true"
          aria-owns={listboxId}
          // tabIndex="-1" // focusable, but not tabbable
        >
          <div className={cx('content')}>
            <input
              ref={this.menuInputRef}
              className={cx('search-input')}
              role="searchbox"
              type="text"
              onClick={this.handleInputKeyDown}
              placeholder={placeholder}
              aria-controls={listboxId}
              onChange={onSearch}
              aria-label={ariaLabel}
              aria-describedby={ariaDescribedBy}
              required={required}
              aria-required={required}
              // value={searchValue}
            />
          </div>
        </div>
        {/* Max height on the list only */}
        <ul
          role="listbox"
          className={cx('menu-list')}
          id={listboxId}
          style={{ maxHeight }}
          aria-label={intl.formatMessage({ id: 'Terra.form.select.menu' })}
          aria-activedescendant={activeDescendant}
          tabIndex="0"
          ref={(menu) => { this.menu = menu; }}
        >
          {this.clone(this.state.children)}
        </ul>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

/**
 * This polyfill enables backwards compatibility of features added in React 16.3.0.
 * More information is available at: https://github.com/reactjs/react-lifecycles-compat
 */
polyfill(Menu);

export default injectIntl(Menu);
