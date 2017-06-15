/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ButtonTests from './ButtonTests';
import { TinyButton, SmallButton, MediumButton, LargeButton, HugeButton } from './SizeButton';
import { ButtonWithTypeButton, ButtonWithTypeReset, ButtonWithTypeSubmit } from './ButtonTypes';
import { DefaultButton, PrimaryButton, SecondaryButton, LinkButton } from './VariantButton';
import { DisabledButton, DisabledLink } from './Disabled';
import { IconDefaultButton, IconOnlyButton, IconReversedButton } from './IconButton';
import LongTextButton from './LongTextButton';
import CompactButton from './CompactButton';

const routes = (
  <div>
    <Route path="/tests/button-tests" component={ButtonTests} />
    <Route path="/tests/button-tests/default" component={DefaultButton} />
    <Route path="/tests/button-tests/disabled" component={DisabledButton} />
    <Route path="/tests/button-tests/disabled-link" component={DisabledLink} />
    <Route path="/tests/button-tests/icon-default" component={IconDefaultButton} />
    <Route path="/tests/button-tests/icon-only" component={IconOnlyButton} />
    <Route path="/tests/button-tests/icon-reversed" component={IconReversedButton} />
    <Route path="/tests/button-tests/primary" component={PrimaryButton} />
    <Route path="/tests/button-tests/secondary" component={SecondaryButton} />
    <Route path="/tests/button-tests/long-text" component={LongTextButton} />
    <Route path="/tests/button-tests/huge" component={HugeButton} />
    <Route path="/tests/button-tests/large" component={LargeButton} />
    <Route path="/tests/button-tests/medium" component={MediumButton} />
    <Route path="/tests/button-tests/small" component={SmallButton} />
    <Route path="/tests/button-tests/tiny" component={TinyButton} />
    <Route path="/tests/button-tests/link" component={LinkButton} />
    <Route path="/tests/button-tests/with-type-button" component={ButtonWithTypeButton} />
    <Route path="/tests/button-tests/with-type-reset" component={ButtonWithTypeReset} />
    <Route path="/tests/button-tests/with-type-submit" component={ButtonWithTypeSubmit} />
    <Route path="/tests/button-tests/compact" component={CompactButton} />
  </div>
);

export default routes;
