import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Frame from './single/Frame';
import OptGroup from './shared/_OptGroup';
import Option from './shared/_Option';
import SelectUtil from './shared/_SelectUtil';
import MenuUtil from './shared/_MenuUtil';

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
  intl: intlShape.isRequired,
  /**
   * Whether the select input should use the filter style display, forcing a value to always be selected.
   * This also removes the placeholder and removes the ability for user to clear the value, returning the select to browser-native behavior.
   */
  isFilterStyle: PropTypes.bool,
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
   * Callback function triggered when an option is selected. function(value)
   */
  onSelect: PropTypes.func,
  /**
   * Placeholder text.
   * [Deprecated] Placeholder text.
   *
   * This prop has been deprecated to provide for better accessibility and a common and consistent placeholder pattern.
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
};

const defaultProps = {
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isFilterStyle: false,
  isIncomplete: false,
  isInvalid: false,
  noResultContent: undefined,
  onChange: undefined,
  onDeselect: undefined,
  onSelect: undefined,
  required: false,
  value: undefined,
};

class SingleSelect extends React.Component {
  constructor(props) {
    super(props);

    const { defaultValue, value } = props;

    this.state = {
      value: SelectUtil.defaultValue({ defaultValue, value }),
    };

    this.display = this.display.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  /**
   * Returns the appropriate variant display
   */
  display() {
    const selectValue = SelectUtil.value(this.props, this.state);

    return SelectUtil.valueDisplay(this.props, selectValue);
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

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  render() {
    const {
      children,
      defaultValue,
      onChange,
      required,
      value,
      intl,
      isFilterStyle,
      ...otherProps
    } = this.props;

    let selectValue;
    if (!isFilterStyle || (this.state.value && MenuUtil.findByValue(children, this.state.value)) || (value && MenuUtil.findByValue(children, value))) {
      selectValue = SelectUtil.value(this.props, this.state);
    } else if (children) {
      selectValue = MenuUtil.findFirst(children);
    }

    return (
      <Frame
        {...otherProps}
        data-terra-select
        value={selectValue}
        display={this.display()}
        onDeselect={this.handleDeselect}
        onSelect={this.handleSelect}
        required={required}
        totalOptions={SelectUtil.getTotalNumberOfOptions(children)}
        clearOptionDisplay={!isFilterStyle ? intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' }) : undefined}
        isFilterStyle={isFilterStyle}
      >
        {children}
      </Frame>
    );
  }
}

SingleSelect.Option = Option;
SingleSelect.OptGroup = OptGroup;
SingleSelect.propTypes = propTypes;
SingleSelect.defaultProps = defaultProps;
SingleSelect.isSelect = true;

export default injectIntl(SingleSelect);
