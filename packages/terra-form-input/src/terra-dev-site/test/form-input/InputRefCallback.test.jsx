import React from 'react';

import Input from '../../../Input';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.refCallback = this.refCallback.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  refCallback(input) {
    this.input = input;
  }

  render() {
    return (
      <Input
        style={{ caretColor: 'transparent' }}
        refCallback={this.refCallback}
        defaultValue="Testing Auto Focus"
        showOptional
      />
    );
  }
}
