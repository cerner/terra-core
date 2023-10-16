import React, { useState } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonIsSelected = () => {
  const [text, setText] = useState('Unselected');

  const handleSelection = (event, toggledState) => {
    if (toggledState) {
      setText('Selected');
    } else {
      setText('Unselected');
    }
  };

  return (
    <div>
      <p>
        Status:
        {' '}
        {text}
      </p>
      <Button text="Click Me" className={cx('button')} isSelectable onChange={handleSelection} />
    </div>
  );
};

export default ButtonIsSelected;
