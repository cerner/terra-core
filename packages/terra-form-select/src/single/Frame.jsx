import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import uniqueid from 'lodash.uniqueid';
import * as KeyCode from 'keycode-js';
import Dropdown from '../shared/_Dropdown';
import Menu from './Menu';
import FrameUtil from '../shared/_FrameUtil';
import SharedUtil from '../shared/_SharedUtil';
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
   * Whether the select displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Whether the select displays as Invalid. Use when value does not meet validation pattern.
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
   * Callback function triggered when an option is selected.
   */
  onSelect: PropTypes.func,
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
  noResultContent: undefined,
  onDeselect: undefined,
  onSelect: undefined,
  placeholder: undefined,
  required: false,
  totalOptions: undefined,
  value: undefined,
};

/**
   * Determines compatible aria-labelledby IDs based on active variant
   * Used with default, multiple, and tag variants to provide information about the label, displayed
   * value and or the placeholder value.
   */
function ariaLabelledByIds(labelId, displayId, placeholderId) {
  // Safari is able to read the display/placeholder text, other browsers need help to provide that info to
  // the accessibility tree used by screen readers
  if (SharedUtil.isSafari()) {
    return `${labelId}`;
  }
  return `${labelId} ${displayId} ${placeholderId}`;
}

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
    };

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleToggleMouseDown = this.handleToggleMouseDown.bind(this);
    this.handleToggleButtonMouseDown = this.handleToggleButtonMouseDown.bind(this);
    this.role = this.role.bind(this);
    this.visuallyHiddenComponent = React.createRef();
    this.setSelectMenuRef = this.setSelectMenuRef.bind(this);
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

  setSelectMenuRef(element) {
    this.selectMenu = element;
  }

  getDisplay(displayId, placeholderId) {
    const { display, placeholder } = this.props;

    return (display
      ? <span id={displayId}>{display}</span>
      : <div id={placeholderId} className={cx('placeholder')}>{placeholder || '\xa0'}</div>
    );
  }

  /**
   * Closes the dropdown.
   */
  closeDropdown() {
    this.setState({
      isAbove: false,
      isFocused: document.activeElement === this.select,
      isOpen: false,
      isPositioned: false,
    });
  }

  /**
   * Opens the dropdown.
   */
  openDropdown() {
    if (this.state.isOpen || this.props.disabled) {
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

    // Sets Focus to dropdown menu after dropdown menu is postioned.
    const moveFocusToDropdown = () => {
      if (this.selectMenu) {
        this.selectMenu.focus();
      }
    };

    this.setState(FrameUtil.dropdownPosition(dropdownAttrs, this.select, this.dropdown, maxHeight), moveFocusToDropdown);
  }

  /**
   * Handles the blur event.
   */
  handleBlur(event) {
    // The check for dropdown.contains(activeElement) is necessary to prevent IE11 from closing dropdown on click of scrollbar in certain contexts.
    if (this.dropdown && (this.dropdown === document.activeElement && this.dropdown.contains(document.activeElement))) {
      return;
    }

    // eslint-disable-next-line no-underscore-dangle
    const _onBlur = () => {
      this.setState({ isFocused: false });

      this.closeDropdown();

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    };

    /**
     * When the select blur event is triggered with the default variant, this code checks if the focus
     * is shifted to the select menu and if so, suppresses the rest of the blur handler to prevent
     * the select menu from being closed.
     */
    // event.relatedTarget returns null in IE 10 / IE 11
    if (event.relatedTarget == null) {
      // Allow 10ms timeout hack for the browser to set document.activeElement so that the currently
      // focused page element is available when the blur event is fired.
      // See discussion on https://github.com/facebook/react/issues/3751
      // https://github.com/mui-org/material-ui/blob/v3.9.3/packages/material-ui/src/MenuList/MenuList.js#L27
      setTimeout(() => {
        if (this.selectMenu !== document.activeElement) {
          _onBlur();
        }
      }, 10);
    // Modern browsers support event.relatedTarget
    } else if (this.selectMenu !== event.relatedTarget) {
      _onBlur();
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
    const { keyCode } = event;

    if (keyCode === KeyCode.KEY_SPACE) {
      event.preventDefault();
      this.openDropdown();
    } else if (keyCode === KeyCode.KEY_UP || keyCode === KeyCode.KEY_DOWN) {
      event.preventDefault();
      this.openDropdown();
    } else if (keyCode === KeyCode.KEY_ESCAPE) {
      this.closeDropdown();
    }
  }

  /**
   * Handles the mouse down events.
   */
  handleMouseDown() {
    this.openDropdown();
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
   * Handles the request to select an option.
   * @param {string|number} value - The value of the selected option.
   * @param {ReactNode} option - The option that was selected.
   */
  handleSelect(value, option) {
    this.setState({
      isOpen: false,
      isAbove: false,
    });

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  /**
   * Toggles the dropdown open or closed.
   */
  toggleDropdown() {
    if (this.state.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
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
    return disabled ? undefined : 'combobox';
  }

  /**
   * Renders descriptive text related to the select component to be available for screen readers
   */
  renderDescriptionText() {
    const { intl, totalOptions } = this.props;

    const listOfOptionsTxt = intl.formatMessage({ id: 'Terra.form.select.listOfTotalOptions' }, { total: totalOptions });
    const defaultUsageGuidanceTxt = intl.formatMessage({ id: 'Terra.form.select.defaultUsageGuidance' });

    if ('ontouchstart' in window) {
      return listOfOptionsTxt;
    }

    return `${listOfOptionsTxt} ${defaultUsageGuidanceTxt}`;
  }

  renderToggleButton() {
    /**
     * Devices that support ontouchstart trigger an onScreen keyboard when inputs are focused and
     * need customized rendering to avoid issues when used with a screen reader.
     */
    /**
     * If the variant is default, we don't need to set up any event handlers on the toggle
     * The event handlers on data-terra-select-combobox will handle tap/click events on this element
     */
    const onMouseDown = 'ontouchstart' in window ? undefined : this.toggleDropdown;
    return (
      <div data-terra-form-select-toggle className={cx('toggle')} onMouseDown={onMouseDown}>
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
      isIncomplete,
      isInvalid,
      maxHeight,
      noResultContent,
      onDeselect,
      onSelect,
      placeholder,
      required,
      totalOptions,
      value,
      ...customProps
    } = this.props;

    const selectClasses = cx([
      'select',
      'default',
      { 'is-above': this.state.isAbove },
      { 'is-disabled': disabled },
      { 'is-focused': this.state.isFocused },
      { 'is-invalid': isInvalid },
      { 'is-incomplete': (isIncomplete && required && !isInvalid) },
      { 'is-open': this.state.isOpen },
      customProps.className,
    ]);

    const labelId = `terra-select-screen-reader-label-${uniqueid()}`;
    const displayId = `terra-select-screen-reader-display-${uniqueid()}`;
    const placeholderId = `terra-select-screen-reader-placeholder-${uniqueid()}`;
    const descriptionId = `terra-select-screen-reader-description-${uniqueid()}`;
    const customAriaDescribedbyIds = customProps['aria-describedby'];
    const ariaDescribedBy = customAriaDescribedbyIds ? `${descriptionId} ${customAriaDescribedbyIds}` : descriptionId;
    const selectMenuId = `terra-select-menu-${uniqueid()}`;

    const menuProps = {
      id: selectMenuId,
      value,
      onDeselect,
      noResultContent,
      visuallyHiddenComponent: this.visuallyHiddenComponent,
      onSelect: this.handleSelect,
      onRequestClose: this.closeDropdown,
      input: this.input,
      select: this.select,
      clearOptionDisplay,
      refCallback: this.setSelectMenuRef,
    };

    return (
      <div
        {...customProps}
        role={this.role()}
        aria-required={required}
        data-terra-select-combobox
        aria-controls={!disabled && this.state.isOpen ? selectMenuId : undefined}
        aria-disabled={!!disabled}
        aria-expanded={!!disabled && !!this.state.isOpen}
        aria-haspopup={!disabled ? 'true' : undefined}
        aria-labelledby={ariaLabelledByIds(labelId, displayId, placeholderId)}
        aria-describedby={ariaDescribedBy}
        aria-owns={this.state.isOpen ? selectMenuId : undefined}
        className={selectClasses}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
        tabIndex={disabled ? '-1' : '0'} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
        ref={(select) => { this.select = select; }}
      >
        <div className={cx('visually-hidden-component')} hidden>
          {/* Hidden attribute used to prevent VoiceOver on desktop from announcing this content twice */}
          <span id={labelId}>{this.ariaLabel()}</span>
          <span id={descriptionId}>{this.renderDescriptionText()}</span>
        </div>
        <div className={cx('display')} aria-label={this.ariaLabel()} role="textbox">
          {this.getDisplay(displayId, placeholderId)}
        </div>
        {this.renderToggleButton()}
        <span
          aria-atomic="true"
          aria-live="assertive"
          aria-relevant="additions text"
          className={cx('visually-hidden-component')}
          ref={this.visuallyHiddenComponent}
        />
        {this.state.isOpen && (
          <Dropdown
            {...dropdownAttrs}
            id={this.state.isOpen ? 'terra-select-dropdown' : undefined}
            target={this.select}
            isAbove={this.state.isAbove}
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
