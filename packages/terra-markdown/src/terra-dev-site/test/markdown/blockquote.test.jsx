import React from 'react';
import Markdown from '../../../../lib/Markdown';
import markdown from './blockquote.md';

const MarkdownTest = () => (
  <Markdown src={markdown} />
);

export default MarkdownTest;
