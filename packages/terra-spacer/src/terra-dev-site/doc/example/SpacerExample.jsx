import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import 'terra-spacer/lib/terra-dev-site/doc/example/Spacer.module.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const SpacerExample = () => (
  <div>
    <Spacer className="spacerdemodefault" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock>
      <Button text="Default" />
    </Spacer>
    <Spacer className="spacerdemoprimary" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock>
      <Button text="Emphasis" variant="emphasis" />
    </Spacer>
  </div>
);

export default SpacerExample;
