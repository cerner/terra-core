import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Frame from './multiple/Frame';
import Option from './shared/_Option';
import OptGroup from './shared/_OptGroup';
import Tag from './shared/_Tag';
import SelectUtil from './shared/_SelectUtil';

const propTypes = {
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
   * @private The maximum number of options that can be selected. A value less than 2 will be ignored.
   */
  maxSelectionCount: PropTypes.number,
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
   * Placeholder text.
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
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isIncomplete: false,
  isInvalid: false,
  isTouchAccessible: false,
  maxSelectionCount: undefined,
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

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    const { value, defaultValue } = props;

    this.state = {
      value: SelectUtil.defaultValue({ defaultValue, value, multiple: true }),
      isInputFocused: false,
    };
    this.inputRef = null;
    this.display = this.display.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputRef = this.handleInputRef.bind(this);
  }

  componentWillUnmount() {
    if (this.inputRef) {
      this.inputRef.removeEventListener('focus', this.handleFocus);
      this.inputRef.removeEventListener('blur', this.handleBlur);
    }
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
    const newValue = [...SelectUtil.value(this.props, this.state), value];
    this.handleChange(newValue);

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  handleFocus() { this.setState({ isInputFocused: true }); }

  handleBlur() { this.setState({ isInputFocused: false }); }

  /**
   * Receives the reference to the input element from the Frame component.
   * Attaches event listeners to handle focus and blur events, updating the state accordingly.
   * @param {HTMLElement} ref - Reference to the input element.
   */
  handleInputRef(ref) {
    // Receive the input reference from the Frame
    this.inputRef = ref;

    if (this.inputRef) {
      this.inputRef.addEventListener('focus', this.handleFocus);
      this.inputRef.addEventListener('blur', this.handleBlur);
    }
  }

  /**
   * Returns the appropriate variant display
   */
  display() {
    const selectValue = SelectUtil.value(this.props, this.state);

    return selectValue.map(tag => (
      <Tag
        value={tag}
        key={tag}
        onDeselect={this.handleDeselect}
        disabled={this.props.disabled}
        isInputFocused={this.state.isInputFocused}
        inputRef={this.inputRef}
      >
        {SelectUtil.valueDisplay(this.props, tag)}
      </Tag>
    ));
  }

  render() {
    const {
      children, defaultValue, onChange, placeholder, required, value, intl, inputId, ...otherProps
    } = this.props;

    const defaultPlaceholder = intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });
    const selectPlaceholder = placeholder === undefined ? defaultPlaceholder : placeholder;

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
        inputId={inputId}
        getInputRef={this.handleInputRef}
      >
        {children}
      </Frame>
    );
  }
}

MultiSelect.Option = Option;
MultiSelect.OptGroup = OptGroup;
MultiSelect.propTypes = propTypes;
MultiSelect.defaultProps = defaultProps;
MultiSelect.isSelect = true;

export default injectIntl(MultiSelect);
