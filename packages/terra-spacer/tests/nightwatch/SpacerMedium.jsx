import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginMedium" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerPaddingMedium" className="spacer" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingMedium" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingMediumInlineBlock" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium" isInlineBlock>
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
