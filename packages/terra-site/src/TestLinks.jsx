/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';
import styles from './site.scss';

const TestLinks = () => (
  <div className={styles.app} >
    <ul className={styles['site-nav']}>
      <li><Link to="/tests/alert-tests">Alert Tests</Link></li>
      <li><Link to="/tests/arrange-tests">Arrange Tests</Link></li>
      <li><Link to="/tests/badge-tests">Badge Tests</Link></li>
      <li><Link to="/tests/base-tests">Base Tests</Link></li>
      <li><Link to="/tests/button-group-tests">Button Group Tests</Link></li>
      <li><Link to="/tests/button-tests">Button Tests</Link></li>
      <li><Link to="/tests/content-container-tests">ContentContainer Tests</Link></li>
      <li><Link to="/tests/date-picker-tests">DatePicker Tests</Link></li>
      <li><Link to="/tests/demographics-banner-tests">DemographicsBanner Tests</Link></li>
      <li><Link to="/tests/form-tests">Form Tests</Link></li>
      <li><Link to="/tests/grid-tests">Grid Tests</Link></li>
      <li><Link to="/tests/heading-tests">Heading Tests</Link></li>
      <li><Link to="/tests/i18n-tests">I18n Tests</Link></li>
      <li><Link to="/tests/icon-tests">Icon Tests</Link></li>
      <li><Link to="/tests/image-tests">Image Tests</Link></li>
      <li><Link to="/tests/list-item-tests">ListItem Tests</Link></li>
      <li><Link to="/tests/list-tests">List Tests</Link></li>
      <li><Link to="/tests/loading-overlay-tests">LoadingOverlay Tests</Link></li>
      <li><Link to="/tests/modal-tests">Modal Tests</Link></li>
      <li><Link to="/tests/modal-manager-tests">Modal Manager Tests</Link></li>
      <li><Link to="/tests/multi-select-list-tests">MultiSelectList Tests</Link></li>
      <li><Link to="/tests/overlay-tests">Overlay Tests</Link></li>
      <li><Link to="/tests/overlay-container-tests">OverlayContainer Tests</Link></li>
      <li><Link to="/tests/popup-tests">Popup Tests</Link></li>
      <li><Link to="/tests/profile-image-tests">Profile Image Tests</Link></li>
      <li><Link to="/tests/progress-bar-tests">ProgressBar Tests</Link></li>
      <li><Link to="/tests/responsive-element-tests">ResponsiveElement Tests</Link></li>
      <li><Link to="/tests/search-field-tests">Search Field</Link></li>
      <li><Link to="/tests/single-select-list-tests">SingleSelectList Tests</Link></li>
      <li><Link to="/tests/slide-group-tests">SlideGroup Tests</Link></li>
      <li><Link to="/tests/slide-panel-tests">SlidePanel Tests</Link></li>
      <li><Link to="/tests/status-tests">Status Tests</Link></li>
      <li><Link to="/tests/table-tests">Table Tests</Link></li>
      <li><Link to="/tests/text-tests">Text Tests</Link></li>
      <li><Link to="/tests/time-input-tests">Time Input Tests</Link></li>
      <li><Link to="/tests/toggle-tests">Toggle Tests</Link></li>
      <li><Link to="/tests/toggle-button-tests">Toggle Button Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
