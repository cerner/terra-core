import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import uniqueid from 'lodash.uniqueid';
import * as KeyCode from 'keycode-js';
import Dropdown from './Dropdown';
import Menu from './Menu';
import FrameUtil from '../shared/_FrameUtil';
import styles from '../shared/_Frame.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Used to define a string that labels the select component to screen readers.
   */
  ariaLabel: PropTypes.string,
  /**
   * The select options.
   */
  children: PropTypes.node,
  /**
   * Text for the clear option.
   */
  clearOptionDisplay: PropTypes.string,
  /**
   * Whether the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The select display.
   */
  display: PropTypes.node,
  /**
   * Additional attributes to spread onto the dropdown. ( Style, ClassNames, etc.. )
   */
  // eslint-disable-next-line react/forbid-prop-types
  dropdownAttrs: PropTypes.object,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
  /**
   * Whether the select is in an invalid state.
   */
  isInvalid: PropTypes.bool,
  /**
   * The max height of the dropdown.
   */
  maxHeight: PropTypes.number,
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
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * Total number of options.
   */
  totalOptions: PropTypes.number,
  /**
   * The select value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  clearOptionDisplay: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isInvalid: false,
  noResultContent: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  required: false,
  totalOptions: undefined,
  value: undefined,
};

/* This rule can be removed when eslint-plugin-jsx-a11y is updated to ~> 6.0.0 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
class Frame extends React.Component {
  static createUniqueIdRef(value) {
    const ref = React.createRef();
    ref.current = uniqueid(value);

    return ref;
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isFocused: false,
      isInputFocused: false,
      isPositioned: false,
      hasSearchChanged: false,
      searchValue: '',
    };

    this.selectRef = React.createRef();
    this.selectInputRef = React.createRef();
    this.menuInputRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.ariaLiveRef = React.createRef();

    this.labelId = Frame.createUniqueIdRef('terra-select-screen-reader-label-');
    this.descriptionId = Frame.createUniqueIdRef('terra-select-screen-reader-description-');
    this.menuIdRef = Frame.createUniqueIdRef('terra-select-menu-');

    this.setDropdownRef = this.setDropdownRef.bind(this);
    this.ariaLabel = this.ariaLabel.bind(this);
    this.getDisplay = this.getDisplay.bind(this);
    this.renderToggleButton = this.renderToggleButton.bind(this);
    this.renderDescriptionText = this.renderDescriptionText.bind(this);
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
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleToggleMouseDown = this.handleToggleMouseDown.bind(this);
    this.handleToggleButtonMouseDown = this.handleToggleButtonMouseDown.bind(this);
    this.role = this.role.bind(this);
    this.handleMenuRequestClose = this.handleMenuRequestClose.bind(this);
  }

  componentDidUpdate(previousProps, previousState) {
    if (FrameUtil.shouldPositionDropdown(previousState, this.state, this.dropdownRef.current)) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(this.positionDropdown, !previousState.isOpen ? 0 : 100);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.debounceTimer);
  }

  setDropdownRef(ref) {
    this.dropdownRef.current = ref;
  }

  getDisplay(ariaDescribedBy) {
    const { hasSearchChanged, searchValue } = this.state;
    const {
      disabled, display, placeholder, required,
    } = this.props;

    const { current: menuId } = this.menuIdRef;

    const inputAttrs = {
      disabled,
      placeholder,
      ref: this.selectInputRef,
      onChange: this.handleSearch,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur,
      'aria-label': this.ariaLabel(),
      'aria-describedby': ariaDescribedBy,
      'aria-disabled': disabled,
      'aria-owns': this.state.isOpen ? menuId : undefined,
      type: 'text',
      className: cx('search-input', { 'is-hidden': FrameUtil.shouldHideSearch(this.props, this.state) }),
      required,
      'aria-required': required,
    };
    const value = hasSearchChanged ? searchValue : display;

    return (
      <div className={cx('content')}>
        <input {...inputAttrs} value={value} data-terra-select-input />
      </div>
    );
  }

  /**
   * Handle the menu onRequestClose event
   */
  handleMenuRequestClose(event) {
    const { keyCode } = event;
    const { current: selectInput } = this.selectInputRef;

    // first, focus on the select input to simulate direct event bubbling from
    // the menu to the select, even though they're not connected via normal
    // DOM flow
    if (selectInput) {
      selectInput.focus();
    }

    /* if closed via keypress handle the keyDown event */
    if (keyCode !== undefined) {
      this.handleKeyDown(event);

    /* just close the dropdown */
    } else {
      this.closeDropdown();
    }
  }

  /**
   * Closes the dropdown.
   */
  closeDropdown() {
    const { current: selectInput } = this.selectInputRef;
    const { current: select } = this.selectRef;

    this.setState({
      isAbove: false,
      isFocused: document.activeElement === selectInput || document.activeElement === select,
      isOpen: false,
      openedFromToggle: false,
      isPositioned: false,
      hasSearchChanged: false,
      searchValue: '',
    });
  }

  /**
   * Opens the dropdown.
   */
  openDropdown(event) {
    if (this.state.isOpen || this.props.disabled) {
      return;
    }

    /**
     * Avoids focusing the input if the toggle button is used to open the select menu.
     * This is to avoid an issue with VoiceOver on iOS where shifting to toggle button while the
     * input is focused / onScreen keyboard is open unexpected focus shift when the onScreen
     * keyboard is closed
     */
    if (event && event.target
      && (event.target.hasAttribute('data-terra-form-select-toggle-button')
      || event.target.hasAttribute('data-terra-form-select-toggle-button-icon'))) {
      this.setState({ isOpen: true, isPositioned: false, openedFromToggle: true });
      return;
    }

    this.setState({ isOpen: true, isPositioned: false });
  }

  /**
   * Positions the dropdown to utilize the most available space.
   */
  positionDropdown() {
    if (!this.state.isOpen) {
      return;
    }

    const { dropdownAttrs, maxHeight } = this.props;
    const { current: dropdown } = this.dropdownRef;
    const { current: select } = this.selectRef;

    this.setState(FrameUtil.dropdownPosition(dropdownAttrs, select, dropdown, maxHeight));
  }

  /**
   * Handles the blur event.
   */
  handleBlur(event) {
    // React recycles synthetic event objects when the stack empties,
    // persist this one so we can use it in the raf callback below
    // see: https://reactjs.org/docs/events.html#event-pooling
    event.persist();

    // allow the DOM to settle: queue a microtask to fire before next repaint
    // we want to ensure that the document.activeElement has properly updated,
    // especially after manual focus manipulation for the select and menu inputs
    // this will run after the JS stack has run to completion, but before the
    // next paint
    requestAnimationFrame(() => {
      const { onBlur } = this.props;
      const { activeElement } = document;

      const menuInputIsActive = activeElement.hasAttribute('data-terra-select-menu-input');
      const selectInputIsActive = activeElement.hasAttribute('data-terra-select-input');
      const toggleButtonIsActive = activeElement.hasAttribute('data-terra-form-select-toggle-button');

      // don't proceed with blurring if any of the following are the document's
      // active (focused) element
      if (menuInputIsActive || selectInputIsActive || toggleButtonIsActive) {
        return;
      }

      this.setState({ isFocused: false });

      this.closeDropdown();

      if (onBlur) {
        onBlur(event);
      }
    });
  }

  /**
   * Handles the focus event.
   */
  handleFocus(event) {
    const { disabled, onFocus } = this.props;
    const { isFocused } = this.state;

    if (disabled) {
      return;
    }

    if (onFocus && !isFocused) {
      onFocus(event);
    }

    this.setState({ isFocused: true });
  }

  /**
   * Manages keyboard interactions and accessibility.
   * @param {event} event - The onKeyDown event.
   */
  handleKeyDown(event) {
    const { keyCode } = event;

    if (keyCode === KeyCode.KEY_ESCAPE || keyCode === KeyCode.KEY_TAB) {
      this.closeDropdown();
    } else {
      this.openDropdown(event);
    }
  }

  /**
   * Handles the mouse down events.
   * @param {event} event - The mouse down event.
   */
  handleMouseDown(event) {
    // Preventing default events stops the search input from losing focus.
    // The default variant has no search input therefore the mouse down gives the component focus.
    // event.preventDefault();
    this.openDropdown(event);
  }

  /**
   * Handles the input mouse down events.
   * @param {event} event - The mouse down event.
   */
  handleInputMouseDown(event) {
    this.openDropdown(event);
  }

  /**
   * Handles the input focus event.
   */
  handleInputFocus() {
    this.setState({ isInputFocused: true });
  }

  /**
   * Handles the input blur event.
   */
  handleInputBlur() {
    this.setState({ isInputFocused: false });
  }

  /**
   * Handles the toggle mouse down events.
   */
  handleToggleMouseDown() {
    if (this.state.isOpen) {
      this.closeDropdown();
    }
  }

  /**
   * Handles the toggle button mouse down events.
   */
  handleToggleButtonMouseDown() {
    if (this.state.isOpen) {
      this.closeDropdown();
    }
  }

  /**
   * Handles changes to the search value.
   * @param {event} event - The input change event.
   */
  handleSearch(event) {
    const { onSearch } = this.props;
    const searchValue = event.target.value;

    this.setState({
      isOpen: true,
      hasSearchChanged: true,
      searchValue,
    });

    if (onSearch) {
      onSearch(searchValue);
    }

    // ensure the dropdown is properly positioned on input changes, since it can
    // lead to different heights via option filtering
    this.positionDropdown();
  }

  /**
   * Handles the request to select an option.
   * @param {string|number} value - The value of the selected option.
   * @param {ReactNode} option - The option that was selected.
   */
  handleSelect(event, option) {
    const { onSelect } = this.props;
    const { current: selectInput } = this.selectInputRef;

    // prevent selectInput from losing focus
    event.preventDefault();

    // menu was open with focus on menu's input, manually shift focus back to
    // the select input
    if (selectInput) {
      selectInput.focus();
    }

    this.closeDropdown();

    if (onSelect) {
      onSelect(option.props.value, option);
    }
  }

  /**
   * Toggles the dropdown open or closed.
   */
  toggleDropdown(event) {
    if (this.state.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown(event);
    }
  }

  /**
   * Determines compatible aria-label string based on if one is provided via props
   * Falls back to the string 'Search' if no label is provided
   */
  ariaLabel() {
    const { ariaLabel, disabled, intl } = this.props;

    const defaultAriaLabel = intl.formatMessage({ id: 'Terra.form.select.ariaLabel' });
    const dimmed = intl.formatMessage({ id: 'Terra.form.select.dimmed' });

    // VO on iOS doesn't do a good job of announcing disabled stated. Here we append the phrase that
    // VO associates with disabled form controls.
    if ('ontouchstart' in window && disabled) {
      return ariaLabel === undefined ? `${defaultAriaLabel} ${dimmed}` : `${ariaLabel} ${dimmed}`;
    }

    return ariaLabel === undefined ? defaultAriaLabel : ariaLabel;
  }

  /**
   * Determines compatible role attribute to apply to select based on active variant and disabled prop
   */
  role() {
    const { disabled } = this.props;
    // role="application" needed to allow JAWS to work correctly with the select and use our key event listeners
    return disabled ? undefined : 'application';
  }

  /**
   * Renders descriptive text related to the select component to be available for screen readers
   */
  renderDescriptionText() {
    const { intl, totalOptions } = this.props;

    const listOfOptionsTxt = intl.formatMessage({ id: 'Terra.form.select.listOfTotalOptions' }, { total: totalOptions });
    const mobileUsageGuidanceTxt = intl.formatMessage({ id: 'Terra.form.select.mobileUsageGuidance' });
    const searchUsageGuidanceTxt = intl.formatMessage({ id: 'Terra.form.select.searchUsageGuidance' });

    if ('ontouchstart' in window) {
      if (this.state.isInputFocused) {
        return `${listOfOptionsTxt}`;
      }

      return `${listOfOptionsTxt} ${mobileUsageGuidanceTxt}`;
    }

    return `${listOfOptionsTxt} ${searchUsageGuidanceTxt}`;
  }

  renderToggleButton() {
    const { intl } = this.props;

    const mobileButtonUsageGuidanceTxt = intl.formatMessage({ id: 'Terra.form.select.mobileButtonUsageGuidance' });

    /**
     * Devices that support ontouchstart trigger an onScreen keyboard when inputs are focused and
     * need customized rendering to avoid issues when used with a screen reader.
     */
    if ('ontouchstart' in window) {
      /**
       * When the input within the select is focused, we don't want to render the toggle button that
       * shifts focus to the select menu as it causes issues when using VoiceOver on iOS.
       * Always rendering the toggle button allows the users to shift the virtual indicator to the
       * toggle button and tap on it which shifts focus to the select menu dropdown. When this
       * happens on iOS, the onScreen keyboard will close and shift focus back to the input which
       * prevents users from ever navigating through the select options.
       */
      if (this.state.isInputFocused) {
        return (
          <div data-terra-form-select-toggle className={cx('toggle')} onMouseDown={this.handleToggleMouseDown}>
            <span className={cx('arrow-icon')} />
          </div>
        );
      }

      /**
       * Toggle button enables shifting focus to dropdown. This allows iOS users that are using
       * VoiceOver the ability to navigate to the select options.
       */
      return (
        <div className={cx(['toggle', 'toggle-narrow'])}>
          <button
            type="button"
            className={cx('toggle-btn')}
            aria-label={mobileButtonUsageGuidanceTxt}
            data-terra-form-select-toggle-button
            onMouseDown={this.handleToggleButtonMouseDown}
          >
            <span className={cx('arrow-icon')} data-terra-form-select-toggle-button-icon />
          </button>
        </div>
      );
    }

    return (
      <div data-terra-form-select-toggle className={cx('toggle')} onMouseDown={this.toggleDropdown}>
        <span className={cx('arrow-icon')} />
      </div>
    );
  }

  render() {
    const {
      ariaLabel,
      clearOptionDisplay,
      children,
      disabled,
      display,
      dropdownAttrs,
      intl,
      isInvalid,
      maxHeight: _maxHeight,
      noResultContent,
      onDeselect,
      onSearch,
      onSelect,
      optionFilter,
      placeholder,
      required,
      totalOptions,
      value,
      ...customProps
    } = this.props;

    const {
      hasSearchChanged,
      isAbove,
      isFocused,
      isOpen,
      isPositioned,
      openedFromToggle,
      searchValue,
    } = this.state;

    const selectClasses = cx([
      'select',
      'search',
      { 'is-above': isAbove },
      { 'is-disabled': disabled },
      { 'is-focused': isFocused },
      { 'is-invalid': isInvalid },
      { 'is-open': isOpen },
      customProps.className,
    ]);

    const { current: descriptionId } = this.descriptionId;
    const customAriaDescribedbyIds = customProps['aria-describedby'];
    const ariaDescribedBy = customAriaDescribedbyIds ? `${descriptionId} ${customAriaDescribedbyIds}` : descriptionId;
    const computedAriaLabel = this.ariaLabel();

    const { maxHeight, ...dropdownStyle } = FrameUtil.dropdownStyle(dropdownAttrs, this.state);
    const { current: menuId } = this.menuIdRef;

    const menuProps = {
      ariaDescribedBy,
      ariaLabel: computedAriaLabel,
      ariaLiveRef: this.ariaLiveRef,
      clearOptionDisplay,
      inputValue: hasSearchChanged ? searchValue : display,
      isAbove,
      isInvalid,
      maxHeight,
      menuId,
      noResultContent,
      onRequestClose: this.handleMenuRequestClose,
      onSearch: this.handleSearch,
      onSelect: this.handleSelect,
      openedFromToggle,
      optionFilter,
      placeholder,
      required,
      searchValue,
      selectInputRef: this.selectInputRef,
      value,
    };

    return (
      <div
        {...customProps}
        role="combobox"
        data-terra-select-combobox
        aria-controls={!disabled && isOpen ? menuId : undefined}
        aria-disabled={!!disabled}
        aria-expanded={!!disabled && !!isOpen}
        aria-haspopup={!disabled ? 'true' : undefined}
        aria-describedby={ariaDescribedBy}
        aria-owns={isOpen ? menuId : undefined}
        className={selectClasses}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
        tabIndex="-1" // focusable, but not tabbable
        ref={this.selectRef}
      >
        <div className={cx('visually-hidden-component')} hidden>
          {/* Hidden attribute used to prevent VoiceOver on desktop from announcing this content twice */}
          <span id={this.labelId.current}>{this.ariaLabel()}</span>
          <span id={this.descriptionId.current}>{this.renderDescriptionText()}</span>
        </div>
        <div className={cx('display')} aria-label={this.ariaLabel()}>
          {this.getDisplay(ariaDescribedBy)}
        </div>
        {this.renderToggleButton()}
        <span
          aria-atomic="true"
          aria-live="assertive"
          aria-relevant="additions text"
          className={cx('visually-hidden-component')}
          ref={this.ariaLiveRef}
        />
        {isOpen
          && (
          <Dropdown
            {...dropdownAttrs}
            id={isOpen ? 'terra-select-dropdown' : undefined}
            target={this.selectRef.current}
            isAbove={isAbove}
            isEnabled={isPositioned}
            onResize={this.positionDropdown}
            refCallback={this.setDropdownRef}
            style={dropdownStyle} // eslint-disable-line react/forbid-component-props
          >
            <Menu {...menuProps}>
              {children}
            </Menu>
          </Dropdown>
          )}
      </div>
    );
  }
}

Frame.propTypes = propTypes;
Frame.defaultProps = defaultProps;

export default injectIntl(Frame);
