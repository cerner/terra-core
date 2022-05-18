import React from 'react';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import Default from './Default.test';
import Incomplete from './Incomplete.test';
import Invalid from './Invalid.test';
import Disabled from './Disabled.test';
import styles from '../common/Select.test.module.scss';
import styles2 from './NativeSelectTest.module.scss';

const cx = classNamesBind.bind(styles);
const cx2 = classNamesBind.bind(styles2);

const TestingWithBackgroundColor = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx(['sample-background-color', theme.className])}>
      <Default />
      <Incomplete />
      <Invalid />
      <div className={cx2('test-shell')}>
        <NativeSelect
          isInvalid
          disabled
          ariaLabel="Invalid Test"
          id="disabled-with-value-invalid"
          defaultValue="saab"
          options={[
            { value: 'saab', display: 'Saab' },
          ]}
        />
      </div>
      <Disabled />
    </div>
  );
};

TestingWithBackgroundColor.contextType = ThemeContext;

export default TestingWithBackgroundColor;
