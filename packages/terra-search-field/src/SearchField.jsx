import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import * as KeyCode from 'keycode-js';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Input from 'terra-form-input';
import { injectIntl, intlShape } from 'react-intl';
import styles from './SearchField.module.scss';

const cx = classNames.bind(styles);

const Icon = <IconSearch />;

const propTypes = {
  /**
   * The defaultValue of the search field. Use this to create an uncontrolled search field.
   */
  defaultValue: PropTypes.string,

  /**
   * When true, will disable the auto-search.
   */
  disableAutoSearch: PropTypes.bool,

  /**
   * Callback ref to pass into the inner input component.
   */
  inputRefCallback: PropTypes.func,

  /**
   * Custom input attributes to apply to the input field such as aria-label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: PropTypes.object,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,

  /**
   * Whether or not the field should display as a block.
   */
  isBlock: PropTypes.bool,

  /**
   * When true, will disable the field.
   */
  isDisabled: PropTypes.bool,

  /**
   * The minimum number of characters to perform a search.
   */
  minimumSearchTextLength: PropTypes.number,

  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,

  /**
   * A callback to indicate an invalid search. Sends parameter {String} searchText.
   */
  onInvalidSearch: PropTypes.func,

  /**
   * A callback to perform search. Sends parameter {String} searchText.
   */
  onSearch: PropTypes.func,

  /**
   * Placeholder text to show while the search field is empty.
   */
  placeholder: PropTypes.string,

  /**
   * How long the component should wait (in milliseconds) after input before performing an automatic search.
   */
  searchDelay: PropTypes.number,

  /**
   * The value of search field.  Use this to create a controlled search field.
   */
  value: PropTypes.string,

  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onBlur: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onFocus: PropTypes.func,
};

const defaultProps = {
  defaultValue: undefined,
  disableAutoSearch: false,
  isBlock: false,
  isDisabled: false,
  minimumSearchTextLength: 2,
  placeholder: '',
  searchDelay: 250,
  value: undefined,
  inputAttributes: undefined,
};

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.handleClear = this.handleClear.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.setInputRef = this.setInputRef.bind(this);

    this.searchTimeout = null;
    this.clearInterval = null;
    this.state = { clearButton: this.inputRef && this.inputRef.value && !isDisabled };
  }

  componentWillUnmount() {
    this.clearSearchTimeout();
  }

  setInputRef(node) {
    this.inputRef = node;
    if (this.props.inputRefCallback) {
      this.props.inputRefCallback(node);
    }
  }

  handleClear(event) {
    // Pass along changes to consuming components using associated props
    if (this.props.onChange) {
      this.props.onChange(event, '');
    }

    if (this.props.onInvalidSearch) {
      this.props.onInvalidSearch('');
    }
    this.setState({ clearButton: false });

    // Clear input field
    if (this.inputRef) {
      this.inputRef.value = '';
      this.inputRef.focus();
    }
  }

  handleTextChange(event) {
    const textValue = event.target.value;

    if (this.props.onChange) {
      this.props.onChange(event, textValue);
    }

    if (!this.searchTimeout && !this.props.disableAutoSearch) {
      this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
    }
  }

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.handleSearch();
    }
    if (event.nativeEvent.keyCode === KeyCode.KEY_ESCAPE) {
      this.handleClear(event);
    }
  }

  handleFocus(event) {
    this.clearInterval = setInterval(() => {
      if(this.inputRef && !this.props.isDisabled) {
        if(this.inputRef.value && !this.state.clearButton) {
          this.setState({ clearButton: true });
          this.forceUpdate();
        }
        else if(!this.inputRef.value && this.state.clearButton) {
          this.setState({ clearButton: false });
          this.forceUpdate();
        }
      }
    }, 200);

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  handleBlur(event) {
    if (this.clearInterval) {
      clearInterval(this.clearInterval);
      this.clearInterval = null;
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleSearch() {
    this.clearSearchTimeout();

    const searchText = (this.inputRef && this.inputRef.value) || '';

    if (searchText.length >= this.props.minimumSearchTextLength && this.props.onSearch) {
      this.props.onSearch(searchText);
    } else if (this.props.onInvalidSearch) {
      this.props.onInvalidSearch(searchText);
    }
  }

  clearSearchTimeout() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = null;
    }
  }

  render() {
    const {
      defaultValue,
      disableAutoSearch,
      inputRefCallback,
      inputAttributes,
      intl,
      isBlock,
      isDisabled,
      minimumSearchTextLength,
      onBlur,
      onChange,
      onFocus,
      onInvalidSearch,
      onSearch,
      placeholder,
      searchDelay,
      value,
      ...customProps
    } = this.props;

    const searchFieldClassNames = cx([
      'search-field',
      { block: isBlock },
      customProps.className,
    ]);

    const inputText = inputAttributes && Object.prototype.hasOwnProperty.call(inputAttributes, 'aria-label') ? inputAttributes['aria-label'] : intl.formatMessage({ id: 'Terra.searchField.search' });

    const buttonText = intl.formatMessage({ id: 'Terra.searchField.submit-search' });
    const clearText = intl.formatMessage({ id: 'Terra.searchField.clear' });
    const additionalInputAttributes = { ...inputAttributes };
    const clearIcon = <span className={cx('clear-icon')} />;

    if (value !== undefined) {
      additionalInputAttributes.value = value;
    } else {
      additionalInputAttributes.defaultValue = defaultValue;
    }

    const clearButton = this.inputRef && this.inputRef.value && !isDisabled
      ? (
        <Button
          className={cx('clear')}
          onClick={this.handleClear}
          text={clearText}
          variant="utility"
          icon={clearIcon}
          isIconOnly
        />
      )
      : undefined;

    return (
      <div {...customProps} className={searchFieldClassNames}>
        <div className={cx('input-group')}>
          <Input
            className={cx('input')}
            type="search"
            placeholder={placeholder}
            onChange={this.handleTextChange}
            disabled={isDisabled}
            ariaLabel={inputText}
            aria-disabled={isDisabled}
            onKeyDown={this.handleKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            refCallback={this.setInputRef}
            {...additionalInputAttributes}
          />
          {clearButton}
        </div>
        <Button
          className={cx('button')}
          text={buttonText}
          onClick={this.handleSearch}
          isDisabled={isDisabled}
          icon={Icon}
          isIconOnly
          isCompact
        />
      </div>
    );
  }
}

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;

export default injectIntl(SearchField);
