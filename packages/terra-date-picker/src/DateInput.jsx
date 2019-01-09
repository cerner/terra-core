import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Input from 'terra-form-input';
import DateUtil from './DateUtil';
import styles from './DatePicker.module.scss';

const Icon = <IconCalendar />;

const propTypes = {
  /**
   * Custom input attributes to apply to the date input.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: PropTypes.object,
  /**
   * Name of the date input.
   */
  name: PropTypes.string,
  /**
   * A callback function to execute when a valid date is selected or entered.
   */
  onChange: PropTypes.func,
  /**
   * The onInputClick callback function from react-datepicker to show the picker when clicked.
   */
  onClick: PropTypes.func,
  /**
   * The onInputKeyDown callback function from react-datepicker to handle keyboard navigation.
   */
  onKeyDown: PropTypes.func,
  /**
   * The placeholder text to display in the date input.
   */
  placeholder: PropTypes.string,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
  /**
   * @private Internal prop for showing date picker.
   */
  shouldShowPicker: PropTypes.bool,
  /**
   * The selected or entered date value to display in the date input.
   */
  value: PropTypes.string,
};

const defaultProps = {
  inputAttributes: undefined,
  name: undefined,
  onChange: undefined,
  onClick: undefined,
  onKeyDown: undefined,
  placeholder: undefined,
  releaseFocus: undefined,
  requestFocus: undefined,
  value: undefined,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class DatePickerInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.shouldShowPicker && !prevProps.shouldShowPicker && this.props.onClick) {
      this.props.onClick();
    }
  }

  handleOnButtonClick(event) {
    // The picker is about to display so request focus from the containing component (e.g. modal) if it has the focus trapped.
    if (this.props.requestFocus) {
      this.props.requestFocus();
    }

    const attributes = Object.assign({}, this.props.inputAttributes);

    if (!attributes.readOnly && this.onCalendarButtonClick && this.props.onClick) {
      this.onCalendarButtonClick(event, this.props.onClick);
    }
  }

  handleOnKeyDown(event) {
    // The picker will be dismissed if one of these keys is pressed and the focus will be released so release the focus to the containing component.
    if (this.props.releaseFocus && (event.key === 'Enter' || event.key === 'Escape' || event.key === 'Tab')) {
      this.props.releaseFocus();

      if (event.key === 'Tab') {
        event.preventDefault();
      }
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  render() {
    const {
      inputAttributes,
      name,
      onChange,
      onClick,
      onKeyDown,
      placeholder,
      releaseFocus,
      requestFocus,
      value,
      ...customProps
    } = this.props;

    this.onCalendarButtonClick = customProps.onCalendarButtonClick;
    this.onInputFocus = customProps.onInputFocus;
    this.shouldShowPicker = customProps.shouldShowPicker;

    delete customProps.onCalendarButtonClick;
    delete customProps.onInputFocus;
    delete customProps.shouldShowPicker;

    const additionalInputProps = Object.assign({}, customProps, inputAttributes);

    // react-datepicker by default will show the picker when the input has focus.
    // Since we want to show the picker only when the calendar button is clicked, we need to delete the onFocus handle that is passed in by react-datepicker.
    delete additionalInputProps.onFocus;

    const dateValue = DateUtil.convertToISO8601(value, DateUtil.getFormatByLocale(this.context.intl.locale));
    const buttonText = this.context.intl.formatMessage({ id: 'Terra.datePicker.openCalendar' });

    return (
      <div className={styles['custom-input']}>
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          data-terra-date-input-hidden
          type="hidden"
          name={name}
          value={dateValue}
        />
        <Input
          {...additionalInputProps}
          className={styles.input}
          type="text"
          name={'terra-date-'.concat(name)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={this.onInputFocus}
        />
        <Button
          className={styles.button}
          text={buttonText}
          onClick={this.handleOnButtonClick}
          onKeyDown={this.handleOnKeyDown}
          icon={Icon}
          isIconOnly
          isCompact
          isDisabled={additionalInputProps.disabled}
        />
      </div>
    );
  }
}

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;
DatePickerInput.contextTypes = contextTypes;

export default DatePickerInput;
