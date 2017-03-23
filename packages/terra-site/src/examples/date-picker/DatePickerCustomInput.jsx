import React, { PropTypes } from 'react';
import DatePicker from 'terra-date-picker';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';

const Icon = <IconCalendar />;

// eslint-disable-next-line react/prefer-stateless-function
class CustomInputWithButton extends React.PureComponent {
  render() {
    return (
      (<div className="terra-DatePicker-custom">
        <input
          className="terra-DatePicker-custom-input react-datepicker-ignore-onclickoutside"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          type="text"
        />
        <Button
          className="terra-DatePicker-custom-button react-datepicker-ignore-onclickoutside"
          onClick={this.props.onClick}
          onKeyDown={this.props.onKeyDown}
          icon={Icon}
        />
      </div>)
    );
  }
}

CustomInputWithButton.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

const DatePickerCustomInput = () => (
  <div>
    <DatePicker
      customInput={<CustomInputWithButton />}
    />
  </div>
);

export default DatePickerCustomInput;
