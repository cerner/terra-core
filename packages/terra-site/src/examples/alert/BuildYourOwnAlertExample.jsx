import React from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';
import Toggle from 'terra-toggle';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import IconCritical from 'terra-icon/lib/icon/IconCritical';
import IconOverDue from 'terra-icon/lib/icon/IconOverDue';
import IconClock from 'terra-icon/lib/icon/IconClock';

class BuildYourOwnAlertExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false,
      actionButtonClickCount: 0,
      type: undefined,
      title: '',
      content: '',
      contentType: 'enterText',
      allTextShown: false,
      isDismissible: false,
      showActionButton: false,
      customIcon: '',
      customStatusColor: '',
    };
    this.handleDismiss = this.handleDismiss.bind(this);
    this.actionFunc = this.actionFunc.bind(this);
    this.handleTypeSelectChange = this.handleTypeSelectChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentTypeSelectChange = this.handleContentTypeSelectChange.bind(this);
    this.handleTextContentChange = this.handleTextContentChange.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
    this.handleShowLess = this.handleShowLess.bind(this);
    this.handleDismissibleSelectChange = this.handleDismissibleSelectChange.bind(this);
    this.handleActionButtonSelectChange = this.handleActionButtonSelectChange.bind(this);
    this.handleCustomIconSelectChange = this.handleCustomIconSelectChange.bind(this);
    this.handleCustomStatusColorChange = this.handleCustomStatusColorChange.bind(this);
  }

  handleDismiss() {
    this.setState({ isDismissed: true });
  }

  actionFunc() {
    const newState = this.state;
    newState.actionButtonClickCount += 1;
    this.setState(newState);
  }

  handleTypeSelectChange(e) {
    if (e.target.value) {
      this.setState({ type: e.target.value });
    } else {
      this.setState({ type: undefined });
    }
    if (e.target.value !== Alert.Opts.Types.CUSTOM) {
      this.setState({ customIcon: '', customStatusColor: '' });
    }
  }

  handleTitleChange(e) {
    if (e.target.value) {
      this.setState({ title: e.target.value });
    } else {
      this.setState({ title: '' });
    }
  }

  handleContentTypeSelectChange(e) {
    if (e.target.value) {
      this.setState({ contentType: e.target.value, content: '' });
    } else {
      this.setState({ contentType: 'enterText', content: '' });
    }
  }

  handleTextContentChange(e) {
    if (e.target.value) {
      this.setState({ content: e.target.value });
    } else {
      this.setState({ content: '' });
    }
  }

  handleShowMore() {
    this.setState({ allTextShown: true });
  }

  handleShowLess() {
    this.setState({ allTextShown: false });
  }

  handleDismissibleSelectChange(e) {
    if (e.target.value === 'true') {
      this.setState({ isDismissible: true });
    } else {
      this.setState({ isDismissible: false });
    }
  }

  handleActionButtonSelectChange(e) {
    if (e.target.value === 'true') {
      this.setState({ showActionButton: true });
    } else {
      this.setState({ showActionButton: false });
    }
  }

  handleCustomIconSelectChange(e) {
    if (e.target.value) {
      this.setState({ customIcon: e.target.value });
    } else {
      this.setState({ customIcon: '' });
    }
  }

  handleCustomStatusColorChange(e) {
    if (e.target.value) {
      this.setState({ customStatusColor: e.target.value });
    } else {
      this.setState({ customStatusColor: '' });
    }
  }

  render() {
    const gettysburgAddress = (
      <span>
        Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
        <Toggle isOpen={!this.state.allTextShown} isAnimated>
          <Button onClick={this.handleShowMore} text="Show More" variant="link" size="tiny" />
        </Toggle>
        <Toggle isOpen={this.state.allTextShown} isAnimated>
            Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.
          <br /><br />
            But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
          <br /><br />
          <Button onClick={this.handleShowLess} text="Show Less" variant="link" size="tiny" />
        </Toggle>
      </span>
    );
    const alertTypePropStr = this.state.type ? `type={Alert.Opts.Types.${this.state.type.toUpperCase()}}` : '';
    const alertTitlePropStr = this.state.title ? `title="${this.state.title}"` : '';
    const alertOnDismissPropStr = this.state.isDismissible ? 'onDismiss={this.handleDismiss}' : '';
    const onDismissHandler = this.state.isDismissible ? this.handleDismiss : undefined;
    const actionButton = this.state.showActionButton ? (<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />) : undefined;
    const alertActionPropStr = this.state.showActionButton ? 'action={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />}' : '';
    const customPropsDisplayStyle = { display: this.state.type === Alert.Opts.Types.CUSTOM ? 'table-row' : 'none' };
    const customStatusColorPropStr = this.state.customStatusColor ? `customStatusColor="${this.state.customStatusColor}"` : '';
    const actionCounterText = this.state.showActionButton ? `Action button has been clicked ${this.state.actionButtonClickCount} times.` : '';
    let alertElem = '';
    let alertContentPropStr = '';
    let textContentEntryField = '';
    let contentValue = '';
    let customIcon = null;
    let customIconPropStr = '';

    if (this.state.contentType === 'enterText') {
      textContentEntryField = (<input type="text" style={{ width: '300px' }} placeholder="Enter Alert content" value={this.state.content} onChange={this.handleTextContentChange} />);
      contentValue = this.state.content;
      alertContentPropStr = contentValue;
    } else {
      contentValue = gettysburgAddress;
      alertContentPropStr = '  <span>Four score and seven years ago our fathers brought forth on this continent, a new nation, . . . </span>';
    }

    switch (this.state.customIcon) {
      case 'help':
        customIcon = (<IconHelp />);
        customIconPropStr = 'customIcon={<IconHelp />}';
        break;
      case 'critical':
        customIcon = (<IconCritical />);
        customIconPropStr = 'customIcon={<IconCritical />}';
        break;
      case 'overdue':
        customIcon = (<IconOverDue />);
        customIconPropStr = 'customIcon={<IconOverDue />}';
        break;
      case 'clock':
        customIcon = (<IconClock />);
        customIconPropStr = 'customIcon={<IconClock />}';
        break;
      default:
        break;
    }

    if (!this.state.isDismissed) {
      alertElem = (
        <Alert type={this.state.type} title={this.state.title} onDismiss={onDismissHandler} action={actionButton} customIcon={customIcon} customStatusColor={this.state.customStatusColor} >
          {contentValue}
        </Alert>
      );
    }

    return (
      <div>
        <div>
          <div dir="ltr">
            <h3>Build your own Alert</h3>
            <br />
            <code>
              &lt;Alert {alertTypePropStr} {alertTitlePropStr} {alertOnDismissPropStr} {alertActionPropStr} {customIconPropStr} {customStatusColorPropStr} &gt;
              <br />
              &nbsp;&nbsp;{alertContentPropStr}
              <br />
              &lt;/Alert&gt;
            </code>
          </div>
          <br />
          {alertElem}
          <br />
          <p>{actionCounterText}</p>
        </div>
        <br />
        <div style={{ marginTop: '10px' }}>
          <h4>Configure the above Alert by making selections in this form</h4>
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="typeSelector">Alert Type</label>
                  </td>
                  <td>
                    <select id="typeSelector" name="type" value={this.state.type} onChange={this.handleTypeSelectChange}>
                      <option value="">default</option>
                      <option value={Alert.Opts.Types.ALERT}>Alert.Opts.Types.ALERT</option>
                      <option value={Alert.Opts.Types.ERROR}>Alert.Opts.Types.ERROR</option>
                      <option value={Alert.Opts.Types.WARNING}>Alert.Opts.Types.WARNING</option>
                      <option value={Alert.Opts.Types.ADVISORY}>Alert.Opts.Types.ADVISORY</option>
                      <option value={Alert.Opts.Types.INFO}>Alert.Opts.Types.INFO</option>
                      <option value={Alert.Opts.Types.SUCCESS}>Alert.Opts.Types.SUCCESS</option>
                      <option value={Alert.Opts.Types.CUSTOM}>Alert.Opts.Types.CUSTOM</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="titleSelector">Alert Title</label>
                  </td>
                  <td>
                    <input id="titleSelector" type="text" style={{ width: '250px' }} placeholder="Enter title or leave blank for default title" value={this.state.title} onChange={this.handleTitleChange} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="contentTypeSelector">Alert Content</label>
                  </td>
                  <td>
                    <select id="contentTypeSelector" name="contentType" style={{ width: '200px', marginRight: '5px' }} value={this.state.contentType} onChange={this.handleContentTypeSelectChange}>
                      <option value="enterText">Enter Text Manually</option>
                      <option value="useHTML">Gettysburg Address HTML</option>
                    </select>
                    {textContentEntryField}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="dimissibleSelector">Alert Dismissible</label>
                  </td>
                  <td>
                    <select id="dimissibleSelector" name="isDismissible" style={{ width: '100px' }} value={this.state.isDismissible.toString()} onChange={this.handleDismissibleSelectChange}>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="actionButtonSelector">Alert Action Button</label>
                  </td>
                  <td>
                    <select id="actionButtonSelector" name="showActionButton" style={{ width: '100px' }} value={this.state.showActionButton.toString()} onChange={this.handleActionButtonSelectChange}>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </td>
                </tr>
                <tr style={customPropsDisplayStyle}>
                  <td>
                    <label htmlFor="customIconSelector">Alert Custom Icon</label>
                  </td>
                  <td>
                    <select id="customIconSelector" name="showActionButton" style={{ width: '150px' }} value={this.state.customIcon} onChange={this.handleCustomIconSelectChange}>
                      <option value="">default</option>
                      <option value="help">Help Icon</option>
                      <option value="critical">Critical Icon</option>
                      <option value="overdue">Overdue Icon</option>
                      <option value="clock">Clock Icon</option>
                    </select>
                  </td>
                </tr>
                <tr style={customPropsDisplayStyle}>
                  <td>
                    <label htmlFor="customStatusColorSelector">Alert Custom Status Color</label>
                  </td>
                  <td>
                    <input id="customStatusColorSelector" type="text" style={{ width: '250px' }} placeholder="Enter status bar color" value={this.state.customStatusColor} onChange={this.handleCustomStatusColorChange} />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default BuildYourOwnAlertExample;
