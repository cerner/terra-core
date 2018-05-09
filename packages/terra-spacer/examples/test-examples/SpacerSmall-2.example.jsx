import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value small-2 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginSmall2" className="spacer" marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value small-2 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerPaddingSmall2" className="spacer" paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value small-2 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingSmall2" className="spacer" marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2" paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin, Padding with value small-2 and isInlineBlock prop applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingSmall2InlineBlock" className="spacer" marginTop="small-2" marginBottom="small-2" marginLeft="small-2" marginRight="small-2" paddingTop="small-2" paddingBottom="small-2" paddingLeft="small-2" paddingRight="small-2" isInlineBlock>
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
