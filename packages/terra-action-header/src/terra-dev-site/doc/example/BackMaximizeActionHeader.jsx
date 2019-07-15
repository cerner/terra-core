/* eslint-disable no-alert */
import React from 'react';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import Maximize from 'terra-icon/lib/icon/IconMaximize';
import ActionHeader from '../../../ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    title="Back Maximize Action Header (Must be custom implemented)"
    onBack={() => alert('You clicked back!')}
  >
    <CollapsibleMenuView>
      <CollapsibleMenuView.Item
        text="Maximize"
        key="maximize"
        shouldCloseOnClick={false}
        isIconOnly
        icon={<Maximize />}
        onClick={() => { alert('You clicked maximize!'); }}
      />
    </CollapsibleMenuView>
  </ActionHeader>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
