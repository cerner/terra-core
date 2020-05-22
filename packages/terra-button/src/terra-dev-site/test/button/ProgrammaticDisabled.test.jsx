import React from 'react';
import Button from '../../../Button';

let returnButtonProps = {
  text: 'Click to Disable',
};

const returnDisabledDefaultProps = () => {
  returnButtonProps = {
    isDisabled: true,
    text: 'Disabled',
  };
};

class ProgrammaticDisabled extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    returnDisabledDefaultProps();
    this.forceUpdate();
  }

  render() {
    return (
      <Button
        {...returnButtonProps}
        id="programmaticDisabled"
        key="1"
        onClick={this.handleClick}
      />
    );
  }
}

export default ProgrammaticDisabled;
