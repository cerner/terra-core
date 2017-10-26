/* global spyOn */

import Utilities from '../../src/_Utilities';

describe('autoResizeTextareaHeight', () => {
  let mockEvent;
  let autoResizeTextareaHeightFunction;

  beforeEach(() => {
    spyOn(window, 'getComputedStyle').and.returnValue({
      lineHeight: '14px',
    });
  });

  describe('when just a maximum row count is passed into the function', () => {
    beforeEach(() => {
      mockEvent = {
        currentTarget: {
          scrollHeight: '56',
          baseScrollHeight: '56',
        },
      };

      autoResizeTextareaHeightFunction = Utilities.autoResizeTextareaHeight(null, 4);
      autoResizeTextareaHeightFunction(mockEvent);
    });

    it('sets the rows correctly', () => {
      expect(mockEvent.currentTarget.rows).toEqual(4);
    });
  });

  describe('when an onChange function is passed in', () => {
    let mockOnChange;

    beforeEach(() => {
      mockOnChange = {
        onChange: () => {},
      };

      spyOn(mockOnChange, 'onChange');
      autoResizeTextareaHeightFunction = Utilities.autoResizeTextareaHeight(mockOnChange.onChange);
      autoResizeTextareaHeightFunction(mockEvent);
    });

    it('calls the onChange function', () => {
      expect(mockOnChange.onChange).toHaveBeenCalledWith(mockEvent);
    });
  });
});
