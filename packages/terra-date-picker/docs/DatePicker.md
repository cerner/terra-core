| Prop Name | Type | Is Required | Default Value | Description |
|-|-|-|-|-|
| endDate| `string`| optional| | An ISO 8601 string representation of the end date for a date range.|
| excludeDates| `arrayOf[object Object]`| optional| | An array of ISO 8601 string representation of the dates to disable in the picker.|
| filterDate| `func`| optional| | A function that gets called for each date in the picker to evaluate which date should be disabled. A return value of true will be enabled and false will be disabled.|
| includeDates| `arrayOf[object Object]`| optional| | An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.|
| inputAttributes| `object`| optional| | Custom input attributes to apply to the date input.|
| isEndDateRange| `bool`| optional| `false`| Indicates the end date picker of a date range.|
| isStartDateRange| `bool`| optional| `false`| Indicates the start date picker of a date range.|
| maxDate| `string`| optional| | An ISO 8601 string representation of the maximum date that can be selected.|
| minDate| `string`| optional| | An ISO 8601 string representation of the minimum date that can be selected.|
| onChange| `func`| optional| | A callback function to execute when a valid date is selected or entered.|
| selectedDate| `string`| optional| | An ISO 8601 string representation of the initial default date to show in the date input. This prop name is derived from react-datepicker but is analogous to defaultValue for a form input field.|
| startDate| `string`| optional| | An ISO 8601 string representation of the start date for a date range.|