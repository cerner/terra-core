/* eslint-disable no-alert */
import React from 'react';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconFlowsheet from 'terra-icon/lib/icon/IconFlowsheet';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconSend from 'terra-icon/lib/icon/IconSend';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconFolder from 'terra-icon/lib/icon/IconFolder';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ActionHeader from 'terra-action-header/lib/ActionHeader';
import Placeholder from 'terra-doc-template/lib/Placeholder'

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader title="Minimize Custom Button Action Header" onMinimize={() => alert('You clicked minimize!')} onClose={() => alert('You clicked close!')}>
      <Placeholder style={{ height: '30px', padding: '0' }} title="Collapsible Menu View" />
    </ActionHeader>
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
