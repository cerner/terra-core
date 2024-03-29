import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { polyfill } from 'react-lifecycles-compat';
import { injectIntl, FormattedMessage } from 'react-intl';
import * as KeyCode from 'keycode-js';
import AddOption from '../shared/_AddOption';
import ClearOption from '../shared/_ClearOption';
import MenuUtil from '../shared/_MenuUtil';
import SearchResults from '../shared/_SearchResults';
import styles from '../shared/_Menu.module.scss';
import NoResults from '../shared/_NoResults';

const cx = classNamesBind.bind(styles);

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
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
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
  input: undefined,
  clearOptionDisplay: undefined,
  noResultContent: undefined,
  onDeselect: undefined,
  optionFilter: undefined,
  searchValue: undefined,
  select: undefined,
  visuallyHiddenComponent: undefined,
  value: undefined,
  refCallback: undefined,
};

class Menu extends React.Component {
  static shouldAllowFreeText(props, children) {
    const { searchValue, value } = props;

    const option = MenuUtil.findByDisplay(children, searchValue);
    const included = MenuUtil.isEqual(value, searchValue);
    return !option && !included && (searchValue || '').trim().length > 0;
  }

  constructor(props) {
    super(props);

    this.state = {
      closedViaKeyEvent: false,
    };

    this.clearScrollTimeout = this.clearScrollTimeout.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
      clearOptionDisplay, searchValue, noResultContent,
    } = props;

    let hasNoResults = false;
    const hasMaxSelection = false;
    let hasAddOption = false;

    let children = MenuUtil.filter(props.children, props.searchValue, props.optionFilter);
    children = MenuUtil.updateSelectionState(children, props);

    if (!children.length) {
      children.push(<NoResults noResultContent={noResultContent} value={searchValue} />);
      hasNoResults = true;
    }

    if (Menu.shouldAllowFreeText(props, children)) {
      children.push(<AddOption value={searchValue} />);
      hasAddOption = true;
    }

    if (MenuUtil.shouldShowClearOption({
      clearOptionDisplay, searchValue, hasAddOption, hasNoResults,
    })) {
      children.unshift(<ClearOption display={clearOptionDisplay} value="" />);
    }

    if (children.map(x => x.key).filter(x => x != null).length && !hasNoResults) {
      if (searchValue.trim().length > 0) {
        children.unshift(<SearchResults searchResultContent={<FormattedMessage id="Terra.form.select.resultsText" values={{ text: searchValue }} />} />);
      }
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
    this.updateCurrentActiveScreenReader();
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
      visuallyHiddenComponent,
    } = this.props;

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
      if (visuallyHiddenComponent && visuallyHiddenComponent.current) {
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
        if (option.props.value) {
          this.props.visuallyHiddenComponent.current.innerText = `${option.props.value} ${selectedTxt}`;
        }
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

    if (onSelect) {
      onSelect(option.props.value, option);
    }

    if (input) {
      input.focus();
    }
  }

  isActiveSelected() {
    return this.state.active === this.props.value;
  }

  updateNoResultsScreenReader(freeTextValue) {
    if (this.liveRegionTimeOut) {
      clearTimeout(this.liveRegionTimeOut);
    }

    this.liveRegionTimeOut = setTimeout(() => {
      const {
        intl,
        visuallyHiddenComponent,
        searchValue,
      } = this.props;
      // Race condition can occur between calling timeout and unmounting this component.
      if (!visuallyHiddenComponent || !visuallyHiddenComponent.current) {
        return;
      }
      const noMatchingResultText = intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: searchValue });
      visuallyHiddenComponent.current.innerText = `${noMatchingResultText}, ${freeTextValue}`;
    }, 1000);
  }

  updateCurrentActiveScreenReader() {
    const {
      intl,
      clearOptionDisplay,
      visuallyHiddenComponent,
    } = this.props;

    const { hasNoResults } = this.state;

    if (this.menu !== null && this.state.active !== null) {
      this.menu.setAttribute('aria-activedescendant', `terra-select-option-${this.state.active}`);
    }

    // Announces options to screen readers as user navigates through them via keyboard
    if (!visuallyHiddenComponent || !visuallyHiddenComponent.current) {
      return;
    }

    // Detects if option is clear option and provides accessible text
    if (clearOptionDisplay) {
      const active = this.menu && this.menu.querySelector('[data-select-active]');
      if (active && active.hasAttribute('data-terra-select-clear-option')) {
        // To match visual label and the text exposed by screen reader
        visuallyHiddenComponent.current.innerText = clearOptionDisplay;
      }
    }

    // Detects if option is an "Add option" and provides accessible text
    const active = this.menu && this.menu.querySelector('[data-select-active]');
    if (active && active.hasAttribute('data-terra-select-add-option')) {
      const display = active.querySelector('[data-terra-add-option]') ? active.querySelector('[data-terra-add-option]').innerText : null;
      if (hasNoResults && !this.state.closedViaKeyEvent) {
        this.updateNoResultsScreenReader(display);
      } else {
        visuallyHiddenComponent.current.innerText = display;
      }
    }

    const optGroupElement = MenuUtil.getOptGroupElement(this.props.children, this.state.active);
    const element = MenuUtil.findByValue(this.props.children, this.state.active);

    let displayText;
    if (optGroupElement) {
      displayText = intl.formatMessage({ id: 'Terra.form.select.optGroup' }, { text: `${optGroupElement.props.label}, ${element.props.display}` });
    } else if (element) {
      displayText = element.props.display;
    }

    if (element) {
      const options = MenuUtil.flatten(this.state.children, true);
      const totalOptions = options.length;
      const index = MenuUtil.getIndex(options, this.state.active);
      if (element.props.display === '' && element.props.value === '') {
        // Used for case where users selects clear option and opens
        // dropdown again and navigates to clear option
        visuallyHiddenComponent.current.innerText = clearOptionDisplay;
      } else if (this.isActiveSelected()) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.selectedText' }, { text: displayText, index, totalOptions });
      } else {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.activeOption' }, { text: displayText, index, totalOptions });
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
          variant: 'combobox',
          onMouseDown: () => { this.downOption = option; },
          onMouseUp: event => this.handleOptionClick(event, option),
          ...(option.props.value === this.state.active) && { 'data-select-active': true },
        });
      } if (option.type.isOptGroup) {
        return React.cloneElement(option, {}, this.clone(option.props.children));
      }
      return option;
    });
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
    const {
      id,
      intl,
      refCallback,
    } = this.props;
    const theme = this.context;
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
        className={cx('menu', theme.className)}
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
Menu.contextType = ThemeContext;

/**
 * This polyfill enables backwards compatibility of features added in React 16.3.0.
 * More information is available at: https://github.com/reactjs/react-lifecycles-compat
 */
polyfill(Menu);

export default injectIntl(Menu);
