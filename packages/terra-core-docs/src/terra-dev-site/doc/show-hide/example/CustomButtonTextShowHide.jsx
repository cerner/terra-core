import React from 'react';
import ShowHide from 'terra-show-hide';

const sentences = [
  'Key Benefits of Cerner Cardiovascular Solutions',
  'Eliminates silos of information and the resulting inefficiencies with a unified EHR and cardiovascular system',
  'Creates efficient diagnostic workflows, image management and analysis. Enhances clinical, financial and performance outcomes with comprehensive procedural documentation. Promotes cardiac disease management through health maintenance protocols.',
  'Enhances clinical, financial and performance outcomes with comprehensive procedural documentation',
  'Promotes cardiac disease management through health maintenance protocols',
];

const preview = [
  <h3 key="sentence1">{sentences[0]}</h3>,
  <p key="sentence2">{sentences[1]}</p>,
  <p key="sentence3">{sentences[2]}</p>,
];

class CustomButtonTextShowHide extends React.Component {
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
      customText = `Hide ${sentences.length - 3} Sentences`;
    } else {
      customText = `Show ${sentences.length - 3} More Sentences`;
    }

    return (
      <ShowHide
        preview={preview}
        onChange={this.toggleShowHide}
        isOpen={this.state.isOpen}
        buttonText={customText}
        focusRef={this.focusRef}
      >
        { preview }
        <p ref={this.focusRef} key="sentence4">{sentences[3]}</p>
        <p key="sentence5">{sentences[4]}</p>
      </ShowHide>
    );
  }
}

export default CustomButtonTextShowHide;
