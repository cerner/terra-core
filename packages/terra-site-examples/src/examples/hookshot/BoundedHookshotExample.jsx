import React from 'react';
import Button from 'terra-button';
import Hookshot from 'terra-hookshot';
import NumberField from 'terra-form/lib/NumberField';

const ATTACHMENT_POSITIONS = [
  'top start',
  'top center',
  'top end',
  'middle start',
  'middle center',
  'middle end',
  'bottom start',
  'bottom center',
  'bottom end',
];

const generateOptions = values => (
  values.map((currentValue, index) => {
    const keyValue = index;
    return <option key={keyValue} value={currentValue}>{currentValue}</option>;
  })
);

const attachmentValues = (attachment) => {
  if (attachment === 'middle start') {
    return { vertical: 'middle', horizontal: 'start' };
  } else if (attachment === 'middle end') {
    return { vertical: 'middle', horizontal: 'end' };
  } else if (attachment === 'middle center') {
    return { vertical: 'middle', horizontal: 'center' };
  } else if (attachment === 'top start') {
    return { vertical: 'top', horizontal: 'start' };
  } else if (attachment === 'top end') {
    return { vertical: 'top', horizontal: 'end' };
  } else if (attachment === 'top center') {
    return { vertical: 'top', horizontal: 'center' };
  } else if (attachment === 'bottom start') {
    return { vertical: 'bottom', horizontal: 'start' };
  } else if (attachment === 'bottom end') {
    return { vertical: 'bottom', horizontal: 'end' };
  }
  return { vertical: 'bottom', horizontal: 'center' };
};

class HookshotStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.getId = this.getId.bind(this);
    this.state = {
      isOpen: false,
      hookshotContentAttachment: ATTACHMENT_POSITIONS[1],
      hookshotTargetAttachment: ATTACHMENT_POSITIONS[7],
      hookshotAttachmentBehavior: Hookshot.attachmentBehaviors[0],
      hookshotAttachmentMargin: 0,
    };
  }

  componentDidMount() {
    this.parentNode.scrollTop = 225;
    this.parentNode.scrollLeft = 475;
  }

  getId(name) {
    return name + this.state.id;
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
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
            {generateOptions(Hookshot.attachmentBehaviors)}
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
            {generateOptions(ATTACHMENT_POSITIONS)}
          </select>
          <br />
          <br />
          <label htmlFor={this.getId('hookshotTargetAttachment')}>Target Attachment</label>
          <select id={this.getId('hookshotTargetAttachment')} name="hookshotTargetAttachment" value={this.state.hookshotTargetAttachment} onChange={this.handleSelectChange}>
            {generateOptions(ATTACHMENT_POSITIONS)}
          </select>
          <br />
          <br />
        </form>
        <Hookshot
          attachmentBehavior={this.state.hookshotAttachmentBehavior}
          attachmentMargin={this.state.hookshotAttachmentMargin}
          boundingRef={this.getParentNode}
          contentAttachment={attachmentValues(this.state.hookshotContentAttachment)}
          isEnabled
          isOpen={this.state.isOpen}
          targetAttachment={attachmentValues(this.state.hookshotTargetAttachment)}
          targetRef={() => document.getElementById('hookshot-bounded-button')}
        >
          {hookshotContent}
        </Hookshot>
        <div style={{ height: '200px', width: '400px', background: 'aliceblue', overflow: 'auto', position: 'relative' }} ref={this.setParentNode}>
          <div style={{ position: 'relative', height: '600px', width: '1200px' }}>
            <Button id="hookshot-bounded-button" text="Hookshot Example" onClick={this.handleButtonClick} style={{ position: 'absolute', left: '600px', top: '300px' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default HookshotStandard;
