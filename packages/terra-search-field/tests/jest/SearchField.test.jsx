import React from 'react';
import SearchField from '../../src/SearchField';
import intlContexts from './intl-context-setup';

describe('Snapshots', () => {
  it('renders a basic search field', () => {
    const searchField = shallow(<SearchField />, intlContexts.shallowContext);
    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with a placeholder', () => {
    const searchField = shallow(<SearchField placeholder="Test" />, intlContexts.shallowContext);
    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with a value', () => {
    const searchField = shallow(<SearchField value="Test" />, intlContexts.shallowContext);
    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with a defaulted value', () => {
    const searchField = shallow(<SearchField defaultValue="Default" />, intlContexts.shallowContext);
    expect(searchField).toMatchSnapshot();
  });

  it('renders a disabled search field with a value', () => {
    const searchField = shallow(<SearchField isDisabled />, intlContexts.shallowContext);
    searchField.setState({ searchText: 'Test' });

    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field that displays as a block to fill its container', () => {
    const searchField = shallow(<SearchField isBlock />, intlContexts.shallowContext);
    searchField.setState({ searchText: 'Test' });

    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with an Input that contains a non-null refCallback prop', () => {
    const searchField = shallow(<SearchField inputFieldRefCallback={(inputRef) => { inputRef.focus(); }} />, intlContexts.shallowContext);
    expect(searchField.find('Input').props().refCallback).not.toBeFalsy();
    expect(searchField).toMatchSnapshot();
  });
});

describe('Manual Search', () => {
  it('triggers search on button click', () => {
    const onSearch = jest.fn();
    const searchField = shallow(<SearchField onSearch={onSearch} />, intlContexts.shallowContext);
    searchField.setState({ searchText: 'Te' });

    expect(onSearch).not.toBeCalled();
    searchField.childAt(1).simulate('click');
    expect(onSearch).toBeCalledWith('Te');
  });

  it('does not trigger search if default minimum search text has not been met', () => {
    const onSearch = jest.fn();
    const searchField = shallow(<SearchField onSearch={onSearch} />, intlContexts.shallowContext);
    searchField.setState({ searchText: 'T' });

    expect(onSearch).not.toBeCalled();
    searchField.childAt(1).simulate('click');
    expect(onSearch).not.toBeCalled();
  });

  it('does not trigger search if minimum search text has not been met', () => {
    const onSearch = jest.fn();
    const searchField = shallow(<SearchField onSearch={onSearch} minimumSearchTextLength={5} />, intlContexts.shallowContext);
    searchField.setState({ searchText: 'Sear' });

    expect(onSearch).not.toBeCalled();
    searchField.childAt(1).simulate('click');
    expect(onSearch).not.toBeCalled();
  });

  it('does not search when callback is not provided', () => {
    const searchField = shallow(<SearchField minimumSearchTextLength={5} />, intlContexts.shallowContext);
    searchField.setState({ searchText: 'Searc' });

    searchField.childAt(1).simulate('click'); // Verifies we do not attempt to call an undefined function.
  });
});

describe('Auto Search', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('triggers search after delay on text change', () => {
    const onSearch = jest.fn();
    const searchField = shallow(<SearchField onSearch={onSearch} />, intlContexts.shallowContext);

    searchField.childAt(0).simulate('change', { target: { value: 'Te' } });

    expect(onSearch).not.toBeCalled();
    jest.runAllTimers();
    expect(onSearch).toBeCalledWith('Te');
  });

  it('only triggers one search if a manual search is triggered before automatic search', () => {
    const onSearch = jest.fn();
    const searchField = shallow(<SearchField onSearch={onSearch} />, intlContexts.shallowContext);

    searchField.childAt(0).simulate('change', { target: { value: 'Te' } });

    expect(onSearch).not.toBeCalled();

    searchField.childAt(1).simulate('click');
    expect(onSearch).toBeCalledWith('Te');

    jest.runAllTimers();
    expect(onSearch.mock.calls.length).toBe(1);
  });

  it('does not trigger search if minimum text length is not met', () => {
    jest.useFakeTimers();
    const onSearch = jest.fn();
    const searchField = shallow(<SearchField onSearch={onSearch} minimumSearchTextLength={5} />, intlContexts.shallowContext);

    searchField.childAt(0).simulate('change', { target: { value: 'Sear' } });

    expect(onSearch).not.toBeCalled();
    jest.runAllTimers();
    expect(onSearch).not.toBeCalled();
  });

  it('triggers onInvalidSearch if minimum text length is not met', () => {
    jest.useFakeTimers();
    const onSearch = jest.fn();
    const onInvalidSearch = jest.fn();
    const searchField = shallow(<SearchField onSearch={onSearch} onInvalidSearch={onInvalidSearch} minimumSearchTextLength={5} />, intlContexts.shallowContext);

    searchField.childAt(0).simulate('change', { target: { value: 'Sear' } });

    jest.runAllTimers();
    expect(onSearch).not.toBeCalled();
    expect(onInvalidSearch).toBeCalledWith('Sear');
  });

  it('uses standard timeout for search delay when not provided', () => {
    const searchField = shallow(<SearchField />, intlContexts.shallowContext);

    searchField.childAt(0).simulate('change', { target: {} });
    expect(setTimeout).toBeCalledWith(expect.anything(), 250);
  });

  it('uses custom timeout for search delay when provided', () => {
    const onSearch = jest.fn();
    const searchField = shallow(<SearchField searchDelay={1000} onSearch={onSearch} />, intlContexts.shallowContext);

    searchField.childAt(0).simulate('change', { target: {} });

    for (let i = 0; i < 3; i += 1) {
      jest.advanceTimersByTime(250);
      expect(onSearch).not.toBeCalled();
    }

    jest.advanceTimersByTime(250);
    // 1000ms has been passed by jest by now
    expect(setTimeout).toBeCalled();
  });

  it('should call onChange when button is selected', () => {
    const onChange = jest.fn();
    const searchField = shallow(<SearchField onChange={onChange} />, intlContexts.shallowContext);

    searchField.childAt(0).simulate('change', { target: {} });
    expect(onChange).toBeCalled();

    searchField.childAt(0).simulate('change', { target: {} });
    expect(onChange).toBeCalled();
  });
});
