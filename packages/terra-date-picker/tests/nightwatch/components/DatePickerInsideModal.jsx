/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ModalManager, { reducers as modalManagerReducers } from 'terra-modal-manager';
import ContentContainer from './ContentContainer';

const store = createStore(
  combineReducers(Object.assign({},
    modalManagerReducers,
  )),
);

const ModalManagerDemo = () => (
  <Provider store={store}>
    <ModalManager>
      <ContentContainer identifier="root-component" />
    </ModalManager>
  </Provider>
);

export default ModalManagerDemo;
