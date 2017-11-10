import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginmedium" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerpaddingmedium" className="spacer" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddingmedium" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddingmediuminlineblock" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium" isInlineBlock>
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
