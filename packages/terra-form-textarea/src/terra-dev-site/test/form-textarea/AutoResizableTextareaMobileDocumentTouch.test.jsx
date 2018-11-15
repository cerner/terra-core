import React from 'react';

import Textarea from '../../../Textarea';

export default class textarea extends React.Component {
  constructor() {
    super();
    if (!window.DocumentTouch) {
      this.resetDocumentTouch = true;
      window.DocumentTouch = () => { };
      window.DocumentTouch.prototype = Document.prototype;
    }
  }

  componentDidUpdate() {
    if (!window.DocumentTouch) {
      this.resetDocumentTouch = true;
      window.DocumentTouch = () => {};
      window.DocumentTouch.prototype = Document.prototype;
    }
  }

  componentWillUnmount() {
    if (this.resetDocumentTouch) {
      delete window.DocumentTouch;
    }
  }

  render() {
    return (
      <Textarea id="auto-resizable" cols="2" isAutoResizable defaultValue="Default Value" />
    );
  }
}
