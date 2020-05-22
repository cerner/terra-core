import React from 'react';
import ButtonGroup from '../../../ButtonGroup';

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
      <ButtonGroup id="programmaticDisabledButtonGroup">
        <ButtonGroup.Button
          {...returnButtonProps}
          id="programmaticDisabledButton"
          key="1"
          onClick={this.handleClick}
        />
      </ButtonGroup>
    );
  }
}

export default ProgrammaticDisabled;
