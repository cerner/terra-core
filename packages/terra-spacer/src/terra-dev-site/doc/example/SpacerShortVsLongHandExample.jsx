import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import 'terra-spacer/lib/terra-dev-site/doc/example/Spacer.module.scss';

const SpacerShortVsLongHandExample = () => (
  <div>
    <Spacer className="spacerdemoprimary" padding="large small" margin="medium large+1" isInlineBlock>
      <Button text="Shorthand" />
    </Spacer>
    <Spacer className="spacerdemodefault" paddingTop="large" paddingBottom="large" paddingLeft="small" paddingRight="small" marginTop="medium" marginBottom="medium" marginLeft="large+1" marginRight="large+1" isInlineBlock>
      <Button text="Longhand" />
    </Spacer>
  </div>
);

export default SpacerShortVsLongHandExample;
