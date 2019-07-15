/* eslint-disable no-alert */
import React from 'react';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import Minimize from 'terra-icon/lib/icon/IconMinimize';
import ActionHeader from '../../../ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    title="Back Minimize Action Header (Must be custom implemented)"
    onBack={() => alert('You clicked back!')}
  >
    <CollapsibleMenuView>
      <CollapsibleMenuView.Item
        text="Minimize"
        key="minimize"
        shouldCloseOnClick={false}
        isIconOnly
        icon={<Minimize />}
        onClick={() => { alert('You clicked minimize!'); }}
      />
    </CollapsibleMenuView>
  </ActionHeader>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
