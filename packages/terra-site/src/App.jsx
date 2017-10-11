/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Base from 'terra-base';
import SlidePanel from 'terra-slide-panel';
import ContentContainer from 'terra-content-container';
import List from 'terra-list';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import ThemeProvider from 'terra-theme-provider';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import styles from './site.scss';

import FormComponentNavigation from './examples/form/FormComponentNavigation';
import ListComponentNavigation from './examples/list/ListComponentNavigation';
import IconComponentNavigation from './examples/icon/IconComponentNavigation';

const propTypes = {
  children: PropTypes.node,
};

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const themes = {
  'Default Theme': '',
  'Consumer Theme': 'cerner-consumer-theme',
  'Mock Theme': 'cerner-mock-theme',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: window.innerWidth >= 768,
      dir: 'ltr',
      locale,
      theme: 'Default Theme',
    };
    this.handleBidiChange = this.handleBidiChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleResetScroll = this.handleResetScroll.bind(this);
  }

  handleBidiChange(e) {
    document.getElementsByTagName('html')[0].setAttribute('dir', e.currentTarget.id);
    this.setState({ dir: e.currentTarget.id });
  }

  handleLocaleChange(e) {
    this.setState({ locale: e.currentTarget.id });
  }

  handleThemeChange(e) {
    this.setState({ theme: e.currentTarget.id });
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
      <CollapsibleMenuView.Item icon={<IconMenu />} isIconOnly key="toggle-content" onClick={this.handleToggleClick} />
    );

    const bidiContent = (
      <CollapsibleMenuView.ItemGroup key="site-bidi" isSelectable dir="ltr" size="medium">
        <CollapsibleMenuView.Item id="ltr" text="ltr" key="ltr" isSelected={this.state.dir === 'ltr'} onClick={this.handleBidiChange} />
        <CollapsibleMenuView.Item id="rtl" text="rtl" key="rtl" isSelected={this.state.dir === 'rtl'} onClick={this.handleBidiChange} />
      </CollapsibleMenuView.ItemGroup>
    );

    const localeContent = (
      <CollapsibleMenuView.Item
        text={`Locale: ${this.state.locale}`}
        key="locale"
        menuWidth="160"
        shouldCloseOnClick={false}
        subMenuItems={[
          <CollapsibleMenuView.Item id="en" text="en" key="en" onClick={this.handleLocaleChange} />,
          <CollapsibleMenuView.Item id="en-GB" text="en-GB" key="en-GB" onClick={this.handleLocaleChange} />,
          <CollapsibleMenuView.Item id="en-US" text="en-US" key="en-US" onClick={this.handleLocaleChange} />,
          <CollapsibleMenuView.Item id="de" text="de" key="de" onClick={this.handleLocaleChange} />,
          <CollapsibleMenuView.Item id="es" text="es" key="es" onClick={this.handleLocaleChange} />,
          <CollapsibleMenuView.Item id="fr" text="fr" key="fr" onClick={this.handleLocaleChange} />,
          <CollapsibleMenuView.Item id="pt" text="pt" key="pt" onClick={this.handleLocaleChange} />,
          <CollapsibleMenuView.Item id="fi-FI" text="fi-FI" key="fi-FI" onClick={this.handleLocaleChange} />,
        ]}
      />
    );

    let themeSwitcher;

    function supportsCSSVars() {
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <CollapsibleMenuView.Item
          text={`Theme: ${this.state.theme}`}
          key="theme"
          menuWidth="160"
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item id="Default Theme" text="Default Theme" key="default" onClick={this.handleThemeChange} />,
            <CollapsibleMenuView.Item id="Consumer Theme" text="Consumer Theme" key="consumer" onClick={this.handleThemeChange} />,
            <CollapsibleMenuView.Item id="Mock Theme" text="Mock Theme" key="mock" onClick={this.handleThemeChange} />,
          ]}
        />
      );
    } else {
      themeSwitcher = (
        <CollapsibleMenuView.Item />
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
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/collapsible-menu-view">Collapsible Menu View</Link>} />
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
          <List.Item content={<IconComponentNavigation onClick={this.handleResetScroll} />} />
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
      <ThemeProvider id="site-content-section" themeName={themes[this.state.theme]} isGlobalTheme>
        <Base className={styles['site-content']} locale={this.state.locale}>
          {this.props.children}
        </Base>
      </ThemeProvider>
    );

    const applicationHeader = (
      <CollapsibleMenuView className={styles['site-header']}>
        {toggleContent}
        {themeSwitcher}
        {localeContent}
        <CollapsibleMenuView.Divider className={styles['site-header-divider']} />
        {bidiContent}
      </CollapsibleMenuView>
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
