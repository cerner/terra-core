import React from 'react';
import PropTypes from 'prop-types';

import Button from 'terra-button/lib/Button';

const propTypes = { onChange: PropTypes.func };
const defaultProps = { onChange: undefined };

class MobileButton extends React.Component {
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
      <Button id="mobileButton" text="Toggle" onClick={onChange} />
    );
  }

}

MobileButton.propTypes = propTypes;
MobileButton.defaultProps = defaultProps;

export default MobileButton;
