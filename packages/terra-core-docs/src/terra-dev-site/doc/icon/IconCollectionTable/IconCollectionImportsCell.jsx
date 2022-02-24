import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './IconCollectionImportsCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The aliases for the icon in terra
   */
  importNames: PropTypes.arrayOf(PropTypes.string),
};

const IconCollectionImportsCell = ({ importNames = [] }) => (
  <td>
    {
      importNames.map((importName) => (
        <p key={importName} className={cx('import-name')}>{importName}</p>
      ))
    }
  </td>
);

IconCollectionImportsCell.propTypes = propTypes;

export default IconCollectionImportsCell;
