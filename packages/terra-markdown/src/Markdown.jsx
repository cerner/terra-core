import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import 'github-markdown-css';
import './Markdown.scss';

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
    className={'markdown-body'}
    style={{ listStyle: 'initial' }}
    dangerouslySetInnerHTML={{ __html: marked(props.src) }}
  />
);

Markdown.propTypes = propTypes;
Markdown.defaultProps = defaultProps;

export default Markdown;
