import React from 'react';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import ButtonGroup from 'terra-button-group';

const iconCaretUp = <IconCaretUp />;
const iconCaretDown = <IconCaretDown />;

const ButtonGroupWithIcons = () => (
  <div>
    <div>
      <ButtonGroup>
        <ButtonGroup.Button text="Up" key="upButton" />
        <ButtonGroup.Button text="Down" key="downButton" />
      </ButtonGroup>
    </div>
    <br />
    <div>
      <ButtonGroup>
        <ButtonGroup.Button text="Up" icon={iconCaretUp} key="upIcon" />
        <ButtonGroup.Button text="Down" icon={iconCaretDown} key="downIcon" />
      </ButtonGroup>
    </div>
  </div>
);

export default ButtonGroupWithIcons;
