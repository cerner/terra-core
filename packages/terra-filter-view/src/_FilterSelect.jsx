import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenu from './_FilterMenu';
import Frame from './_FilterFrame';
import Option from './_FilterOption';
import OptGroup from './_FilterOptGroup';
import Util from './_FilterSelectUtil';

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
  dropdownAttrs: PropTypes.shape({}),
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * Callback function triggered when the value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Callback function triggered when an option is deselected. function(value)
   */
  onDeselect: PropTypes.func,
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
   * How long the component should wait (in milliseconds) after input before performing an automatic search.
   */
  searchDelay: PropTypes.number,
  /**
   * The selected value.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
};

const defaultProps = {
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  dropdownAttrs: undefined,
  noResultContent: undefined,
  onChange: undefined,
  onDeselect: undefined,
  onSearch: undefined,
  onSelect: undefined,
  optionFilter: undefined,
  placeholder: undefined,
  value: undefined,
};

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Util.defaultValue(props),
    };

    this.display = this.display.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  /**
   * Returns the appropriate display
   */
  display() {
    const selectValue = Util.value(this.props, this.state);
    return Util.valueDisplay(this.props, selectValue);
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

    if (this.props.onSelect) {
      this.props.onSelect(value, option);
    }
  }

  render() {
    const {
      children, defaultValue, onChange, value, ...otherProps
    } = this.props;

    return (
      <Frame
        {...otherProps}
        value={Util.value(this.props, this.state)}
        display={this.display()}
        onDeselect={this.handleDeselect}
        onSelect={this.handleSelect}
        dropdown={dropdownProps => (
          <DropdownMenu {...dropdownProps}>
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

export default Select;
