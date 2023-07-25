import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import styles from './ShowHide.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The main portion of the text that will start with focused text
   */
  text: PropTypes.string.isRequired,
  /**
   * The portion of the text that will be displayed before the focused text
   */
  previewText: PropTypes.string,
};

/**
 * @param str - string value
 * @returns a trimmed string with trailing white space added
 */
const addTrailingWhiteSpace = (str) => `${str.trim()} `;

/**
 * @param str - string value
 * @returns a trimmed string with preceding whitespace added
 */
const addHeadingWhiteSpace = (str) => ` ${str.trim()}`;

/**
 * This method splits the string in two portions without splitting words. The first (focusable) portion's length should not exceed max length for assistive technologies in the text mode being able to use Arrow Up?Down correctly.
 * @param string - the text
 * @returns the array of strings, where the first value is short focusable string and the second value is the rest of the string (if such exists)
 */
const truncate = (string) => {
  if (!string) {
    return null;
  }
  const text = string.trim();
  const maxLength = 155;
  if (text?.length < maxLength) {
    return [text];
  }
  const lastFullWordEndPosition = text.slice(0, maxLength).lastIndexOf(' ');
  const first = text.slice(0, lastFullWordEndPosition)?.trim();
  const second = text.slice(lastFullWordEndPosition)?.trim();
  return [first, second];
};

/**
 * This component splits the text with dividing spans to allow the assistive technologies focus on the part of the text
 */
const Paragraph = forwardRef((props, ref) => {
  const {
    previewText,
    text,
  } = props;

  const truncatedText = truncate(text);
  const [focusable, setFocusable] = useState(true);

  return (
    <>
      {previewText ? addTrailingWhiteSpace(previewText) : null}
      <span className={cx('text-divider')} />
      <span
        ref={ref}
        tabIndex={focusable ? '-1' : null}
        role={focusable ? 'group' : null}
        onBlur={() => setFocusable(false)}
      >
        {truncatedText[0]}
      </span>
      <span className={cx('text-divider')} />
      {truncatedText[1] ? addHeadingWhiteSpace(truncatedText[1]) : null}
    </>
  );
});

Paragraph.propTypes = propTypes;
export default Paragraph;
