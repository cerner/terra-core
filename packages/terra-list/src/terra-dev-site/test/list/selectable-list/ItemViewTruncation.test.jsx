import React from 'react';
import ItemView from 'terra-clinical-item-view/lib/ItemView';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import List from '../../../../List';
import SelectableList from '../../../../SelectableList';

const display = <ItemView.Display text="display1display1display1display1display1display1display1display1display1display1" key="123" />;

const accessoryStart = id => <IconAlert id={id} />;
const accessoryEnd = id => <IconInformation id={id} />;
const comment = id => <ItemView.Comment id={id} text="comment1comment1comment1comment1comment1comment1comment1comment1" />;

const itemViews = (
  <div>
    <ItemView displays={[display]} isTruncated comment={comment(3)} startAccessory={accessoryStart(7)} endAccessory={accessoryEnd(11)} textEmphasis="start" id="ItemView-one-truncate" />
    <br />
    <ItemView displays={[display]} isTruncated comment={comment(4)} startAccessory={accessoryStart(8)} endAccessory={accessoryEnd(12)} layout="twoColumns" textEmphasis="start" id="ItemView-two-truncate" />
  </div>
);

const ListContent = () => (
  <div style={{ fontSize: '10px', width: '500px' }}>
    <List isDivided>
      <List.Item content={itemViews} key="124" />
    </List>
    <br />
    <SelectableList hasChevrons isDivided>
      <SelectableList.Item content={itemViews} key="124" />
    </SelectableList>
  </div>
);

export default ListContent;
