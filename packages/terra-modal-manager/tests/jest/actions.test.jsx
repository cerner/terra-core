import {
  OPEN,
  CLOSE,
  PUSH,
  POP,
  MAXIMIZE,
  MINIMIZE,
} from '../../src/actionTypes';

import {
  open,
  close,
  push,
  pop,
  maximize,
  minimize,
} from '../../src/actions';

const actionData = { data: 'wooo' };

describe('modalManager actions', () => {
  it('should create an action to OPEN the modal manager', () => {
    expect(open(actionData)).toEqual({
      type: OPEN,
      data: actionData,
    });
  });

  it('should create an action to CLOSE the modal manager', () => {
    expect(close(actionData)).toEqual({
      type: CLOSE,
      data: actionData,
    });
  });

  it('should create an action to PUSH content on the modal manager', () => {
    expect(push(actionData)).toEqual({
      type: PUSH,
      data: actionData,
    });
  });

  it('should create an action to PUSH content off the modal manager', () => {
    expect(pop(actionData)).toEqual({
      type: POP,
      data: actionData,
    });
  });

  it('should create an action to MAXIMIZE the modal manager', () => {
    expect(maximize(actionData)).toEqual({
      type: MAXIMIZE,
      data: actionData,
    });
  });

  it('should create an action to MINIMIZE the modal manager', () => {
    expect(minimize(actionData)).toEqual({
      type: MINIMIZE,
      data: actionData,
    });
  });
});
