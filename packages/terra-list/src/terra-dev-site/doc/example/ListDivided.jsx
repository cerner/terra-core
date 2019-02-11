import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item } from 'terra-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const ListDividedExample = () => (
  <React.Fragment>
    <List dividerStyle="standard">
      <Item key="123">
        <Placeholder title="Standard Divider Item 0" style={{ height: '50px' }} />
      </Item>
      <Item key="124">
        <Placeholder title="Standard Divider Item 1" style={{ height: '50px' }} />
      </Item>
      <Item key="125">
        <Placeholder title="Standard Divider Item 2" style={{ height: '50px' }} />
      </Item>
    </List>
    <br />
    <List dividerStyle="bottom-only">
      <Item key="123">
        <Placeholder title="Bottom Divider Item 0" style={{ height: '50px' }} />
      </Item>
      <Item key="124">
        <Placeholder title="Bottom Divider Item 1" style={{ height: '50px' }} />
      </Item>
      <Item key="125">
        <Placeholder title="Bottom Divider Item 2" style={{ height: '50px' }} />
      </Item>
    </List>
  </React.Fragment>
);

export default ListDividedExample;
