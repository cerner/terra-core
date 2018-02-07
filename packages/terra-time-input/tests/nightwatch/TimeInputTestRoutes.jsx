/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TimeInputTests from './TimeInputTests';
import TimeInputDefault from './component/TimeInputDefault';
import TimeInputDefaultTime from './component/TimeInputDefaultTime';
import TimeInputOnChange from './component/TimeInputOnChange';
import TimeInputInvalidDate from './component/TimeInputInvalidDate';
import TimeInputTwelveHour from './component/TimeInputTwelveHour';
import TimeInputTwelveHourFilledMorning from './component/TimeInputTwelveHourFilledMorning';
import TimeInputTwelveHourFilledEvening from './component/TimeInputTwelveHourFilledEvening';
import TimeInputTwelveHourMobile from './component/TimeInputTwelveHourMobile';
import TimeInputTwelveHourMobileIds from './component/TimeInputTwelveHourMobileIds';
import TimeInputTwelveHourMobileTimeProvided from './component/TimeInputTwelveHourMobileTimeProvided';
import TimeInputDisabled from './component/TimeInputDisabled';
import TimeInputMobileDisabled from './component/TimeInputMobileDisabled';

const routes = (
  <div>
    <Route path="/tests/time-input-tests" component={TimeInputTests} />
    <Route path="/tests/time-input-tests/default" component={TimeInputDefault} />
    <Route path="/tests/time-input-tests/default-time" component={TimeInputDefaultTime} />
    <Route path="/tests/time-input-tests/on-change" component={TimeInputOnChange} />
    <Route path="/tests/time-input-tests/invalid-time" component={TimeInputInvalidDate} />
    <Route path="/tests/time-input-tests/twelve-hour" component={TimeInputTwelveHour} />
    <Route path="/tests/time-input-tests/twelve-hour-filled-morning" component={TimeInputTwelveHourFilledMorning} />
    <Route path="/tests/time-input-tests/twelve-hour-filled-evening" component={TimeInputTwelveHourFilledEvening} />
    <Route path="/tests/time-input-tests/twelve-hour-mobile" component={TimeInputTwelveHourMobile} />
    <Route path="/tests/time-input-tests/twelve-hour-mobile-time-provided" component={TimeInputTwelveHourMobileTimeProvided} />
    <Route path="/tests/time-input-tests/twelve-hour-mobile-ids" component={TimeInputTwelveHourMobileIds} />
    <Route path="/tests/time-input-tests/disabled" component={TimeInputDisabled} />
    <Route path="/tests/time-input-tests/disabled-mobile" component={TimeInputMobileDisabled} />
  </div>
);

export default routes;
