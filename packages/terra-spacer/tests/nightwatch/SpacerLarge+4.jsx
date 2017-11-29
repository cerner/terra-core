import React from 'react';
import './SpacerTest.scss';
import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <h3>Background color added for context. The light orange background shows margin, the green background shows padding.</h3>
    <div>Margin with value large+4 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginLarge4" className="spacer" marginTop="large+4" marginBottom="large+4" marginLeft="large+4" marginRight="large+4">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Padding with value large+4 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerPaddingLarge4" className="spacer" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4">
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin and Padding with value large+4 applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingLarge4" className="spacer" marginTop="large+4" marginBottom="large+4" marginLeft="large+4" marginRight="large+4" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
    <div>Margin Padding with value large+4 and isInlineBlock prop applied</div>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacerMarginPaddingLarge4InlineBlock" className="spacer" marginTop="large+4" marginBottom="large+4" marginLeft="large+4" marginRight="large+4" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock >
        <div style={{ background: 'rgb(141, 182, 193)' }}>Test component</div>
      </Spacer>
    </div>
  </div>
);
