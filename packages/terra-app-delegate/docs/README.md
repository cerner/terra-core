# Terra App Delegate

The AppDelegate is an object that provides a set of functions used to facilitate communcation between Containers and
their consuming Containers/Applications.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-app-delegate`
  - `yarn add terra-app-delegate`

## Usage

```js
import AppDelegate from 'terra-app-delegate';

const newAppDelegateInstance = AppDelegate.create({
  disclose: (data) => {
    // Perform disclose action (open modal, inline panel, etc.)
  },
  dismiss: (data) => {
    // Dismiss current Container
  },
  closeDisclosure: (data) => {
    // Close entire disclosure method, regardless of other content
  },
  goBack: (data) => {
    // Dismiss current Container
  },
  maximize: (data) => {
    // Maximize the disclosure method
  },
  minimize: (data) => {
    // Minimize the disclosure method
  },
  releaseFocus: (data) => {
    // The calling component is releasing focus.
  },
  requestFocus: (data) => {
    // The calling component is requesting to gain focus.
  }
});

const clonedAppDelegateInstance = AppDelegate.clone(newAppDelegateInstance, {
  disclose: (data) => {
    // Override disclose function from newAppDelegateInstance
  },
});

```


The implementations of the AppDelegate APIs are completely determined by the component creating the AppDelegate instance. However,
the suggested use of each function is as follows:

|Name|Status|Description|
|---|---|---|
|`disclose`|Required|Used to progressively disclose content in various ways (modal, inline, etc.)|
|`dismiss`|Optional|Used to remove the calling component from the application. Dismiss may additionally close the calling component's disclosure mechanism. Dismiss should only be present if the component is dismissible (i.e. presented within a disclosure mechanism).|
|`closeDisclosure`|Optional|Used to close the calling component's disclosure mechanism. Should only be present if the component is presented within a disclosure mechanism.|
|`goBack`|Optional|Used to dismiss the calling component. Should only be present if the ability to go back is available (for example, due to a navigation structure present in the disclosure mechanism).|
|`maximize`|Optional|Used to maximize the calling component. Should only be present if the disclosure method is maximizable and not currently maximized.|
|`minimize`|Optional|Used to minimize the calling component. Should only be present if the disclosure method is minimizable and not currently minimized.|
|`releaseFocus`|Optional| The calling component, typically a popup or date picker component that can display over the container, is ready to release focus so that other components can gain focus.|
|`requestFocus`|Optional| The calling component, typically a popup or date picker component that can display over the container, is requesting to gain focus.|


### Disclose Argument API

While the other functions have generic Object-based argument APIs, the `disclose` function has an extensible argument API designed to support Redux-based workflows.

Disclose API:

|Key|Type|Description|
|---|---|---|
|preferredType|String|A String describing the component's desired disclosure method. This may or may not be honored, depending on the consuming Application's configuration.|
|content|Object|An Object containing data describing the component that is to be disclosed.|

Disclose Content API:

|Key|Type|Description|
|---|---|---|
|key|String|An identifying String that will be used as the React `key` for the disclosed component. Should be as specific as possible.|
|name|String|The String value that will be used to retrieve the Component class from the AppDelegate component registry.|
|props|Object|An Object containing the props for the disclosed component. These should be serializable.|

The above structure allows us to disclose components dynamically without having to actually pass complex refs/functions through the API. This allows the parameters to be serializable and stored in Redux stores easily.

The AppDelegate exposes two functions (`registerComponentForDisclosure` and `getComponentForDisclosure`) that allows components to be registered for and retrieved by an arbitrary key. Those functions should be used by components to build the disclosable components from the `disclose` arguments.

An example implementation would look like this:

```jsx
// ExampleDisclosureComponent.jsx

import AppDelegate from 'terra-app-delegate';

const ExampleDisclosureComponent = () => {
  // This is the component that will be disclosed.
};

ExampleDisclosureComponent.propTypes = {
  prop1: ...,
  prop2: ...,
}

export default ExampleDisclosureComponent;

// Register the ExampleDisclosureComponent with the AppDelegate. We'll also export the disclosureName so that
// consuming components have access to it. By doing that, we ensure that consumers will import this file,
// thus ensuring that the component is registered for use.

const disclosureName = 'ExampleDisclosureComponent';
AppDelegate.registerComponentForDisclosure(disclosureName, ExampleDisclosureComponent);
export { disclosureName };

```

```jsx
// ExampleRootComponent.jsx

import AppDelegate from 'terra-app-delegate';
import ExampleDisclosureComponent, { disclosureName as exampleDisclosureName } from './ExampleDisclosureComponent';

class ExampleRootComponent extends React.Component {
  discloseComponent() {
    this.props.app.disclose({
      preferredType: 'modal',
      content: {
        key: `COMPONENT-${CONCEPT_IDENTIFIER_HERE}`,
        name: exampleDisclosureName,
        props: {
          prop1: 'value',
          prop2: 'another value'
        },
      },
    })
  }

  render() {}
}

ExampleRootComponent.propTypes = {
  app: AppDelegate.propType,
}

```
