import React from 'react';
import classNames from 'classnames/bind';
import Signature from 'terra-signature';
import PropTypes from 'prop-types';
import styles from './SignatureExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = { onClearSignature: PropTypes.func, onAddSignature: PropTypes.func };

const TextSignature = (props) => {
  const [showTextArea, setshowTextArea] = React.useState(true);
  const textArea = React.useRef();

  const handleClear = () => {
    if (showTextArea) {
      if (textArea && textArea.current) textArea.current.value = null;
      return;
    }
    const canvas = document.getElementById('text');
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      ctx.font = '30px Arial';
      ctx.clearRect(0, 0, 1000, 100);
    }
    if (textArea && textArea.current) textArea.current.value = null;
    setshowTextArea(true);
    props.onClearSignature();
  };

  const handleAdd = () => {
    if (textArea && textArea.current.value) {
      const canvas = document.getElementById('text');
      const ctx = canvas?.getContext('2d');
      if (ctx && canvas) {
        ctx.font = '30px Arial';
        ctx.fillText(textArea.current.value, 100, 50);
        canvas.setAttribute('aria-label', textArea.current.value);
        setshowTextArea(false);
        props.onAddSignature(true);
      }
    }
  };

  return (
    <div>
      <div className={cx('signature-wrapper')}>
        {(showTextArea) ? <textarea aria-label="Enter Name" ref={(node) => { textArea.current = node; }} className={cx('text-area-style')} /> : null}
        <Signature id="text" />
      </div>
      <br />
      <div className={cx('clear-button')}>
        <button type="button" onClick={handleClear}>Clear</button>
        <button className={cx('add-button')} type="button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};
TextSignature.propTypes = propTypes;
export default TextSignature;
