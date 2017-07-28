import PropTypes from 'prop-types';
import {
  registerComponentForDisclosure,
  getComponentForDisclosure,
} from '../disclosure-component-registry/DisclosureComponentRegistry';

const supportedAttributes = [
  'disclose', 'dismiss', 'closeDisclosure', 'goBack', 'maximize', 'minimize', 'requestFocus', 'releaseFocus',
];

class AppDelegateInstance {
  constructor(data) {
    supportedAttributes.forEach((attribute) => {
      if (data[attribute]) {
        this[attribute] = data[attribute];
      }
    });
  }
}

const create = data => (
  Object.freeze(new AppDelegateInstance(data))
);

const clone = (delegate, data) => {
  const ancestorDelegate = delegate || {};

  const mergedData = {};
  supportedAttributes.forEach((attribute) => {
    mergedData[attribute] = data[attribute] || ancestorDelegate[attribute];
  });

  return create(mergedData);
};

const isEqual = (delegateA, delegateB) => {
  if (!delegateA || !delegateB) {
    return false;
  }

  if (delegateA === delegateB) {
    return true;
  }

  return !supportedAttributes.some(attribute => (
    delegateA[attribute] !== delegateB[attribute]
  ));
};

const AppDelegate = {
  propType: PropTypes.instanceOf(AppDelegateInstance),
  create,
  clone,
  isEqual,
  registerComponentForDisclosure,
  getComponentForDisclosure,
};

export default AppDelegate;
