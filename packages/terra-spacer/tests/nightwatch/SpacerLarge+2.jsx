import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginlarge2" className="spacer" marginTop="large+2" marginBottom="large+2" marginLeft="large+2" marginRight="large+2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerpaddinglarge2" className="spacer" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddinglarge2" className="spacer" marginTop="large+2" marginBottom="large+2" marginLeft="large+2" marginRight="large+2" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddinglarge2inlineblock" className="spacer" marginTop="large+2" marginBottom="large+2" marginLeft="large+2" marginRight="large+2" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
