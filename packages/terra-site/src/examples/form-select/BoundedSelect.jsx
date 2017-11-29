import React from 'react';
import Select from 'terra-form-select';
import styles from '../../site.scss';

class BoundedSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'apple-pie' };
    this.handleChange = this.handleChange.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  handleChange(event, selectedValue) {
    this.setState({ selected: selectedValue });
  }

  render() {
    return (
      <div>
        <div style={{ height: '150px', width: '150px', background: 'aliceblue', overflow: 'hidden' }} ref={this.setParentNode}>
          <form>
            <Select
              name="zibby"
              defaultValue="apple-pie"
              required
              onChange={this.handleChange}
              boundingRef={this.getParentNode}
            >
              <Select.Option value="apple-pie" display="Apple Pie" key="apple-pie" />
              <Select.Option value="cherry" display="Cherry" key="cherry" />
              <Select.Option value="neopolitan" display="Neopolitan" key="neopolitan" />
              <Select.Option value="rocky-road" display="Rocky Road" disabled key="rocky-road" />
              <Select.Option value="strawberry-cheesecake" display="Strawberry Cheesecakes" key="strawberry-cheesecake" />
              <Select.Option value="vanilla" display="Vanilla" disabled key="vanilla" />
            </Select>
          </form>
        </div>
        <br /><p>Option Selected: <span className={styles['site-input-display']}>{this.state.selected}</span></p>
        <br />
      </div>
    );
  }
}
export default BoundedSelect;
