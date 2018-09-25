import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ShowHide from 'terra-show-hide/lib/ShowHide';

const sentences = [];
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');
sentences.push('Lorem ipsum dolor sit amet consectetur adipiscing elit.');

class CustomLinkTextShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleShowHide = this.toggleShowHide.bind(this);
  }

  toggleShowHide() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <ShowHide
        preview={`${sentences[0]} ${sentences[1]} ${sentences[2]}`}
        onToggle={this.toggleShowHide}
        toggle={this.state.isOpen}
        collapsedButtonText={`Show ${sentences.length - 3} More Sentences`}
      >
        {sentences.join(' ')}
      </ShowHide>
    );
  }
}

export default CustomLinkTextShowHide;
