/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TestLinks = () => (
  <div>
    <ul>
      <li><Link to="/tests/button-tests">Button Tests</Link></li>
      <li><Link to="/tests/slide-panel-tests">SlidePanel Tests</Link></li>
      <li><Link to="/tests/clinical-item-view-tests">ClinicalItemView Tests</Link></li>
      <li><Link to="/tests/clinical-item-view-display-tests">ClinicalItemView.Display Tests</Link></li>
      <li><Link to="/tests/clinical-item-view-comment-tests">ClinicalItemView.Comment Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
