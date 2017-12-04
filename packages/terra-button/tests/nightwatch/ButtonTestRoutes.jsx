/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ButtonTests from './ButtonTests';
import { ButtonWithTypeButton, ButtonWithTypeReset, ButtonWithTypeSubmit } from './ButtonTypes';
import { NeutralButton, EmphasisButton, DeemphasisButton } from './VariantButton';
import DisabledButton from './Disabled';
import { IconNeutralButton, IconOnlyButton, IconReversedButton } from './IconButton';
import LongTextButton from './LongTextButton';

const routes = (
  <div>
    <Route path="/tests/button-tests" component={ButtonTests} />
    <Route path="/tests/button-tests/neutral" component={NeutralButton} />
    <Route path="/tests/button-tests/disabled" component={DisabledButton} />
    <Route path="/tests/button-tests/icon-neutral" component={IconNeutralButton} />
    <Route path="/tests/button-tests/icon-only" component={IconOnlyButton} />
    <Route path="/tests/button-tests/icon-reversed" component={IconReversedButton} />
    <Route path="/tests/button-tests/emphasis" component={EmphasisButton} />
    <Route path="/tests/button-tests/de-emphasis" component={DeemphasisButton} />
    <Route path="/tests/button-tests/long-text" component={LongTextButton} />
    <Route path="/tests/button-tests/with-type-button" component={ButtonWithTypeButton} />
    <Route path="/tests/button-tests/with-type-reset" component={ButtonWithTypeReset} />
    <Route path="/tests/button-tests/with-type-submit" component={ButtonWithTypeSubmit} />
  </div>
);

export default routes;
