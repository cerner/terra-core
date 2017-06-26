import {
  OPEN,
  CLOSE,
  PUSH,
  POP,
  MAXIMIZE,
  MINIMIZE,
} from './actionTypes';

export function open(data) {
  return { type: OPEN, data };
}

export function close(data) {
  return { type: CLOSE, data };
}

export function push(data) {
  return { type: PUSH, data };
}

export function pop(data) {
  return { type: POP, data };
}

export function maximize(data) {
  return { type: MAXIMIZE, data };
}

export function minimize(data) {
  return { type: MINIMIZE, data };
}
