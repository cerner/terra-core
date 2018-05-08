import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value medium applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginMedium" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value medium applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerPaddingMedium" className="spacer" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value medium applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingMedium" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value medium and isInlineBlock prop applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingMediumInlineBlock" className="spacer" marginTop="medium" marginBottom="medium" marginLeft="medium" marginRight="medium" paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium" isInlineBlock>
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
