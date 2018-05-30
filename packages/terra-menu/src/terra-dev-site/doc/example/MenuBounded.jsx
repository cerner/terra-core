import React from 'react';
import BasicMenu from './BasicMenu';

class MenuBounded extends React.Component {
  constructor(props) {
    super(props);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  render() {
    return (
      <div style={{ height: '200px', width: '200px', background: 'aliceblue', overflow: 'hidden' }} ref={this.setParentNode}>
        <BasicMenu boundingRef={this.getParentNode} />
      </div>
    );
  }
}

export default MenuBounded;
