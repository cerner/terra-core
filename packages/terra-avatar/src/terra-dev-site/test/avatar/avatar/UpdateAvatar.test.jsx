import React from 'react';
import { Avatar } from '../../../../Avatar';
import exampleAvatarImage from '../../../assets/150x150.jpg';
import exampleAvatarImage2 from '../../../assets/163x40.png';

let initials = 'JD';
let image = exampleAvatarImage2;
let alt = 'placeholder';
const variant = 'user';
const ariaLabel = 'user';
let id = 'image-avatar';

class UpdateAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.altButtonHandle = this.altButtonHandle.bind(this);
    this.imageButtonHandle = this.imageButtonHandle.bind(this);
    this.initialsButtonHandle = this.initialsButtonHandle.bind(this);
    this.idButtonHandle = this.idButtonHandle.bind(this);
    this.imageToggleButtonHandle = this.imageToggleButtonHandle.bind(this);
  }

  altButtonHandle() {
    if (alt === 'placeholder') {
      alt = 'standin';
    } else {
      alt = 'placeholder';
    }

    this.forceUpdate();
  }

  imageButtonHandle() {
    if (image === exampleAvatarImage2) {
      image = exampleAvatarImage;
    } else {
      image = exampleAvatarImage2;
    }

    this.forceUpdate();
  }

  initialsButtonHandle() {
    if (initials === 'JD') {
      initials = 'LI';
    } else {
      initials = 'JD';
    }

    this.forceUpdate();
  }

  idButtonHandle() {
    if (id === 'image-avatar') {
      id = 'avatar-image';
    } else {
      id = 'image-avatar';
    }

    this.forceUpdate();
  }

  imageToggleButtonHandle() {
    if (image === null) {
      image = exampleAvatarImage;
    } else {
      image = null;
    }

    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Avatar id={id} image={image} alt={alt} variant={variant} ariaLabel={ariaLabel} initials={initials} />
        <br />
        <button type="button" onClick={this.altButtonHandle} id="alt">Alt Text</button>
        <button type="button" onClick={this.imageButtonHandle} id="image">Image</button>
        <button type="button" onClick={this.initialsButtonHandle} id="initials">Initials</button>
        <button type="button" onClick={this.idButtonHandle} id="id">Custom Prop (id)</button>
        <br />
        <p>The buttons update one of the Avatar&apos;s props then force it to reload</p>
        <button type="button" onClick={this.imageToggleButtonHandle} id="image-toggle">Toggle Image</button>
      </div>);
  }
}

export default UpdateAvatar;
