/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const PopupPresenterTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/popup-presenter-tests/default">Default PopupPresenter</Link></li>
      <li><Link to="/tests/popup-presenter-tests/arrow">Arrow PopupPresenter</Link></li>
      <li><Link to="/tests/popup-presenter-tests/class-name">ClassName PopupPresenter</Link></li>
      <li><Link to="/tests/popup-presenter-tests/bounded">Bounded PopupPresenter</Link></li>
      <li><Link to="/tests/popup-presenter-tests/no-header">No Header PopupPresenter</Link></li>
      <li><Link to="/tests/popup-presenter-tests/small">Small PopupPresenter</Link></li>
      <li><Link to="/tests/popup-presenter-tests/medium">Medium PopupPresenter</Link></li>
      <li><Link to="/tests/popup-presenter-tests/large">Large PopupPresenter</Link></li>
    </ul>
  </div>
);

export default PopupPresenterTests;
