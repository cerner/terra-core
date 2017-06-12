# Terra Alert - More Information

## Layout

An Alert consists of the following elements:
- Status bar: a colored border on the left of the banner where the color of the border corresponds to the type of the alert. It is one of the elements that helps the user to understand the severity of the notification.  For a custom alert, you can provide the color to be used for the status bar.
- Icon: for each standard notification type, a specific icon is rendered to the left of the banner. The icon is another element that helps the user understand the severity and meaning of the notification.  For a custom alert, you can provide your own icon to be rendered in the banner.
- Title: a brief word or phrase that summarizes the notification.  It is rendered in a bold font to gain the attention of the user.  For the standard notification types, if you don't provide a title, then pre-defined text is used.  For a custom alert, the title is optional.
- Message content: the notification message which can consist of text or HTML.
- Action area: an optional area to the right of the banner that contains actionable elements (typically buttons) allowing the user to respond to the alert notiifcation.  This area can consist of the following:
  - Dismiss button: the Alert component can be configured to be dismissible.  If it is to be dismissible, a Dismiss button is rendered in the action area.
  - Action element: you can configure the Alert component to include additional actionable element(s) in the action area.  typically you would include a button element.  To be consistent with the Dismiss button if it is used, you should use the Terra Button component.

This image shows the layout of the elements of the Alert component.
![Image](images/alertLayout.png?raw=true)

## Props


## Examples

### Imports
When importing the Alert component, it includes the Types object which contains a series of string constants that can be used for setting the 'type' prop for the component as shown in the examples below.
```jsx
import React from 'react';
import Alert from 'terra-alert';
```

### Examples
Basic Alert component of type 'alert' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Types.ALERT} >This is an alert</Alert>
```
![Image](images/basicAlert.png?raw=true)

Basic Alert component of type 'error' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Types.ERROR} >This is an error</Alert>
```
![Image](images/basicError.png?raw=true)

Basic Alert component of type 'warning' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Types.WARNING} >This is a warning</Alert>
```
![Image](images/basicWarning.png?raw=true)

Basic Alert component of type 'required' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Types.REQUIRED} >This is a required warning</Alert>
```
![Image](images/basicRequired.png?raw=true)
