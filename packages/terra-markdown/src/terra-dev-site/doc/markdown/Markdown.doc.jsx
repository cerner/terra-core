import React from 'react';
import Markdown from 'terra-markdown';
import classNames from 'classnames/bind';
import ReadMe from '../../../../docs/README.md';
import styles from './Markdown.module.scss';

const cx = classNames.bind(styles);

// We're not using the doc template here to avoid circular dependencies.
const MarkdownExample = () => (
  <div className={cx('markdown-wrapper')}>
    <Markdown src={ReadMe} />
  </div>
);

export default MarkdownExample;
