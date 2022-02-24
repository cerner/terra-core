import React from 'react';
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
      /**
       * The terra-icon the row decribes
       */
      iconSvg: PropTypes.elementType.isRequired,
      /**
       * Physical description of the icon
       */
      description: PropTypes.string.isRequired,
      /**
       * Common or intended meaning of the icon
       */
      meaning: PropTypes.string,
      /**
       * Whether icon can be used as an action
       */
      isAction: PropTypes.bool,
      /**
       * Whether icon can be used as status
       */
      isStatus: PropTypes.bool,
      /**
       * Whether icon can be used as a toggle
       */
      isToggle: PropTypes.bool,
      /**
       * Whether icon can be used as interaction
       */
      isInteraction: PropTypes.bool,
      /**
       * Whether icon can be used decoratively
       */
      isDecoration: PropTypes.bool,
      /**
       * Whether icon needs an accompanying label
       */
      labelRequired: PropTypes.bool,
      /**
       * Whether icon is bi-directional
       */
      isBidi: PropTypes.bool,
      /**
       * List of sets/categories icon belongs to
       */
      sets: PropTypes.arrayOf(PropTypes.string),
      /**
       * List of aliases for icon in terra
       */
      importNames: PropTypes.arrayOf(PropTypes.string.isRequired),
      /**
       * List of visual elements in icon that respond to 'color' style attribute
       */
      themableElements: PropTypes.string.isRequired,
      /**
       * Non-displayed string containing all relevant search terms for this row.
       * Should include non-trivial words from other props.
       */
      searchTerms: PropTypes.string,
      /**
       * Specific guidance given by Human Factors for this icon's use
       */
      hfFeedback: PropTypes.string,
      /**
       * If this icon should be displayed in this table with a dark background
       */
      needsDarkBackground: PropTypes.bool,
    }),
  ),
};

const IconCollectionTable = ({ rows }) => (
  <div className={cx('scroll-container')}>
    <table className={cx('icon-collection-table')}>
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
        <tr className={cx('sub-header')}>
          <th>Action</th>
          <th>Status</th>
          <th>Toggle</th>
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row) => (<IconCollectionRow key={row.description} {...row} />))
        }
      </tbody>
    </table>
  </div>
);

IconCollectionTable.propTypes = propTypes;

export default IconCollectionTable;
