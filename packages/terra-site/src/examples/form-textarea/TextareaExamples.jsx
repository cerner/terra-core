import React from 'react';
import Textarea from 'terra-form-textarea';

class TextareaExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area1: 'I automatically resize as you type in more information (Except in Mobile)',
      area2: 'Hello! I am a Software Engineer in Kansas City! Leaving this as blank makes this input invalid.',
      area3: 'I am full container width and height, making me non resizable.',
    };
    this.handleArea1Change = this.handleArea1Change.bind(this);
    this.handleArea2Change = this.handleArea2Change.bind(this);
    this.handleArea3Change = this.handleArea3Change.bind(this);
  }

  handleArea1Change(event) {
    this.setState({ area1: event.currentTarget.value });
  }

  handleArea2Change(event) {
    this.setState({ area2: event.currentTarget.value });
  }

  handleArea3Change(event) {
    this.setState({ area3: event.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form>
          <Textarea defaultValue="I'm Disabled" disabled size="small" />
          <Textarea defaultValue="I'm Disabled with error" isInvalid disabled size="small" />
          <Textarea name="name" value={this.state.area1} required onChange={this.handleArea1Change} size="medium" isAutoResizable />
          <Textarea
            name="profile_description"
            value={this.state.area2}
            cols={10}
            isInvalid={this.state.area2 === ''}
            onChange={this.handleArea2Change}
            size="large"
          />
          <Textarea name="details" size="full" value={this.state.area3} required onChange={this.handleArea3Change} />
        </form>
        <hr />
        <ul>Input Provided:
          <li style={{ margin: '10px' }}>Text Area 1 - {this.state.area1}</li>
          <li style={{ margin: '10px' }}>Text Area 2 - {this.state.area2}</li>
          <li style={{ margin: '10px' }}>Text Area 3 - {this.state.area3}</li>
        </ul>
        <br />
      </div>
    );
  }
}
export default TextareaExamples;
