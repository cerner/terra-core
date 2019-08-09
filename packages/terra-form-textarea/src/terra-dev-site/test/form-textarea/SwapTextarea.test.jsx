import React from 'react';
import Textarea from '../../../Textarea';

class textarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swap: false,
    };

    this.handleSwap = this.handleSwap.bind(this);
  }

  handleSwap() {
    this.setState(prevState => ({
      swap: !prevState.swap,
    }));
  }

  render() {
    const smallTextArea = <Textarea isAutoResizable size="small" />;
    const largeTextArea = <Textarea isAutoResizable size="large" />;
    const button = <button id="swap-button" type="button" onClick={this.handleSwap}>Swap</button>;

    if (this.state.swap) {
      return (
        <div>
          {smallTextArea}
          {largeTextArea}
          {button}
        </div>
      );
    }
    return (
      <div>
        {largeTextArea}
        {smallTextArea}
        {button}
      </div>
    );
  }
}

export default textarea;
