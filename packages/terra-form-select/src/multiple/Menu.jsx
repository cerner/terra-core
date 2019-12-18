import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { polyfill } from 'react-lifecycles-compat';
import { injectIntl, intlShape } from 'react-intl';
import * as KeyCode from 'keycode-js';
import MaxSelection from '../shared/_MaxSelection';
import NoResults from '../shared/_NoResults';
import MenuUtil from '../shared/_MenuUtil';
import styles from '../shared/_Menu.module.scss';

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
   * The maximum number of options that can be selected. A value less than 2 will be ignored.
   * Only applicable to variants allowing multiple selections (e.g.; `multiple`; `tag`).
   */
  maxSelectionCount: PropTypes.number,
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * @private Visually hidden component designed to feed screen reader text to read.
   */
  visuallyHiddenComponent: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

const defaultProps = {
  children: undefined,
  input: undefined,
  maxSelectionCount: undefined,
  noResultContent: undefined,
  onDeselect: undefined,
  optionFilter: undefined,
  searchValue: undefined,
  select: undefined,
  visuallyHiddenComponent: undefined,
  value: undefined,
};

class Menu extends React.Component {
  static isMaxSelectionReached(props) {
    const { maxSelectionCount, value } = props;

    if (maxSelectionCount !== undefined && value && value.length >= maxSelectionCount) {
      return true;
    }

    return false;
  }

  static getActiveOptionFromProps(props, children, state) {
    const { active } = state;
    const { searchValue, value } = props;
    const options = MenuUtil.flatten(children, true);

    if (options.length === 0) {
      return null;
    }

    if (active !== null && MenuUtil.findByValue(options, active)) {
      return active;
    }

    if (state.searchValue === undefined) {
      const selected = options.find(option => MenuUtil.includes(value, option.props.value));
      return selected === undefined ? options[0].props.value : selected.props.value;
    }

    if (searchValue !== state.searchValue) {
      return options[0].props.value;
    }

    return options[0].props.value;
  }

  static updateSelectionState(object, props) {
    const maxSelectionCountReached = Menu.isMaxSelectionReached(props);

    return React.Children.map(object, (child) => {
      if (child.type.isOption) {
        return React.cloneElement(child, {
          disabled: child.props.disabled || (maxSelectionCountReached && !MenuUtil.isSelected(props.value, child.props.value)),
        });
      } if (child.type.isOptGroup) {
        return React.cloneElement(child, {}, Menu.updateSelectionState(child.props.children, props));
      }
      return child;
    });
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.clearScrollTimeout = this.clearScrollTimeout.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
  }

  /**
   * Updates the component state when new props are received.
   * @param {Object} props - The received props.
   * @param {Object} state - The current state of the component.
   * @return {Object} - The new state object.
   */
  static getDerivedStateFromProps(props, state) {
    const {
      maxSelectionCount, searchValue, noResultContent,
    } = props;

    let children;
    let hasNoResults = false;
    let hasMaxSelection = false;

    if (searchValue && searchValue.length > 0 && Menu.isMaxSelectionReached(props)) {
      children = [(<MaxSelection value={maxSelectionCount} />)];
      hasMaxSelection = true;
    } else {
      children = MenuUtil.filter(props.children, props.searchValue, props.optionFilter);
      children = Menu.updateSelectionState(children, props);

      if (!children.length) {
        children.push(<NoResults noResultContent={noResultContent} value={searchValue} />);
        hasNoResults = true;
      }
    }

    return {
      children,
      searchValue,
      hasMaxSelection,
      hasNoResults,
      active: Menu.getActiveOptionFromProps(props, children, state),
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.scrollIntoView();
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
  }

  componentWillUnmount() {
    this.clearScrollTimeout();
    if (this.state.closedViaKeyEvent) {
      if (this.props.input) {
        this.props.input.focus();
      }
    }
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  isActiveSelected() {
    return this.props.value.includes(this.state.active);
  }

  updateNoResultsScreenReader() {
    if (this.liveRegionTimeOut) {
      clearTimeout(this.liveRegionTimeOut);
    }

    this.liveRegionTimeOut = setTimeout(() => {
      const {
        hasMaxSelection,
        hasNoResults,
      } = this.state;

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
      } else if (hasMaxSelection) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.maxSelectionOption' }, { text: this.props.maxSelectionCount });
      } else {
        visuallyHiddenComponent.current.innerText = '';
      }
    }, 1000);
  }

