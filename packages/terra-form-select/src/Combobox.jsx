import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Frame from './combobox/Frame';
import Option from './shared/_Option';
import OptGroup from './shared/_OptGroup';
import SelectUtil from './shared/_SelectUtil';

const propTypes = {
  /**
   * Whether a clear option is available to clear the selection, will use placeholder text if provided.
   */
  allowClear: PropTypes.bool,
  /**
   * The dropdown menu options.
   */
  children: PropTypes.node,
  /**
   * The default selected value. Can be a string, number, or array of strings/numbers.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * Whether the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Additional attributes to spread onto the dropdown. ( Style, ClassNames, etc.. )
   */
  // eslint-disable-next-line react/forbid-prop-types
  dropdownAttrs: PropTypes.object,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
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
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when the select loses focus. function(event)
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when the value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Callback function triggered when the select is clicked. function(event)
   */
  onClick: PropTypes.func,
  /**
   * Callback function triggered when an option is deselected. function(value)
   */
  onDeselect: PropTypes.func,
  /**
   * Callback function triggered when the select receives focus. function(event)
   */
  onFocus: PropTypes.func,
  /**
   * Callback function triggered when the search criteria changes. function(searchValue)
   */
  onSearch: PropTypes.func,
  /**
   * Callback function triggered when an option is selected. function(value)
   */
  onSelect: PropTypes.func,
  /**
   * Callback function invoked for each option on search change. function(searchValue, option)
   */
  optionFilter: PropTypes.func,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * Placeholder prop has been deprecated and will be Removed on next major version release, Visual label should be used instead for better Accessibility experience.
   */
  placeholder: PropTypes.string,
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * The selected value. Can be a string, number, or array of strings/numbers.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * @private
   * The id of the input field.
   */
  inputId: PropTypes.string,
};

const defaultProps = {
  allowClear: false,
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isIncomplete: false,
  isInvalid: false,
  isTouchAccessible: false,
  noResultContent: undefined,
  onChange: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  required: false,
  value: undefined,
  inputId: undefined,
};

class Combobox extends React.Component {
  constructor(props) {
    super(props);

    const { value, defaultValue } = props;

    this.state = {
      tags: [],
      value: SelectUtil.defaultValue({ defaultValue, value }),
    };

    this.display = this.display.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleResetComboboxValue = this.handleResetComboboxValue.bind(this);
  }

  /**
   * Communicates changes to the value.
   * @param {array|number|string} value - The value resulting from a change.
   */
  handleChange(value) {
    if (this.props.value === undefined) {
      this.setState({ value });
    }

    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  /**
   * Communicates the removal of a value from the selected options.
   * @param {number|string} value - The value to be removed.
   */
  handleDeselect(value) {
    this.handleChange(SelectUtil.deselect(this.props, this.state, value));

    if (this.props.onDeselect) {
      this.props.onDeselect(value);
    }
  }

  /**
   * Communicates the selection of a value.
   * @param {number|string} value - The value of the selected option.
   * @param {ReactNode} option - The selected option.
   */
  handleSelect(value, option) {
    this.handleChange(SelectUtil.select(this.props, this.state, value));

    // Add new tags for uncontrolled components.
    if (this.props.value === undefined && !SelectUtil.findByValue(this.props, this.state, value)) {
      this.setState(prevState => ({ tags: [...prevState.tags, <Option key={value} display={value} value={value} />] }));
    }

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  /**
   * Added to reset value field for combobox
   */
  handleResetComboboxValue() {
    this.setState({ value: '' });
  }

  /**
   * Returns the appropriate variant display
   */
  display() {
    const selectValue = SelectUtil.value(this.props, this.state);

    return SelectUtil.valueDisplay(this.props, selectValue);
  }

  render() {
    const {
      allowClear, children, defaultValue, onChange, placeholder, required, value, intl, inputId, ...otherProps
    } = this.props;

    const defaultPlaceholder = intl.formatMessage({ id: 'Terra.form.select.defaultComboboxDisplay' });
    const selectPlaceholder = placeholder === undefined ? defaultPlaceholder : placeholder;
    let clearOptionDisplay;

    if (allowClear) {
      if (selectPlaceholder.length === 0) {
        clearOptionDisplay = defaultPlaceholder;
      } else {
        clearOptionDisplay = selectPlaceholder;
      }
    }

    return (
      <Frame
        {...otherProps}
        data-terra-select
        value={SelectUtil.value(this.props, this.state)}
        display={this.display()}
        onDeselect={this.handleDeselect}
        onSelect={this.handleSelect}
        placeholder={selectPlaceholder}
        required={required}
        totalOptions={SelectUtil.getTotalNumberOfOptions(children)}
        clearOptionDisplay={clearOptionDisplay}
        inputId={inputId}
        resetComboboxValue={this.handleResetComboboxValue}
        allowClear={allowClear}
      >
        {this.state.tags}
        {children}
      </Frame>
    );
  }
}

Combobox.Option = Option;
Combobox.OptGroup = OptGroup;
Combobox.propTypes = propTypes;
Combobox.defaultProps = defaultProps;
Combobox.isSelect = true;

export default injectIntl(Combobox);
