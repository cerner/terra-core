import React from 'react';
import ReactDOM from 'react-dom';
import './site.scss';
// Examples
import ButtonExamples from '../packages/terra-button/examples/index';

const App = () => (
  <div>
    <ButtonExamples />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
