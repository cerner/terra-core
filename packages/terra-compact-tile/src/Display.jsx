import React, { PropTypes } from 'react';
import classNames from 'classnames';
import path from 'path';
import './terra-compact-tile-display.scss';

class Display extends React.Component {

  static renderIcon(icon) {
    if (!icon) {
      return null;
    }

    return (
      <div className="terra-CompactTile-text--inlineGraphic">
        {icon}
      </div>
    );
  }

  render() {
    if (!this.props) {
      return null;
    }

    const displayAttributes = Object.assign({}, this.props.attributes);
    displayAttributes.className = classNames([
      'terra-CompactTile-display',
      displayAttributes.className,
    ]);

    const textAttributes = {};
    textAttributes.className = classNames(['terra-CompactTile-text',
      { 'terra-CompactTile-text--isTruncated': this.props.isTruncated },
      { [`terra-CompactTile-text--${this.props.style}`]: this.props.style },
    ]);

    return (
      <div {...displayAttributes}>
        {Display.renderIcon(this.props.icon)}
        <div {...textAttributes}>{this.props.text}</div>
      </div>
    );
  }
}

const styles = [
  'secondary',
  'attention',
  'strikeThrough',
];

Display.defaultProps = {
  isTruncated: true,
};

Display.propTypes = {
  text: PropTypes.string,
  style: PropTypes.oneOf(styles),
  isTruncated: PropTypes.bool,
  icon: PropTypes.element,
  attributes: PropTypes.oneOfType([PropTypes.object]),
};

export const includePaths = path.join(__dirname, '../src/');

export default Display;
