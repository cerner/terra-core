import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginsmall-2" className="spacer" marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerpaddingsmall-2" className="spacer" paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddingsmall-2" className="spacer" marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2" paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacermarginpaddingsmall-2inlineblock" className="spacer" marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2" paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2" isInlineBlock>
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
