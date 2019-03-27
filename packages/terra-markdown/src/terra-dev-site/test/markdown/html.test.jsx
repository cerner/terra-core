import React from 'react';
import Markdown from '../../../../lib/Markdown';
import markdown from './html.md';

const HtmlTest = () => (
  <Markdown src={markdown} />
);

export default HtmlTest;
