/* eslint-disable no-alert */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ActionHeader from 'terra-action-header/lib/ActionHeader';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci dolor, dignissim vitae risus vel, tristique egestas sapien.
      Vivamus blandit augue justo, id tincidunt justo luctus et. Morbi lacinia porttitor lacus, ac fermentum mauris tempus dapibus. Donec fringilla est ut ullamcorper consequat.
      Aliquam ornare efficitur ornare. Curabitur facilisis urna a congue gravida.
      Nulla accumsan non nisl sed elementum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      onMinimize={() => alert('You clicked minimize!')}
      onClose={() => alert('You clicked close!')}
    >
      <Placeholder style={{ height: '30px', padding: '0' }} title="Collapsible Menu View" />
    </ActionHeader>
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
