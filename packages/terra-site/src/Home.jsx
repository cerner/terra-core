import React from 'react';
import Markdown from '../../../packages/terra-markdown/src/Markdown';
import ReadMe from '../README.md';

const Home = () => (
  <Markdown src={ReadMe} />
);

export default Home;
