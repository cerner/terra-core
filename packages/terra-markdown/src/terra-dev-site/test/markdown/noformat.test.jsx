import React from 'react';
import Markdown from '../../../../lib/Markdown';
import markdown from './noformat.md';

const NoformatTest = () => (
  <Markdown src={markdown} />
);

export default NoformatTest;
