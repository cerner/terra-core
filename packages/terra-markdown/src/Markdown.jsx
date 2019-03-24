import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-scss';
/* github-markdown-css's main entry in package.json resolves to a CSS file and this seems to be causing issues with eslint */
/* eslint-disable import/extensions */
import 'github-markdown-css/github-markdown.css';
/* eslint-enable import/extensions */
import styles from './Markdown.scss';

const cx = classNames.bind(styles);

const supportedLanguages = [
  'clike',
  'css',
  'diff',
  'html',
  'javascript',
  'js',
  'jsx',
  'markup',
  'mathml',
  'scss',
  'svg',
  'xml',
];

const highlight = (code, lang) => {
  let language = lang;
  if (!supportedLanguages.includes(language)) {
    language = 'clike';
  }

  return Prism.highlight(code, Prism.languages[language], language);
};

marked.setOptions({
  headerIds: false,
  highlight,
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

/* eslint react/no-danger:0 */
const Markdown = props => (
  <div
    dir="ltr"
    className={`${cx(['terra-markdown'])} markdown-body`}
    style={{ listStyle: 'disc outside none' }}
    dangerouslySetInnerHTML={{ __html: marked(props.src) }}
  />
);

Markdown.propTypes = propTypes;
Markdown.defaultProps = defaultProps;

export default Markdown;
