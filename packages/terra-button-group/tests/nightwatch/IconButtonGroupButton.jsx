import React from 'react';
import ButtonGroup from '../../lib/ButtonGroup';

const iconStyle = { backgroundColor: 'black', height: '1em', width: '1em' };
const icon = <span style={iconStyle} className="test"><svg width="1em" height="1em"><rect width="1em" height="1em" /></svg></span>;

const IconDefaultButtonGroup = () => (
  <ButtonGroup
    id="button-group-icon-default"
    buttons={[<ButtonGroup.Button text="Icon" icon={icon} key="iconDefault1" />,
      <ButtonGroup.Button text="Icon" icon={icon} key="iconDefault2" />]}
  />
);
const IconReversedButtonGroup = () => (
  <ButtonGroup
    id="button-group-icon-reversed"
    buttons={[<ButtonGroup.Button text="Icon Reversed" icon={icon} isReversed key="iconReversed1" />,
      <ButtonGroup.Button text="Icon Reversed" icon={icon} isReversed key="iconReversed2" />]}
  />
);
const IconOnlyButtonGroup = () => (
  <ButtonGroup
    id="button-group-icon-only"
    buttons={[<ButtonGroup.Button icon={icon} key="iconOnly1" />,
      <ButtonGroup.Button icon={icon} key="iconOnly2" />]}
  />
);

export {
  IconDefaultButtonGroup,
  IconReversedButtonGroup,
  IconOnlyButtonGroup,
};
