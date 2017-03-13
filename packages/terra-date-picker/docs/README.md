# Terra Date Picker

The terra-date-picker component provides users a way to enter or select a date from the date picker.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-date-picker` 
  - `yarn add terra-date-picker` 

## Usage

```jsx
<DatePicker
  minDate={moment()}
  maxDate={moment().add(30, 'days')}
  todayButton="Today"
  showMonthDropdown={false}
  showYearDropdown={false}
  excludeDates={moment().add(1, 'days')}
  highlightDates={moment().add(2, 'days')}
  filterDate={isWeekday}
/>

<DatePicker
  customInput={<CustomInputWithButton />}
/>

<DateRange
  startDate={moment().add(1, 'days')}
  endDate={moment().add(7, 'days')}
/>

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

const CustomInputWithButton = (props) => {
  const customInput =
  (<div
    className="terra-DatePicker-custom"
  >
    <input
      className="terra-DatePicker-custom-input"
      value={props.value}
      onChange={props.onChange}
      type="text"
    />
    <button
      className="terra-DatePicker-custom-button react-datepicker-ignore-onclickoutside"
      onClick={props.onClick}
    />
  </div>);

  return customInput;
};

CustomInputWithButton.propTypes = {
  onClick: React.PropTypes.func,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};
```
