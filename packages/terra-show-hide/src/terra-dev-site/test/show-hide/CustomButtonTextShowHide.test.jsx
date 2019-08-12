import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ShowHide from 'terra-show-hide/lib/ShowHide';

const sentences = [
  <p key="lorem1">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem2">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem3">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem4">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem5">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem6">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem7">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem8">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem9">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  <p key="lorem10">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
];

class CustomButtonTextShowHideTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleShowHide = this.toggleShowHide.bind(this);
  }

  toggleShowHide() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    let customText = '';

    if (this.state.isOpen) {
      customText = `Hide ${sentences.length - 3} Sentences`;
    } else {
      customText = `Show ${sentences.length - 3} More Sentences`;
    }

    return (
      <ShowHide
        preview={[sentences[0], sentences[1], sentences[2]]}
        onChange={this.toggleShowHide}
        isOpen={this.state.isOpen}
        buttonText={customText}
      >
        {sentences}
      </ShowHide>
    );
  }
}

export default CustomButtonTextShowHideTest;
