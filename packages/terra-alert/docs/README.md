# Terra Alert

The Terra Alert component is a notification banner that can be rendered in your application when there is information that you want to bring to the user's attention.  The Alert component supports a number of built-in notification types render with pre-defined colors and icons that help the user understand the severity and meaning of the notification. A custom notification type is also supported that allows your application to customize an alert that may not fit into the pre-defined types.

An Alert consists of the following elements:
- Status bar: a colored border on the left of the banner where the color of the border corresponds to the type of the alert. It is one of the elements that helps the user to understand the severity of the notification.  For a custom alert, you can provide the color to be used for the status bar.
- Icon: for each standard notification type, a specific icon is rendered to the left of the banner. The icon is another element that helps the user understand the severity and meaning of the notification.  For a custom alert, you can provide your own icon to be rendered in the banner.
- Title: a brief word or phrase that summarizes the notification.  It is rendered in a bold font to gain the attention of the user.  For the standard notification types, if you don't provide a title, then pre-defined text is used.  For a custom alert, the title is optional.
- Message content: the notification message which can consist of text or HTML.
- Action area: an optional area to the right of the banner that contains actionable elements (typically buttons) allowing the user to respond to the alert notiifcation.  This area can consist of the following:
-- Dismiss button: the Alert component can be configured to be dismissible.  If it is to be dismissible, a Dismiss button is rendered in the action area.
-- Action element: you can configure the Alert component to include additional actionable element(s) in the action area.  typically you would include a button element.  To be consistent with the Dismiss button if it is used, you should use the Terra Button component.

This image shows the layout of the elements of the Alert component.
![Image](images/alertLayout.png?raw=true)


## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-alert`

## Usage

```jsx
import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

<Alert {props...} />
```
