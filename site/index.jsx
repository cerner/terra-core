import React from 'react';
import ReactDOM from 'react-dom';
import './site.scss';
// Examples
import ArrangeExamples from '../packages/terra-arrange/examples/index';
import ButtonExamples from '../packages/terra-button/examples/index';

const App = () => (
  <div>
    <div dir="ltr">
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} >ltr</button>
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} >rtl</button>
    </div>
    <ArrangeExamples />
    <ButtonExamples />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
