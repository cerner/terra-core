import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value large+3 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginLarge3" className="spacer" marginTop="large+3" marginBottom="large+3" marginLeft="large+3" marginRight="large+3">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value large+3 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerPaddingLarge3" className="spacer" paddingTop="large+3" paddingBottom="large+3" paddingLeft="large+3" paddingRight="large+3">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value large+3 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingLarge3" className="spacer" marginTop="large+3" marginBottom="large+3" marginLeft="large+3" marginRight="large+3" paddingTop="large+3" paddingBottom="large+3" paddingLeft="large+3" paddingRight="large+3">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value large+3 and isInlineBlock prop applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingLarge3InlineBlock" className="spacer" marginTop="large+3" marginBottom="large+3" marginLeft="large+3" marginRight="large+3" paddingTop="large+3" paddingBottom="large+3" paddingLeft="large+3" paddingRight="large+3" isInlineBlock >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
