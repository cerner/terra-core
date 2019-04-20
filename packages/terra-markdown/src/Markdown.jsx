import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-scss';
import styles from './Markdown.scss';

const cx = classNames.bind(styles);

// Create a list of loaded languages, remove functions that aren't actaully languages.
const supportedLanguages = Object.keys(Prism.languages).filter(lang => !['extend', 'insertBefore', 'DFS'].includes(lang));

// If the supported language is requested, highlight it.
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

const renderer = new marked.Renderer();

// Override how heading renders to add the anchor.
renderer.heading = (text, level) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return `<h${level}>`
          + `<a name="${escapedText}" class="anchor" aria-hidden="true" href="#${escapedText}">`
          + '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi octicon octicon-link"><path d="M10.5 26.3a16 16 0 0 1 .9-5.3L8 17.6a6.73 6.73 0 0 1-2-4.8A6.41 6.41 0 0 1 8 8a6.76 6.76 0 0 1 9.6 0l9 9a6.88 6.88 0 0 1 0 9.6 6.27 6.27 0 0 1-3.4 1.8 2.65 2.65 0 0 0 .5.6l4.1 4.1a11.36 11.36 0 0 0 3.1-2.3 12.8 12.8 0 0 0 0-18.1l-9-9a12.63 12.63 0 0 0-9-3.7 12.63 12.63 0 0 0-9 3.7A12.1 12.1 0 0 0 0 12.8a12.63 12.63 0 0 0 3.7 9l7 7a21.05 21.05 0 0 1-.2-2.5zm27-4.6a16 16 0 0 1-.9 5.3l3.4 3.4a6.79 6.79 0 1 1-9.6 9.6l-9-9a6.88 6.88 0 0 1 0-9.6 6.27 6.27 0 0 1 3.4-1.8 2.65 2.65 0 0 0-.5-.6l-4-4a11.36 11.36 0 0 0-3.1 2.3 12.8 12.8 0 0 0 0 18.1l9 9a12.73 12.73 0 0 0 18-18l-7-7a8 8 0 0 1 .3 2.3z"/></svg>'
          + '</a>'
          + `${text}`
          + `</h${level}>`;
};

const propTypes = {
  /**
   * Markdown content to parse.
   */
  src: PropTypes.string,
  /**
   * A prefix url for any relative link.
   */
  baseUrl: PropTypes.string,
  /**
   * Enable anchors for heading elements.
   */
  hasHeadingAnchors: PropTypes.bool,
};

const defaultProps = {
  src: '',
};

/* eslint react/no-danger:0 */
const Markdown = props => (
  <div
    dir="ltr"
    className={cx(['markdown'])}
    dangerouslySetInnerHTML={{
      __html: marked(props.src, {
        ...props.baseUrl && { baseUrl: props.baseUrl },
        ...props.hasHeadingAnchors && { renderer },
      }),
    }}
  />
);

Markdown.propTypes = propTypes;
Markdown.defaultProps = defaultProps;

export default Markdown;
