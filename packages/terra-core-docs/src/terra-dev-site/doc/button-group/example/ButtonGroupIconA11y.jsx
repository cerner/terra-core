import React from 'react';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconSave from 'terra-icon/lib/icon/IconSave';
import ButtonGroup from 'terra-button-group';

const iconPrint = <IconPrinter a11yLabel="Print" />;
const iconSave = <IconSave a11yLabel="Save" />;

const ButtonGroupA11yIcon = () => (
  <ButtonGroup>
    <ButtonGroup.Button text="Print Documents" icon={iconPrint} key="print" />
    <ButtonGroup.Button text="Save Documents" icon={iconSave} key="save" />
  </ButtonGroup>
);

export default ButtonGroupA11yIcon;
