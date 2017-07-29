const cloneDisclosureState = (state) => {
  const newState = Object.assign({}, state);
  newState.componentKeys = Object.assign([], newState.componentKeys);
  newState.components = Object.assign({}, newState.components);

  return newState;
};

const defaultState = Object.freeze({
  isFocused: true,
  isOpen: false,
  isMaximized: false,
  componentKeys: [],
  components: {},
});

const open = (state, action) => {
  const newState = cloneDisclosureState(state);

  newState.isOpen = true;
  newState.componentKeys = [action.data.content.key];
  newState.components[action.data.content.key] = {
    name: action.data.content.name,
    props: action.data.content.props,
    key: action.data.content.key,
  };

  return newState;
};

const close = () => (defaultState);

const push = (state, action) => {
  const newState = cloneDisclosureState(state);

  newState.componentKeys.push(action.data.content.key);
  newState.components[action.data.content.key] = {
    name: action.data.content.name,
    props: action.data.content.props,
    key: action.data.content.key,
  };

  return newState;
};

const pop = (state) => {
  const newState = cloneDisclosureState(state);

  newState.components[newState.componentKeys.pop()] = undefined;

  return newState;
};

const maximize = (state) => {
  const newState = cloneDisclosureState(state);

  newState.isMaximized = true;

  return newState;
};

const minimize = (state) => {
  const newState = cloneDisclosureState(state);

  newState.isMaximized = false;

  return newState;
};

const gainFocus = (state) => {
  const newState = cloneDisclosureState(state);

  newState.isFocused = true;

  return newState;
};

const loseFocus = (state) => {
  const newState = cloneDisclosureState(state);

  newState.isFocused = false;

  return newState;
};

export { defaultState, open, close, push, pop, maximize, minimize, gainFocus, loseFocus };