  updateCurrentActiveScreenReader() {
    const {
      intl,
      visuallyHiddenComponent,
    } = this.props;

    const clearSelectTxt = intl.formatMessage({ id: 'Terra.form.select.clearSelect' });

    if (this.menu !== null && this.state.active !== null) {
      this.menu.setAttribute('aria-activedescendant', `terra-select-option-${this.state.active}`);
    }

    // Announces options to screen readers as user navigates through them via keyboard
    if (!visuallyHiddenComponent || !visuallyHiddenComponent.current) {
      return;
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
          isCheckable: true,
          isSelected: MenuUtil.isSelected(this.props.value, option.props.value),
          variant: 'multiple',
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
    const {
      intl,
      onSelect,
      onDeselect,
      value,
      visuallyHiddenComponent,
    } = this.props;

    if (keyCode === KeyCode.KEY_UP) {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: MenuUtil.findPrevious(children, active) }, this.scrollIntoView);
      this.updateCurrentActiveScreenReader();
    } else if (keyCode === KeyCode.KEY_DOWN) {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: MenuUtil.findNext(children, active) }, this.scrollIntoView);
      this.updateCurrentActiveScreenReader();
    } else if (keyCode === KeyCode.KEY_RETURN && active !== null && !MenuUtil.includes(value, active)) {
      event.preventDefault();

      const option = MenuUtil.findByValue(children, active);
      // Handles communicating the case where a regular option is selected to screen readers.
      if (visuallyHiddenComponent && visuallyHiddenComponent.current) {
        visuallyHiddenComponent.current.innerHTML = intl.formatMessage({ id: 'Terra.form.select.selectedText' }, { text: option.props.display });
      }

      if (onSelect) {
        onSelect(option.props.value, option);
      }
    } else if (keyCode === KeyCode.KEY_RETURN && active !== null && MenuUtil.includes(value, active)) {
      event.preventDefault();

      const option = MenuUtil.findByValue(children, active);
      // Handles communicating the case where a regular option is Unselected to screen readers.
      if (visuallyHiddenComponent && visuallyHiddenComponent.current) {
        visuallyHiddenComponent.current.innerHTML = intl.formatMessage({ id: 'Terra.form.select.unselectedText' }, { text: option.props.display });
      }

      if (onDeselect) {
        onDeselect(option.props.value, option);
      }
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

    const {
      input, onDeselect, onSelect, value, intl, visuallyHiddenComponent,
    } = this.props;

    const shouldUnselectOption = MenuUtil.includes(value, option.props.value);
    const optionATClickText = (shouldUnselectOption
      ? intl.formatMessage({ id: 'Terra.form.select.unselectedText' }, { text: option.props.display })
      : intl.formatMessage({ id: 'Terra.form.select.selectedText' }, { text: option.props.display })
    );

    if (visuallyHiddenComponent && visuallyHiddenComponent.current) {
      visuallyHiddenComponent.current.innerHTML = optionATClickText;
    }

    if (shouldUnselectOption) {
      if (onDeselect) {
        onDeselect(option.props.value, option);
      }
    } else {
      if (onSelect) {
        onSelect(option.props.value, option);
      }
      if (input) {
        input.focus();
      }
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
      this.menu.parentNode.scrollTop = activeOption.offsetTop;
    } else if (optionRect.bottom > dropdownRect.bottom) {
      // To scroll to active option to top subtracting active option offsetTop with parent window's height.
      this.menu.parentNode.scrollTop = (activeOption.offsetTop - dropdownRect.height) + optionRect.height;
    }
  }

  render() {
    return (
      /**
       * Note: role="listbox" and aria-activedescendant needed for VoiceOver on iOS to properly
       * shift the virtual indicator to this DOM element when dropdown is rendered. If you modify these
       * attributes, you'll need to manually verify that the virtual indicator on iOS is still shifted
       * to the dropdown / the selected item in the dropdown if an item is selected when the dropdown
       * is opened.
       */
      <ul
        id="terra-select-menu"
        role="listbox"
        className={cx('menu')}
        aria-label={this.props.intl.formatMessage({ id: 'Terra.form.select.menu' })}
        ref={(menu) => { this.menu = menu; }}
        {...(this.state.active !== null ? { 'aria-activedescendant': `terra-select-option-${this.state.active}` } : {})}
        tabIndex="0"
      >
        {this.clone(this.state.children)}
      </ul>
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
