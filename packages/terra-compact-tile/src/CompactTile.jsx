import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './compact-tile.scss';
import Display from './Display';
import Comment from './Comment';

const propTypes = {
  className: PropTypes.string,
  layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
  textEmphasis: PropTypes.oneOf(['default', 'left']),
  isTruncated: PropTypes.bool,
  accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  leftAccessory: PropTypes.element,
  rightAccessory: PropTypes.element,
  displays: PropTypes.arrayOf(PropTypes.element),
  comment: PropTypes.element,
};

const defaultProps = {
  className: '',
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  leftAccessory: undefined,
  rightAccessory: undefined,
  display: [],
  comment: undefined,
};

class CompactTile extends React.Component {

  static renderAccessory(accessory) {
    return (
      <div className="terra-CompactTile-accessory">
        {accessory}
      </div>
    );
  }

  static renderRows(displays, layout, emphasis) {
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
          const row = CompactTile.renderRow(group, index, displayGroups.length, emphasis);
          return row;
        })}
      </div>
    );
  }

  static renderRow(row, rowIndex, rowCount, emphasis) {
    const rowKey = rowIndex;
    return (
      <div className="terra-CompactTile-row" key={rowKey}>
        {row.map((display, contentIndex) => {
          const contentKey = contentIndex;
          const contentClasses = CompactTile.classesForContent(rowIndex,
                                                               rowCount,
                                                               contentIndex,
                                                               emphasis);
          return (
            <div {...{ className: contentClasses }} key={contentKey}>
              {display}
            </div>
          );
        })}
      </div>
    );
  }

  static classesForContent(rowIndex, rowCount, contentIndex, emphasis) {
    let classes;
    if (emphasis === 'left') {
      classes = CompactTile.leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
    } else {
      classes = CompactTile.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
    }
    return ['terra-CompactTile-content'].concat(classes).join(' ');
  }

  static defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
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

  static leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
    if (contentIndex === 1) {
      return ['terra-CompactTile-content--secondarySize', 'terra-CompactTile-content--secondaryColor'];
    }

    return CompactTile.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }

  render() {
    const { className,
            layout,
            textEmphasis,
            isTruncated,
            accessoryAlignment,
            leftAccessory,
            rightAccessory,
            displays,
            comment,
            ...customProps } = this.props;

    const tileClassNames = classNames([
      'terra-CompactTile',
      { 'terra-CompactTile--isTruncated': isTruncated },
      { [`terra-CompactTile--${layout}`]: layout },
      { [`terra-CompactTile-accessory--${accessoryAlignment}`]: accessoryAlignment },
      className,
    ]);

    return (
      <div {...customProps} className={tileClassNames}>
        {CompactTile.renderAccessory(leftAccessory)}
        <div className="terra-CompactTile-body">
          {CompactTile.renderRows(displays, layout, textEmphasis)}
          {comment}
        </div>
        {CompactTile.renderAccessory(rightAccessory)}
      </div>
    );
  }
}

CompactTile.propTypes = propTypes;
CompactTile.defaultProps = defaultProps;
CompactTile.Display = Display;
CompactTile.Comment = Comment;

export default CompactTile;

