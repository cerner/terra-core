import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Cell.module.scss';
import { styleFromWidth } from './utils';

const cx = classNames.bind(styles);

const propTypes = {
  label: PropTypes.string,
  isLink: PropTypes.bool,
  /**
   * Child content to be displayed for the row cell.
   */
  children: PropTypes.node,
  /**
   * Function callback returning the html node for the cell.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the cell's inner containing element responsible for handling table's default padding is removed.
   * This is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding.
   */
  removeInner: PropTypes.bool,
  /**
   * Width of the cell. Should match header cell counter-part.
   */
  width: PropTypes.shape({
    /**
     * Static width that for the cell.
     */
    static: PropTypes.shape({
      /**
       * Numerical width value.
       */
      value: PropTypes.number.isRequired,
      /**
       * Valid css units are supported (i.e. 'px', 'rem', etc).
       */
      unit: PropTypes.string.isRequired,
    }),
    /**
     * Percentage width of the row for the cell.
     */
    percentage: PropTypes.number,
    /**
     * Relative scalar value of the cell's width compared to its sibling cells.
     */
    scalar: PropTypes.number,
  }),
};

const defaultProps = {
  children: [],
  removeInner: false,
};

const Cell = ({
  children,
  refCallback,
  removeInner,
  width,
  label,
  isLink,
  ...customProps
}) => {
  const cellClassNames = cx('cell');
  const contentRole = isLink ? 'link' : undefined;
  const contentClass = !removeInner ? cx('container') : undefined;

  let content = children;
  if (contentRole || contentClass) {
    content = (
      <div role={contentRole} className={contentClass}>
        {content}
        {contentRole && <VisuallyHiddenText text={label} />}
      </div>
    );
  }

  return (
    <div
      {...customProps}
      style={styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={customProps.className ? `${cellClassNames} ${customProps.className}` : cellClassNames}
      ref={refCallback}
      role="gridcell"
      tabIndex={ isLink ? '-1' : undefined }
    >
      {content}
    </div>
  );
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
