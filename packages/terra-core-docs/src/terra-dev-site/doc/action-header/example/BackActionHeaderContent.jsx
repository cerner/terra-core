import React, { useContext, useState } from 'react';

import Button from 'terra-button';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import ModalManager from 'terra-modal-manager';



/**
 * This example file contains three React Components:
 *    - ModalManagerExample - renders a ModalManager and the ModalContainer.
 *    - ModalContainer - provide a button to disclose the ModalContent.
 *    - ModalContent - provides the example showing the Notification Dialog renders over modal content.
 * Typically Terra would recommend breaking these into three files, but we condense them to one for documentation purposes.
 */

const ModalContent = () => {
  

  return (<>
            <p>text</p>
  </>
  );
};

const ModalContainer = () => {
  const disclosureManager = useContext(DisclosureManagerContext);

  const disclose = () => {
    disclosureManager.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: 'ModalContent',
        title: 'Example Modal Content',
        component: <ModalContent />,
      },
    });
  };

  return (
    <Button text="Trigger Modal" onClick={disclose} />
  );
};

const ModalManagerExample = () => (
  <div>
    <ModalManager>
      <ModalContainer />
    </ModalManager>
  </div>
);

export default ModalManagerExample;
