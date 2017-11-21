import React from 'react';

import SelectOption from '../../../lib/SelectOption';

const display = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget metus aliquet, tincidunt lacus eu, placerat turpis. Nunc volutpat, nunc ac euismod suscipit, nunc felis porta elit, a ultrices nulla neque quis risus. Nulla at suscipit velit, eu facilisis nulla. Phasellus aliquet metus sagittis odio gravida eleifend. Nulla gravida et.';

export default () => <ul><SelectOption value="default" display={display} id="longTextOption" /></ul>;
