import {
  OPEN,
  CLOSE,
  PUSH,
  POP,
  MAXIMIZE,
  MINIMIZE,
  GAIN_FOCUS,
  LOSE_FOCUS,
} from '../../src/actionTypes';

import {
  open,
  close,
  push,
  pop,
  maximize,
  minimize,
  gainFocus,
  loseFocus,
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

  it('should create an action to POP content off the modal manager', () => {
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

  it('should create an action to GAIN FOCUS in the modal manager', () => {
    expect(gainFocus(actionData)).toEqual({
      type: GAIN_FOCUS,
      data: actionData,
    });
  });

  it('should create an action to LOSE FOCUS from the modal manager', () => {
    expect(loseFocus(actionData)).toEqual({
      type: LOSE_FOCUS,
      data: actionData,
    });
  });
});
