/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TestLinks = () => (
  <div>
    <ul>
      <li><Link to="/tests/arrange-tests">Arrange Tests</Link></li>
      <li><Link to="/tests/base-tests">Base Tests</Link></li>
      <li><Link to="/tests/button-tests">Button Tests</Link></li>
      <li><Link to="/tests/button-group-tests">Button Group Tests</Link></li>
      <li><Link to="/tests/date-picker-tests">DatePicker Tests</Link></li>
      <li><Link to="/tests/i18n-tests">I18n Tests</Link></li>
      <li><Link to="/tests/responsive-element-tests">ResponsiveElement Tests</Link></li>
      <li><Link to="/tests/slide-panel-tests">SlidePanel Tests</Link></li>
      <li><Link to="/tests/list-tests">List Tests</Link></li>
      <li><Link to="/tests/list-item-tests">ListItem Tests</Link></li>
      <li><Link to="/tests/single-select-list-tests">SingleSelectList Tests</Link></li>
      <li><Link to="/tests/multi-select-list-tests">MultiSelectList Tests</Link></li>
      <li><Link to="/tests/table-tests">Table Tests</Link></li>
      <li><Link to="/tests/time-input-tests">Time Input Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
