import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'terra-form-checkbox/lib/Checkbox';

const propTypes = { onChange: PropTypes.func };
const defaultProps = { onChange: undefined };

class MobileCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.onChange();
  }

  render() {
    const { onChange } = this.props;

    return (
      <Checkbox id="mobileCheckbox" labelText="Toggle to trigger checkbox resize. Window size needs to be less than 1024px." onChange={onChange} />
    );
  }

}

MobileCheckbox.propTypes = propTypes;
MobileCheckbox.defaultProps = defaultProps;

export default MobileCheckbox;

