import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ModalManager, { reducers as modalManagerReducers } from 'terra-modal-manager';
import ModalManagerDialogDemoContainer from './ModalManagerDialogDemoContainer';

const store = createStore(combineReducers(modalManagerReducers));

class DemoApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ModalManager>
          <ModalManagerDialogDemoContainer />
        </ModalManager>
      </Provider>
    );
  }
}

export default DemoApplication;
