import React from 'react';
import Markdown from '../../../Markdown';
import MockREADME from './MockREADME.md';

const MockExample = () => (
  <div>
    <Markdown id="Markdown" src={MockREADME} />
  </div>
);

export default MockExample;
