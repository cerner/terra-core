import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ClinicalItemView.scss';
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
  textEmphasis: PropTypes.oneOf(['default', 'start']),
  /**
   * Whether or not all text on the view should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * The vertical alignment of the start and end accesories.
   */
  accessoryAlignment: PropTypes.oneOf(['alignTop', 'alignCenter']),
  /**
   * The react element to be placed in the start aligned accessory position.
   */
  startAccessory: PropTypes.element,
  /**
   * The react element to be placed in the end aligned accessory position.
   */
  endAccessory: PropTypes.element,
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
  startAccessory: undefined,
  endAccessory: undefined,
  displays: [],
  comment: undefined,
};

class ClinicalItemView extends React.Component {

  static renderAccessory(accessory) {
    return (
      <div className="terra-ClinicalItemView-accessory">
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
      <div className="terra-ClinicalItemView-rowContainer">
        {displayGroups.map((group, index) => {
          const row = ClinicalItemView.renderRow(group, index, displayGroups.length, emphasis);
          return row;
        })}
      </div>
    );
  }

  static renderRow(row, rowIndex, rowCount, emphasis) {
    const rowKey = rowIndex;
    return (
      <div className="terra-ClinicalItemView-row" key={rowKey}>
        {row.map((display, contentIndex) => {
          const contentKey = contentIndex;
          const contentClasses = ClinicalItemView.classesForContent(rowIndex,
                                                               rowCount,
                                                               contentIndex,
                                                               emphasis);
          return (
            <div className={contentClasses} key={contentKey}>
              {display}
            </div>
          );
        })}
      </div>
    );
  }

  static classesForContent(rowIndex, rowCount, contentIndex, emphasis) {
    let classes;
    if (emphasis === 'start') {
      classes = ClinicalItemView.startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
    } else {
      classes = ClinicalItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
    }
    return ['terra-ClinicalItemView-content'].concat(classes).join(' ');
  }

  static defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
    let contentSize = 'terra-ClinicalItemView-content--primarySize';
    let contentColor = 'terra-ClinicalItemView-content--primaryColor';

    if (rowIndex > 0) {
      contentSize = 'terra-ClinicalItemView-content--secondarySize';
    }

    if (rowCount === 2 && rowIndex === 1) {
      contentColor = 'terra-ClinicalItemView-content--secondaryColor';
    } else if (rowIndex >= 2) {
      contentColor = 'terra-ClinicalItemView-content--secondaryColor';
    }

    return [contentSize, contentColor];
  }

  static startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
    if (contentIndex === 1) {
      return ['terra-ClinicalItemView-content--secondarySize', 'terra-ClinicalItemView-content--secondaryColor'];
    }

    return ClinicalItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }

  render() {
    const { layout,
            textEmphasis,
            isTruncated,
            accessoryAlignment,
            startAccessory,
            endAccessory,
            displays,
            comment,
            ...customProps } = this.props;

    const viewClassNames = classNames([
      'terra-ClinicalItemView',
      { 'terra-ClinicalItemView--isTruncated': isTruncated },
      { [`terra-ClinicalItemView--${layout}`]: layout },
      { [`terra-ClinicalItemView-accessory--${accessoryAlignment}`]: accessoryAlignment },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={viewClassNames}>
        {ClinicalItemView.renderAccessory(startAccessory)}
        <div className="terra-ClinicalItemView-body">
          {ClinicalItemView.renderRows(displays, layout, textEmphasis)}
          {comment}
        </div>
        {ClinicalItemView.renderAccessory(endAccessory)}
      </div>
    );
  }
}

ClinicalItemView.propTypes = propTypes;
ClinicalItemView.defaultProps = defaultProps;
ClinicalItemView.Display = Display;
ClinicalItemView.Comment = Comment;

export default ClinicalItemView;

