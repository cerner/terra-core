import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './compact-tile.scss';

// import Display from './Display';
// import Comment from './Comment';

export default class CompactTile extends React.Component {

  static renderAccessory(accessory) {
    return (
      <div className="terra-CompactTile-accessory">
        {accessory}
      </div>
    );
  }

  static renderRows(displays, layout, theme) {
    if (displays === null || displays === undefined || !displays.length) {
      return undefined;
    }

    const displaysSlice = displays.slice(0, 7);
    let sliceValue = 1;
    if (layout === 'twoColumns') {
      sliceValue = 2;
    }

    const displayGroups = [];
    let displayGroup = [];
    const sliceLength = displaysSlice.length;
    for (let i = 0; i < sliceLength; i += 1) {
      displayGroup.push(displaysSlice[i]);

      if ((i + 1) % sliceValue === 0) {
        displayGroups.push(displayGroup);
        displayGroup = [];
      }
    }

    return (
      <div className="terra-CompactTile-rowContainer">
        {displayGroups.map((group, index) => {
          const row = CompactTile.renderRow(group, index, displayGroups.length, theme);
          return row;
        })}
      </div>
    );
  }

  static renderRow(row, rowIndex, rowCount, theme) {
    const rowKey = rowIndex;
    return (
      <div className="terra-CompactTile-row" key={rowKey}>
        {row.map((display, contentIndex) => {
          const contentKey = contentIndex;
          const contentClasses = CompactTile.classesForContent(rowIndex,
                                                               rowCount,
                                                               contentIndex,
                                                               theme);
          return (
            <div {...{ className: contentClasses }} key={contentKey}>
              {display}
            </div>
          );
        })}
      </div>
    );
  }

  static classesForContent(rowIndex, rowCount, contentIndex, theme) {
    let classes;
    if (theme === 'leftEmphasisTheme') {
      classes = CompactTile.leftThemeContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
    } else {
      classes = CompactTile.defaultThemeContentClassesFromIndexes(rowIndex, rowCount);
    }
    return ['terra-CompactTile-content'].concat(classes).join(' ');
  }

  static defaultThemeContentClassesFromIndexes(rowIndex, rowCount) {
    let contentSize = 'terra-CompactTile-content--primarySize';
    let contentColor = 'terra-CompactTile-content--primaryColor';

    if (rowIndex > 0) {
      contentSize = 'terra-CompactTile-content--secondarySize';
    }

    if (rowCount === 2 && rowIndex === 1) {
      contentColor = 'terra-CompactTile-content--secondaryColor';
    }

    if (rowIndex >= 2) {
      contentColor = 'terra-CompactTile-content--secondaryColor';
    }

    return [contentSize, contentColor];
  }

  static leftThemeContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
    if (contentIndex === 1) {
      return ['terra-CompactTile-content--secondarySize', 'terra-CompactTile-content--secondaryColor'];
    }

    return CompactTile.defaultThemeContentClassesFromIndexes(rowIndex, rowCount);
  }

  static classesForTileFromProps(layout, theme, alignment, truncated) {
    return classNames(['terra-CompactTile',
      { 'terra-CompactTile--isTruncated': truncated },
      { [`terra-CompactTile--${layout}`]: layout },
      { [`terra-CompactTile--${theme}`]: theme },
      { [`terra-CompactTile-accessory--${alignment}`]: alignment },
    ]);
  }

  render() {
    const tileClasses = CompactTile.classesForTileFromProps(this.props.layout,
                                                            this.props.theme,
                                                            this.props.accessoryAlignment,
                                                            this.props.isTruncated);

    const tileAttributes = Object.assign({}, this.props.attributes);
    tileAttributes.className = classNames([
      tileClasses,
      tileAttributes.className,
    ]);

    return (
      <div {...tileAttributes}>
        {CompactTile.renderAccessory(this.props.leftAccessory)}
        <div className="terra-CompactTile-body">
          {CompactTile.renderRows(this.props.displays, this.props.layout, this.props.theme)}
          {this.props.comment}
        </div>
        {CompactTile.renderAccessory(this.props.rightAccessory)}
      </div>
    );
  }
}

CompactTile.defaultProps = {
  layout: 'oneColumn',
  theme: 'defaultTheme',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
};

CompactTile.propTypes = {
  layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
  theme: PropTypes.oneOf(['defaultTheme', 'leftEmphasisTheme']),
  isTruncated: PropTypes.bool,
  accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  leftAccessory: PropTypes.element,
  rightAccessory: PropTypes.element,
  displays: PropTypes.arrayOf(PropTypes.element),
  comment: PropTypes.element,
  attributes: PropTypes.oneOfType([PropTypes.object]),
};
