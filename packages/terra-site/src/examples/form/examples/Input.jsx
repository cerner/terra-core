import React from 'react';
import Input from 'terra-form/lib/Input';

class InputExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: 'bar' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <Input name="foo" defaultValue="bar" onChange={this.handleChange} />
        </form>
        <br />
        <p>Input Provided: {this.state.input}</p>
        <br />
      </div>
    );
  }
}
export default InputExamples;
