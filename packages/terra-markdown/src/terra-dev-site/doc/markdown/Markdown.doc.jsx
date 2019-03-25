import React from 'react';
import Markdown from '../../../../lib/Markdown';
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
