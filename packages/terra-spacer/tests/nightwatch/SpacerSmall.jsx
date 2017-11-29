import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value small applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginSmall" className="spacer" marginTop="small" marginBottom="small" marginLeft="small" marginRight="small">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value small applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerPaddingSmall" className="spacer" paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value small applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingSmall" className="spacer" marginTop="small" marginBottom="small" marginLeft="small" marginRight="small" paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin, Padding with value small and isInlineBlock prop applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingSmallInlineBlock" className="spacer" marginTop="small" marginBottom="small" marginLeft="small" marginRight="small" paddingTop="small" paddingBottom="small" paddingLeft="small" paddingRight="small" isInlineBlock>
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
