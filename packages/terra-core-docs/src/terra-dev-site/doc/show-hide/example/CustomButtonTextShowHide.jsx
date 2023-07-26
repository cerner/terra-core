/* eslint-disable react/forbid-dom-props */
import React from 'react';
import ShowHide, { Paragraph } from 'terra-show-hide';

const sentences = [
  'Key Benefits of Cerner Cardiovascular Solutions',
  'Eliminates silos of information and the resulting inefficiencies with a unified EHR and cardiovascular system.',
  'Creates efficient diagnostic workflows, image management and analysis.',
  'Enhances clinical, financial and performance outcomes with comprehensive procedural documentation.',
  'Promotes cardiac disease management through health maintenance protocols.',
];

const preview = [
  <h3 key="header">{sentences[0]}</h3>,
  <ul key="list" style={{ display: 'block' }}>
    <li style={{ display: 'block' }}>{sentences[1]}</li>
    <li style={{ display: 'block' }}>{sentences[2]}</li>
  </ul>,
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
        <h3>{sentences[0]}</h3>
        <ul style={{ display: 'block' }}>
          <li style={{ display: 'block', listStyle: 'disc' }}>{sentences[1]}</li>
          <li style={{ display: 'block', listStyle: 'disc' }}>{sentences[2]}</li>
          <li style={{ display: 'block', listStyle: 'disc' }}><Paragraph ref={this.focusRef} text={sentences[3]} /></li>
          <li style={{ display: 'block', listStyle: 'disc' }}>{sentences[4]}</li>
        </ul>
      </ShowHide>
    );
  }
}

export default CustomButtonTextShowHide;
