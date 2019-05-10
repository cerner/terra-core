import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Markdown from 'terra-markdown/lib/Markdown';
import ReadMe from '../../../../docs/README.md';

// We're not using the doc template here to avoid circular dependencies.
const style = {
  height: '100%',
  overflow: 'auto',
  padding: '15px',
  position: 'relative',
};

const MarkdownExample = () => (
  <div style={style}>
    <Markdown src={ReadMe} />
  </div>
);

export default MarkdownExample;
