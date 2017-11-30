/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ButtonTests from './ButtonTests';
import { TinyButton, SmallButton, MediumButton, LargeButton, HugeButton } from './SizeButton';
import { ButtonWithTypeButton, ButtonWithTypeReset, ButtonWithTypeSubmit } from './ButtonTypes';
import { NeutralButton, EmphasisButton, SecondaryButton } from './VariantButton';
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
    <Route path="/tests/button-tests/secondary" component={SecondaryButton} />
    <Route path="/tests/button-tests/long-text" component={LongTextButton} />
    <Route path="/tests/button-tests/huge" component={HugeButton} />
    <Route path="/tests/button-tests/large" component={LargeButton} />
    <Route path="/tests/button-tests/medium" component={MediumButton} />
    <Route path="/tests/button-tests/small" component={SmallButton} />
    <Route path="/tests/button-tests/tiny" component={TinyButton} />
    <Route path="/tests/button-tests/with-type-button" component={ButtonWithTypeButton} />
    <Route path="/tests/button-tests/with-type-reset" component={ButtonWithTypeReset} />
    <Route path="/tests/button-tests/with-type-submit" component={ButtonWithTypeSubmit} />
  </div>
);

export default routes;
