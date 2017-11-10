import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginlarge1" className="spacer" marginTop="large+1" marginBottom="large+1" marginLeft="large+1" marginRight="large+1">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerpaddinglarge1" className="spacer" paddingTop="large+1" paddingBottom="large+1" paddingLeft="large+1" paddingRight="large+1">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddinglarge1" className="spacer" marginTop="large+1" marginBottom="large+1" marginLeft="large+1" marginRight="large+1" paddingTop="large+1" paddingBottom="large+1" paddingLeft="large+1" paddingRight="large+1">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddinglarge1inlineblock" className="spacer" marginTop="large+1" marginBottom="large+1" marginLeft="large+1" marginRight="large+1" paddingTop="large+1" paddingBottom="large+1" paddingLeft="large+1" paddingRight="large+1" isInlineBlock >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
