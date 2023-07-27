import React from 'react';
import ShowHide from 'terra-show-hide';

const previewText = 'Although the process is complex and will vary greatly based on regional and economic factors, it’s clear that healthcare entities must start planning their transitions now.';
const text = 'it expects all Medicare Parts A and B beneficiaries and most Medicaid beneficiaries to be in a value-based care relationship with accountability for quality and total cost of care by 2030.';

class LinkShowHide extends React.Component {
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
    return (
      <ShowHide focusRef={this.focusRef} preview={<p>{previewText}</p>} isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
        <p>
          {previewText}
          {' '}
          <a ref={this.focusRef} href="https://www.cerner.com/">CMS recently announced</a>
          {' '}
          {text}
        </p>
      </ShowHide>
    );
  }
}

export default LinkShowHide;
