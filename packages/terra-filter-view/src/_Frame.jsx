import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconIncomplete from 'terra-icon/lib/icon/IconIncomplete';
import { KeyCodes, Variants } from './_constants';
import Dropdown from './_Dropdown';
import Box from './_Box';
import Util from './_FrameUtil';
import styles from './_Frame.module.scss';

const cx = classNames.bind(styles);

const Icon = <IconSearch />;

const IncompleteIcon = <IconIncomplete />;


const propTypes = {
  /**
   * Whether the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The select display.
   */
  display: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * A render callback for dropdown content.
   */
  dropdown: PropTypes.func,
  /**
   * Additional attributes to spread onto the dropdown. ( Style, ClassNames, etc.. )
   */
  dropdownAttrs: PropTypes.object,
  /**
   * Whether the select is in an invalid state.
   */
  isInvalid: PropTypes.bool,
  /**
   * Content to display when no search results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when an option is deselected.
   */
  onDeselect: PropTypes.func,
  /**
   * Callback function triggered when the frame loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when the frame gains focus.
   */
  onFocus: PropTypes.func,
  /**
   * Callback function triggered when the search criteria changes.
   */
  onSearch: PropTypes.func,
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func,
  /**
   * Callback function for option filtering. function(searchValue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
 /**
   * how long the component should wait (in milliseconds) after input before performing an automatic search.
   */
  searchDelay: PropTypes.number,
  /**
   * The select value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * The behavior of the select.
   */
  variant: PropTypes.oneOf([
    Variants.DROPDOWN,
    Variants.PERSISTENT,
  ]),
};

const defaultProps = {
  disabled: false,
  dropdown: undefined,
  dropdownAttrs: undefined,
  isInvalid: false,
  noResultContent: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  value: undefined,
  variant: Variants.DROPDOWN,
};

const contextTypes = {
    /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};


