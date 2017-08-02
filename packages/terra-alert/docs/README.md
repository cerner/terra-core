# Terra Alert

The Terra Alert component is a notification banner that can be rendered in your application when there is information that you want to bring to the user's attention.  The Alert component supports a number of built-in notification types that render with pre-defined colors and icons that help the user understand the severity and meaning of the notification. A custom notification type is also supported that allows your application to customize an alert that may not fit into the pre-defined types.

For more details, see [More Information](MoreInformation.md).


## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-alert`
  - `yarn add terra-alert`

## Usage

```jsx
import React from 'react';
import Alert from 'terra-alert';

<Alert type={Alert.Opts.Types.ALERT} >
  This is an alert with the default title.
</Alert>

<Alert type={Alert.Opts.Types.SUCCESS} 
       title="Success!" 
       onDismiss={this.handleDismiss} >
  This is a success alert with a custom title. It is configured to be dismissible. 
</Alert>

<Alert type={Alert.Opts.Types.WARNING} 
       alertAction={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >
  This is a warning with the default title. A Terra Button component is passed as the alert action.
</Alert>

<Alert type={Alert.Opts.Types.CUSTOM} 
       title="Help!" 
       customStatusColor="orange" 
       customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >
  <span>This is a <u>custom</u> alert with a custom title and icon and the content is HTML instead of text.</span>
</Alert>
```

## Implementation Notes:
The Alert component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings. These translation strings are used for the default alert title when the application does not specify a title for the alert.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
