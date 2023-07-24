import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import styles from './ShowHide.module.scss';

const cx = classNamesBind.bind(styles);

const paragraphPropTypes = {
  previewText: PropTypes.string,
  text: PropTypes.string.isRequired,
};

const addTrailingWhiteSpace = (str) => `${str.trim()} `;
const addHeadingWhiteSpace = (str) => ` ${str.trim()}`;

const truncate = (string) => {
  if (!string) {
    return null;
  }
  const text = string.trim();
  const maxLength = 150;
  if (text?.length <= maxLength) {
    return [text];
  }
  const lastFullWordEndPosition = text.slice(0, maxLength).lastIndexOf(' ');
  const first = text.slice(0, lastFullWordEndPosition)?.trim();
  const second = text.slice(lastFullWordEndPosition)?.trim();
  return [first, second];
};

const Paragraph = forwardRef((props, ref) => {
  const {
    previewText,
    text,
  } = props;

  const truncatedText = truncate(text);

  return (
    <>
      { previewText ? addTrailingWhiteSpace(previewText) : null }
      <span className={cx('text-divider')} />
      <span ref={ref}>{ truncatedText[0] }</span>
      <span className={cx('text-divider')} />
      { truncatedText[1] ? addHeadingWhiteSpace(truncatedText[1]) : null}
    </>
  );
});

Paragraph.propTypes = paragraphPropTypes;
export default Paragraph;