/* This rule can be removed when eslint-plugin-jsx-a11y is updated to ~> 6.0.0 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isFocused: false,
      isPositioned: false,
      hasSearchChanged: false,
      searchValue: '',
    };

    this.setInput = this.setInput.bind(this);
    this.getDisplay = this.getDisplay.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.positionDropdown = this.positionDropdown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleInputMouseDown = this.handleInputMouseDown.bind(this);
  }

  componentDidMount() {
    // Populate the persistent result box
    if (this.props.variant === Variants.PERSISTENT) {
      this.setState({ isOpen: true });
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.props.variant === Variants.DROPDOWN && Util.shouldPositionDropdown(previousState, this.state, this.dropdown)) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(this.positionDropdown, !previousState.isOpen ? 0 : 100);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.debounceTimer);
  }

  setInput(input) {
    this.input = input;
  }

  getDisplay() {
    const { hasSearchChanged, searchValue } = this.state;
    const { disabled, display, placeholder } = this.props;

    const inputAttrs = {
      disabled,
      placeholder,
      ref: this.setInput,
      onChange: this.handleSearch,
      onMouseDown: this.handleInputMouseDown,
      'aria-label': 'search',
      className: cx('search-input', { 'is-hidden': Util.shouldHideSearch(this.props, this.state) }),
    };

    return <input {...inputAttrs} value={hasSearchChanged ? searchValue : display} />;
  }

  /**
   * Clears the search-bar content.
   */
  clearSearch() {
    if (this.state.searchValue !== '') {
      this.setState({ searchValue: '', hasSearchChanged: true });
    }
  }

  /**
   * Closes the dropdown.
   */
  closeDropdown() {
    if (this.props.variant !== Variants.PERSISTENT) {
      this.setState({
        isAbove: false,
        isFocused: document.activeElement === this.input || document.activeElement === this.select,
        isOpen: false,
        isPositioned: false,
        hasSearchChanged: false,
        searchValue: '',
      });
    }

    // Tags and Comboboxes will select the current search value when the component loses focus.
    if (Util.shouldAddOptionOnBlur(this.props, this.state)) {
      this.props.onSelect(this.state.searchValue);
    }
  }

  /**
   * Opens the dropdown.
   */
  openDropdown() {
    if (this.state.isOpen || this.props.disabled) {
      return;
    }

    if (this.input) {
      this.input.focus();
    }

    this.setState({ isOpen: true, isFocused: true, isPositioned: false });
  }

  /**
   * Positions the dropdown to utilize the most available space.
   */
  positionDropdown() {
    if (!this.state.isOpen) {
      return;
    }

    const { dropdownAttrs } = this.props;
    const { select, dropdown, state } = this;
    this.setState(Util.dropdownPosition(dropdownAttrs, state, select, dropdown));
  }

  /**
   * Handles the blur event.
   */
  handleBlur(event) {
    this.closeDropdown();

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  /**
   * Handles the focus event.
   */
  handleFocus(event) {
    if (this.props.disabled) {
      return;
    }

    if (!this.state.isFocused) {
      this.setState({ isFocused: true });
    }

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  /**
   * Manages keyboard interactions and accessibility.
   * @param {event} event - The onKeyDown event.
   */
  handleKeyDown(event) {
    const { value } = this.props;
    const { keyCode, target } = event;
    const { BACKSPACE, SPACE, UP_ARROW, DOWN_ARROW } = KeyCodes;

    if (keyCode === SPACE && target !== this.input) {
      event.preventDefault();
      this.openDropdown();
    } else if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
      event.preventDefault();
      this.openDropdown();
    } else if (keyCode === BACKSPACE && Util.allowsMultipleSelections(this.props) && !this.state.searchValue && value.length > 0) {
      this.props.onDeselect(value[value.length - 1]);
    } else if (keyCode === KeyCodes.ESCAPE) {
      this.closeDropdown();
    }
  }

  /**
   * Handles the mouse down events.
   * @param {event} event - The mouse down event.
   */
  handleMouseDown(event) {
    if (this.props.variant !== Variants.DEFAULT) {
      // Preventing default events stops the search input from losing focus.
      // The default variant has no search input therefore the mouse down gives the component focus.
      event.preventDefault();
    }
    this.openDropdown();
  }

  /**
   * Handles the input mouse down events.
   * @param {event} event - The mouse down event.
   */
  handleInputMouseDown(event) {
    event.stopPropagation();
    this.openDropdown();
  }

  /**
   * Handles changes to the search value.
   * @param {event} event - The input change event.
   */
  handleSearch(event) {
    const searchValue = event.target.value;

    this.setState({
      isOpen: true,
      hasSearchChanged: true,
      searchValue,
    });

    if (this.props.onSearch) {
      this.props.onSearch(searchValue);
    }
  }

  /**
   * Handles the request to select an option.
   * @param {string|number} value - The value of the selected option.
   * @param {ReactNode} option - The option that was selected.
   */
  handleSelect(value, option) {
    if (this.props.variant !== Variants.PERSISTENT) {
      this.setState({
        searchValue: '',
        hasSearchChanged: false,
        isOpen: this.props.variant === Variants.PERSISTENT,
      });
    } else {
      this.setState({
        searchValue: option.props.display,
      });
    }

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  /**
   * Toggles the dropdown open or closed.
   */
  toggleDropdown() {
    if (this.state.isOpen && this.props.variant !== Variants.PERSISTENT) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  render() {
    const {
      disabled,
      display,
      dropdown,
      dropdownAttrs,
      isInvalid,
      noResultContent,
      onDeselect,
      onSearch,
      onSelect,
      optionFilter,
      placeholder,
      searchDelay,
      variant,
      value,
      ...customProps
    } = this.props;

    const selectClasses = cx([
      'select',
      variant,
      { 'is-above': this.state.isAbove },
      { 'is-disabled': disabled },
      { 'is-focused': this.state.isFocused },
      { 'is-invalid': isInvalid },
      { 'is-open': this.state.isOpen },
      customProps.className,
    ]);

    const buttonText = this.context.intl.formatMessage({ id: 'Terra.searchField.search' });

    return (
      <div>
        <div
          {...customProps}
          role="combobox"
          aria-disabled={!!disabled}
          aria-expanded={!!this.state.isOpen}
          aria-haspopup="true"
          aria-owns={this.state.isOpen ? 'terra-select-dropdown' : undefined}
          className={selectClasses}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          onMouseDown={this.handleMouseDown}
          tabIndex={Util.tabIndex(this.props)}
          ref={(select) => { this.select = select; }}
        >
          <div className={cx('display')} onMouseDown={this.openDropdown} role="textbox">
            {this.getDisplay()}
          </div>
          {/* Render a clear search button when text is present in input */}
          {this.state.searchValue &&
            <Button
              className={cx('clear-button')}
              icon={IncompleteIcon}
              text={'Clear'}
              onClick={this.clearSearch}
              isIconOnly
              isCompact
            />
          }
          <Button
            className={cx('button')}
            onMouseDown={this.toggleDropdown}
            icon={Icon}
            text={buttonText}
            isIconOnly
            isCompact
          />
          {/* If variant is dropdown, render the dropdown */}
          {variant === Variants.DROPDOWN && this.state.isOpen &&
            <Dropdown
              {...dropdownAttrs}
              id={this.state.isOpen ? 'terra-select-dropdown' : undefined}
              target={this.select}
              isAbove={this.state.isAbove}
              isEnabled={this.state.isPositioned}
              onResize={this.positionDropdown}
              refCallback={(ref) => { this.dropdown = ref; }}
              style={Util.dropdownStyle(dropdownAttrs, this.state)}
            >
              {dropdown &&
                 dropdown({
                   value,
                   variant,
                   onDeselect,
                   optionFilter,
                   noResultContent,
                   onSelect: this.handleSelect,
                   onRequestClose: this.closeDropdown,
                   searchValue: this.state.searchValue,
                   searchDelay,
                 })}
            </Dropdown>
          }
        </div>
        {/* If variant is persistent, render the result box */}
        {variant === Variants.PERSISTENT &&
          <div className={cx('box')} id="box">
            <Box>
              {dropdown({
                value,
                variant,
                onDeselect,
                optionFilter,
                noResultContent,
                onSelect: this.handleSelect,
                onRequestClose: this.closeDropdown,
                searchValue: this.state.searchValue,
              })}
            </Box>
          </div>
          }
      </div>
    );
  }
}

Frame.propTypes = propTypes;
Frame.defaultProps = defaultProps;
Frame.contextTypes = contextTypes;

export default Frame;
