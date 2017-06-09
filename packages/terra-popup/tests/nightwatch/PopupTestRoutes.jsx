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
import Dimension10xPopup from './components/Dimension10xPopup';
import Dimension25xPopup from './components/Dimension25xPopup';
import Dimension50xPopup from './components/Dimension50xPopup';
import Dimension75xPopup from './components/Dimension75xPopup';
import Dimension100xPopup from './components/Dimension100xPopup';
import ArrowTopOffsetPopup from './components/ArrowTopOffsetPopup';
import ArrowBottomOffsetPopup from './components/ArrowBottomOffsetPopup';
import ArrowLeftOffsetPopup from './components/ArrowLeftOffsetPopup';
import ArrowRightOffsetPopup from './components/ArrowRightOffsetPopup';
import ArrowHorizontalCenterPopup from './components/ArrowHorizontalCenterPopup';
import ArrowVerticalLeftPopup from './components/ArrowVerticalLeftPopup';
import ArrowVerticalCenterPopup from './components/ArrowVerticalCenterPopup';
import ArrowVerticalRightPopup from './components/ArrowVerticalRightPopup';

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
    <Route path="/tests/popup-tests/dimension-10x" component={Dimension10xPopup} />
    <Route path="/tests/popup-tests/dimension-25x" component={Dimension25xPopup} />
    <Route path="/tests/popup-tests/dimension-50x" component={Dimension50xPopup} />
    <Route path="/tests/popup-tests/dimension-75x" component={Dimension75xPopup} />
    <Route path="/tests/popup-tests/dimension-100x" component={Dimension100xPopup} />
    <Route path="/tests/popup-tests/top-arrow-offset" component={ArrowTopOffsetPopup} />
    <Route path="/tests/popup-tests/bottom-arrow-offset" component={ArrowBottomOffsetPopup} />
    <Route path="/tests/popup-tests/left-arrow-offset" component={ArrowLeftOffsetPopup} />
    <Route path="/tests/popup-tests/right-arrow-offset" component={ArrowRightOffsetPopup} />
    <Route path="/tests/popup-tests/horizontal-center" component={ArrowHorizontalCenterPopup} />
    <Route path="/tests/popup-tests/vertical-left" component={ArrowVerticalLeftPopup} />
    <Route path="/tests/popup-tests/vertical-center" component={ArrowVerticalCenterPopup} />
    <Route path="/tests/popup-tests/vertical-right" component={ArrowVerticalRightPopup} />
  </div>
);

export default routes;
