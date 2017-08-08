import React from 'react';
import Textarea from 'terra-form/lib/Textarea';

class TextareaExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area1: '',
      area2: 'Hello! I am a Software Engineer in Kansas City!',
    };
    this.handleArea1Change = this.handleArea1Change.bind(this);
    this.handleArea2Change = this.handleArea2Change.bind(this);
  }

  handleArea1Change(event) {
    this.setState({ area1: event.target.value });
  }

  handleArea2Change(event) {
    this.setState({ area2: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <Textarea name="name" required onChange={this.handleArea1Change} />
          <Textarea
            name="profile_description"
            defaultValue="Hello! I am a Software Engineer in Kansas City!"
            rows={10}
            cols={10}
            onChange={this.handleArea2Change}
          />
        </form>
        <hr />
        <ul>Input Provided:
          <li style={{ margin: '10px' }}>Text Area 1 - {this.state.area1}</li>
          <li style={{ margin: '10px' }}>Text Area 2 - {this.state.area2}</li>
        </ul>
        <br />
      </div>
    );
  }
}
export default TextareaExamples;
