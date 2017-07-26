import React from 'react';
import NumberField from 'terra-form/lib/NumberField';

class NumberFieldExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '0.075' };
    this.handleChange = this.handleChange.bind(this);
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
            onChange={this.handleChange}
          />
        </form>
        <hr /><p>Input Provided: {this.state.input}</p>
        <br />
      </div>
    );
  }
}
export default NumberFieldExamples;
