import React from 'react';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Select from 'terra-form-select/lib/Select';
import Default from './UncontrolledCombobox.test';
import Incomplete from './IncompleteCombobox.test';
import Invalid from './InvalidCombobox.test';
import styles from './common/Select.test.module.scss';

const cx = classNamesBind.bind(styles);

const TestingWithBackgroundColor = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx(['sample-background-color', theme.className])}>
      <Default />
      <Incomplete />
      <Invalid />
      <Select
        isInvalid
        disabled
        placeholder="Select a color"
        id="disabled-with-value-invalid"
        defaultValue="green"
        variant="combobox"
        className={cx('content-wrapper')}
      >
        <Select.Option value="green" display="Green" />
      </Select>
      <Select
        disabled
        placeholder="Select a color"
        id="disabled-with-value"
        defaultValue="green"
        variant="combobox"
        className={cx('content-wrapper')}
      >
        <Select.Option value="green" display="Green" />
      </Select>
    </div>
  );
};

TestingWithBackgroundColor.contextType = ThemeContext;

export default TestingWithBackgroundColor;
