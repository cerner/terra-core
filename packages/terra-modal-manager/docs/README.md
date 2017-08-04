# Terra Modal Manager

The ModalManager is a Redux-backed Container component that dynamically presents components in a Terra Modal.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal-manager`
  - `yarn add terra-modal-manager`

## Prerequisites

Since ModalManager manages its state using Redux, its reducer must be included when the Redux store is initially created. To make
this easier, the ModalManager exports a `reducers` object that can be used with `combineReducers` or otherwise used to
construct the root reducer function of an application.

## Usage

It works like this:
* One or many components are provided to the ModalManager as children.
* The ModalManager clones those children and adds an AppDelegate prop to each.
* The added AppDelegate's `disclose` function, when called with a `preferredType` of `'modal'`, will dispatch the ModalManager's `OPEN` action.
* The ModalManager will use the data from the `OPEN` action to open the modal and present the specified component within it.
* The modally-presented component will also recieve an AppDelegate prop configured to further manipulate the modal state.

Components presented in the Modal still have the ability to disclose additional modal content; the ModalManager will maintain both components
in a stack and give the top-most component the APIs necessary to navigate back (through its AppDelegate).

The disclose APIs for the ModalManager children follow the standard AppDelegate disclose API, with the only addition being a 'size' property that
will determine the size of the modal.

```jsx
app.disclose({
  preferredType: 'modal',
  size: 'small',
  content: {...},
})
```

|Key|Type|Description|
|---|---|---|
|preferredType|String|A String describing the component's desired disclosure method. Should be 'modal' if ModalManager usage is desired.|
|content|Object|An Object containing data describing the component that is to be disclosed. See AppDelegate documentation for more.|
|size|String|The desired modal size. One of: `tiny`, `small`, `medium`, `large`, `huge`, `fullscreen`*.|

>\* When the ModalManager is presented with a `size` of `fullscreen`, animated transitions will be disabled and `maximize`/`minimize` functions will not be provided to the modally presented components.

A more thorough example would look something like this:

```jsx
// DemoApplication.jsx

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ModalManager, { reducers as modalManagerReducers } from 'terra-modal-manager';

const store = createStore(combineReducers(modalManagerReducers));

class DemoApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ModalManager>
          <DemoContainer />
        </ModalManager>
      </Provider>
    );
  }
}

export default DemoApplication;
```

```jsx
// DemoContainer.jsx

import React, { PropTypes } from 'react';
import ModalContent, { disclosureName } from './ModalContent';

const DemoContainer = ({ app }) => (
  <div>
    <button
      onClick={() => {
        this.props.app.disclose({
          preferredType: 'modal',
          size: 'small',
          content: {
            key: 'DEMO_CONTAINER_MODAL_CONTENT',
            name: disclosureName,
            props: {
              contentText: 'Modal content'
            },
          },
        })
      }}
    >
      Launch Modal
    </button>
  </div>
)

export default DemoContainer;
```

```jsx
// ModalContent.jsx

import AppDelegate from 'terra-app-delegate';

const ModalContent = ({ app, contentText }) => (
  <div>
    <div>{contentText}</div>
    <button onClick={app.closeDisclosure}>Close Modal</button>
  </div>
)

export default ModalContent;

const disclosureName = 'ModalContent';
AppDelegate.registerComponentForDisclosure(disclosureName, ModalContent);
export { disclosureName };
```
