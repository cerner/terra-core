import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCollectionRow from './IconCollectionRow';
import styles from './IconCollectionTable.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of objects representing the rows of the table.
   * Currently pulled from ./IconCollectionTable/IconData.js
   */
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      iconSvg: PropTypes.elementType.isRequired,
      description: PropTypes.string.isRequired,
      meaning: PropTypes.string,
      isAction: PropTypes.bool,
      isStatus: PropTypes.bool,
      isToggle: PropTypes.bool,
      isInteraction: PropTypes.bool,
      isDecoration: PropTypes.bool,
      labelRequired: PropTypes.bool,
      isBidi: PropTypes.bool,
      sets: PropTypes.arrayOf(PropTypes.string),
      importNames: PropTypes.arrayOf(PropTypes.string.isRequired),
      themableElements: PropTypes.string.isRequired,
      searchTerms: PropTypes.string,
      hfFeedback: PropTypes.string,
      needsDarkBackground: PropTypes.bool,
    }),
  ),
}

const IconCollectionTable = ({rows}) => {
  const [displayedRows, setDisplayedRows] = useState(rows);
  return (
    <div className={cx('scrollContainer')}>
      <table className={cx('iconCollectionTable')}>
        <thead>
          <tr>
            <th rowSpan={2}>SVG</th>
            <th rowSpan={2}>Description</th>
            <th rowSpan={2}>Meaning</th>
            <th colSpan={3}>Functions</th>
            <th rowSpan={2}>Sets/Categories</th>
            <th rowSpan={2}>Import Names</th>
            <th rowSpan={2}>Themable Elements</th>
          </tr>
          <tr>
            <th>Action</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {
            displayedRows.map((row) => (<IconCollectionRow key={row.description} {...row}/>))
          }
        </tbody>
      </table>
    </div>
  )
}

export default IconCollectionTable;
