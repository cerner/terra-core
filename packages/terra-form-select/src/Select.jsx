import React from 'react';
import PropTypes from 'prop-types';
import { Variants } from './_constants';
import DropdownMenu from './_Menu';
import Frame from './_Frame';
import Option from './_Option';
import OptGroup from './_OptGroup';
import Tag from './_Tag';
import Util from './_SelectUtil';

const propTypes = {
  /**
   * The dropdown menu options.
   */
  children: PropTypes.node,
  /**
   * The default selected value.
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
   * Whether the select is in an invalid state.
   */
  isInvalid: PropTypes.bool,
  /**
   * The max height of the dropdown.
   */
  maxHeight: PropTypes.number,
  /**
   * @private The maximum number of options that can be selected. A value less than 2 will be ignored.
   * Only applicable to variants allowing multiple selections (e.g.; `multiple`; `tag`).
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
   * The selected value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * The behavior of the select. One of `default`, `combobox`, `multiple`, `tag`, or `search`.
   */
  variant: PropTypes.oneOf([
    Variants.COMBOBOX,
    Variants.DEFAULT,
    Variants.MULTIPLE,
    Variants.SEARCH,
    Variants.TAG,
  ]),
};

const defaultProps = {
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  isInvalid: false,
  maxSelectionCount: undefined,
  noResultContent: undefined,
  onChange: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  value: undefined,
  variant: 'default',
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      value: Util.defaultValue(props),
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
    const selectValue = Util.value(this.props, this.state);

    switch (this.props.variant) {
      case Variants.TAG:
      case Variants.MULTIPLE:
        return selectValue.map(tag => (
          <Tag value={tag} key={tag} onDeselect={this.handleDeselect}>
            {Util.valueDisplay(this.props, tag)}
          </Tag>
        ));
      default:
        return Util.valueDisplay(this.props, selectValue);
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
    this.handleChange(Util.deselect(this.props, this.state, value));

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
    this.handleChange(Util.select(this.props, this.state, value));

    // Add new tags for uncontrolled components.
    if (this.props.value === undefined && !Util.findByValue(this.props, this.state, value)) {
      this.setState(prevState => ({ tags: [...prevState.tags, <Option key={value} display={value} value={value} />] }));
    }

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  render() {
    const { intl } = this.context;
    const {
      children, defaultValue, onChange, placeholder, value, ...otherProps
    } = this.props;

    const defaultPlaceholder = intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });
    const selectPlaceholder = placeholder === undefined ? defaultPlaceholder : placeholder;

    return (
      <Frame
        {...otherProps}
        value={Util.value(this.props, this.state)}
        display={this.display()}
        onDeselect={this.handleDeselect}
        onSelect={this.handleSelect}
        placeholder={selectPlaceholder}
        dropdown={dropdownProps => (
          <DropdownMenu intl={intl} {...dropdownProps}>
            {this.state.tags}
            {children}
          </DropdownMenu>
        )}
      />
    );
  }
}

Select.Option = Option;
Select.OptGroup = OptGroup;
Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.contextTypes = contextTypes;

export default Select;
