import React from 'react';
import { Link } from 'react-router';
import './site.scss';

const propTypes = {
  children: React.PropTypes.node,
};

const App = props => (
  <div>
    <div dir="ltr">
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} >ltr</button>
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} >rtl</button>
    </div>
    <ul dir="ltr">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/arrange/">Arrange</Link></li>
      <li><Link to="/button/">Buttons</Link></li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = propTypes;

export default App;
