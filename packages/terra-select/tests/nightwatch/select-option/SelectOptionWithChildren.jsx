import React from 'react';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import SelectOption from '../../../lib/SelectOption';

const customDisplay = <div><IconInformation />  Custom display</div>;
export default () => <ul><SelectOption value="default" id="customDisplayOption" >{customDisplay}</SelectOption></ul>;
