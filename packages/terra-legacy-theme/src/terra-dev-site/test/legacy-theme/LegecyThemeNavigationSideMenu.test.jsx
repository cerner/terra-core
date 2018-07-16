import React from 'react';
import '../../../scss/scoped-theme.scss';
import './LegacyThemeNavigationSideMenu.scss';

const NavigationSideMenuThemeExamples = () => (
  <div className="terra-legacy-theme legacy-theme-test">
    <div>
      <div className="legacy-nav-menu-list-padding-top" style={{ border: '1px dashed black' }}>
        <div style={{ border: '1px dashed black', height: '100%' }} />
      </div>
      <p>--terra-navigation-side-menu-list-padding-top: 0</p>
    </div>
    <div>
      <div className="legacy-nav-menu-list-background-color" />
      <p>--terra-navigation-side-menu-list-background-color: #434a4d</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-border-bottom" />
      <p>--terra-navigation-side-menu-list-item-border-bottom: 1px solid #000</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-color" />
      <p>--terra-navigation-side-menu-item-color: #dedfe0</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-chevron-color" />
      <p>--terra-navigation-side-menu-item-chevron-color: #dedfe0</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-hover-background-color" />
      <p>--terra-navigation-side-menu-item-hover-background-color: #434a4d</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-hover-color" style={{ border: '1px dashed black' }} />
      <p>--terra-navigation-side-menu-item-hover-color: #fff</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-selected-border-left" />
      <p>--terra-navigation-side-menu-item-selected-border-left: 0.5rem solid #78c346</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-selected-font-weight" style={{ padding: '5px', border: '1px dashed black' }}>
        Example
      </div>
      <p>--terra-navigation-side-menu-item-selected-font-weight: 400 </p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-selected-background-color" />
      <p>--terra-navigation-side-menu-item-selected-background-color: #1c1f21</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-selected-color" />
      <p>--terra-navigation-side-menu-item-selected-color: #78c346</p>
    </div>
    <div>
      <div className="legacy-nav-menu-item-selected-hover-color" style={{ border: '1px dashed black' }} />
      <p>--terra-navigation-side-menu-item-selected-hover-color: #fff</p>
    </div>
    <div>
      <div className="legacy-nav-menu-action-header-background-color" />
      <p>--terra-navigation-side-menu-action-header-background-color: #434a4d</p>
    </div>
    <div>
      <div className="legacy-nav-menu-action-header-border-bottom-color" />
      <p>--terra-navigation-side-menu-action-header-border-bottom-color: #000</p>
    </div>
    <div>
      <div className="legacy-nav-menu-action-header-color" />
      <p>--terra-navigation-side-menu-action-header-color: #dedfe0</p>
    </div>
  </div>
);

export default NavigationSideMenuThemeExamples;
