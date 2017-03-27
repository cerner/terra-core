import React, { PropTypes } from 'react';
import Button from 'terra-button';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';

const Icon = <IconCalendar />;

// eslint-disable-next-line react/prefer-stateless-function
class DatePickerInput extends React.Component {
  render() {
    return (
      (<div className="terra-DatePicker-customInput">
        <input
          className="terra-DatePicker-input"
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
        <Button
          className="terra-DatePicker-button"
          onClick={this.props.onClick}
          onKeyDown={this.props.onKeyDown}
          icon={Icon}
        />
      </div>)
    );
  }
}

DatePickerInput.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default DatePickerInput;
