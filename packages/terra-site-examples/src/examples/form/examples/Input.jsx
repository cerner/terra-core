import React from 'react';
import Input from 'terra-form/lib/Input';
import styles from '../../../site.scss';

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
        <p>Input Provided: <span className={styles['site-input-display']}>{this.state.input}</span></p>
        <br />
      </div>
    );
  }
}
export default InputExamples;
