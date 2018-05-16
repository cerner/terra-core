import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { polyfill } from 'react-lifecycles-compat';
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
};

const defaultProps = {
  children: undefined,
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
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

class Menu extends React.Component {
  /**
   * Updates the component state when new props are received.
   * @param {Object} props - The received props.
   * @param {Object} state - The current state of the component.
   * @return {Object} - The new state object.
   */
  static getDerivedStateFromProps(props, state) {
    const { searchValue, noResultContent } = props;
    const children = Util.filter(props.children, props.searchValue, props.optionFilter);

    if (Util.shouldAllowFreeText(props, children)) {
      children.push(<AddOption value={searchValue} />);
    }

    if (Util.shouldShowNoResults(props, children)) {
      children.push(<NoResults noResultContent={noResultContent} value={searchValue} />);
    }

    return {
      children,
      searchValue,
      active: Util.getActiveOptionFromProps(props, children, state),
    };
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    this.scrollIntoView();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
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
      } else if (option.type.isOptGroup) {
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
      this.setState({ active: Util.findPrevious(children, active) });
    } else if (keyCode === KeyCodes.DOWN_ARROW) {
      this.setState({ active: Util.findNext(children, active) });
    } else if (keyCode === KeyCodes.ENTER && active && (!Util.allowsMultipleSelections(variant) || !Util.includes(value, active))) {
      event.preventDefault();
      const option = Util.findByValue(children, active);
      onSelect(option.props.value, option);
    } else if (keyCode === KeyCodes.HOME) {
      event.preventDefault();
      const options = Util.flatten(children, true);
      const activeOption = options.length > 0 ? options[0].props.value : active;
      this.setState({ active: activeOption });
    } else if (keyCode === KeyCodes.END) {
      event.preventDefault();
      const options = Util.flatten(children, true);
      const activeOption = options.length > 0 ? options[options.length - 1].props.value : active;
      this.setState({ active: activeOption });
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

    const { onDeselect, onSelect, value, variant } = this.props;

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
      <ul
        role="listbox"
        className={cx('menu')}
        ref={(menu) => { this.menu = menu; }}
        aria-activedescendant={`terra-select-option-${this.state.active}`}
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

export default Menu;
