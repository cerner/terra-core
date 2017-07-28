/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Base from 'terra-base';
import Grid from 'terra-grid';
import List from 'terra-list';
import styles from './site.scss';

const propTypes = {
  children: PropTypes.node,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale,
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.target.value });
  }

  render() {
    return (
      <Base className={styles.app} locale={this.state.locale}>
        <Grid>
          <Grid.Row>
            <Grid.Column small={2}>
              <div dir="ltr">
                <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} >ltr</button>
                <button onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} >rtl</button>
              </div>
              <div>
                <label htmlFor="locale"> Current locale: {this.state.locale} </label>
                <select value={this.state.locale} onChange={this.handleLocaleChange}>
                  <option value="en">en</option>
                  <option value="en-GB">en-GB</option>
                  <option value="en-US">en-US</option>
                  <option value="de">de</option>
                  <option value="es">es</option>
                  <option value="fr">fr</option>
                  <option value="pt">pt</option>
                  <option value="fi-FI">fi-FI</option>
                </select>
              </div>
              <List className={styles['site-nav']}>
                <List.Item content={<Link to="/">Home</Link>} />
                <List.Item content={<Link to="/site/alert">Alert</Link>} />
                <List.Item content={<Link to="/site/app-delegate">App Delegate</Link>} />
                <List.Item content={<Link to="/site/arrange">Arrange</Link>} />
                <List.Item content={<Link to="/site/base">Base</Link>} />
                <List.Item content={<Link to="/site/badge">Badge</Link>} />
                <List.Item content={<Link to="/site/button">Button</Link>} />
                <List.Item content={<Link to="/site/button-group">Button Group</Link>} />
                <List.Item content={<Link to="/site/content-container">Content Container</Link>} />
                <List.Item content={<Link to="/site/datepicker">Date Picker</Link>} />
                <List.Item content={<Link to="/site/demographics-banner">Demographics Banner</Link>} />
                <List.Item content={<Link to="/site/form">Form</Link>} />
                <List.Item content={<Link to="/site/grid">Grid</Link>} />
                <List.Item content={<Link to="/site/heading">Heading</Link>} />
                <List.Item content={<Link to="/site/i18n">I18n</Link>} />
                <List.Item content={<Link to="/site/icon">Icon</Link>} />
                <List.Item content={<Link to="/site/image">Image</Link>} />
                <List.Item content={<Link to="/site/list">List</Link>} />
                <List.Item content={<Link to="/site/modal">Modal</Link>} />
                <List.Item content={<Link to="/site/modal-manager">Modal Manager</Link>} />
                <List.Item content={<Link to="/site/overlay">Overlay</Link>} />
                <List.Item content={<Link to="/site/popup">Popup</Link>} />
                <List.Item content={<Link to="/site/profile-image">Profile Image</Link>} />
                <List.Item content={<Link to="/site/progress-bar">Progress Bar</Link>} />
                <List.Item content={<Link to="/site/responsive-element">Responsive Element</Link>} />
                <List.Item content={<Link to="/site/search-field">Search Field</Link>} />
                <List.Item content={<Link to="/site/slide-group">Slide Group</Link>} />
                <List.Item content={<Link to="/site/slide-panel">Slide Panel</Link>} />
                <List.Item content={<Link to="/site/status">Status</Link>} />
                <List.Item content={<Link to="/site/table">Table</Link>} />
                <List.Item content={<Link to="/site/text">Text</Link>} />
                <List.Item content={<Link to="/site/time-input">Time Input</Link>} />
                <List.Item content={<Link to="/site/toggle">Toggle</Link>} />
                <List.Item content={<Link to="/site/toggle-button">Toggle Button</Link>} />
                <List.Item content={<Link to="/tests">Tests</Link>} />
              </List>
            </Grid.Column>
            <Grid.Column small={10}>
              {this.props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Base>
    );
  }
}

App.propTypes = propTypes;

export default App;
