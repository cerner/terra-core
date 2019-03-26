import React from 'react';
import Markdown from '../../../../lib/Markdown';
import markdown from './diff.md';

const DiffTest = () => (
  <Markdown src={markdown} />
);

export default DiffTest;
