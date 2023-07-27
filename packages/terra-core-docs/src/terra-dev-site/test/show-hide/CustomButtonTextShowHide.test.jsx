import React from 'react';
import ShowHide, { Focuser } from 'terra-show-hide';

const sentence = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.';

const preview = [
  <h3>{`${sentence}`}</h3>,
  <ul>
    <li>{`${sentence}`}</li>
    <li>{`${sentence}`}</li>
  </ul>,
];

class CustomButtonTextShowHideTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleShowHide = this.toggleShowHide.bind(this);
    this.focusRef = React.createRef();
  }

  toggleShowHide() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    let customText = '';

    if (this.state.isOpen) {
      customText = 'Hide 3 Sentences';
    } else {
      customText = 'Show 3 More Sentences';
    }

    return (
      <ShowHide
        focusRef={this.focusRef}
        preview={preview}
        onChange={this.toggleShowHide}
        isOpen={this.state.isOpen}
        buttonText={customText}
      >
        <h3>{`${sentence}`}</h3>
        <ul>
          <li>{`${sentence}`}</li>
          <li>{`${sentence}`}</li>
          <li><Focuser ref={this.focusRef} focusableText={sentence} /></li>
          <li>{`${sentence}`}</li>
          <li>{`${sentence}`}</li>
        </ul>
      </ShowHide>
    );
  }
}

export default CustomButtonTextShowHideTest;
