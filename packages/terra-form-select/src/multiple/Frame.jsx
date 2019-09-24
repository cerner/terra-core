import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import uniqueid from 'lodash.uniqueid';
import * as KeyCode from 'keycode-js';
import Dropdown from '../shared/_Dropdown';
import Menu from './Menu';
import FrameUtil from '../shared/_FrameUtil';
import styles from '../shared/_Frame.module.scss';
import MenuUtil from '../shared/_MenuUtil';

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
   * The maximum number of options that can be selected. A value less than 2 will be ignored.
   * Only applicable to variants allowing multiple selections (e.g.; `multiple`; `tag`).
   */
  maxSelectionCount: PropTypes.number,
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
   * Render dropdown menu in normal DOM flow with position absolute. Renders in a portal by default.
   */
  useSemanticDropdown: PropTypes.bool.isRequired,
  /**
   * The select value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
};

const defaultProps = {
  disabled: false,
  dropdownAttrs: undefined,
  isInvalid: false,
  maxSelectionCount: undefined,
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
    this.role = this.role.bind(this);
    this.visuallyHiddenComponent = React.createRef();
    this.selectMenu = '#terra-select-menu';
  }

  componentDidUpdate(previousProps, previousState) {
    if (FrameUtil.shouldPositionDropdown(previousState, this.state, this.dropdown)) {
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

  getDisplay(displayId, ariaDescribedBy) {
    const { searchValue, isFocused } = this.state;
    const {
      disabled, display, placeholder, required, value,
    } = this.props;

    const isHidden = !isFocused && value && value.length > 0;

    const inputAttrs = {
      disabled,
      placeholder,
      ref: this.setInput,
      onChange: this.handleSearch,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur,
      onMouseDown: this.handleInputMouseDown,
      'aria-label': this.ariaLabel(),
      'aria-describedby': `${displayId} ${ariaDescribedBy}`,
      'aria-disabled': disabled,
      'aria-owns': this.state.isOpen ? 'terra-select-menu' : undefined,
      type: 'text',
      className: cx('search-input', { 'is-hidden': isHidden }),
      required: required && !display.length ? true : undefined,
      'aria-required': required && !display.length ? 'required' : undefined,
    };

    return (
      <ul className={cx('content')}>
        {display && display.length > 0
          ? (
            <li>
              <ul id={displayId} className={cx('display-content')}>
                {display}
                <li className={cx('visually-hidden-component')}>
                  <FormattedMessage id="Terra.form.select.selected" />
                </li>
              </ul>
            </li>
          ) : null}
        <li className={cx('search-wrapper')}>
          <input {...inputAttrs} value={searchValue} />
        </li>
      </ul>
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

      // Allows time for state update to render select menu DOM before shifting focus to it
      setTimeout(() => {
        if (document.querySelector(this.selectMenu)) {
          document.querySelector(this.selectMenu).focus();
        }
      }, 10);
      return;
    }

    if (this.input) {
      this.input.focus();
    } else {
      // Allows time for state update to render select menu DOM before shifting focus to it
      setTimeout(() => {
        if (document.querySelector(this.selectMenu)) {
          document.querySelector(this.selectMenu).focus();
        }
      }, 10);
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
    const { select, dropdown } = this;
    this.setState(FrameUtil.dropdownPosition(dropdownAttrs, select, dropdown, maxHeight));
  }

  /**
   * Handles the blur event.
   */
  handleBlur(event) {
    // The check for dropdown.contains(activeElement) is necessary to prevent IE11 from closing dropdown on click of scrollbar in certain contexts.
    if (this.dropdown && (this.dropdown === document.activeElement && this.dropdown.contains(document.activeElement))) {
      return;
    }

    this.setState({ isFocused: false });

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
    const {
      children, intl, onDeselect, value,
    } = this.props;

    const { keyCode, target } = event;

    if (keyCode === KeyCode.KEY_SPACE && target !== this.input) {
      event.preventDefault();
      this.openDropdown(event);
    } else if (keyCode === KeyCode.KEY_UP || keyCode === KeyCode.KEY_DOWN) {
      event.preventDefault();
      this.openDropdown(event);
    } else if (keyCode === KeyCode.KEY_BACK_SPACE && !this.state.searchValue && value.length > 0) {
      const lastOptionValue = value[value.length - 1];
      const lastOption = MenuUtil.findByValue(children, lastOptionValue);
      const lastOptionDisplay = lastOption ? lastOption.props.display : lastOptionValue;

      if (this.visuallyHiddenComponent && this.visuallyHiddenComponent.current) {
        this.visuallyHiddenComponent.current.innerText = intl.formatMessage({ id: 'Terra.form.select.unselectedText' }, { text: lastOptionDisplay });
      }

      if (onDeselect) {
        onDeselect(lastOptionValue);
      }
    } else if (keyCode === KeyCode.KEY_ESCAPE) {
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
      isOpen: true,
    });

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
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
    const multiSelectUsageGuidanceTxt = intl.formatMessage({ id: 'Terra.form.select.multiSelectUsageGuidance' });

    if ('ontouchstart' in window) {
      if (this.state.isInputFocused) {
        return `${listOfOptionsTxt}`;
      }

      return `${listOfOptionsTxt} ${mobileUsageGuidanceTxt}`;
    }

    return `${listOfOptionsTxt} ${multiSelectUsageGuidanceTxt}`;
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
      children,
      disabled,
      display,
      dropdownAttrs,
      intl,
      useSemanticDropdown,
      isInvalid,
      maxHeight,
      maxSelectionCount,
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

    const selectClasses = cx([
      'select',
      'multiple',
      { 'is-above': this.state.isAbove },
      { 'is-disabled': disabled },
      { 'is-focused': this.state.isFocused },
      { 'is-invalid': isInvalid },
      { 'is-open': this.state.isOpen },
      customProps.className,
    ]);

    const labelId = `terra-select-screen-reader-label-${uniqueid()}`;
    const displayId = `terra-select-screen-reader-display-${uniqueid()}`;
    const descriptionId = `terra-select-screen-reader-description-${uniqueid()}`;
    const customAriaDescribedbyIds = customProps['aria-describedby'];
    const ariaDescribedBy = customAriaDescribedbyIds ? `${descriptionId} ${customAriaDescribedbyIds}` : descriptionId;

    const menuProps = {
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
      maxSelectionCount,
    };

    return (
      <div
        {...customProps}
        role={this.role()}
        data-terra-select-combobox
        aria-controls={!disabled && this.state.isOpen ? 'terra-select-menu' : undefined}
        aria-disabled={!!disabled}
        aria-expanded={!!disabled && !!this.state.isOpen}
        aria-haspopup={!disabled ? 'true' : undefined}
        aria-describedby={ariaDescribedBy}
        aria-owns={this.state.isOpen ? 'terra-select-menu' : undefined}
        className={selectClasses}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
        tabIndex="-1"
        ref={(select) => { this.select = select; }}
      >
        <div className={cx('visually-hidden-component')} hidden>
          {/* Hidden attribute used to prevent VoiceOver on desktop from announcing this content twice */}
          <span id={labelId}>{this.ariaLabel()}</span>
          <span id={descriptionId}>{this.renderDescriptionText()}</span>
        </div>
        <div className={cx('combobox-container')}>
          <div className={cx('display')} aria-label={this.ariaLabel()}>
            {this.getDisplay(displayId, ariaDescribedBy)}
          </div>
          {this.renderToggleButton()}
        </div>
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
            useSemanticDropdown={useSemanticDropdown}
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

export default injectIntl(Frame);
