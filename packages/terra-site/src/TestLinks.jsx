/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';
import styles from './site.scss';

const TestLinks = () => (
  <div className={styles.app} style={{ overflow: 'auto' }}>
    <ul className={styles['site-nav']}>
      <li><Link to="/tests/alert-tests">Alert Tests</Link></li>
      <li><Link to="/tests/arrange-tests">Arrange Tests</Link></li>
      <li><Link to="/tests/badge-tests">Badge Tests</Link></li>
      <li><Link to="/tests/base-tests">Base Tests</Link></li>
      <li><Link to="/tests/button-group-tests">Button Group Tests</Link></li>
      <li><Link to="/tests/button-tests">Button Tests</Link></li>
      <li><Link to="/tests/card-tests">Card Tests</Link></li>
      <li><Link to="/tests/collapsible-menu-view-tests">Collapsible Menu View</Link></li>
      <li><Link to="/tests/content-container-tests">ContentContainer Tests</Link></li>
      <li><Link to="/tests/date-picker-tests">DatePicker Tests</Link></li>
      <li><Link to="/tests/date-time-picker-tests">DateTimePicker Tests</Link></li>
      <li><Link to="/tests/demographics-banner-tests">DemographicsBanner Tests</Link></li>
      <li><Link to="/tests/divider-tests">Divider Tests</Link></li>
      <li><Link to="/tests/dynamic-grid-tests">Dynamic Grid Tests</Link></li>
      <li><Link to="/tests/embedded-content-consumer-tests">EmbeddedContentConsumer Tests</Link></li>
      <li><Link to="/tests/form-tests">Form Tests</Link></li>
      <li><Link to="/tests/form-field-tests">Form Field Tests</Link></li>
      <li><Link to="/tests/form-textarea-tests">Form Textarea Tests</Link></li>
      <li><Link to="/tests/grid-tests">Grid Tests</Link></li>
      <li><Link to="/tests/heading-tests">Heading Tests</Link></li>
      <li><Link to="/tests/hookshot-tests">Hookshot Tests</Link></li>
      <li><Link to="/tests/i18n-tests">I18n Tests</Link></li>
      <li><Link to="/tests/icon-tests">Icon Tests</Link></li>
      <li><Link to="/tests/image-tests">Image Tests</Link></li>
      <li><Link to="/tests/list-item-tests">ListItem Tests</Link></li>
      <li><Link to="/tests/list-tests">List Tests</Link></li>
      <li><Link to="/tests/loading-overlay-tests">LoadingOverlay Tests</Link></li>
      <li><Link to="/tests/markdown">Markdown Tests</Link></li>
      <li><Link to="/tests/menu-tests">Menu Tests</Link></li>
      <li><Link to="/tests/menu-item-tests">Menu.Item Tests</Link></li>
      <li><Link to="/tests/menu-item-group-tests">Menu.ItemGroup Tests</Link></li>
      <li><Link to="/tests/modal-tests">Modal Tests</Link></li>
      <li><Link to="/tests/modal-manager-tests">Modal Manager Tests</Link></li>
      <li><Link to="/tests/multi-select-list-tests">MultiSelectList Tests</Link></li>
      <li><Link to="/tests/multi-select-table-tests">MultiSelectTable Tests</Link></li>
      <li><Link to="/tests/overlay-tests">Overlay Tests</Link></li>
      <li><Link to="/tests/overlay-container-tests">OverlayContainer Tests</Link></li>
      <li><Link to="/tests/popup-tests">Popup Tests</Link></li>
      <li><Link to="/tests/profile-image-tests">Profile Image Tests</Link></li>
      <li><Link to="/tests/progress-bar-tests">ProgressBar Tests</Link></li>
      <li><Link to="/tests/props-table-tests">Props Table Tests</Link></li>
      <li><Link to="/tests/responsive-element-tests">ResponsiveElement Tests</Link></li>
      <li><Link to="/tests/search-field-tests">Search Field Tests</Link></li>
      <li><Link to="/tests/select-tests">Select Tests</Link></li>
      <li><Link to="/tests/select-option-tests">Select.Option Tests</Link></li>
      <li><Link to="/tests/selectable-list-tests">Selectable List Tests</Link></li>
      <li><Link to="/tests/signature-tests">Signature Tests</Link></li>
      <li><Link to="/tests/single-select-list-tests">SingleSelectList Tests</Link></li>
      <li><Link to="/tests/selectable-table-tests">SelectableTable Tests</Link></li>
      <li><Link to="/tests/single-select-table-tests">SingleSelectTable Tests</Link></li>
      <li><Link to="/tests/slide-group-tests">SlideGroup Tests</Link></li>
      <li><Link to="/tests/slide-panel-tests">SlidePanel Tests</Link></li>
      <li><Link to="/tests/status-tests">Status Tests</Link></li>
      <li><Link to="/tests/table-tests">Table Tests</Link></li>
      <li><Link to="/tests/text-tests">Text Tests</Link></li>
      <li><Link to="/tests/theme-provider-tests">Theme Provider Tests</Link></li>
      <li><Link to="/tests/time-input-tests">Time Input Tests</Link></li>
      <li><Link to="/tests/toggle-tests">Toggle Tests</Link></li>
      <li><Link to="/tests/toggle-button-tests">Toggle Button Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
