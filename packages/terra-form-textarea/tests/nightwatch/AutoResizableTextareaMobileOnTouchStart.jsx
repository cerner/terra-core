import React from 'react';

import Textarea from '../../lib/Textarea';

export default class textarea extends React.Component {
  componentWillMount() {
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentWillUnmount() {
    if (this.resetontouchstart) {
      delete window.ontouchstart;
    }
  }

  render() {
    return (
      <Textarea id="auto-resizable" cols="2" isAutoResizable defaultValue="Default Value" />
    );
  }
}
