import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginSmall1" className="spacer" marginTop="small-1" marginBottom="small-1" marginLeft="small-1" marginRight="small-1">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerPaddingSmall1" className="spacer" paddingTop="small-1" paddingBottom="small-1" paddingLeft="small-1" paddingRight="small-1">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingSmall1" className="spacer" marginTop="small-1" marginBottom="small-1" marginLeft="small-1" marginRight="small-1" paddingTop="small-1" paddingBottom="small-1" paddingLeft="small-1" paddingRight="small-1">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingSmall1InlineBlock" className="spacer" marginTop="small-1" marginBottom="small-1" marginLeft="small-1" marginRight="small-1" paddingTop="small-1" paddingBottom="small-1" paddingLeft="small-1" paddingRight="small-1" isInlineBlock>
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
