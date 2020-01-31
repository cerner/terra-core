import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import SearchField from '../../src/SearchField';

describe('Snapshots', () => {
  it('renders a basic search field', () => {
    const searchField = shallowWithIntl(<SearchField />).dive();
    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with a placeholder', () => {
    const searchField = shallowWithIntl(<SearchField placeholder="Test" />).dive();
    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with a value', () => {
    const searchField = shallowWithIntl(<SearchField value="Test" />).dive();
    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with a defaulted value', () => {
    const searchField = shallowWithIntl(<SearchField defaultValue="Default" />).dive();
    expect(searchField).toMatchSnapshot();
  });

  it('renders a disabled search field with a value', () => {
    const searchField = shallowWithIntl(<SearchField isDisabled />).dive();
    searchField.instance().updateSearchText('Test');

    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field that displays as a block to fill its container', () => {
    const searchField = shallowWithIntl(<SearchField isBlock />).dive();
    searchField.instance().updateSearchText('Test');

    expect(searchField).toMatchSnapshot();
  });

  it('passes in inputRefCallback as the refCallback prop of the Input component', () => {
    const inputRefCallback = jest.fn();
    const searchField = mountWithIntl(<SearchField inputRefCallback={inputRefCallback} />).children();
    expect(inputRefCallback).toBeCalled();
    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with an aria-label', () => {
    const searchField = shallowWithIntl(<SearchField inputAttributes={{ 'aria-label': 'Search Field' }} />).dive();
    expect(searchField).toMatchSnapshot();
  });

  it('renders a search field with an aria-label using prop', () => {
    const searchField = shallowWithIntl(<SearchField inputAttributes={{ ariaLabel: 'Search Field' }} />).dive();
    expect(searchField).toMatchSnapshot();
  });

  it('clears form with clear method', () => {
    const searchField = shallowWithIntl(<SearchField />).dive();
    searchField.instance().updateSearchText('amp');

    expect(searchField.instance().searchText).toBe('amp');
    searchField.instance().handleClear();
    expect(searchField.instance().searchText).toBe('');
  });
});

describe('Manual Search', () => {
  it('triggers search on button click', () => {
    const onSearch = jest.fn();
    const searchField = shallowWithIntl(<SearchField onSearch={onSearch} />).dive();
    searchField.instance().updateSearchText('Te');

    expect(onSearch).not.toBeCalled();
    searchField.childAt(1).simulate('click');
    expect(onSearch).toBeCalledWith('Te');
  });

  it('does not trigger search if default minimum search text has not been met', () => {
    const onSearch = jest.fn();
    const searchField = shallowWithIntl(<SearchField onSearch={onSearch} />).dive();
    searchField.setState({ searchText: 'T' });

    expect(onSearch).not.toBeCalled();
    searchField.childAt(1).simulate('click');
    expect(onSearch).not.toBeCalled();
  });

  it('does not trigger search if minimum search text has not been met', () => {
    const onSearch = jest.fn();
    const searchField = shallowWithIntl(<SearchField onSearch={onSearch} minimumSearchTextLength={5} />).dive();
    searchField.setState({ searchText: 'Sear' });

    expect(onSearch).not.toBeCalled();
    searchField.childAt(1).simulate('click');
    expect(onSearch).not.toBeCalled();
  });

  it('does not search when callback is not provided', () => {
    const searchField = shallowWithIntl(<SearchField minimumSearchTextLength={5} />).dive();
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
    const searchField = shallowWithIntl(<SearchField onSearch={onSearch} />).dive();

    searchField.find('.input').simulate('change', { target: { value: 'Te' } });

    expect(onSearch).not.toBeCalled();
    jest.runAllTimers();
    expect(onSearch).toBeCalledWith('Te');
  });

  it('only triggers one search if a manual search is triggered before automatic search', () => {
    const onSearch = jest.fn();
    const searchField = shallowWithIntl(<SearchField onSearch={onSearch} />).dive();

    searchField.find('.input').simulate('change', { target: { value: 'Te' } });

    expect(onSearch).not.toBeCalled();

    searchField.childAt(1).simulate('click');
    expect(onSearch).toBeCalledWith('Te');

    jest.runAllTimers();
    expect(onSearch.mock.calls.length).toBe(1);
  });

  it('does not trigger search if minimum text length is not met', () => {
    jest.useFakeTimers();
    const onSearch = jest.fn();
    const searchField = shallowWithIntl(<SearchField onSearch={onSearch} minimumSearchTextLength={5} />).dive();

    searchField.find('.input').simulate('change', { target: { value: 'Sear' } });

    expect(onSearch).not.toBeCalled();
    jest.runAllTimers();
    expect(onSearch).not.toBeCalled();
  });

  it('triggers onInvalidSearch if minimum text length is not met', () => {
    jest.useFakeTimers();
    const onSearch = jest.fn();
    const onInvalidSearch = jest.fn();
    const searchField = shallowWithIntl(<SearchField onSearch={onSearch} onInvalidSearch={onInvalidSearch} minimumSearchTextLength={5} />).dive();

    searchField.find('.input').simulate('change', { target: { value: 'Sear' } });

    jest.runAllTimers();
    expect(onSearch).not.toBeCalled();
    expect(onInvalidSearch).toBeCalledWith('Sear');
  });

  it('uses standard timeout for search delay when not provided', () => {
    const searchField = shallowWithIntl(<SearchField />).dive();

    searchField.find('.input').simulate('change', { target: {} });
    expect(setTimeout).toBeCalledWith(expect.anything(), 250);
  });

  it('uses custom timeout for search delay when provided', () => {
    const onSearch = jest.fn();
    const searchField = shallowWithIntl(<SearchField searchDelay={1000} onSearch={onSearch} />).dive();

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
    const searchField = shallowWithIntl(<SearchField onChange={onChange} />).dive();

    searchField.find('.input').simulate('change', { target: {} });
    expect(onChange).toBeCalled();

    searchField.find('.input').simulate('change', { target: {} });
    expect(onChange).toBeCalled();
  });
});
