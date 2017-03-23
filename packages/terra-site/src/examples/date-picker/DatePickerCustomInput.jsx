import React, { PropTypes } from 'react';
import DatePicker from 'terra-date-picker';

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
        <button
          className="terra-DatePicker-custom-button react-datepicker-ignore-onclickoutside"
          onClick={this.props.onClick}
          onKeyDown={this.props.onKeyDown}
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
