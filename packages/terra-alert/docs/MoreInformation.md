# Terra Alert - More Information

## Layout

An Alert consists of the following elements:
- Status bar: a colored border on the left of the banner where the color of the border corresponds to the type of the alert. It is one of the elements that helps the user to understand the severity of the notification.  For a custom alert, you can provide the color to be used for the status bar.
- Icon: for each standard notification type, a specific icon is rendered to the left of the banner. The icon is another element that helps the user understand the severity and meaning of the notification.  For a custom alert, you can provide your own icon to be rendered in the banner.
- Title: a brief word or phrase that summarizes the notification.  It is rendered in a bold font to gain the attention of the user.  For the standard notification types, if you don't provide a title, then pre-defined text is used.  For a custom alert, the title is optional.
- Message content: the notification message which can consist of text or HTML.
- Action area: an optional area to the right of the banner that contains actionable elements (typically buttons) allowing the user to respond to the alert notification.  This area can consist of the following:
  - Dismiss button: the Alert component can be configured to be dismissible.  If it is to be dismissible, a Dismiss button is rendered in the action area.
  - Action element: you can configure the Alert component to include additional actionable element(s) in the action area.  typically you would include a button element.  To be consistent with the Dismiss button if it is used, you should use the Terra Button component.

This image shows the layout of the elements of the Alert component.
![Image](images/alertLayout.png?raw=true)

## Props
|Prop Name |Type  |Is Required |Default Value |Description |
|----------|------|------------|--------------|------------|
|action |element  |optional  |null  |An action element to be added to the action section of the alert.|
|children  |node or string  |optional  |''  |Child Nodes providing the message content for the alert. Can contain text and HTML.|
|customIcon  |element  |optional  |null  |The icon to be used for an alert of type custom. This will not be used for any other alert types.|
|customStatusColor |string  |optional  |''  |The status bar color to be used for an alert of type custom.|
|onDismiss |function  |optional  |null  |Callback function triggered when Dismiss button is clicked. The presence of this prop will cause the Dismiss button to be included on the alert.|
|title |string  |optional  |''  |The title for the alert which will be bolded.|
|type  |string  |optional  |'alert' |The type of alert to be rendered. One of Alert.Opts.Types.ALERT, Alert.Opts.Types.ERROR, Alert.Opts.Types.WARNING, Alert.Opts.Types.ADVISORY, Alert.Opts.Types.INFO, Alert.Opts.Types.SUCCESS, Alert.Opts.Types.CUSTOM. Use the Alert.Opts.Types attribute of the Alert component for access to these type strings.|

## Examples

### Imports
When importing the Alert component, it includes the Types object which contains a series of string constants that can be used for setting the 'type' prop for the component as shown in the examples below.
```jsx
import React from 'react';
import Alert from 'terra-alert';
```

### Examples
__________
Basic Alert component of type 'alert' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Opts.Types.ALERT} >This is an alert</Alert>
```
or
```jsx
<Alert>This is an alert</Alert>
```
![Image](images/basicAlert.png?raw=true)
__________
Basic Alert component of type 'error' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Opts.Types.ERROR} >This is an error</Alert>
```
![Image](images/basicError.png?raw=true)
__________
Basic Alert component of type 'warning' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Opts.Types.WARNING} >This is a warning</Alert>
```
![Image](images/basicWarning.png?raw=true)
__________
Basic Alert component of type 'advisory' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Opts.Types.ADVISORY} >This is an advisory alert</Alert>
```
![Image](images/basicAdvisory.png?raw=true)
__________
Basic Alert component of type 'info' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Opts.Types.INFO} >This is an information alert</Alert>
```
![Image](images/basicInformation.png?raw=true)
__________
Basic Alert component of type 'success' using the default title and plain text for the message content.
```jsx
<Alert type={Alert.Opts.Types.SUCCESS} >This is a success alert</Alert>
```
![Image](images/basicSuccess.png?raw=true)
__________
Alert of type 'custom' with custom title, status color, and icon, and includes HTML in message content.
```jsx
<Alert type={Alert.Opts.Types.CUSTOM} 
       title="Help!" 
       customStatusColor="orange" 
       customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >
  <span>This is a <u>custom</u> alert</span>
</Alert>
```
![Image](images/customAlert.png?raw=true)
__________
Alert of type 'info' with custom title and long HTML content with show more/less toggle (using Terra Toggle).
```jsx
<Alert type={Alert.Opts.Types.INFO} title="Gettysburg Address:" >
  <span>
    Four score and seven years ago our fathers brought forth on this continent, 
    a new nation, conceived in Liberty, and dedicated to the proposition that 
    all men are created equal.
    <Toggle isOpen={!this.state.allTextShown} isAnimated>
      <Button onClick={this.handleShowMore} text="Show More" variant="link" size="tiny" />
    </Toggle>
    <Toggle isOpen={this.state.allTextShown} isAnimated>
        Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.
      <br /><br />
        But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
      <br /><br />
      <Button onClick={this.handleShowLess} text="Show Less" variant="link" size="tiny" />
    </Toggle>
    </span>
  </span>
</Alert>
```
![Image](images/longText1.png?raw=true)
![Image](images/longText2.png?raw=true)
__________
Alert component of type 'warning' with a custom Action button.
```jsx
<Alert type={Alert.Opts.Types.WARNING} 
       action={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} >
  This is a warning. It is configured with a custom Action button.
</Alert>
```
![Image](images/actionButton.png?raw=true)
__________
Alert component of type 'success' that is dismissible.
```jsx
<Alert type={Alert.Opts.Types.SUCCESS} onDismiss={this.handleDismiss} >
  This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.
</Alert>
```
![Image](images/dismissible.png?raw=true)
__________
Alert of type 'custom' with no icon or title that is dismissible and has an action button
```jsx
<Alert type={Alert.Opts.Types.CUSTOM} 
       onDismiss={this.handleDismiss} 
       customStatusColor="orange" 
       action={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >
  This is a custom alert with no icon or title. It is configured to be dismissible 
  and with a custom action button. Click on the Dismiss button to dismiss the alert.
</Alert>
```
![Image](images/actionAndDismissible.png?raw=true)
__________
