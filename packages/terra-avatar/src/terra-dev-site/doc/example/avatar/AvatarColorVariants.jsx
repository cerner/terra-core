import React from 'react';
import Select from 'terra-form-select';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Avatar } from 'terra-avatar/lib/Avatar';

class AvatarColorVariants extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSelect = this.handleOnSelect.bind(this);

    this.state = { colorVariant: 'auto' };
  }

  handleOnSelect(value) {
    this.setState({ colorVariant: value });
  }

  render() {
    const { colorVariant } = this.state;

    return (
      <div>
        <Avatar alt="Deep Space" color={colorVariant} />
        <Select placeholder="Select a color variant" onSelect={this.handleOnSelect} defaultValue="auto" style={{ maxWidth: '300px', marginTop: '10px' }}>
          <Select.Option value="auto" display="Auto" />
          <Select.Option value="neutral" display="Neutral" />
          <Select.Option value="one" display="One" />
          <Select.Option value="two" display="Two" />
          <Select.Option value="three" display="Three" />
          <Select.Option value="four" display="Four" />
          <Select.Option value="five" display="Five" />
          <Select.Option value="six" display="Six" />
          <Select.Option value="seven" display="Seven" />
          <Select.Option value="eight" display="Eight" />
          <Select.Option value="nine" display="Nine" />
          <Select.Option value="ten" display="Ten" />
        </Select>
      </div>
    );
  }
}

export default AvatarColorVariants;
