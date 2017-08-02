import React from 'react';
import Popup from 'terra-popup';
import Button from 'terra-button';
import ExamplePopupContent from './ExamplePopupContent';

const HEIGHT_KEYS = ['40', '80', '120', '160', '240', '320', '400', '480', '560', '640', '720', '800', '880'];
const WIDTH_KEYS = ['160', '240', '320', '640', '960', '1280', '1760'];

class PopupDimensions extends React.Component {
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
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.getId = this.getId.bind(this);
    this.state = { open: false };
  }

  getId(name) {
    return name + this.state.id;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  handleOnChange() {
    this.setState({ open: false });
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor={this.getId('popupContentHeight')}>Pop Content Height</label>
          <select id={this.getId('popupContentHeight')} name="popupContentHeight" value={this.state.popupContentHeight} onChange={this.handleSelectChange}>
            <option value={null}>Default</option>
            {PopupDimensions.generateOptions(HEIGHT_KEYS)}
          </select>
          <br />
          <br />
          <label htmlFor={this.getId('popupContentWidth')}>Pop Content Width</label>
          <select id={this.getId('popupContentWidth')} name="popupContentWidth" value={this.state.popupContentWidth} onChange={this.handleSelectChange}>
            <option value={null}>Default</option>
            {PopupDimensions.generateOptions(WIDTH_KEYS)}
          </select>
          <br />
          <br />
        </form>

        <div>
          <Popup
            contentHeight={this.state.popupContentHeight}
            contentWidth={this.state.popupContentWidth}
            classNameArrow="test-arrow"
            classNameContent="test-content"
            isOpen={this.state.open}
            onRequestClose={this.handleRequestClose}
            targetRef={() => document.getElementById('popup-dimensions')}
          >
            <ExamplePopupContent onChange={this.handleOnChange} />
          </Popup>
          <Button id="popup-dimensions" text={`${this.state.popupContentHeight || 'Default'} x ${this.state.popupContentWidth || 'Default'} Popup`} onClick={this.handleButtonClick} />
        </div>
      </div>
    );
  }
}

export default PopupDimensions;
