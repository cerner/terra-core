import React from 'react';
import Button from 'terra-button';
import Hookshot from 'terra-hookshot';
import NumberField from 'terra-form/lib/NumberField';

class HookshotStandard extends React.Component {
  static generateOptions(values) {
    return values.map((currentValue, index) => {
      const keyValue = index;
      return <option key={keyValue} value={currentValue}>{currentValue}</option>;
    });
  }

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getId = this.getId.bind(this);
    this.state = {
      isOpen: false,
      hookshotContentAttachment: Hookshot.attachmentPositions[1],
      hookshotTargetAttachment: Hookshot.attachmentPositions[7],
      hookshotAttachmentBehavior: Hookshot.attachmentBehaviors[0],
      hookshotAttachmentMargin: 0,
    };
  }

  getId(name) {
    return name + this.state.id;
  }

  handleButtonClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: Number.parseFloat(event.target.value) });
  }

  render() {
    const hookshotContent = (
      <Hookshot.Content
        onEsc={this.handleRequestClose}
        onOutsideClick={this.handleRequestClose}
        onResize={this.handleRequestClose}
      >
        <div style={{ height: '40px', width: '200px', backgroundColor: 'red' }}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      <div>
        <form>
          <label htmlFor={this.getId('hookshotAttachmentBehavior')}>Attachment Behavior</label>
          <select id={this.getId('hookshotAttachmentBehavior')} name="hookshotAttachmentBehavior" value={this.state.hookshotAttachmentBehavior} onChange={this.handleSelectChange}>
            {HookshotStandard.generateOptions(Hookshot.attachmentBehaviors)}
          </select>
          <br />
          <br />
          <NumberField
            label="Attachment Margin in Px"
            id={this.getId('hookshotAttachmentMargin')}
            name="hookshotAttachmentMargin"
            defaultValue={0}
            value={this.state.hookshotAttachmentMargin}
            style={{ width: '200px' }}
            onChange={this.handleInputChange}
          />
          <label htmlFor={this.getId('hookshotContentAttachment')}>Content Attachment</label>
          <select id={this.getId('hookshotContentAttachment')} name="hookshotContentAttachment" value={this.state.hookshotContentAttachment} onChange={this.handleSelectChange}>
            {HookshotStandard.generateOptions(Hookshot.attachmentPositions)}
          </select>
          <br />
          <br />
          <label htmlFor={this.getId('hookshotTargetAttachment')}>Target Attachment</label>
          <select id={this.getId('hookshotTargetAttachment')} name="hookshotTargetAttachment" value={this.state.hookshotTargetAttachment} onChange={this.handleSelectChange}>
            {HookshotStandard.generateOptions(Hookshot.attachmentPositions)}
          </select>
          <br />
          <br />
        </form>
        <Hookshot
          attachmentBehavior={this.state.hookshotAttachmentBehavior}
          attachmentMargin={this.state.hookshotAttachmentMargin}
          contentAttachment={this.state.hookshotContentAttachment}
          isEnabled
          isOpen={this.state.isOpen}
          targetAttachment={this.state.hookshotTargetAttachment}
          targetRef={() => document.getElementById('hookshot-standard-button')}
        >
          {hookshotContent}
        </Hookshot>
        <Button id="hookshot-standard-button" text="Hookshot Example" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default HookshotStandard;
