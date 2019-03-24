import React from 'react';
import Markdown from '../../../../lib/Markdown';
import ReadMe from '../../../../docs/README.md';

const MarkdownExample = () => (
  <Markdown src={ReadMe} />
);

export default MarkdownExample;
