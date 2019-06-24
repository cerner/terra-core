import React from 'react';
import DropdownList from '../../src/_DropdownList';
import Util from '../../src/_DropdownListUtil';
import DropdownButton from '../../src/DropdownButton';

const multipleChildren = (
  <DropdownList handleRequestClose={() => {}}>
    <DropdownButton.Option label="1st" callback={() => {}} />
    <DropdownButton.Option label="1th" callback={() => {}} />
    <DropdownButton.Option label="1ta" callback={() => {}} />
    <DropdownButton.Option label="2nd" callback={() => {}} />
    <DropdownButton.Option label="3rd" callback={() => {}} />
    <DropdownButton.Option label="4th" callback={() => {}} />
    <DropdownButton.Option label="5th" callback={() => {}} />
  </DropdownList>
);

const singleChild = (
  <DropdownList handleRequestClose={() => {}}>
    <DropdownButton.Option label="1st" callback={() => {}} />
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

  it('validates findFirst', () => {
    expect(Util.findFirst(multipleChildren)).toEqual('1st');
    expect(Util.findFirst(singleChild)).toEqual('1st');
  });

  it('validates findLast', () => {
    expect(Util.findLast(multipleChildren)).toEqual('5th');
    expect(Util.findLast(singleChild)).toEqual('1st');
  });

  it('validates findWithStartString', () => {
    expect(Util.findWithStartString(multipleChildren, '1')).toEqual('1st');
    expect(Util.findWithStartString(multipleChildren, '1t')).toEqual('1th');
    expect(Util.findWithStartString(multipleChildren, '3')).toEqual('3rd');
    expect(Util.findWithStartString(multipleChildren, '7')).toBe(null);
    expect(Util.findWithStartString(singleChild, '1')).toEqual('1st');
  });

  it('validates findNext', () => {
    expect(Util.findNext(multipleChildren, '1st')).toEqual('1th');
    expect(Util.findNext(multipleChildren, '2nd')).toEqual('3rd');
    expect(Util.findNext(multipleChildren, '5th')).toEqual('5th');
    expect(Util.findNext(multipleChildren, '327th')).toBe(null);
    expect(Util.findNext(singleChild, '1st')).toEqual('1st');
  });

  it('validates findPrevious', () => {
    expect(Util.findPrevious(multipleChildren, '2nd')).toEqual('1ta');
    expect(Util.findPrevious(multipleChildren, '1th')).toEqual('1st');
    expect(Util.findPrevious(multipleChildren, '1st')).toEqual('1st');
    expect(Util.findPrevious(multipleChildren, '327th')).toBe(null);
    expect(Util.findPrevious(singleChild, '1st')).toEqual('1st');
  });
});
