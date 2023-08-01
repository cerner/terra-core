/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ShowHide, { Focuser } from 'terra-show-hide';

const header = 'Increasing efficiency of patient financial services';
const text = 'Applying these concepts to PFS unveils new opportunities to increase overall staff efficiency, giving them more time to focus on the accounts that are most complex. Some examples include:';
const listItems = [
  'Prioritization of work – Based on factors such as the financial impact or age of an account, machine learning can apply prioritization to determine which work items should be prioritized.',
  'Limit denials – Based on denial codes and the subsequent actions to address them, the system can identify patterns, flag errors or expose duplicate charges before they are billed. That enables more proactive and preventative process changes.',
  'Automate tasks – This level of intelligence could automate certain tasks or processes in account management that previously had to be handled by one or more resources.',
];

const preview = [
  <h3 key="header">{header}</h3>,
  <p key="text">{text}</p>,
  <ul key="list">
    <li>{listItems[0]}</li>
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
      customText = 'Hide 2 Iteems';
    } else {
      customText = 'Show 2 More Items';
    }

    return (
      <ShowHide
        preview={preview}
        onChange={this.toggleShowHide}
        isOpen={this.state.isOpen}
        buttonText={customText}
        focusRef={this.focusRef}
      >
        <h3>{header}</h3>
        <p>{text}</p>
        <ul>
          <li><p>{listItems[0]}</p></li>
          <li><p><Focuser ref={this.focusRef} focusableText={listItems[1]} /></p></li>
          <li><p>{listItems[2]}</p></li>
        </ul>
      </ShowHide>
    );
  }
}

export default CustomButtonTextShowHide;
