import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { polyfill } from 'react-lifecycles-compat';
import { injectIntl, intlShape } from 'react-intl';
import * as KeyCode from 'keycode-js';
import ClearOption from '../shared/_ClearOption';
import NoResults from '../shared/_NoResults';
import MenuUtil from '../shared/_MenuUtil';
import SharedUtil from '../shared/_SharedUtil';
import styles from '../shared/_Menu.module.scss';

const cx = classNames.bind(styles);

/* Disabling this rule because props used in getDerivedStateFromProps return false positives. */
/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
    * The id of the menu.
    */
  id: PropTypes.string,
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
   * The value of the selected options.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * @private Visually hidden component designed to feed screen reader text to read.
   */
  visuallyHiddenComponent: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * Ref callback for the select menu DOM element.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  id: undefined,
  children: undefined,
  clearOptionDisplay: undefined,
  noResultContent: undefined,
  onDeselect: undefined,
  select: undefined,
  visuallyHiddenComponent: undefined,
  value: undefined,
  refCallback: undefined,
};

class Menu extends React.Component {
  static getActiveOptionFromProps(props, children, state) {
    const { active } = state;
    const { value } = props;
    const options = MenuUtil.flatten(children, true);

    if (options.length === 0) {
      return null;
    }

    if (active !== null && MenuUtil.findByValue(options, active)) {
      return active;
    }

    const selected = options.find(option => MenuUtil.isEqual(value, option.props.value));
    return selected === undefined ? options[0].props.value : selected.props.value;
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.searchString = '';
    this.clearSearch = this.clearSearch.bind(this);
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
    const { clearOptionDisplay, noResultContent } = props;

    let hasNoResults = false;
    const hasAddOption = false;

    let children = MenuUtil.filter(props.children, '');
    children = MenuUtil.updateSelectionState(children, props);

    if (MenuUtil.shouldShowNoResults(props, children)) {
      children.push(<NoResults noResultContent={noResultContent} value="" />);
      hasNoResults = true;
    }

    if (MenuUtil.shouldShowClearOption({ clearOptionDisplay, hasAddOption, hasNoResults })) {
      children.unshift(<ClearOption display={clearOptionDisplay} value="" />);
    }

    return {
      children,
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
    this.clearSearch();
    this.clearScrollTimeout();
    if (this.state.closedViaKeyEvent) {
      this.props.select.focus();
      if (SharedUtil.isSafari()) {
        /**
         * Shifting focus back to the select specifically
         * when VoiceOver is on will sometimes trigger VO to shift focus
         * randomly to the root of document or the skip to main link
         * instead of the select and then break VoiceOver usage when navigating the
         * select options on subsequent opening of select
         * Refocusing on select seems to seems to mitigate this VO bug.
         */
        setTimeout(() => {
          this.props.select.focus();
        }, 300);
      }
    }
    document.removeEventListener('keydown', this.handleKeyDown);
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
      const { intl, visuallyHiddenComponent } = this.props;

      // Race condition can occur between calling timeout and unmounting this component.
      if (!visuallyHiddenComponent || !visuallyHiddenComponent.current) {
        return;
      }

      if (hasNoResults) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: '' });
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

    if (this.menu) {
      this.menu.setAttribute('aria-activedescendant', `terra-select-option-${this.state.active}`);
    }

    if (!visuallyHiddenComponent || !visuallyHiddenComponent.current) {
      return;
    }

    // Announces options to screen readers as user navigates through them via keyboard
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
   * Clears the default variant keyboard search.
   */
  clearSearch() {
    this.searchString = '';
    clearTimeout(this.searchTimeout);
    this.searchTimeout = null;
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
          variant: 'default',
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
    const { keyCode, key } = event;
    const { active, children } = this.state;
    const { intl, onSelect, visuallyHiddenComponent } = this.props;

    const selectedTxt = intl.formatMessage({ id: 'Terra.form.select.selected' });

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
    } else if (keyCode === KeyCode.KEY_RETURN && active !== null) {
      event.preventDefault();

      this.setState({ closedViaKeyEvent: true });
      const option = MenuUtil.findByValue(children, active);
      // Handles communicating the case where a clear option is selected to screen readers
      if (this.props.clearOptionDisplay) {
        if (visuallyHiddenComponent && visuallyHiddenComponent.current) {
          const activeOption = this.menu.querySelector('[data-select-active]');
          if (activeOption && activeOption.hasAttribute('data-terra-select-clear-option')) {
            visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.selectCleared' });
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
          visuallyHiddenComponent.current.innerText = `${option.props.display} ${selectedTxt}`;
        }
      }

      onSelect(option.props.value, option);
    } else if (keyCode === KeyCode.KEY_HOME) {
      event.preventDefault();
      this.setState({ active: MenuUtil.findFirst(children) });
    } else if (keyCode === KeyCode.KEY_END) {
      event.preventDefault();
      this.setState({ active: MenuUtil.findLast(children) });
    } else if (keyCode >= 48 && keyCode <= 90) {
      this.searchString = this.searchString.concat(key);
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(this.clearSearch, 500);
      this.setState(prevState => ({ active: MenuUtil.findWithStartString(prevState.children, this.searchString) || active }));
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

    const { select, onSelect } = this.props;

    if (onSelect) {
      onSelect(option.props.value, option);
    }

    if (select) {
      select.focus();
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
      activeOption.scrollIntoView();
    } else if (optionRect.bottom > dropdownRect.bottom) {
      activeOption.scrollIntoView(false);
    }
  }

  render() {
    const {
      id,
      intl,
      refCallback,
    } = this.props;
    return (
      /**
       * Note: role="listbox" and aria-activedescendant needed for VoiceOver on iOS to properly
       * shift the virtual indicator to this DOM element when dropdown is rendered. If you modify these
       * attributes, you'll need to manually verify that the virtual indicator on iOS is still shifted
       * to the dropdown / the selected item in the dropdown if an item is selected when the dropdown
       * is opened.
       */
      <ul
        id={id}
        role="listbox"
        className={cx('menu')}
        aria-label={intl.formatMessage({ id: 'Terra.form.select.menu' })}
        ref={(menu) => {
          if (refCallback) {
            refCallback(menu);
          }
          this.menu = menu;
        }}
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
