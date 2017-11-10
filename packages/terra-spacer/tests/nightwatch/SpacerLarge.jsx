import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginlarge" className="spacer" marginTop="large" marginBottom="large" marginLeft="large" marginRight="large">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerpaddinglarge" className="spacer" paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddinglarge" className="spacer" marginTop="large" marginBottom="large" marginLeft="large" marginRight="large" paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large" >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddinglargeinlineblock" className="spacer" marginTop="large" marginBottom="large" marginLeft="large" marginRight="large" paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large" isInlineBlock >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
