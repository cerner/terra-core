import React from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';

class Example extends React.Component {
  componentDidMount() {
    this.visuallyHiddenText.innerText = 'Text written via refCallback innerText update';
  }

  render() {
    return (
      <p>
        Visually Hidden Text which uses refCallback to write innerText
        <VisuallyHiddenText refCallback={(ref) => { this.visuallyHiddenText = ref; }} />
      </p>
    );
  }
}

export default Example;
