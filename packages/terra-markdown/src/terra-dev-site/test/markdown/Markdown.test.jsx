import React from 'react';
import Markdown from '../../../../lib/Markdown';

const markdownSrc = `### Test
> This is a quote.`;

const MarkdownTest = () => (
  <Markdown src={markdownSrc} />
);

export default MarkdownTest;
