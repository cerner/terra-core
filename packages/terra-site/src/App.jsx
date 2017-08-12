/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Base from 'terra-base';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import SlidePanel from 'terra-slide-panel';
import ContentContainer from 'terra-content-container';
import List from 'terra-list';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import styles from './site.scss';

import FormComponentNavigation from './examples/form/FormComponentNavigation';

const propTypes = {
  children: PropTypes.node,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class App extends React.Component {
  static resetScroll() {
    document.getElementById('site-content-section').scrollTop = 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      locale,
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.target.value });
  }

  handleToggleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const toggleContent = (
      <Button className={styles['site-toggle']} icon={<IconMenu />} onClick={this.handleToggleClick} />
    );

    const bidiContent = (
      <ButtonGroup
        className={styles['site-bidi']}
        dir="ltr"
        size="medium"
        isSelectable
        buttons={[
          <ButtonGroup.Button isSelected text="ltr" key="ltr" onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr')} />,
          <ButtonGroup.Button text="rtl" key="rtl" onClick={() => document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl')} />,
        ]}
      />
    );

    const localeContent = (
      <div className={styles['site-locale']}>
        <label htmlFor="locale"> Locale: </label>
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
    );

    const panelContent = (
      <div className={styles['site-panel']}>
        <List className={styles['site-nav']}>
          <List.Item content={<Link onClick={App.resetScroll} to="/">Home</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/alert">Alert</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/app-delegate">App Delegate</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/arrange">Arrange</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/base">Base</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/badge">Badge</Link>} />
          <List.Item content={<Link to="/site/button">Button</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/button-group">Button Group</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/content-container">Content Container</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/datepicker">Date Picker</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/demographics-banner">Demographics Banner</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/form">Form</Link>} />
          <List.Item content={<FormComponentNavigation onClick={App.resetScroll} />} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/grid">Grid</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/heading">Heading</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/i18n">I18n</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/icon">Icon</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/image">Image</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/list">List</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/modal">Modal</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/modal-manager">Modal Manager</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/overlay">Overlay</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/popup">Popup</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/profile-image">Profile Image</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/progress-bar">Progress Bar</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/responsive-element">Responsive Element</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/search-field">Search Field</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/slide-group">Slide Group</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/slide-panel">Slide Panel</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/status">Status</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/table">Table</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/text">Text</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/time-input">Time Input</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/toggle">Toggle</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/site/toggle-button">Toggle Button</Link>} />
          <List.Item content={<Link onClick={App.resetScroll} to="/tests">Tests</Link>} />
        </List>
      </div>
    );

    const mainContent = (
      <div id="site-content-section" className={styles['site-content']}>
        {this.props.children}
      </div>
    );

    const utilityContent = (
      <div className={styles['site-utility']}>
        {localeContent}
        {bidiContent}
      </div>
    );

    const applicationHeader = (
      <div className={styles['site-header']}>
        {toggleContent}
        {utilityContent}
      </div>
    );

    return (
      <Base className={styles.app} locale={this.state.locale}>
        <ContentContainer header={applicationHeader} fill>
          <SlidePanel
            mainContent={mainContent}
            panelContent={panelContent}
            panelBehavior="squish"
            panelPosition="start"
            panelSize="small"
            isOpen={this.state.isOpen}
            fill
          />
        </ContentContainer>
      </Base>
    );
  }
}

App.propTypes = propTypes;

export default App;
