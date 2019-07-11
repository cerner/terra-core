import React from 'react';
import DropdownList from '../../src/_DropdownList';
import Util from '../../src/_DropdownListUtil';
import { Button } from '../../src/DropdownButton';

const multipleChildren = (
  <DropdownList requestClose={() => {}}>
    <Button label="1st" onClick={() => {}} />
    <Button label="1th" onClick={() => {}} />
    <Button label="1ta" onClick={() => {}} />
    <Button label="2nd" onClick={() => {}} />
    <Button label="3rd" onClick={() => {}} />
    <Button label="4th" onClick={() => {}} />
    <Button label="5th" onClick={() => {}} />
  </DropdownList>
);

const singleChild = (
  <DropdownList requestClose={() => {}}>
    <Button label="1st" onClick={() => {}} />
  </DropdownList>
);

describe('Dropdown List Util', () => {
  it('validates isEqual', () => {
    expect(Util.isEqual('1st', '1st')).toBe(true);
    expect(Util.isEqual('1st', '892')).toBe(false);
    expect(Util.isEqual('1st', '1ST')).toBe(true);
    expect(Util.isEqual('1st', undefined)).toBe(false);
    expect(Util.isEqual(undefined, '892')).toBe(false);
  });

  it('validates findByValue', () => {
    expect(Util.findByValue(multipleChildren, '2nd').props.label).toEqual('2nd');
    expect(Util.findByValue(multipleChildren, '754th')).toBe(undefined);
    expect(Util.findByValue(singleChild, '1st').props.label).toEqual('1st');
  });

  it('validates findIndexByValue', () => {
    expect(Util.findIndexByValue(multipleChildren, '2nd')).toEqual(3);
    expect(Util.findIndexByValue(multipleChildren, '754th')).toBe(-1);
    expect(Util.findIndexByValue(singleChild, '1st')).toEqual(0);
  });

  it('validates findByIndex', () => {
    expect(Util.findByIndex(multipleChildren, 3).props.label).toEqual('2nd');
    expect(Util.findByIndex(multipleChildren, 754)).toBe(undefined);
    expect(Util.findByIndex(singleChild, 0).props.label).toEqual('1st');
  });

  it('validates findWithStartString', () => {
    expect(Util.findWithStartString(multipleChildren, '1')).toEqual(0);
    expect(Util.findWithStartString(multipleChildren, '1t')).toEqual(1);
    expect(Util.findWithStartString(multipleChildren, '3')).toEqual(4);
    expect(Util.findWithStartString(multipleChildren, '7')).toEqual(-1);
    expect(Util.findWithStartString(singleChild, '1')).toEqual(0);
  });

  it('validates findNext', () => {
    expect(Util.findNext(multipleChildren, 0)).toEqual(1);
    expect(Util.findNext(multipleChildren, 1)).toEqual(2);
    expect(Util.findNext(multipleChildren, 6)).toEqual(6);
    expect(Util.findNext(multipleChildren, 327)).toEqual(6);
    expect(Util.findNext(multipleChildren, -3)).toEqual(0);
    expect(Util.findNext(singleChild, 0)).toEqual(0);
  });

  it('validates findPrevious', () => {
    expect(Util.findPrevious(multipleChildren, 3)).toEqual(2);
    expect(Util.findPrevious(multipleChildren, 1)).toEqual(0);
    expect(Util.findPrevious(multipleChildren, 0)).toEqual(0);
    expect(Util.findPrevious(multipleChildren, 327)).toEqual(6);
    expect(Util.findPrevious(multipleChildren, -3)).toEqual(0);
    expect(Util.findPrevious(singleChild, 0)).toEqual(0);
  });
});
