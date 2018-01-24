import React, { PropTypes } from 'react';
import ModalContent, { disclosureName } from './ModalContent';

const ModalManagerDialogDemoContainer = ({ app }) => {
  return (<div>
    <button
      onClick={() => {
        app.disclose({
          preferredType: 'modal',
          size: 'medium',
          content: {
            key: 'DIALOG_CONTAINER_CONTENT',
            name: disclosureName,
          },
        })
      }}
    >
      Launch Modal
    </button>
  </div>)
}

export default ModalManagerDialogDemoContainer;