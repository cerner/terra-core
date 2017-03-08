## React Props

| Prop              | Type    | Is Required | Default | Description                                                                    |
|-------------------|---------|-------------|---------|--------------------------------------------------------------------------------|
| customInput       | node    | optional    | null    | A customized date input to use for entering and displaying the date.           |
| endDate           | object  | optional    | null    | A moment object to use as the default end date for a date range.               |
| excludeDates      | array   | optional    | null    | An array of moment objects that represent the dates to disable in the picker.  |
| filterDate        | func    | optional    | null    | A function that gets called for each date in the picker to evaluate which date
                                                        should be disabled. A return value of true will be enabled and false will be disabled.                                                                      |
| highlightDates    | array   | optional    | null    | An array of moment objects that represent the dates to highlight in the picker.|
| includeDates      | array   | optional    | null    | An array of moment objects that represent the dates to enable in the picker. 
                                                        All Other dates will be disabled.                                              |
| maxDate           | object  | optional    | null    | A moment object to represents the maximum date that can be selected.           |
| minDate           | object  | optional    | null    | A moment object to represents the minimum date that can be selected.           |
| monthsShown       | integer | optional    | 1       | The number of adjacent months to display in the picker.                        |
| openToDate        | object  | optional    | null    | When no date is selected the date picker will be opened to this moment object
                                                        instead of defaulting to show the current month.                               |
| isEndDateRange    | bool    | optional    | false   | Indicates the end date picker of a date range.                                 |
| isStartDateRange  | bool    | optional    | false   | Indicates the start date picker of a date range.                               |
| showMonthDropdown | bool    | optional    | true    | Indicates to show a month dropdown for selecting other months of the year.     |
| showYearDropdown  | bool    | optional    | true    | Indicates to show a year dropdown for selecting a different year.              |
| startDate         | object  | optional    | null    | The default start date for a date range.                                       |
| todayButton       | string  | optional    | Today   | Indicates to show the today button select selecting today's date.              |
| hideTodayButton   | bool    | optional    | false   | Indicates to hide the today button.                                            |
| withPortal        | bool    | optional    | false   | Indicates to display the picker in a full screen overlay.                      |
| onChange          | func    | optional    | null    | A callback function to execute when a valid date is selected or entered.       |
