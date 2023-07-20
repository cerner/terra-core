import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import styles from './_ShowHideParagraph.module.scss';

const cx = classNamesBind.bind(styles);

const paragraphPropTypes = {
  preview: PropTypes.string.isRequired,
  firstSentence: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const addTrailingWhiteSpace = (str) => `${str.trim()} `;
const addHeadingWhiteSpace = (str) => ` ${str.trim()}`;

const Paragraph = forwardRef((props, ref) => {
  const {
    preview,
    firstSentence,
    text,
  } = props;

  return (
    <p className={cx('paragraph')}>
      { addTrailingWhiteSpace(preview) }
      <span className={cx('text-divider')} />
      <span ref={ref}>{ firstSentence }</span>
      <span className={cx('text-divider')} />
      { text ? <span>{ addHeadingWhiteSpace(text) }</span> : null}
    </p>
  );
});

Paragraph.propTypes = paragraphPropTypes;
export default Paragraph;
