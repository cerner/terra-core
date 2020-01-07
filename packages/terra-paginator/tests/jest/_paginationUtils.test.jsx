// import React from 'react';
import {
  // enableFocusActiveStyles,
  // disableFocusActiveStyles,
  // disableFocusOnBlur,
  // handleFocus,
  // handleMouseDown,
  pageSet,
} from '../../src/_paginationUtils';
// import PaginatorButton from '../../src/_PaginatorButton';

describe('PaginationUtils', () => {
  describe('when there are 10 pages', () => {
    it('should return sequence 1 to 10 if page 1 is selected', () => {
      const sequence = pageSet(1, 10);
      expect(sequence).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should return sequence 1 to 10 if page 7 is selected', () => {
      const sequence = pageSet(7, 10);
      expect(sequence).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should return sequence 1 to 10 if page 10 is selected', () => {
      const sequence = pageSet(10, 10);
      expect(sequence).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe('when there are less than 10 pages', () => {
    it('should return sequence 1 to 7 if page 1 is selected', () => {
      const sequence = pageSet(1, 7);
      expect(sequence).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should return sequence 1 to 7 if page 7 is selected', () => {
      const sequence = pageSet(7, 7);
      expect(sequence).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });

  describe('when there are more than 10 pages', () => {
    it('should return sequence 1 to 10 if page 1 is selected', () => {
      const sequence = pageSet(1, 15);
      expect(sequence).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should return sequence 2 to 11 if page 7 is selected', () => {
      const sequence = pageSet(7, 15);
      expect(sequence).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    it('should return sequence 5 to 14 if page 10 is selected', () => {
      const sequence = pageSet(10, 15);
      expect(sequence).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    });

    it('should return sequence 1 to 10 if page 15 is selected', () => {
      const sequence = pageSet(15, 15);
      expect(sequence).toEqual([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
  });

  // const defaultRender = <PaginatorButton />;
});
