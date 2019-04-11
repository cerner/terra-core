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

// Create a list of loaded languages, remove functions that aren't actaully languages.
const supportedLanguages = Object.keys(Prism.languages).filter(lang => !['extend', 'insertBefore', 'DFS'].includes(lang));

const highlight = (code, lang) => {
  if (supportedLanguages.includes(lang)) {
    return Prism.highlight(code, Prism.languages[lang], lang);
  }

  return null;
};

marked.setOptions({
  headerIds: false,
  highlight,
  langPrefix: 'codeblock language-',
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
    className={`${cx(['markdown'])} markdown-body`}
    dangerouslySetInnerHTML={{ __html: marked(props.src) }}
  />
);

Markdown.propTypes = propTypes;
Markdown.defaultProps = defaultProps;

export default Markdown;
