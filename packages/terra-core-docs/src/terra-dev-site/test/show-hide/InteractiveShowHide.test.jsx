import React from 'react';
import ShowHide, { ShowHideFocuser } from 'terra-show-hide';

const sentence = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.';

const preview = [
  <p>{sentence}</p>,
  <p>{sentence}</p>,
  <p>{sentence}</p>,
];

const text = [
  <p>{sentence}</p>,
  <p>{sentence}</p>,
  <p>{sentence}</p>,
];

class InteractiveShowHideTest extends React.Component {
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
      customText = `Hide ${text.length + 2} Sentences`;
    } else {
      customText = `Show ${text.length + 2} More Sentences`;
    }

    return (
      <ShowHide
        focusRef={this.focusRef}
        preview={preview}
        onChange={this.toggleShowHide}
        isOpen={this.state.isOpen}
        buttonText={customText}
      >
        {preview}
        <p><ShowHideFocuser ref={this.focusRef} focusableText={sentence} /></p>
        <a id="link" href="http">Link</a>
        {text}
      </ShowHide>
    );
  }
}

export default InteractiveShowHideTest;
