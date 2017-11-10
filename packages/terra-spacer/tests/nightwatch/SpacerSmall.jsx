import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginsmall" className="spacer" marginTop="small" marginBottom="small" marginLeft="small" marginRight="small">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerpaddingsmall" className="spacer" paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddingsmall" className="spacer" marginTop="small" marginBottom="small" marginLeft="small" marginRight="small" paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddingsmallinlineblock" className="spacer" marginTop="small" marginBottom="small" marginLeft="small" marginRight="small" paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small" isInlineBlock>
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
