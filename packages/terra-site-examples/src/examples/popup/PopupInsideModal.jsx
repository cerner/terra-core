import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import ModalManager, { reducers as modalManagerReducers } from 'terra-modal-manager';
import ModalContainer from './PopupModalContainer';

const store = createStore(
  combineReducers(Object.assign({},
    modalManagerReducers,
  )),
);

const ModalManagerDemo = () => (
  <Provider store={store}>
    <ModalManager>
      <ModalContainer />
    </ModalManager>
  </Provider>
);

export default ModalManagerDemo;
