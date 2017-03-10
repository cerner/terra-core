import React from 'react';
import Markdown from 'terra-markdown';
import ReadMe from '../README.md';

const Home = () => (
  <Markdown src={ReadMe} />
);

export default Home;
