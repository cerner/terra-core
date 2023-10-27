import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

const SelectableButton = () => {
  const [isSelected, setIsSelected] = useState(false);
  const button1 = useRef();
  const handleSelection = () => { setIsSelected(prevState => !prevState); };

  return (
    <div>
      <p>
        Status:
        {' '}
        {isSelected ? 'Selected' : 'Unselected'}
      </p>
      <Button id="button1" text="Click Me" className={cx('button')} isSelectable isSelected={isSelected} onClick={handleSelection} refCallback={(ref) => { button1.current = ref; }} />
      <br />
      <br />
      <Button text="Toggle" onClick={() => button1.current.click()} />
    </div>
  );
};

export default SelectableButton;
