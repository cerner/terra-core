import React from 'react';
import PopupManager from 'terra-popup-presenter/lib/PopupManager.js';
import ManagedContent from './ManagedContent';

class PopupManagerStandard extends React.Component {

  render() {
    return (
      <PopupManager>
        <ManagedContent />
      </PopupManager>
    );
  }
}

export default PopupManagerStandard;
