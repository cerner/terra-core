import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
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
      <Checkbox id="mobileCheckbox" labelText="Toggle to trigger resize. Window size needs to be less than or equal to 1024px." onChange={onChange} />
    );
  }
}

MobileCheckbox.propTypes = propTypes;
MobileCheckbox.defaultProps = defaultProps;

export default MobileCheckbox;
