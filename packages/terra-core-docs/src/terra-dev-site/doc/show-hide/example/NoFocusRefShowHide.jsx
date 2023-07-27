import React from 'react';
import ShowHide from 'terra-show-hide';

const fullText = 'Successful value-based care strategies must demonstrate proficiency in optimizing venues of care to improve health outcomes, lower costs and increase consumer access and satisfaction. They must be able to analyze and predict the unique needs of each individual and appropriately match them to the skills offered in their network.';
const previewText = fullText.substring(0, 278);

class NoFocusRefShowHide extends React.Component {
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
      <ShowHide preview={<p>{previewText}</p>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
        <p>{fullText}</p>
      </ShowHide>
    );
  }
}

export default NoFocusRefShowHide;
