import React from 'react';
import NumberField from 'terra-form/lib/NumberField';
import styles from '../../../site.scss';

class NumberFieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '0.075', isInvalid: false };
    this.handleChange = this.handleChange.bind(this);
    this.toggleIsInvalid = this.toggleIsInvalid.bind(this);
  }

  toggleIsInvalid() {
    this.setState({ isInvalid: !this.state.isInvalid });
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <NumberField
            label="Sales Tax Rate"
            name="sales_tax_rate"
            defaultValue={0.075}
            error="This field is required"
            help="Your county's office may have this information"
            required
            max={1}
            min={0}
            step={0.025}
            inputAttrs={{ className: 'healtheintent-application' }}
            inputId="tax-rate"
            isInline
            isInvalid={this.state.isInvalid}
            onChange={this.handleChange}
          />
        </form>
        <hr />
        <p>If a number feild is invalid, an error icon will be displayed. <button onClick={this.toggleIsInvalid}>Toggle Invalid State</button></p>
        <p>Input Provided: <span className={styles['site-input-display']}>{this.state.input}</span></p>
        <br />
      </div>
    );
  }
}
export default NumberFieldExamples;
