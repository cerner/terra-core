import React from 'react';
import ShowHide from 'terra-show-hide';

const sentence = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.';

const preview = [
  <p key="lorem1">{sentence}</p>,
  <p key="lorem2">{sentence}</p>,
  <p key="lorem3">{sentence}</p>,
];

const text = [
  <p key="lorem5">{sentence}</p>,
  <p key="lorem6">{sentence}</p>,
  <p key="lorem7">{sentence}</p>,
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
      customText = `Hide ${text.length + 1} Sentences`;
    } else {
      customText = `Show ${text.length + 1} More Sentences`;
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
        <p ref={this.focusRef} key="lorem4">{sentence}</p>
        {text}
      </ShowHide>
    );
  }
}

export default CustomButtonTextShowHideTest;
