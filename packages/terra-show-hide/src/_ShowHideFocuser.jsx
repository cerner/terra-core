import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import styles from './ShowHide.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Text that precedes the focusable portion.
   */
  focusableText: PropTypes.string.isRequired,
  /**
   * The portion of the text that gets focus once the hidden portion is disclosed to be announced by assistive technologies
   */
  prefix: PropTypes.string,
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
const Focuser = forwardRef((props, ref) => {
  const {
    prefix,
    focusableText,
  } = props;

  const truncatedText = truncate(focusableText);
  const [focusable, setFocusable] = useState(true);

  const id = uuidv4();
  const refId = `focus-ref-${id}`;

  return (
    <>
      {prefix ? addTrailingWhiteSpace(prefix) : null}
      {/* this divider starts a new 'line' for JAWS when reading line-by-line */}
      <span className={cx('text-divider')} />
      <span
        id={refId}
        ref={ref}
        tabIndex={focusable ? '-1' : null}
        role={focusable ? 'group' : null}
        onBlur={() => setFocusable(false)}
      >
        {truncatedText[0]}
      </span>
      {/* this divider ends a line for JAWS when reading line-by-line */}
      <span className={cx('text-divider')} />
      {truncatedText[1] ? addHeadingWhiteSpace(truncatedText[1]) : null}
    </>
  );
});

Focuser.propTypes = propTypes;
export default Focuser;
