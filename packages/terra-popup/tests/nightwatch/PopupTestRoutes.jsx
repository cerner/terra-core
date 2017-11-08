/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import PopupTests from './PopupTests';
import DefaultPopup from './components/DefaultPopup';
import OverlayPopup from './components/OverlayPopup';
import ArrowPopup from './components/ArrowPopup';
import ClassNamePopup from './components/ClassNamePopup';
import BoundedPopup from './components/BoundedPopup';
import BoundedHeightPopup from './components/BoundedHeightPopup';
import BoundedWidthPopup from './components/BoundedWidthPopup';
import NoHeaderPopup from './components/NoHeaderPopup';
import SizeInvalidPopup from './components/SizeInvalidPopup';
import SizeSmallPopup from './components/SizeSmallPopup';
import SizeMediumPopup from './components/SizeMediumPopup';
import SizeLargePopup from './components/SizeLargePopup';
import ArrowSmallTargetLeftPopup from './components/ArrowSmallTargetLeftPopup';
import ArrowSmallTargetRightPopup from './components/ArrowSmallTargetRightPopup';
import ArrowHorizontalAttachmentsPopup from './components/ArrowHorizontalAttachmentsPopup';
import ArrowVerticalLeftAdjustmentPopup from './components/ArrowVerticalLeftAdjustmentPopup';
import ArrowVerticalAttachmentsPopup from './components/ArrowVerticalAttachmentsPopup';
import ArrowVerticalRightAdjustmentPopup from './components/ArrowVerticalRightAdjustmentPopup';
import PopupInsideModal from './components/PopupInsideModal';
import AutomaticHeightPopup from './components/AutomaticHeightPopup';
import AutomaticWidthPopup from './components/AutomaticWidthPopup';
import AutomaticHeightBoundedPopup from './components/AutomaticHeightBoundedPopup';
import AutomaticWidthBoundedPopup from './components/AutomaticWidthBoundedPopup';
import DifferentAttachmentsPopup from './components/DifferentAttachmentsPopup';
import ResizedContentPopup from './components/ResizedContentPopup';

const routes = (
  <div>
    <Route path="/tests/popup-tests" component={PopupTests} />
    <Route path="/tests/popup-tests/default" component={DefaultPopup} />
    <Route path="/tests/popup-tests/overlay" component={OverlayPopup} />
    <Route path="/tests/popup-tests/arrow" component={ArrowPopup} />
    <Route path="/tests/popup-tests/class-name" component={ClassNamePopup} />
    <Route path="/tests/popup-tests/bounded" component={BoundedPopup} />
    <Route path="/tests/popup-tests/bounded-height" component={BoundedHeightPopup} />
    <Route path="/tests/popup-tests/bounded-width" component={BoundedWidthPopup} />
    <Route path="/tests/popup-tests/no-header" component={NoHeaderPopup} />
    <Route path="/tests/popup-tests/invalid" component={SizeInvalidPopup} />
    <Route path="/tests/popup-tests/small" component={SizeSmallPopup} />
    <Route path="/tests/popup-tests/medium" component={SizeMediumPopup} />
    <Route path="/tests/popup-tests/large" component={SizeLargePopup} />
    <Route path="/tests/popup-tests/vertical-left-target-offset" component={ArrowSmallTargetLeftPopup} />
    <Route path="/tests/popup-tests/vertical-right-target-offset" component={ArrowSmallTargetRightPopup} />
    <Route path="/tests/popup-tests/different-attachment" component={DifferentAttachmentsPopup} />
    <Route path="/tests/popup-tests/horizontal-attachment" component={ArrowHorizontalAttachmentsPopup} />
    <Route path="/tests/popup-tests/vertical-left-offset" component={ArrowVerticalLeftAdjustmentPopup} />
    <Route path="/tests/popup-tests/vertical-attachment" component={ArrowVerticalAttachmentsPopup} />
    <Route path="/tests/popup-tests/vertical-right-offset" component={ArrowVerticalRightAdjustmentPopup} />
    <Route path="/tests/popup-tests/popup-inside-modal" component={PopupInsideModal} />
    <Route path="/tests/popup-tests/automatic-height" component={AutomaticHeightPopup} />
    <Route path="/tests/popup-tests/automatic-width" component={AutomaticWidthPopup} />
    <Route path="/tests/popup-tests/bounded-automatic-height" component={AutomaticHeightBoundedPopup} />
    <Route path="/tests/popup-tests/bounded-automatic-width" component={AutomaticWidthBoundedPopup} />
    <Route path="/tests/popup-tests/resize-content" component={ResizedContentPopup} />
  </div>
);

export default routes;
