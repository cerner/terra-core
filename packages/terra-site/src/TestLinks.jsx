/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TestLinks = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-tests">Button Tests</Link></li>
      <li><Link to="/tests/i18n-tests">I18n Tests</Link></li>
      <li><Link to="/tests/slide-panel-tests">SlidePanel Tests</Link></li>
      <li><Link to="/tests/responsive-element-tests">ResponsiveElement Tests</Link></li>
      <li><Link to="/tests/detail-view-tests">Detail View Tests</Link></li>
      <li><Link to="/tests/clinical-item-view-tests">ClinicalItemView Tests</Link></li>
      <li><Link to="/tests/clinical-item-view-display-tests">ClinicalItemView.Display Tests</Link></li>
      <li><Link to="/tests/clinical-item-view-comment-tests">ClinicalItemView.Comment Tests</Link></li>
      <li><Link to="/tests/list-tests">List Tests</Link></li>
      <li><Link to="/tests/list-item-tests">ListItem Tests</Link></li>
      <li><Link to="/tests/single-select-list-tests">SingleSelectList Tests</Link></li>
      <li><Link to="/tests/multi-select-list-tests">MultiSelectList Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
