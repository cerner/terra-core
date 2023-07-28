/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ShowHide, { Focuser } from 'terra-show-hide';

const header = 'Bringing clarity to life sciences and healthcare decision-making ';
const text = [
  'When we accelerate the discovery, development and deployment of life-enhancing insights and therapies, clinicians and patients benefit. Connecting data and breaking down silos',
  'across the healthcare innovation ecosystem must be our collective focus to help improve everyday health for all people. Several factors help bring clarity to life sciences, researchers and clinicians and',
  'guide better care,',
  'including:',
];
const listItems = [
  <li key="item1">Data-driven research solutions for commercial and real-world evidence collaborators and health providers</li>,
  <li key="item2">Support to move from simply accumulating and analyzing data to linking and generating deeper insights </li>,
  <li key="item3">Combined life sciences knowledge, healthcare innovation and collaborative research expertise</li>,
  <li key="item4">Access to an expansive network of diverse research-ready health systems; as well as de-identified, real-world data from the EHR that also includes patient-reported outcomes</li>,
];
const conclusion = 'Through data and technology, we have the power to help life sciences, clinicians and researchers expand therapeutic areas of research and generate better evidence to solve healthcare challenges around the world. Together, we can accelerate groundbreaking research and trial opportunities that have the potential to transform everyday healthcare and improve people’s lives.';

const preview = [
  <h3 key="header">{header}</h3>,
  <p key="prefix">{text[0]}</p>,
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
      customText = 'Hide Composit Content';
    } else {
      customText = 'Show Composit Content';
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
        <p>
          <Focuser ref={this.focusRef} prefix={text[0]} focusableText={text[1]} />
          {' '}
          <a href="#">{text[2]}</a>
          {' '}
          {text[3]}
        </p>
        <ul>{listItems}</ul>
        <p>{conclusion}</p>
      </ShowHide>
    );
  }
}

export default CustomButtonTextShowHide;
