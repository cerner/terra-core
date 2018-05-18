import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value large applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginLarge" className="spacer" marginTop="large" marginBottom="large" marginLeft="large" marginRight="large">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value large applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerPaddingLarge" className="spacer" paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value large applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingLarge" className="spacer" marginTop="large" marginBottom="large" marginLeft="large" marginRight="large" paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large" >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value large and isInlineBlock prop applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingLargeInlineBlock" className="spacer" marginTop="large" marginBottom="large" marginLeft="large" marginRight="large" paddingTop="large" paddingBottom="large" paddingLeft="large" paddingRight="large" isInlineBlock >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
