/* eslint-disable import/no-extraneous-dependencies */
import Base from 'terra-base';
import React from 'react';
import { Link } from 'react-router';
import './site.scss';

const propTypes = {
  children: React.PropTypes.node,
};

const App = props => (
  <Base>
    <div dir="ltr">
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} >ltr</button>
      <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} >rtl</button>
    </div>
    <ul dir="ltr">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/site/arrange">Arrange</Link></li>
      <li><Link to="/site/base">Base</Link></li>
      <li><Link to="/site/badge">Badge</Link></li>
      <li><Link to="/site/button">Button</Link></li>
      <li><Link to="/site/button-group">Button Group</Link></li>
      <li><Link to="/site/clinical-item-view">Clinical Item View</Link></li>
      <li><Link to="/site/content">Content</Link></li>
      <li><Link to="/site/detail-view">Detail View</Link></li>
      <li><Link to="/site/grid">Grid</Link></li>
      <li><Link to="/site/i18n">I18n</Link></li>
      <li><Link to="/site/icon">Icon</Link></li>
      <li><Link to="/site/image">Image</Link></li>
      <li><Link to="/site/list">List</Link></li>
      <li><Link to="/site/menu">Menu</Link></li>
      <li><Link to="/site/progress-bar">Progress Bar</Link></li>
      <li><Link to="/site/responsive-element">Responsive Element</Link></li>
      <li><Link to="/site/slide-panel">Slide Panel</Link></li>
      <li><Link to="/site/standout">Standout</Link></li>
      <li><Link to="/site/status">Status</Link></li>
      <li><Link to="/site/title">Title</Link></li>
      <li><Link to="/tests">Tests</Link></li>
    </ul>
    {props.children}
  </Base>
);

App.propTypes = propTypes;

export default App;
