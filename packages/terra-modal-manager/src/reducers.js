import { open, push, pop, maximize, minimize, defaultState, requestFocus, releaseFocus } from './shared/disclosureReducerUtils';

import {
  OPEN,
  CLOSE,
  PUSH,
  POP,
  MAXIMIZE,
  MINIMIZE,
  REQUEST_FOCUS,
  RELEASE_FOCUS,
} from './actionTypes';

const supportedSizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
};

const defaultModalState = Object.assign({}, defaultState, {
  size: supportedSizes.small,
});

const modalManager = (state = defaultModalState, action) => {
  switch (action.type) {
    case OPEN:
      return Object.assign({}, open(state, action), { size: action.data.size || supportedSizes.small });
    case CLOSE:
      return defaultModalState;
    case PUSH:
      return push(state, action);
    case POP:
      return pop(state, action);
    case MAXIMIZE:
      return maximize(state, action);
    case MINIMIZE:
      return minimize(state, action);
    case REQUEST_FOCUS:
      return requestFocus(state, action);
    case RELEASE_FOCUS:
      return releaseFocus(state, action);
    default:
      return state;
  }
};

export default modalManager;
