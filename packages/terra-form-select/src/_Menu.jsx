import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { polyfill } from 'react-lifecycles-compat';
import { injectIntl, intlShape } from 'react-intl';
import 'terra-base/lib/baseStyles';
import { KeyCodes, Variants } from './_constants';
import AddOption from './_AddOption';
import NoResults from './_NoResults';
import Util from './_MenuUtil';
import styles from './_Menu.module.scss';

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
   * @private Element that is used to trigger the dropdown, such as an input or button.
   */
  focusRegion: PropTypes.instanceOf(Element),
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
   * The behavior of the select.
   */
  variant: PropTypes.oneOf([
    Variants.COMBOBOX,
    Variants.DEFAULT,
    Variants.MULTIPLE,
    Variants.SEARCH,
    Variants.TAG,
  ]).isRequired,
  /**
   * @private Visually hidden component designed to feed screen reader text to read.
   */
  visuallyHiddenComponent: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

const defaultProps = {
  children: undefined,
  focusRegion: undefined,
  input: undefined,
  noResultContent: undefined,
  onDeselect: undefined,
  optionFilter: undefined,
  searchValue: undefined,
  select: undefined,
  visuallyHiddenComponent: undefined,
  value: undefined,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class Menu extends React.Component {
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
    const {
      searchValue, noResultContent,
    } = props;
    const children = Util.filter(props.children, props.searchValue, props.optionFilter);

    let hasNoResults = false;

    if (Util.shouldAllowFreeText(props, children)) {
      children.push(<AddOption value={searchValue} />);
    }

    if (Util.shouldShowNoResults(props, children)) {
      children.push(<NoResults noResultContent={noResultContent} value={searchValue} />);
      hasNoResults = true;
    } else {
      hasNoResults = false;
    }

    return {
      children,
      searchValue,
      hasNoResults,
      active: Util.getActiveOptionFromProps(props, children, state),
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    // VoiceOver on iOS doesn't need aria-live update when opening dropdown menu,
    // will result in double reading of first option so we opt-out of running the
    // aria-live update on mount here if browser supports touch events
    if ('ontouchstart' in window) return;
    this.updateCurrentActiveScreenReader();
  }

  componentDidUpdate() {
    this.updateNoResultsScreenReader();
    this.scrollIntoView();
  }

  componentWillUnmount() {
    this.clearSearch();
    this.clearScrollTimeout();
    document.removeEventListener('keydown', this.handleKeyDown);

    if (this.props.focusRegion) {
      this.props.focusRegion.removeAttribute('data-activedescendant');
    }
  }

  isActiveSelected() {
    if (Array.isArray(this.props.value)) {
      return this.props.value.includes(this.state.active);
    }

    return this.state.active === this.props.value;
  }

  updateNoResultsScreenReader() {
    if (this.liveRegionTimeOut) {
      clearTimeout(this.liveRegionTimeOut);
    }

    this.liveRegionTimeOut = setTimeout(() => {
      const {
        hasNoResults,
      } = this.state;

      const {
        visuallyHiddenComponent,
        searchValue,
      } = this.props;

      const {
        intl,
      } = this.context;

      if (hasNoResults) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: searchValue });
      } else {
        visuallyHiddenComponent.current.innerText = '';
      }
    }, 500);
  }

  updateCurrentActiveScreenReader() {
    this.menu.setAttribute('data-activedescendant', `terra-select-option-${this.state.active}`);

    if (this.props.focusRegion) {
      this.props.focusRegion.setAttribute('data-activedescendant', `terra-select-option-${this.state.active}`);
    }

    if (this.props.visuallyHiddenComponent) {
      const element = Util.findByValue(this.props.children, this.state.active);

      if (element) {
        if (this.isActiveSelected()) {
          const { intl } = this.context;
          this.props.visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.selected' }, { text: element.props.display });
        } else {
          this.props.visuallyHiddenComponent.current.innerText = element.props.display;
        }
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
          isCheckable: Util.allowsMultipleSelections(this.props.variant),
          isSelected: Util.isSelected(this.props.value, option.props.value),
          variant: this.props.variant,
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
      input,
      onSelect,
      onDeselect,
      select,
      value,
      variant,
    } = this.props;

    if (keyCode === KeyCodes.UP_ARROW) {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: Util.findPrevious(children, active) });
      this.updateCurrentActiveScreenReader();
    } else if (keyCode === KeyCodes.DOWN_ARROW) {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: Util.findNext(children, active) });
      this.updateCurrentActiveScreenReader();
    } else if (keyCode === KeyCodes.ENTER && active !== null && (!Util.allowsMultipleSelections(variant) || !Util.includes(value, active))) {
      event.preventDefault();
      const option = Util.findByValue(children, active);
      onSelect(option.props.value, option);
      if (variant === Variants.DEFAULT) {
        select.focus();
      } else {
        input.focus();
      }
    } else if (keyCode === KeyCodes.ENTER && active !== null && Util.allowsMultipleSelections(variant) && Util.includes(value, active)) {
      event.preventDefault();
      const option = Util.findByValue(children, active);
      onDeselect(option.props.value, option);
    } else if (keyCode === KeyCodes.HOME) {
      event.preventDefault();
      this.setState({ active: Util.findFirst(children) });
    } else if (keyCode === KeyCodes.END) {
      event.preventDefault();
      this.setState({ active: Util.findLast(children) });
    } else if (variant === Variants.DEFAULT && keyCode >= 48 && keyCode <= 90) {
      this.searchString = this.searchString.concat(String.fromCharCode(keyCode));
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(this.clearSearch, 500);
      this.setState(prevState => ({ active: Util.findWithStartString(prevState.children, this.searchString) || active }));
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
      select, input, onDeselect, onSelect, value, variant,
    } = this.props;

    if (Util.allowsMultipleSelections(variant) && Util.includes(value, option.props.value)) {
      onDeselect(option.props.value, option);
    } else {
      onSelect(option.props.value, option);
      if (variant === Variants.DEFAULT) {
        select.focus();
      } else {
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
    if (!this.state.active) {
      return;
    }

    const activeOption = this.menu.querySelector('[data-select-active]');
    const dropdownRect = this.menu.parentNode.getBoundingClientRect();
    const optionRect = activeOption.getBoundingClientRect();

    if (optionRect.top < dropdownRect.top) {
      activeOption.scrollIntoView();
    } else if (optionRect.bottom > dropdownRect.bottom) {
      activeOption.scrollIntoView(false);
    }
  }

  render() {
    return (
      // Role listbox and aria-activedescendant needed for VoiceOver on iOS to properly shift virtual indicator to this
      // DOM element when dropdown is rendered
      <ul
        id="terra-select-menu"
        role="listbox"
        className={cx('menu')}
        ref={(menu) => { this.menu = menu; }}
        {...('ontouchstart' in window ? { 'aria-activedescendant': `terra-select-option-${this.state.active}` } : {})}
        data-activedescendant={`terra-select-option-${this.state.active}`}
        tabIndex="0"
        style={{ outline: 'none' }}
      >
        {this.clone(this.state.children)}
      </ul>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.contextTypes = contextTypes;

/**
 * This polyfill enables backwards compatability of features added in React 16.3.0.
 * More information is available at: https://github.com/reactjs/react-lifecycles-compat
 */
polyfill(Menu);

export default injectIntl(Menu);
