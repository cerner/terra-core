import React from 'react';
import MenuUtil from '../../src/_MenuUtil';
import Variants from '../../src/_constants';
import OptGroup from '../../src/_OptGroup';
import Option from '../../src/_Option';

describe('MenuUtil', () => {
  describe('contains', () => {
    it('should return false if the string is undefined', () => {
      let string;
      expect(MenuUtil.contains(string, 'query')).toBeFalsy();
    });

    it('should return false if the query is not conatained within the string', () => {
      expect(MenuUtil.contains('string', 'query')).toBeFalsy();
    });

    it('should return true if the query is conatained within the string', () => {
      expect(MenuUtil.contains('string query', 'query')).toBeTruthy();
    });

    it('should return true if the query is conatained within the string with different case', () => {
      expect(MenuUtil.contains('string query', 'Query')).toBeTruthy();
    });
  });

  describe('isEqual', () => {
    it('should return false if the either parameter is empty or null', () => {
      expect(MenuUtil.isEqual('', 'b')).toBeFalsy();
    });

    it('should return false if the either prarameter is empty or null', () => {
      expect(MenuUtil.isEqual('a', '')).toBeFalsy();
    });

    it('should return true if the parameters are equal', () => {
      expect(MenuUtil.isEqual('Mock', 'Mock')).toBeTruthy();
    });

    it('should return true if a parameter is a number and is equal', () => {
      expect(MenuUtil.isEqual(1, '1')).toBeTruthy();
    });

    it('should return true if the parameters are equal with different case', () => {
      expect(MenuUtil.isEqual('Mock', 'mock')).toBeTruthy();
    });
  });

  describe('allowsMultipleSelections', () => {
    it('should return false for a default variant', () => {
      expect(MenuUtil.allowsMultipleSelections(Variants.DEFAULT)).toBeFalsy();
    });

    it('should return false for a combobox variant', () => {
      expect(MenuUtil.allowsMultipleSelections(Variants.COMBOBOX)).toBeFalsy();
    });

    it('should return true for a multiple variant', () => {
      expect(MenuUtil.allowsMultipleSelections(Variants.MULTIPLE)).toBeTruthy();
    });

    it('should return false for a search variant', () => {
      expect(MenuUtil.allowsMultipleSelections(Variants.SEARCH)).toBeFalsy();
    });

    it('should return true for a tag variant', () => {
      expect(MenuUtil.allowsMultipleSelections(Variants.TAG)).toBeTruthy();
    });
  });

  describe('isSelected', () => {
    it('should return true if the option is included in the value', () => {
      expect(MenuUtil.isSelected(['One', 'Two'], 'One')).toBeTruthy();
    });

    it('should return false if the option is not included in the value', () => {
      expect(MenuUtil.isSelected(['One', 'Two'], 'Three')).toBeFalsy();
    });

    it('should return true if the option is equal to the value', () => {
      expect(MenuUtil.isSelected('One', 'One')).toBeTruthy();
    });

    it('should return false if the option is not equal to the value', () => {
      expect(MenuUtil.isSelected('One', 'Two')).toBeFalsy();
    });
  });

  describe('includes', () => {
    it('should return false if the array is undefined', () => {
      let array;
      expect(MenuUtil.isSelected(array, 'One')).toBeFalsy();
    });

    it('should return true if value is included within the array', () => {
      expect(MenuUtil.isSelected(['One'], 'One')).toBeTruthy();
    });

    it('should return false if value is not included within the array', () => {
      expect(MenuUtil.isSelected(['One'], 'Two')).toBeFalsy();
    });

    it('should return true for number comparisons', () => {
      expect(MenuUtil.isSelected([1], '1')).toBeTruthy();
    });

    it('should return true for 0 comparisons', () => {
      expect(MenuUtil.isSelected([0], '0')).toBeTruthy();
    });
  });

  describe('shouldAllowFreeText', () => {
    it('should return true if free text is allowed for a tag variant', () => {
      const props = { searchValue: 'Free Text', variant: Variants.TAG, value: [] };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeTruthy();
    });

    it('should return true if free text is allowed for a combobox variant', () => {
      const props = { searchValue: 'Free Text', variant: Variants.COMBOBOX, value: 'value' };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeTruthy();
    });

    it('should return false for a search variant', () => {
      const props = { searchValue: 'Free Text', variant: Variants.SEARCH };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeFalsy();
    });

    it('should return false for a default variant', () => {
      const props = { searchValue: 'Free Text', variant: Variants.DEFAULT };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeFalsy();
    });

    it('should return false for a multiple variant', () => {
      const props = { searchValue: 'Free Text', variant: Variants.DEFAULT };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeFalsy();
    });

    it('should return false if the search value is empty', () => {
      const props = { searchValue: '', variant: Variants.COMBOBOX };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeFalsy();
    });

    it('should return false if the search value is blank', () => {
      const props = { searchValue: '  ', variant: Variants.COMBOBOX };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeFalsy();
    });

    it('should return false if the value is already selected', () => {
      const props = { searchValue: 'Free Text', value: 'Free Text', variant: Variants.COMBOBOX };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeFalsy();
    });

    it('should return false if the value is already selected', () => {
      const props = { searchValue: 'Free Text', value: ['Free Text'], variant: Variants.TAG };
      expect(MenuUtil.shouldAllowFreeText(props)).toBeFalsy();
    });
  });

  describe('shouldShowNoResults', () => {
    it('should return true if children is empty', () => {
      expect(MenuUtil.shouldShowNoResults({ variant: Variants.DEFAULT }, [])).toBeTruthy();
    });

    it('should return false if children is not empty', () => {
      expect(MenuUtil.shouldShowNoResults({ variant: Variants.DEFAULT }, ['One'])).toBeFalsy();
    });

    it('should return false for a combobox variant', () => {
      expect(MenuUtil.shouldShowNoResults({ variant: Variants.COMBOBOX }, [])).toBeFalsy();
    });

    it('should return false for a tag variant', () => {
      expect(MenuUtil.shouldShowNoResults({ variant: Variants.TAG }, [])).toBeFalsy();
    });
  });

  describe('filterOption', () => {
    it('should return true if option display contains the search value', () => {
      const option = { props: { display: 'display' } };
      expect(MenuUtil.filterOption(option, 'display')).toBeTruthy();
    });

    it('should return false if option display does not contain the search value', () => {
      const option = { props: { display: 'display' } };
      expect(MenuUtil.filterOption(option, 'orange')).toBeFalsy();
    });

    it('should return true if the custom filter returns true', () => {
      const option = { props: { display: 'display' } };
      const filter = () => true;
      expect(MenuUtil.filterOption(option, '', filter)).toBeTruthy();
    });

    it('should return false if the custom filter returns false', () => {
      const option = { props: { display: 'display' } };
      const filter = () => false;
      expect(MenuUtil.filterOption(option, '', filter)).toBeFalsy();
    });
  });

  describe('findByValue', () => {
    it('should return the option matching the value', () => {
      const options = [
        <Option key="1" value="1" />,
        <Option key="2" value="2" />,
        <Option key="3" value="3" />,
        <Option key="4" value="4" />,
        <Option key="5" value="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findByValue(group, '2').props.value).toEqual('2');
    });

    it('should return undefined if no option matches the value', () => {
      const options = [
        <Option key="1" value="1" />,
        <Option key="2" value="2" />,
        <Option key="3" value="3" />,
        <Option key="4" value="4" />,
        <Option key="5" value="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findByValue(group, 'mock')).toBeUndefined();
    });
  });

  describe('findByDisplay', () => {
    it('should return the option matching the display', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findByDisplay(group, '4').props.display).toEqual('4');
    });

    it('should return undefined if no option matches the display', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findByDisplay(group, 'mock')).toBeUndefined();
    });
  });

  describe('findNext', () => {
    it('should return the option after the value', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findNext(group, '2')).toEqual('3');
    });

    it('should return the same option if it is the last one in the list', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findNext(group, '5')).toEqual('5');
    });

    it('should return null if there is no match', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findNext(group, '6')).toBeNull();
    });
  });

  describe('findPrevious', () => {
    it('should return the option after the value', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findPrevious(group, '2')).toEqual('1');
    });

    it('should return the same option if it is the last one in the list', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findPrevious(group, '1')).toEqual('1');
    });

    it('should return null if there is no match', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.findPrevious(group, '6')).toBeNull();
    });
  });

  describe('flatten', () => {
    it('should return a flat array', () => {
      const options = [
        <Option key="1" value="1" />,
        <Option key="2" value="2" />,
        <Option key="3" value="3" />,
        <Option key="4" value="4" />,
        <Option key="5" value="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.flatten(group).length).toEqual(5);
    });

    it('should return a flat array ignoring disabled options', () => {
      const options = [
        <Option key="1" value="1" />,
        <Option key="2" value="2" disabled />,
        <Option key="3" value="3" disabled />,
        <Option key="4" value="4" />,
        <Option key="5" value="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.flatten(group, true).length).toEqual(3);
    });
  });

  describe('filter', () => {
    it('should return a filtered list of options from an OptGroup', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.filter(group, '1').length).toEqual(1);
    });

    it('should return a filtered list of options', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      expect(MenuUtil.filter(options, '1').length).toEqual(1);
    });

    it('should return all matching matching options from the list', () => {
      const options = [
        <Option key="1" value="1" display="Blue" />,
        <Option key="2" value="2" display="Sky Blue" />,
        <Option key="3" value="3" display="Sea Blue" />,
        <Option key="4" value="4" display="Dark Blue" />,
      ];

      expect(MenuUtil.filter(options, 'Blue').length).toEqual(4);
    });
  });

  describe('filter', () => {
    it('should return a filtered list of options from an OptGroup', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      const group = [
        <OptGroup label="1">{options.slice(0, 2)}</OptGroup>,
        <OptGroup label="2">{options.slice(2, 5)}</OptGroup>,
      ];

      expect(MenuUtil.filter(group, '1').length).toEqual(1);
    });
  });

  describe('findFirst', () => {
    it('should return the value of the first option in the list', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      expect(MenuUtil.findFirst(options)).toEqual('1');
    });
  });

  describe('findLast', () => {
    it('should return the value of the last option in the list', () => {
      const options = [
        <Option key="1" value="1" display="1" />,
        <Option key="2" value="2" display="2" />,
        <Option key="3" value="3" display="3" />,
        <Option key="4" value="4" display="4" />,
        <Option key="5" value="5" display="5" />,
      ];

      expect(MenuUtil.findLast(options)).toEqual('5');
    });
  });

  describe('findWithStartString', () => {
    it('should return the value of the first option that starts with the string', () => {
      const options = [
        <Option key="1" value="1" display="One" />,
        <Option key="2" value="2" display="Two" />,
        <Option key="3" value="3" display="Three" />,
        <Option key="4" value="4" display="Four" />,
        <Option key="5" value="5" display="Five" />,
      ];

      expect(MenuUtil.findWithStartString(options, 'Fi')).toEqual('5');
    });

    it('should return null if no option starts with the string', () => {
      const options = [
        <Option key="1" value="1" display="One" />,
        <Option key="2" value="2" display="Two" />,
        <Option key="3" value="3" display="Three" />,
        <Option key="4" value="4" display="Four" />,
        <Option key="5" value="5" display="Five" />,
      ];

      expect(MenuUtil.findWithStartString(options, 'Zo')).toBeNull();
    });
  });

  describe('getActiveOptionFromProps', () => {
    it('should return null if there are no children', () => {
      const props = {};
      const state = {};
      const children = [];
      expect(MenuUtil.getActiveOptionFromProps(props, children, state)).toBeNull();
    });

    it('should return the first value if there is no selected option', () => {
      const props = {};
      const state = {};
      const children = [
        <Option key="1" value="1" display="One" />,
        <Option key="2" value="2" display="Two" />,
        <Option key="3" value="3" display="Three" />,
        <Option key="4" value="4" display="Four" />,
        <Option key="5" value="5" display="Five" />,
      ];

      expect(MenuUtil.getActiveOptionFromProps(props, children, state)).toEqual('1');
    });

    it('should return the selected option', () => {
      const props = { value: '4' };
      const state = {};
      const children = [
        <Option key="1" value="1" display="One" />,
        <Option key="2" value="2" display="Two" />,
        <Option key="3" value="3" display="Three" />,
        <Option key="4" value="4" display="Four" />,
        <Option key="5" value="5" display="Five" />,
      ];

      expect(MenuUtil.getActiveOptionFromProps(props, children, state)).toEqual('4');
    });

    it('should return the first selected option', () => {
      const props = { value: ['4', '2'] };
      const state = {};
      const children = [
        <Option key="1" value="1" display="One" />,
        <Option key="2" value="2" display="Two" />,
        <Option key="3" value="3" display="Three" />,
        <Option key="4" value="4" display="Four" />,
        <Option key="5" value="5" display="Five" />,
      ];

      expect(MenuUtil.getActiveOptionFromProps(props, children, state)).toEqual('2');
    });

    it('should return the first value if the search value has changed', () => {
      const props = { value: ['4', '2'], searchValue: '' };
      const state = { searchValue: 'O' };
      const children = [
        <Option key="1" value="1" display="One" />,
        <Option key="2" value="2" display="Two" />,
        <Option key="3" value="3" display="Three" />,
        <Option key="4" value="4" display="Four" />,
        <Option key="5" value="5" display="Five" />,
      ];

      expect(MenuUtil.getActiveOptionFromProps(props, children, state)).toEqual('1');
    });

    it('should return the current active value if the search value has not changed', () => {
      const props = { value: ['4', '2'], searchValue: '' };
      const state = { searchValue: '', active: '5' };
      const children = [
        <Option key="1" value="1" display="One" />,
        <Option key="2" value="2" display="Two" />,
        <Option key="3" value="3" display="Three" />,
        <Option key="4" value="4" display="Four" />,
        <Option key="5" value="5" display="Five" />,
      ];

      expect(MenuUtil.getActiveOptionFromProps(props, children, state)).toEqual('5');
    });

    it('should return the first value if the search value has not changed and the active option is null', () => {
      const props = { value: ['4', '2'], searchValue: '' };
      const state = { searchValue: '', active: null };
      const children = [
        <Option key="1" value="1" display="One" />,
        <Option key="2" value="2" display="Two" />,
        <Option key="3" value="3" display="Three" />,
        <Option key="4" value="4" display="Four" />,
        <Option key="5" value="5" display="Five" />,
      ];

      expect(MenuUtil.getActiveOptionFromProps(props, children, state)).toEqual('1');
    });
  });
});
