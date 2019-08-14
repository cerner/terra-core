import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Frame from './tag/Frame';
import Option from './shared/_Option';
import OptGroup from './shared/_OptGroup';
import Tag from './shared/_Tag';
import SelectUtil from './shared/_SelectUtil';
import flatten from './shared/flatten';

const propTypes = {
  /**
   * The dropdown menu options.
   */
  children: PropTypes.node,
  /**
   * The default selected value.
   */
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  /**
   * Whether the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Additional attributes to spread onto the dropdownq. ( Style, ClassNames, etc.. )
   */
  // eslint-disable-next-line react/forbid-prop-types
  dropdownAttrs: PropTypes.object,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
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
   * @private The maximum number of options that can be selected. A value less than 2 will be ignored.
   */
  maxSelectionCount: PropTypes.number,
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
   * The selected value.
   */
  value: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isInvalid: false,
  maxSelectionCount: undefined,
  onChange: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  required: false,
  value: undefined,
};


class TagSelect extends React.Component {
  static defaultValue({ value, defaultValue }) {
    if (value !== undefined) {
      return null;
    }

    return flatten(defaultValue);
  }

  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      value: TagSelect.defaultValue(props),
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

    return selectValue.map(tag => (
      <Tag value={tag} key={tag} onDeselect={this.handleDeselect}>
        {SelectUtil.valueDisplay(this.props, tag)}
      </Tag>
    ));
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

    // Add new tags for uncontrolled components.
    if (this.props.value === undefined && !SelectUtil.findByValue(this.props, this.state, value)) {
      this.setState(prevState => ({ tags: [...prevState.tags, <Option key={value} display={value} value={value} />] }));
    }

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  render() {
    const {
      children, defaultValue, onChange, placeholder, required, value, intl, ...otherProps
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
      >
        {this.state.tags}
        {children}
      </Frame>
    );
  }
}

TagSelect.Option = Option;
TagSelect.OptGroup = OptGroup;
TagSelect.propTypes = propTypes;
TagSelect.defaultProps = defaultProps;
TagSelect.isSelect = true;

export default injectIntl(TagSelect);
