import React from 'react';
import _ from 'lodash';
import FlexBox from 'terra-flex-box';

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
    const displayForm = this.renderDisplayForm();
    const flexDirectionForm = this.renderFlexDirectionForm();
    const flexWrapForm = this.renderFlexWrapForm();
    const justifyContentForm = this.renderJustifyContentForm();

    return (
      <div>
        {displayForm}
        {flexDirectionForm}
        {flexWrapForm}
        {justifyContentForm}
        <br />
        <FlexBox
          style={{ border: '1px solid black' }}
          className="flexBoxExample"
          display={this.state.display}
          flexDirection={this.state.flexDirection}
          flexWrap={this.state.flexWrap}
          justifyContent={this.state.justifyContent}
          id="testId"
        >
          <span>1 Test Display 1</span>
          <span>2 Test Display 2</span>
          <span>3 Test Display 3</span>
          <span>4 Test Display 4</span>
          <span>5 Test Display 5</span>
        </FlexBox>
      </div>
    );
  }
}

export default FlexBoxAlignment;
