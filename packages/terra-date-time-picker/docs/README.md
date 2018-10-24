# Terra Date Time Picker

The DateTimePicker component composes the [DatePicker][7] component for selecting date and the [TimeInput][8] component for entering time. DateTimePicker supports the Spring and Fall daylight saving time changes in the following behaviors:

Spring: If you enter a date and time that falls within the missing hour during the Spring time change, the time will automatically be adjusted to the next relevant hour when the component loses focus. In the central time zone, the missing hour occurs between 2:00 and 2:59. For example, if the entered time is 2:15, the component will automatically adjust the time to the next hour at 3:15.

Fall: If you enter a date and time that falls within the ambiguous hour during the Fall time change, the component will display a dialog to require you to select daylight or standard time. After a selection is made a button will be displayed with a label showing the selected option.


## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-date-time-picker`

## Usage

```jsx
import React from 'react';
import Base from 'terra-base';
import DateTimePicker from 'terra-date-time-picker';

//Renders a date picker
<Base locale='en'>
  <DateTimePicker
    name="admission-date"
    value={'2017-08-15T10:30'}
  />
</Base>
```

## Implementation Notes:
DateTimePicker must be composed inside the Base component with locale in order for it to load the correct date format and translation strings.

The [Modal][4] component by default will trap focus. In order to interact with the date picker when rendered inside a modal, the date picker must request focus from the modal. The [App Delegate][5] in the [Modal Manager][3] component provides support for requesting and releasing focus from the modal. Therefore, the [Modal Manager][3] component must be used when rendering the date picker in a modal. When composing the date picker in the [Modal Manager][3], pass in the requestFocus and releaseFocus functions in the [App Delegate][5] to the requestFocus and releaseFocus props in the date picker. The [Modal Manager][3] will facilitate requesting and releasing focus when the picker opens and closes. Take a look at this example for composing a [modal manager][9] with a date picker as the [content][10].

[1]: https://github.com/Hacker0x01/react-datepicker
[2]: http://momentjs.com/docs/
[3]: https://github.com/cerner/terra-core/tree/master/packages/terra-modal-manager/docs
[4]: https://github.com/cerner/terra-core/tree/master/packages/terra-modal/docs
[5]: https://github.com/cerner/terra-core/tree/master/packages/terra-app-delegate/docs
[6]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs
[7]: https://github.com/cerner/terra-core/tree/master/packages/terra-date-picker/docs
[8]: https://github.com/cerner/terra-core/tree/master/packages/terra-time-input/docs
[9]: https://github.com/cerner/terra-core/blob/master/packages/terra-date-time-picker/tests/nightwatch/components/DateTimePickerInsideModal.jsx
[10]: https://github.com/cerner/terra-core/blob/master/packages/terra-date-time-picker/tests/nightwatch/components/DateTimePickerModalContainer.jsx

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
