import React, { PropTypes } from 'react';
import classNames from 'classnames';
import path from 'path';
import './compact-tile-display.scss';

class Display extends React.Component {

  static renderIcon(icon) {
    if (!icon) {
      return null;
    }

    return (
      <div className="terra-CompactTile-text--inlineIcon">
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
      { [`terra-CompactTile-text--${this.props.textStyle}`]: this.props.textStyle },
    ]);

    return (
      <div {...displayAttributes}>
        {Display.renderIcon(this.props.icon)}
        <div {...textAttributes}>{this.props.text}</div>
      </div>
    );
  }
}

const textStyles = [
  'secondary',
  'attention',
  'strikeThrough',
];

Display.defaultProps = {
  isTruncated: false,
};

Display.propTypes = {
  text: PropTypes.string,
  textStyle: PropTypes.oneOf(textStyles),
  isTruncated: PropTypes.bool,
  icon: PropTypes.element,
  attributes: PropTypes.oneOfType([PropTypes.object]),
};

export const includePaths = path.join(__dirname, '../src/');

export default Display;
