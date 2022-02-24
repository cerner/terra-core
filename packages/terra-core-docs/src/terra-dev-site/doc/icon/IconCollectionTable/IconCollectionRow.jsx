import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import styles from './IconCollectionRow.module.scss';
import IconCollectionImportsCell from './IconCollectionImportsCell';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The terra-icon this row describes
   */
  iconSvg: PropTypes.elementType,
  /**
   * Physical description of icon
   */
  description: PropTypes.string.isRequired,
  /**
   * The common or intended meaning/s of the icon
   */
  meaning: PropTypes.string,
  /**
   * Whether the icon can be used as an action
   */
  isAction: PropTypes.bool,
  /**
   * Whether the icon can be used as a status indicator
   */
  isStatus: PropTypes.bool,
  /**
   * Whether the icon can be used as a toggle
   */
  isToggle: PropTypes.bool,
  /**
   * A list of sets/categories the icon belongs to
   */
  sets: PropTypes.arrayOf(PropTypes.string),
  /**
   * A list of aliases for the icon in terra
   */
  importNames: PropTypes.arrayOf(PropTypes.string.isRequired),
  /**
   * A list of elements of the icon that respond to 'color' style attribute
   */
  themableElements: PropTypes.string,
};

const IconCollectionRow = ({
  iconSvg,
  description,
  meaning,
  isAction,
  isStatus,
  isToggle,
  sets,
  importNames,
  themableElements,
}) => (
  <tr>
    <td className={cx('icon-cell')}>{iconSvg}</td>
    <td>{description}</td>
    <td>{meaning}</td>
    <td className={cx('icon-cell', 'boolean-cell')}>{isAction ? (<IconCheckmark />) : null}</td>
    <td className={cx('icon-cell', 'boolean-cell')}>{isStatus ? (<IconCheckmark />) : null}</td>
    <td className={cx('icon-cell', 'boolean-cell')}>{isToggle ? (<IconCheckmark />) : null}</td>
    <td>{sets}</td>
    <IconCollectionImportsCell importNames={importNames} />
    <td>{themableElements}</td>
  </tr>
);

IconCollectionRow.propTypes = propTypes;

export default IconCollectionRow;
