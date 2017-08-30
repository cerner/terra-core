/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Base from 'terra-base';
// eslint-disable-next-line import/no-extraneous-dependencies
import ModalManager, { reducers as modalManagerReducers } from 'terra-modal-manager';
import ModalContainer from './DateTimePickerModalContainer';

const store = createStore(
  combineReducers(Object.assign({},
    modalManagerReducers,
  )),
);

const ModalManagerDemo = () => (
  <Base locale={'en-US'}>
    <Provider store={store}>
      <ModalManager>
        <ModalContainer />
      </ModalManager>
    </Provider>
  </Base>
);

export default ModalManagerDemo;
