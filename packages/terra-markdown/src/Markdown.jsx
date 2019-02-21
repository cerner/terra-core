import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import marked from 'marked';
/* github-markdown-css's main entry in package.json resolves to a CSS file and this seems to be causing issues with eslint */
/* eslint-disable import/extensions */
import 'github-markdown-css/github-markdown.css';
/* eslint-enable import/extensions */
import styles from './Markdown.scss';

const cx = classNames.bind(styles);

marked.setOptions({
  headerIds: false,
});

const propTypes = {
  /**
   * Markdown content to parse
   */
  src: PropTypes.string,
};

const defaultProps = {
  src: '',
};

const markdownClasses = cx([
  'markdown-body',
]);


/* eslint react/no-danger:0 */
const Markdown = props => (
  <div
    dir="ltr"
    className={markdownClasses}
    style={{ listStyle: 'disc outside none' }}
    dangerouslySetInnerHTML={{ __html: marked(props.src) }}
  />
);

Markdown.propTypes = propTypes;
Markdown.defaultProps = defaultProps;

export default Markdown;
