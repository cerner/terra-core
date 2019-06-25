import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Markdown from 'terra-markdown/lib/Markdown';
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
