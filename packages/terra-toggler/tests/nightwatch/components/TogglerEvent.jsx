import React from 'react';
import Toggler from '../../../lib/Toggler';
import TogglerSetup from './TogglerSetup';

class TogglerEvent extends React.Component {
  constructor() {
    super();
    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  /* eslint-disable */
  handleOnOpen() {
    alert('onOpen');
  }

  handleOnClose() {
    alert('onClose');
  }
  /* eslint-enable */

  render() {
    return (
      <Toggler header={TogglerSetup.header} onOpen={this.handleOnOpen} onClose={this.handleOnClose} >
        {TogglerSetup.children}
      </Toggler>
    );
  }
}

export default TogglerEvent;
