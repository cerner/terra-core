import { connect } from 'react-redux';

import ModalManager from './ModalManager';

import modalManagerReducers from './reducers';
import { open, close, push, pop, maximize, minimize, requestFocus, releaseFocus } from './actions';

const mapStateToProps = state => (
  (disclosureState => ({
    modalComponentData: disclosureState.componentKeys.map(key => (disclosureState.components[key])),
    size: disclosureState.size,
    isOpen: disclosureState.isOpen,
    isMaximized: disclosureState.isMaximized,
    isFocused: disclosureState.isFocused,
  }))(state.modalManager)
);

export { mapStateToProps };

const mapDispatchToProps = dispatch => ({
  openModal: (data) => { dispatch(open(data)); },
  closeModal: (data) => { dispatch(close(data)); },
  pushModal: (data) => { dispatch(push(data)); },
  popModal: (data) => { dispatch(pop(data)); },
  maximizeModal: (data) => { dispatch(maximize(data)); },
  minimizeModal: (data) => { dispatch(minimize(data)); },
  requestFocus: (data) => { dispatch(requestFocus(data)); },
  releaseFocus: (data) => { dispatch(releaseFocus(data)); },
});

export { mapDispatchToProps };

export default connect(mapStateToProps, mapDispatchToProps)(ModalManager);

const reducers = {
  modalManager: modalManagerReducers,
};
export { reducers };
