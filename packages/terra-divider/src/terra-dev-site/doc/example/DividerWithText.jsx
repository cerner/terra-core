import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Divider from 'terra-divider/lib/Divider';
import DividerExampleTemplate from './DividerExampleTemplate';
import Moment from '../../../../../../node_modules/moment/moment';

const m = Moment.utc();
const currentDate = m.format('LL');

const DividerCustomExample = () => (
  <DividerExampleTemplate>
    <Divider text={currentDate} />
  </DividerExampleTemplate>
);

export default DividerCustomExample;
