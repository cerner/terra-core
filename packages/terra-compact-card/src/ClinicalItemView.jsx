import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ClincalItemView.scss';
import Display from './Display';
import Comment from './Comment';

const propTypes = {
  /**
   * The column layout in which to present the displays.
   */
  layout: PropTypes.oneOf(['oneColumn', 'twoColumns']),
  /**
   * The text color emphasis when using two columns.
   */
  textEmphasis: PropTypes.oneOf(['default', 'left']),
  /**
   * Whether or not all text on the view should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * The vertical alignment of the left and right accesories.
   */
  accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  /**
   * The react element to be placed in the left accessory position.
   */
  leftAccessory: PropTypes.element,
  /**
   * The react element to be placed in the right accessory position.
   */
  rightAccessory: PropTypes.element,
  /**
   * An array of react display elements to be presented.
   */
  displays: PropTypes.arrayOf(PropTypes.element),
  /**
   * The react element for the comment element.
   */
  comment: PropTypes.element,
};

const defaultProps = {
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  leftAccessory: undefined,
  rightAccessory: undefined,
  displays: [],
  comment: undefined,
};

class ClincalItemView extends React.Component {

  static renderAccessory(accessory) {
    return (
      <div className="terra-ClincalItemView-accessory">
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
      <div className="terra-ClincalItemView-rowContainer">
        {displayGroups.map((group, index) => {
          const row = ClincalItemView.renderRow(group, index, displayGroups.length, emphasis);
          return row;
        })}
      </div>
    );
  }

  static renderRow(row, rowIndex, rowCount, emphasis) {
    const rowKey = rowIndex;
    return (
      <div className="terra-ClincalItemView-row" key={rowKey}>
        {row.map((display, contentIndex) => {
          const contentKey = contentIndex;
          const contentClasses = ClincalItemView.classesForContent(rowIndex,
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
      classes = ClincalItemView.leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
    } else {
      classes = ClincalItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
    }
    return ['terra-ClincalItemView-content'].concat(classes).join(' ');
  }

  static defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
    let contentSize = 'terra-ClincalItemView-content--primarySize';
    let contentColor = 'terra-ClincalItemView-content--primaryColor';

    if (rowIndex > 0) {
      contentSize = 'terra-ClincalItemView-content--secondarySize';
    }

    if (rowCount === 2 && rowIndex === 1) {
      contentColor = 'terra-ClincalItemView-content--secondaryColor';
    }

    if (rowIndex >= 2) {
      contentColor = 'terra-ClincalItemView-content--secondaryColor';
    }

    return [contentSize, contentColor];
  }

  static leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
    if (contentIndex === 1) {
      return ['terra-ClincalItemView-content--secondarySize', 'terra-ClincalItemView-content--secondaryColor'];
    }

    return ClincalItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }

  render() {
    const { layout,
            textEmphasis,
            isTruncated,
            accessoryAlignment,
            leftAccessory,
            rightAccessory,
            displays,
            comment,
            ...customProps } = this.props;

    const viewClassNames = classNames([
      'terra-ClincalItemView',
      { 'terra-ClincalItemView--isTruncated': isTruncated },
      { [`terra-ClincalItemView--${layout}`]: layout },
      { [`terra-ClincalItemView-accessory--${accessoryAlignment}`]: accessoryAlignment },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={viewClassNames}>
        {ClincalItemView.renderAccessory(leftAccessory)}
        <div className="terra-ClincalItemView-body">
          {ClincalItemView.renderRows(displays, layout, textEmphasis)}
          {comment}
        </div>
        {ClincalItemView.renderAccessory(rightAccessory)}
      </div>
    );
  }
}

ClincalItemView.propTypes = propTypes;
ClincalItemView.defaultProps = defaultProps;
ClincalItemView.Display = Display;
ClincalItemView.Comment = Comment;

export default ClincalItemView;

