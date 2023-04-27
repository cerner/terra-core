import React from 'react';
import ShowHide from 'terra-show-hide';

const sentences = [
  <h3 key="sentence1">Key Benefits of Cerner Cardiovascular Solutions</h3>,
  <p key="sentence2">Eliminates silos of information and the resulting inefficiencies with a unified EHR and cardiovascular system</p>,
  <p key="sentence3">Creates efficient diagnostic workflows, image management and analysis</p>,
  <p key="sentence4">Enhances clinical, financial and performance outcomes with comprehensive procedural documentation</p>,
  <p key="sentence5">Promotes cardiac disease management through health maintenance protocols</p>,
  // <p key="sentence6">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  // <p key="sentence7">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  // <p key="sentence8">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
  // <p key="sentence9">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
];

class CustomButtonTextShowHide extends React.Component {
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

export default CustomButtonTextShowHide;
