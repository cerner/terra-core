/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Base from 'terra-base';
import Grid from 'terra-grid';
import List from 'terra-list';
import './site.scss';

const propTypes = {
  children: PropTypes.node,
};

const App = props => (
  <Base locale="en-US">
    <Grid>
      <Grid.Row>
        <Grid.Column small={2}>
          <div dir="ltr">
            <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} >ltr</button>
            <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} >rtl</button>
          </div>
          <List className="site-nav">
            <List.Item content={<Link to="/">Home</Link>} />
            <List.Item content={<Link to="/site/arrange">Arrange</Link>} />
            <List.Item content={<Link to="/site/base">Base</Link>} />
            <List.Item content={<Link to="/site/badge">Badge</Link>} />
            <List.Item content={<Link to="/site/button">Button</Link>} />
            <List.Item content={<Link to="/site/button-group">Button Group</Link>} />
            <List.Item content={<Link to="/site/content">Content</Link>} />
            <List.Item content={<Link to="/site/content-container">Content Container</Link>} />
            <List.Item content={<Link to="/site/datepicker">Date Picker</Link>} />
            <List.Item content={<Link to="/site/demographics-banner">Demographics Banner</Link>} />
            <List.Item content={<Link to="/site/grid">Grid</Link>} />
            <List.Item content={<Link to="/site/i18n">I18n</Link>} />
            <List.Item content={<Link to="/site/icon">Icon</Link>} />
            <List.Item content={<Link to="/site/image">Image</Link>} />
            <List.Item content={<Link to="/site/list">List</Link>} />
            <List.Item content={<Link to="/site/modal">Modal</Link>} />
            <List.Item content={<Link to="/site/progress-bar">Progress Bar</Link>} />
            <List.Item content={<Link to="/site/responsive-element">Responsive Element</Link>} />
            <List.Item content={<Link to="/site/slide-panel">Slide Panel</Link>} />
            <List.Item content={<Link to="/site/standout">Standout</Link>} />
            <List.Item content={<Link to="/site/status">Status</Link>} />
            <List.Item content={<Link to="/site/table">Table</Link>} />
            <List.Item content={<Link to="/site/title">Title</Link>} />
            <List.Item content={<Link to="/tests">Tests</Link>} />
          </List>
        </Grid.Column>
        <Grid.Column small={10}>
          {props.children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Base>
);

App.propTypes = propTypes;

export default App;
