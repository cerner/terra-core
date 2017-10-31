import React from 'react';
import _ from 'lodash';
import FlexBox from 'terra-flex-box';

const alignContent = {
  center: 'center',
  flexEnd: 'flex-end',
  flexStart: 'flex-start',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  stretch: 'stretch',
};

const alignItems = {
  baseline: 'baseline',
  center: 'center',
  flexEnd: 'flex-end',
  flexStart: 'flex-start',
  stretch: 'stretch',
};

const display = {
  flex: 'flex',
  inlineFlex: 'inline-flex',
};

const flexDirection = {
  column: 'column',
  columnReverse: 'column-reverse',
  row: 'row',
  rowReverse: 'row-reverse',
};

const flexWrap = {
  nowrap: 'nowrap',
  wrapReverse: 'wrap-reverse',
  wrap: 'wrap',
};

const justifyContent = {
  center: 'center',
  flexEnd: 'flex-end',
  flexStart: 'flex-start',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
};

class FlexBoxAlignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentWillMount() {
    this.state.id = _.uniqueId();
  }

  getId(name) {
    return name + this.state.id;
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderAlignContentForm() {
    return (
      <form>
        <label htmlFor={this.getId('alignContent')}>Align Content</label>
        <select id={this.getId('alignContent')} name="alignContent" value={this.state.alignContent} onChange={this.handleSelectChange}>
          <option value="">default</option>
          <option value={alignContent.center}>{alignContent.center}</option>
          <option value={alignContent.flexEnd}>{alignContent.flexEnd}</option>
          <option value={alignContent.flexStart}>{alignContent.flexStart}</option>
          <option value={alignContent.spaceAround}>{alignContent.spaceAround}</option>
          <option value={alignContent.spaceBetween}>{alignContent.spaceBetween}</option>
          <option value={alignContent.stretch}>{alignContent.stretch}</option>
        </select>
      </form>
    );
  }

  renderAlignItemsForm() {
    return (
      <form>
        <label htmlFor={this.getId('alignItems')}>Align Items</label>
        <select id={this.getId('alignItems')} name="alignItems" value={this.state.alignItems} onChange={this.handleSelectChange}>
          <option value="">default</option>
          <option value={alignItems.baseline}>{alignItems.baseline}</option>
          <option value={alignItems.center}>{alignItems.center}</option>
          <option value={alignItems.flexEnd}>{alignItems.flexEnd}</option>
          <option value={alignItems.flexStart}>{alignItems.flexStart}</option>
          <option value={alignItems.stretch}>{alignItems.stretch}</option>
        </select>
      </form>
    );
  }

  renderDisplayForm() {
    return (
      <form>
        <label htmlFor={this.getId('display')}>Display</label>
        <select id={this.getId('display')} name="display" value={this.state.display} onChange={this.handleSelectChange}>
          <option value="flex">default</option>
          <option value={display.flex}>{display.flex}</option>
          <option value={display.inlineFlex}>{display.inlineFlex}</option>
        </select>
      </form>
    );
  }

  renderFlexDirectionForm() {
    return (
      <form>
        <label htmlFor={this.getId('flexDirection')}>Flex Direction</label>
        <select id={this.getId('flexDirection')} name="flexDirection" value={this.state.flexDirection} onChange={this.handleSelectChange}>
          <option value="">default</option>
          <option value={flexDirection.column}>{flexDirection.column}</option>
          <option value={flexDirection.columnReverse}>{flexDirection.columnReverse}</option>
          <option value={flexDirection.row}>{flexDirection.row}</option>
          <option value={flexDirection.rowReverse}>{flexDirection.rowReverse}</option>
        </select>
      </form>
    );
  }

  renderFlexWrapForm() {
    return (
      <form>
        <label htmlFor={this.getId('flexWrap')}>Flex Wrap</label>
        <select id={this.getId('flexWrap')} name="flexWrap" value={this.state.flexWrap} onChange={this.handleSelectChange}>
          <option value="">default</option>
          <option value={flexWrap.nowrap}>{flexWrap.nowrap}</option>
          <option value={flexWrap.wrapReverse}>{flexWrap.wrapReverse}</option>
          <option value={flexWrap.wrap}>{flexWrap.wrap}</option>
        </select>
      </form>
    );
  }

  renderJustifyContentForm() {
    return (
      <form>
        <label htmlFor={this.getId('justifyContent')}>Justify Content</label>
        <select id={this.getId('justifyContent')} name="justifyContent" value={this.state.justifyContent} onChange={this.handleSelectChange}>
          <option value="">default</option>
          <option value={justifyContent.center}>{justifyContent.center}</option>
          <option value={justifyContent.flexEnd}>{justifyContent.flexEnd}</option>
          <option value={justifyContent.flexStart}>{justifyContent.flexStart}</option>
          <option value={justifyContent.spaceAround}>{justifyContent.spaceAround}</option>
          <option value={justifyContent.spaceBetween}>{justifyContent.spaceBetween}</option>
        </select>
      </form>
    );
  }

  render() {
    const alignContentForm = this.renderAlignContentForm();
    const alignItemsForm = this.renderAlignItemsForm();
    const displayForm = this.renderDisplayForm();
    const flexDirectionForm = this.renderFlexDirectionForm();
    const flexWrapForm = this.renderFlexWrapForm();
    const justifyContentForm = this.renderJustifyContentForm();

    return (
      <div>
        {alignContentForm}
        {alignItemsForm}
        {displayForm}
        {flexDirectionForm}
        {flexWrapForm}
        {justifyContentForm}
        <br />
        <FlexBox
          style={{ border: '1px solid black' }}
          className="flexBoxExample"
          alignContent={this.state.alignContent}
          alignItems={this.state.alignItems}
          display={this.state.display}
          flexDirection={this.state.flexDirection}
          flexWrap={this.state.flexWrap}
          justifyContent={this.state.justifyContent}
          width="500px" minHeight="44px" id="testId"
        >
          <span>span1</span>
          <span>span2</span>
          <span>span3</span>
          <span>span4</span>
          <span>span5</span>
        </FlexBox>
      </div>
    );
  }
}

export default FlexBoxAlignment;
