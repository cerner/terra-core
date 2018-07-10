import FrameUtil from '../../src/_FrameUtil';

describe('FrameUtil', () => {
  describe('dropdownStyle', () => {
    it('should return an empty object when no values are provided', () => {
      let dropdownAttrs;
      expect(FrameUtil.dropdownStyle(dropdownAttrs, {})).toEqual({});
    });

    it('should preserve dropdown styles except maxHeight and width', () => {
      const state = {};
      const dropdownAttrs = { style: { height: '10px', maxHeight: '10px', width: '10px' } };

      const result = FrameUtil.dropdownStyle(dropdownAttrs, state);
      const expected = { height: '10px' };

      expect(result).toEqual(expected);
    });

    it('should merge state maxHeight into dropdownAttrs style', () => {
      const state = { maxHeight: '20px', width: '20px' };
      const dropdownAttrs = { style: { height: '10px', width: '10px' } };

      const result = FrameUtil.dropdownStyle(dropdownAttrs, state);
      const expected = { height: '10px', maxHeight: '20px', width: '20px' };

      expect(result).toEqual(expected);
    });
  });

  describe('includes', () => {
    it('should return false if the query is an empty string', () => {
      expect(FrameUtil.includes({ value: ['blue'] }, '')).toBeFalsy();
    });

    it('should return false if the query is a blank string', () => {
      expect(FrameUtil.includes({ value: ['blue'] }, '   ')).toBeFalsy();
    });

    it('should return false if the query is not included in the value', () => {
      expect(FrameUtil.includes({ value: ['blue'] }, 'red')).toBeFalsy();
    });

    it('should return true if the query is included in the value', () => {
      expect(FrameUtil.includes({ value: ['blue'] }, 'blue')).toBeTruthy();
    });
  });

  describe('shouldPositionDropdown', () => {
    it('should return false if the dropdown is not open', () => {
      const currentState = { isOpen: false };
      const previousState = { isOpen: false };
      expect(FrameUtil.shouldPositionDropdown(previousState, currentState)).toBeFalsy();
    });
  });
});
