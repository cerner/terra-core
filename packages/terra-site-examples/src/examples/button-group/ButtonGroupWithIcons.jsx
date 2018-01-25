import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import ButtonGroup from 'terra-button-group';

const iconEdit = <IconEdit />;
const iconAdd = <IconAdd />;

const ButtonGroupWithIcons = () => (
  <div>
    <div>
      <ButtonGroup
        buttons={[<ButtonGroup.Button text="Icon" icon={iconEdit} key="iconDefault1" />,
          <ButtonGroup.Button text="Icon" icon={iconAdd} key="iconDefault2" />]}
      />
    </div>
    <br />
    <div>
      <ButtonGroup
        buttons={[<ButtonGroup.Button text="Icon Reversed" icon={iconEdit} isReversed key="iconReversed1" />,
          <ButtonGroup.Button text="Icon Reversed" icon={iconAdd} isReversed key="iconReversed2" />]}
      />
    </div>
    <br />
    <div>
      <ButtonGroup
        buttons={[<ButtonGroup.Button icon={iconEdit} key="iconOnly1" />,
          <ButtonGroup.Button icon={iconAdd} key="iconOnly2" />]}
      />
    </div>
  </div>
);

export default ButtonGroupWithIcons;
