import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import uniqueid from 'lodash.uniqueid';
import * as KeyCode from 'keycode-js';
import Dropdown from '../shared/_Dropdown';
import Menu from './Menu';
import FrameUtil from '../shared/_FrameUtil';
import styles from '../shared/_Frame.module.scss';
import 'mutationobserver-shim';
import '../shared/_contains-polyfill';
import '../shared/_matches-polyfill';

const cx = classNamesBind.bind(styles);

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
   * The id of the input field.
   */
  inputId: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Whether the select displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Whether the select displays as Invalid. Use when value does not meet validation pattern.
   */
  isInvalid: PropTypes.bool,
  /**
   * Ensures touch accessibility by rendering the dropdown inline without a portal.
   *
   * Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.
   * The dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor.
   */
  isTouchAccessible: PropTypes.bool,
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
};

const defaultProps = {
  clearOptionDisplay: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isIncomplete: false,
  isInvalid: false,
  isTouchAccessible: false,
  noResultContent: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  required: false,
  totalOptions: undefined,
  value: undefined,
  inputId: undefined,
};

/* This rule can be removed when eslint-plugin-jsx-a11y is updated to ~> 6.0.0 */
/* eslint-disable jsx-a11y/no-static-element-interactions */
class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedByTouch: false,
      isOpen: false,
      isFocused: false,
      isInputFocused: false,
      isPositioned: false,
      hasSearchChanged: false,
      searchValue: '',
    };

    this.ariaLabel = this.ariaLabel.bind(this);
    this.setInput = this.setInput.bind(this);
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
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.role = this.role.bind(this);
    this.menuId = `terra-select-menu-${uniqueid()}`;
    this.visuallyHiddenComponent = React.createRef();
    this.setSelectMenuRef = this.setSelectMenuRef.bind(this);
    this.shouldFocusDropdown = false;
  }

  componentDidMount() {
    // eslint-disable-next-line no-prototype-builtins
    if (!Element.prototype.hasOwnProperty('inert')) {
      // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import
      // eslint-disable-next-line global-require
      require('wicg-inert/dist/inert');
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (FrameUtil.shouldPositionDropdown(previousState, this.state, this.dropdown)) {
      clearTimeout(this.debounceTimer);
      this.dropdown.setAttribute('inert', '');
      this.debounceTimer = setTimeout(this.positionDropdown, !previousState.isOpen ? 0 : 100);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.debounceTimer);
  }

  /**
   * Handles the blur event.
   */
  handleBlur(event) {
    const relatedTarget = event.relatedTarget || document.activeElement;

    // The check for dropdown.contains(activeElement) is necessary to prevent IE11 from closing dropdown on click of scrollbar in certain contexts.
    if (this.dropdown && (this.dropdown === document.activeElement && this.dropdown.contains(document.activeElement))) {
      return;
    }

    // Don't blur if we dismissed the onscreen keyboard
    // Determined by if we have have interacted with the frame via onTouchStart
    // and if the focus is on input.
    if (relatedTarget === this.input || relatedTarget === this.selectMenu) {
      return;
    }

    this.setState({ isFocused: false, focusedByTouch: false });

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

    if (this.props.onFocus && !this.state.isFocused) {
      this.props.onFocus(event);
    }

    this.setState({ isFocused: true });
  }

  /**
   * Manages keyboard interactions and accessibility.
   * @param {event} event - The onKeyDown event.
   */
  handleKeyDown(event) {
    const { keyCode, target } = event;

    if (keyCode === KeyCode.KEY_SPACE && target !== this.input) {
      event.preventDefault();
      this.openDropdown(event);
    } else if (keyCode === KeyCode.KEY_UP || keyCode === KeyCode.KEY_DOWN) {
      event.preventDefault();
      this.openDropdown(event);
    } else if (this.state.isOpen && keyCode === KeyCode.KEY_ESCAPE) {
      event.stopPropagation();
      this.closeDropdown();
    }
  }

  /**
   * Handles the mouse down events.
   * @param {event} event - The mouse down event.
   */
  handleMouseDown(event) {
    // Preventing default events stops the search input from losing focus.
    // The default variant has no search input therefore the mouse down gives the component focus.
    event.preventDefault();
    this.openDropdown(event);
  }

  /**
   * Handles the input mouse down events.
   * @param {event} event - The mouse down event.
   */
  handleInputMouseDown(event) {
    event.stopPropagation();
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
      if (this.input) {
        this.input.focus();
      }
    }
  }

  /**
   * Handles the touch start events
   */
  handleTouchStart() {
    this.setState({ focusedByTouch: true });
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
    this.setState({
      searchValue: '',
      hasSearchChanged: false,
      isOpen: false,
      isAbove: false,
    });

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  setInput(input) {
    this.input = input;
  }

  setSelectMenuRef(element) {
    this.selectMenu = element;
  }

  getDisplay(ariaDescribedBy, id) {
    const { hasSearchChanged, searchValue } = this.state;
    const {
      disabled, display, placeholder, required, inputId,
    } = this.props;

    const inputAttrs = {
      disabled,
      placeholder,
      ref: this.setInput,
      onChange: this.handleSearch,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur,
      onMouseDown: this.handleInputMouseDown,
      'aria-label': this.ariaLabel(),
      'aria-describedby': ariaDescribedBy,
      'aria-disabled': disabled,
      'aria-owns': this.state.isOpen ? id : undefined,
      type: 'text',
      className: cx('search-input', { 'is-hidden': FrameUtil.shouldHideSearch(this.props, this.state) }),
      required,
      'aria-required': required,
      id: inputId,
    };
    const value = hasSearchChanged ? searchValue : display;

    return (
      <div className={cx('content')}>
        <input {...inputAttrs} value={value} />
      </div>
    );
  }

  /**
   * Closes the dropdown.
   */
  closeDropdown() {
    this.setState({
      isAbove: false,
      isFocused: document.activeElement === this.input || document.activeElement === this.select,
      isOpen: false,
      isPositioned: false,
      hasSearchChanged: false,
      searchValue: '',
    });
  }

  /**
   * Opens the dropdown.
   */
  openDropdown(event) {
    this.shouldFocusDropdown = false;
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
      this.setState({ isOpen: true, isPositioned: false });
      this.shouldFocusDropdown = true;
      return;
    }
    if (event.target.hasAttribute('data-terra-form-select-toggle')
    || event.target.className.includes('arrow-icon')) {
      this.input.focus();
    }

    if (this.input) {
      this.input.focus();
    } else {
      FrameUtil.shiftFocusToMenu(this);
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

    const { dropdownAttrs, maxHeight, isTouchAccessible } = this.props;

    const updateDropdownAttributes = () => {
      if (this.state.isPositioned) {
        this.dropdown.removeAttribute('inert');
        this.dropdown.removeAttribute('aria-hidden');
        this.selectMenu.setAttribute('tabIndex', '0');

        // sets focus to select menu after select menu is positioned when opened by toggle-button click
        if (this.selectMenu && this.shouldFocusDropdown) {
          this.selectMenu.focus();
        }
      }
    };

    this.setState(FrameUtil.dropdownPosition(dropdownAttrs, this.select, this.dropdown, maxHeight, isTouchAccessible), updateDropdownAttributes);
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
    const { intl } = this.props;

    const listOfOptionsTxt = intl.formatMessage({ id: 'Terra.form.select.listOfTotalOptions' });
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
    const { intl, isInvalid } = this.props;

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
        const toggleClasses = cx([
          'toggle',
          { 'is-invalid': isInvalid },
        ]);

        return (
          <div data-terra-form-select-toggle className={toggleClasses} onMouseDown={this.handleToggleMouseDown}>
            <span className={cx('arrow-icon')} />
          </div>
        );
      }
      const toggleClasses = cx([
        'toggle',
        'toggle-narrow',
        { 'is-invalid': isInvalid },
      ]);

      /**
       * Toggle button enables shifting focus to dropdown. This allows iOS users that are using
       * VoiceOver the ability to navigate to the select options.
       */
      return (
        <div className={toggleClasses}>
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
    const toggleClasses = cx([
      'toggle',
      { 'is-invalid': isInvalid },
    ]);

    return (
      <div data-terra-form-select-toggle className={toggleClasses} onMouseDown={this.toggleDropdown}>
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
      inputId,
      isIncomplete,
      isTouchAccessible,
      isInvalid,
      maxHeight,
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

    const theme = this.context;

    const selectClasses = classNames(
      cx(
        'select',
        'search',
        { 'is-above': this.state.isAbove },
        { 'is-disabled': disabled },
        { 'is-focused': this.state.isFocused },
        { 'is-invalid': isInvalid },
        { 'is-incomplete': (isIncomplete && required && !isInvalid) },
        { 'is-open': this.state.isOpen },
        theme.className,
      ),
      customProps.className,
    );

    const labelId = `terra-select-screen-reader-label-${uniqueid()}`;
    const descriptionId = `terra-select-screen-reader-description-${uniqueid()}`;
    const customAriaDescribedbyIds = customProps['aria-describedby'];
    const ariaDescribedBy = customAriaDescribedbyIds ? `${descriptionId} ${customAriaDescribedbyIds}` : descriptionId;

    const menuProps = {
      id: this.menuId,
      value,
      onDeselect,
      optionFilter,
      noResultContent,
      visuallyHiddenComponent: this.visuallyHiddenComponent,
      onSelect: this.handleSelect,
      onRequestClose: this.closeDropdown,
      searchValue: this.state.searchValue,
      input: this.input,
      select: this.select,
      clearOptionDisplay,
      refCallback: this.setSelectMenuRef,
    };

    return (
      <div
        {...customProps}
        role={this.role()}
        data-terra-select-combobox
        aria-controls={!disabled && this.state.isOpen ? this.menuId : undefined}
        aria-disabled={!!disabled}
        aria-expanded={!!disabled && !!this.state.isOpen}
        aria-haspopup={!disabled ? 'true' : undefined}
        aria-describedby={ariaDescribedBy}
        aria-owns={this.state.isOpen ? this.menuId : undefined}
        className={selectClasses}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
        tabIndex="-1"
        ref={(select) => { this.select = select; }}
      >
        <div className={cx('visually-hidden-component')} hidden>
          {/* Hidden attribute used to prevent VoiceOver on desktop from announcing this content twice */}
          <span id={labelId}>{this.ariaLabel()}</span>
          <span id={descriptionId}>{this.renderDescriptionText()}</span>
        </div>
        <div className={cx('display')}>
          {this.getDisplay(ariaDescribedBy, this.menuId)}
        </div>
        {this.renderToggleButton()}
        <span
          aria-atomic="true"
          aria-live="assertive"
          aria-relevant="additions text"
          className={cx('visually-hidden-component')}
          ref={this.visuallyHiddenComponent}
        />
        {this.state.isOpen
          && (
          <Dropdown
            {...dropdownAttrs}
            id={this.state.isOpen ? 'terra-select-dropdown' : undefined}
            target={this.select}
            isAbove={this.state.isAbove}
            isTouchAccessible={isTouchAccessible}
            isEnabled={this.state.isPositioned}
            onResize={this.positionDropdown}
            refCallback={(ref) => { this.dropdown = ref; }}
            style={FrameUtil.dropdownStyle(dropdownAttrs, this.state)} // eslint-disable-line react/forbid-component-props
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
Frame.contextType = ThemeContext;

export default injectIntl(Frame);
