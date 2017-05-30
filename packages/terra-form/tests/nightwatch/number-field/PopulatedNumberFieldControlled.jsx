import React from 'react';

import NumberField from '../../../lib/NumberField';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sales_tax_rate: 0.2,
    };

    this.updateSalesTax = this.updateSalesTax.bind(this);
  }

  updateSalesTax(e) {
    this.setState({
      sales_tax_rate: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <NumberField
          label="Sales Tax Rate"
          name="sales_tax_rate"
          value={this.state.sales_tax_rate}
          onChange={this.updateSalesTax}
          max={1}
          min={0}
          step={0.1}
          required
        />
      </form>
    );
  }
}

export default ControlledInput;
