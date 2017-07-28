/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import PopupTests from './PopupTests';
import DefaultPopup from './components/DefaultPopup';
import ArrowPopup from './components/ArrowPopup';
import ClassNamePopup from './components/ClassNamePopup';
import BoundedPopup from './components/BoundedPopup';
import BoundedHeightPopup from './components/BoundedHeightPopup';
import BoundedWidthPopup from './components/BoundedWidthPopup';
import NoHeaderPopup from './components/NoHeaderPopup';
import SizeSmallPopup from './components/SizeSmallPopup';
import SizeMediumPopup from './components/SizeMediumPopup';
import SizeLargePopup from './components/SizeLargePopup';
import ArrowTopOffsetPopup from './components/ArrowTopOffsetPopup';
import ArrowBottomOffsetPopup from './components/ArrowBottomOffsetPopup';
import ArrowLeftOffsetPopup from './components/ArrowLeftOffsetPopup';
import ArrowRightOffsetPopup from './components/ArrowRightOffsetPopup';
import ArrowHorizontalCenterPopup from './components/ArrowHorizontalCenterPopup';
import ArrowVerticalLeftPopup from './components/ArrowVerticalLeftPopup';
import ArrowVerticalCenterPopup from './components/ArrowVerticalCenterPopup';
import ArrowVerticalRightPopup from './components/ArrowVerticalRightPopup';
import PopupInsideModal from './components/PopupInsideModal';

const routes = (
  <div>
    <Route path="/tests/popup-tests" component={PopupTests} />
    <Route path="/tests/popup-tests/default" component={DefaultPopup} />
    <Route path="/tests/popup-tests/arrow" component={ArrowPopup} />
    <Route path="/tests/popup-tests/class-name" component={ClassNamePopup} />
    <Route path="/tests/popup-tests/bounded" component={BoundedPopup} />
    <Route path="/tests/popup-tests/bounded-height" component={BoundedHeightPopup} />
    <Route path="/tests/popup-tests/bounded-width" component={BoundedWidthPopup} />
    <Route path="/tests/popup-tests/no-header" component={NoHeaderPopup} />
    <Route path="/tests/popup-tests/small" component={SizeSmallPopup} />
    <Route path="/tests/popup-tests/medium" component={SizeMediumPopup} />
    <Route path="/tests/popup-tests/large" component={SizeLargePopup} />
    <Route path="/tests/popup-tests/top-arrow-offset" component={ArrowTopOffsetPopup} />
    <Route path="/tests/popup-tests/bottom-arrow-offset" component={ArrowBottomOffsetPopup} />
    <Route path="/tests/popup-tests/left-arrow-offset" component={ArrowLeftOffsetPopup} />
    <Route path="/tests/popup-tests/right-arrow-offset" component={ArrowRightOffsetPopup} />
    <Route path="/tests/popup-tests/horizontal-center" component={ArrowHorizontalCenterPopup} />
    <Route path="/tests/popup-tests/vertical-left" component={ArrowVerticalLeftPopup} />
    <Route path="/tests/popup-tests/vertical-center" component={ArrowVerticalCenterPopup} />
    <Route path="/tests/popup-tests/vertical-right" component={ArrowVerticalRightPopup} />
    <Route path="/tests/popup-tests/popup-inside-modal" component={PopupInsideModal} />
  </div>
);

export default routes;
