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
import ThemeProvider from 'terra-theme-provider';
import styles from './site.scss';

import FormComponentNavigation from './examples/form/FormComponentNavigation';
import ListComponentNavigation from './examples/list/ListComponentNavigation';

const propTypes = {
  children: PropTypes.node,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: window.innerWidth >= 768,
      locale,
      theme: '',
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleResetScroll = this.handleResetScroll.bind(this);
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.target.value });
  }

  handleThemeChange(e) {
    this.setState({ theme: e.target.value });
  }

  handleToggleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleResetScroll() {
    const element = document.getElementById('site-content-section');
    if (element && element.parentNode) {
      element.parentNode.scrollTop = 0;
    }
    if (window.innerWidth < 768) {
      this.setState({ isOpen: false });
    }
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

    let themeSwitcher;

    function supportsCSSVars() {
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <div className={styles['site-theme']}>
          <label htmlFor="theme"> Theme: </label>
          <select value={this.state.theme} onChange={this.handleThemeChange}>
            <option value="">Default Theme</option>
            <option value="cerner-consumer-theme">Consumer Theme</option>
            <option value="cerner-mock-theme">Mock Theme</option>
          </select>
        </div>
      );
    } else {
      themeSwitcher = (
        <div />
      );
    }

    const navHeader = (
      <div className={styles['site-nav-header']}>
        <Link onClick={this.handleResetScroll} to="/">Home</Link>
      </div>
    );

    const panelContent = (
      <ContentContainer header={navHeader} className={styles['site-panel']} fill>
        <List className={styles['site-nav']}>
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/alert">Alert</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/app-delegate">App Delegate</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/arrange">Arrange</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/base">Base</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/badge">Badge</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/button">Button</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/button-group">Button Group</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/card">Card</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/collapsible-menu-view">Collapsilbe Menu View</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/content-container">Content Container</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/datepicker">Date Picker</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/demographics-banner">Demographics Banner</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/dynamic-grid">Dynamic Grid</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/embedded-content-consumer">Embedded Content Consumer</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/form">Form</Link>} />
          <List.Item content={<FormComponentNavigation onClick={this.handleResetScroll} />} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/grid">Grid</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/heading">Heading</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/i18n">I18n</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/icon">Icon</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/image">Image</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/list">List</Link>} />
          <List.Item content={<ListComponentNavigation onClick={this.handleResetScroll} />} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/menu">Menu</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/modal">Modal</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/modal-manager">Modal Manager</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/overlay">Overlay</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/popup">Popup</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/profile-image">Profile Image</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/progress-bar">Progress Bar</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/responsive-element">Responsive Element</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/search-field">Search Field</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/signature">Signature</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/slide-group">Slide Group</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/slide-panel">Slide Panel</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/status">Status</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/table">Table</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/text">Text</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/theme-provider">Theme Provider</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/time-input">Time Input</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/toggle">Toggle</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/toggle-button">Toggle Button</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/tests">Tests</Link>} />
        </List>
      </ContentContainer>
    );

    // Moved Base to wrap the main content, as i18nProvider inserts an unstyled div that ruins layout if placed higher.
    // Might consider enablling styling for Base, or evaluate if multipe Bases are viable.
    const mainContent = (
      <ThemeProvider id="site-content-section" themeName={this.state.theme} isGlobalTheme>
        <Base className={styles['site-content']} locale={this.state.locale}>
          {this.props.children}
        </Base>
      </ThemeProvider>
    );

    const utilityContent = (
      <div className={styles['site-utility']}>
        {themeSwitcher}
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
      <ContentContainer className={styles.app} header={applicationHeader} fill>
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
    );
  }
}

App.propTypes = propTypes;

export default App;
