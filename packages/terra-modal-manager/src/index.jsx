import { connect } from 'react-redux';

import ModalManager from './ModalManager';

import modalManagerReducers from './reducers';
import { open, close, push, pop, maximize, minimize, gainFocus, loseFocus } from './actions';

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
  gainFocus: (data) => { dispatch(gainFocus(data)); },
  loseFocus: (data) => { dispatch(loseFocus(data)); },
});

export { mapDispatchToProps };

export default connect(mapStateToProps, mapDispatchToProps)(ModalManager);

const reducers = {
  modalManager: modalManagerReducers,
};
export { reducers };
