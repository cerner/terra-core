import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { polyfill } from 'react-lifecycles-compat';
import 'terra-base/lib/baseStyles';
import { KeyCodes, Variants } from './_constants';
import AddOption from './_AddOption';
import MaxSelection from './_MaxSelection';
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
  maxSelectionCount: undefined,
  noResultContent: undefined,
  onDeselect: undefined,
  optionFilter: undefined,
  searchValue: undefined,
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
      maxSelectionCount, searchValue, noResultContent,
    } = props;

    let children = Util.filter(props.children, props.searchValue, props.optionFilter);
    const maxSelectionCountReached = Util.isMaxSelectionReached(props);
    let hasNoResults = false;
    let hasMaxSelection = false;

    children = Util.updateSelectionState(children, props);

    if (Util.shouldAllowFreeText(props, children)) {
      if (maxSelectionCountReached) {
        children.push(<MaxSelection noResultContent={noResultContent} value={maxSelectionCount} />);
        hasMaxSelection = true;
      } else {
        children.push(<AddOption value={searchValue} />);
      }
    }

    if (Util.shouldShowNoResults(props, children)) {
      if (maxSelectionCountReached) {
        children.push(<MaxSelection noResultContent={noResultContent} value={maxSelectionCount} />);
        hasMaxSelection = true;
      } else {
        children.push(<NoResults noResultContent={noResultContent} value={searchValue} />);
        hasNoResults = true;
      }
    } else {
      hasNoResults = false;
    }

    return {
      children,
      searchValue,
      hasMaxSelection,
      hasNoResults,
      active: Util.getActiveOptionFromProps(props, children, state),
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    this.updateLiveRegion();
    this.scrollIntoView();
  }

  componentWillUnmount() {
    this.clearSearch();
    this.clearScrollTimeout();
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  updateLiveRegion() {
    if (this.liveRegionTimeOut) {
      clearTimeout(this.liveRegionTimeOut);
    }

    this.liveRegionTimeOut = setTimeout(() => {
      const {
        hasMaxSelection,
        hasNoResults,
      } = this.state;

      const {
        visuallyHiddenComponent,
        searchValue,
      } = this.props;

      const {
        intl,
      } = this.context;

      if (hasNoResults && searchValue) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: searchValue });
      } else if (hasMaxSelection) {
        visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.maxSelectionOption' }, { text: this.props.maxSelectionCount });
      } else {
        visuallyHiddenComponent.current.innerText = '';
      }
    }, 500);
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
    const { onSelect, value, variant } = this.props;

    if (keyCode === KeyCodes.UP_ARROW) {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: Util.findPrevious(children, active) });
    } else if (keyCode === KeyCodes.DOWN_ARROW) {
      this.clearScrollTimeout();
      this.scrollTimeout = setTimeout(this.clearScrollTimeout, 500);
      this.setState({ active: Util.findNext(children, active) });
    } else if (keyCode === KeyCodes.ENTER && active !== null && (!Util.allowsMultipleSelections(variant) || !Util.includes(value, active))) {
      event.preventDefault();
      const option = Util.findByValue(children, active);
      onSelect(option.props.value, option);
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
      onDeselect, onSelect, value, variant,
    } = this.props;

    if (Util.allowsMultipleSelections(variant) && Util.includes(value, option.props.value)) {
      onDeselect(option.props.value, option);
    } else {
      onSelect(option.props.value, option);
    }
  }

  /**
   * Sets the hovered option as the active value.
   * @param {event} event - The mouse enter event.
   * @param {ReactNode} option - The option that recieved the mouse enter event.
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
      // This warns that aria-activedescendant should map to an id
      // Our implementation maps it to a dynamic id but linter is unable to detect mapping and throws an error
      /* eslint-disable jsx-a11y/aria-proptypes */
      <ul
        role="listbox"
        className={cx('menu')}
        ref={(menu) => { this.menu = menu; }}
        aria-activedescendant={`terra-select-option-${this.state.active}`}
        tabIndex="0"
      >
        {this.clone(this.state.children)}
      </ul>
      /* eslint-enable jsx-a11y/aria-proptypes */
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

export default Menu;
