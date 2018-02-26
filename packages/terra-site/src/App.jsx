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
import TableComponentNavigation from './examples/table/TableComponentNavigation';

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

  handleBidiChange(e, selectedKey) {
    document.getElementsByTagName('html')[0].setAttribute('dir', selectedKey);
    this.setState({ dir: selectedKey });
  }

  handleLocaleChange(e, selectedKey) {
    this.setState({ locale: selectedKey });
  }

  handleThemeChange(e, selectedKey) {
    this.setState({ theme: selectedKey });
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
      <CollapsibleMenuView.Item icon={<IconMenu />} text="Toggle Sidebar" isIconOnly key="toggle-content" onClick={this.handleToggleClick} />
    );

    const bidiContent = (
      <CollapsibleMenuView.ItemGroup key="site-bidi" dir="ltr" size="medium" selectedKeys={[this.state.dir]} onChange={this.handleBidiChange}>
        <CollapsibleMenuView.Item id="ltr" text="ltr" key="ltr" isSelected={this.state.dir === 'ltr'} />
        <CollapsibleMenuView.Item id="rtl" text="rtl" key="rtl" isSelected={this.state.dir === 'rtl'} />
      </CollapsibleMenuView.ItemGroup>
    );

    const localeContent = (
      <CollapsibleMenuView.Item
        text={`Locale: ${this.state.locale}`}
        key="locale"
        menuWidth="160"
        shouldCloseOnClick={false}
        subMenuItems={[
          <CollapsibleMenuView.ItemGroup key="local-options" selectedKeys={[this.state.locale]} onChange={this.handleLocaleChange} >
            <CollapsibleMenuView.Item id="en" text="en" key="en" isSelected={this.state.locale === 'en'} />
            <CollapsibleMenuView.Item id="en-GB" text="en-GB" key="en-GB" isSelected={this.state.locale === 'en-GB'} />
            <CollapsibleMenuView.Item id="en-US" text="en-US" key="en-US" isSelected={this.state.locale === 'en-US'} />
            <CollapsibleMenuView.Item id="de" text="de" key="de" isSelected={this.state.locale === 'de'} />
            <CollapsibleMenuView.Item id="es" text="es" key="es" isSelected={this.state.locale === 'es'} />
            <CollapsibleMenuView.Item id="fr" text="fr" key="fr" isSelected={this.state.locale === 'fr'} />
            <CollapsibleMenuView.Item id="pt" text="pt" key="pt" isSelected={this.state.locale === 'pt'} />
            <CollapsibleMenuView.Item id="fi-FI" text="fi-FI" key="fi-FI" isSelected={this.state.locale === 'fi-FI'} />
          </CollapsibleMenuView.ItemGroup>,
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
            <CollapsibleMenuView.ItemGroup key="theme-options" selectedKeys={[this.state.theme]} onChange={this.handleThemeChange} >
              <CollapsibleMenuView.Item id="Default Theme" text="Default Theme" key="Default Theme" isSelected={this.state.theme === 'Default Theme'} />
              <CollapsibleMenuView.Item id="Consumer Theme" text="Consumer Theme" key="Consumer Theme" isSelected={this.state.theme === 'Consumer Theme'} />
              <CollapsibleMenuView.Item id="Mock Theme" text="Mock Theme" key="Mock Theme" isSelected={this.state.theme === 'Mock Theme'} />
            </CollapsibleMenuView.ItemGroup>,
          ]}
        />
      );
    } else {
      themeSwitcher = <div />;
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
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/arrange">Arrange</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/base">Base</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/badge">Badge</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/button">Button</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/button-group">Button Group</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/card">Card</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/collapsible-menu-view">Collapsible Menu View</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/content-container">Content Container</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/datepicker">Date Picker</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/date-time-picker">Date Time Picker</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/demographics-banner">Demographics Banner</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/dialog">Dialog</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/divider">Divider</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/dynamic-grid">Dynamic Grid</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/embedded-content-consumer">Embedded Content Consumer</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/form">Form</Link>} />
          <List.Item content={<FormComponentNavigation onClick={this.handleResetScroll} />} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/form-checkbox">Form Checkbox</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/form-textarea">Form Textarea</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/form-field">Form Field</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/form-input">Form Input</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/form-radio">Form Radio</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/select">Form Select</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/grid">Grid</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/heading">Heading</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/hookshot">Hookshot</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/i18n">I18n</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/icon">Icon</Link>} />
          <List.Item content={<IconComponentNavigation onClick={this.handleResetScroll} />} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/image">Image</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/list">List</Link>} />
          <List.Item content={<ListComponentNavigation onClick={this.handleResetScroll} />} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/menu">Menu</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/modal">Modal</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/overlay">Overlay</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/popup">Popup</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/profile-image">Profile Image</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/progress-bar">Progress Bar</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/responsive-element">Responsive Element</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/search-field">Search Field</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/section-header">Section Header</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/signature">Signature</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/slide-group">Slide Group</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/slide-panel">Slide Panel</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/spacer">Spacer</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/status">Status</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/status-view">Status View</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/table">Table</Link>} />
          <List.Item content={<TableComponentNavigation onClick={this.handleResetScroll} />} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/tabs">Tabs</Link>} />
          <List.Item content={<Link onClick={this.handleResetScroll} to="/site/text">Text</Link>} />
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
      <div className={styles['site-header']}>
        <CollapsibleMenuView className={styles['site-collapsible']}>
          {toggleContent}
          {themeSwitcher}
          {localeContent}
          <CollapsibleMenuView.Divider />
          {bidiContent}
        </CollapsibleMenuView>
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
