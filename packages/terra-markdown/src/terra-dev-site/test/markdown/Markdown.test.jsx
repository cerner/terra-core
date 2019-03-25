import React from 'react';
import Markdown from '../../../../lib/Markdown';
import MockReadMe from './MockREADME.md';

const MarkdownTest = () => (
  <Markdown src={MockReadMe} />
);

export default MarkdownTest;
