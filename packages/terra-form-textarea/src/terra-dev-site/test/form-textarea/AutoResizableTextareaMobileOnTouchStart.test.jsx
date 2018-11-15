import React from 'react';

import Textarea from '../../../Textarea';

export default class textarea extends React.Component {
  constructor() {
    super();
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentDidUpdate() {
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
