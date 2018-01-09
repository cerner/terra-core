import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import ButtonGroup from 'terra-button-group';

const iconEdit = <IconEdit />;
const iconAdd = <IconAdd />;

const ButtonGroupWithIcons = () => (
  <div>
    <div>
      <ButtonGroup>
        <ButtonGroup.Button text="Edit" key="editButton" />
        <ButtonGroup.Button text="Add" key="addButton" />
      </ButtonGroup>
    </div>
    <br />
    <div>
      <ButtonGroup>
        <ButtonGroup.Button text="Edit" icon={iconEdit} key="editIcon" />
        <ButtonGroup.Button text="Add" icon={iconAdd} key="addIcon" />
      </ButtonGroup>
    </div>
  </div>
);

export default ButtonGroupWithIcons;
