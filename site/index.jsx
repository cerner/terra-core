import React from 'react';
import ReactDOM from 'react-dom';
import './site.scss';
// Examples
import ButtonExamples from '../packages/terra-button/examples/index';

const App = () => (
  <div>
    <bdo dir="ltr">
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute( 'dir', 'ltr' )} >ltr</button>
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute( 'dir', 'rtl' )} >rtl</button>
    </bdo>
    <ButtonExamples />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
