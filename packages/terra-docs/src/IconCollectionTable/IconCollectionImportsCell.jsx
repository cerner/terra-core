import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './IconCollectionImportsCell.module.scss';
import IconDocuments from 'terra-icon/lib/icon/IconDocuments';

const cx = classNames.bind(styles);

const IconCollectionImportsCell = ({importNames = []}) => {
  return (
    <td>
      {
        importNames.map((importName, i) => (
          <p key={importName} className={cx('importName')}>{importName}</p>
        ))
      }
    </td>
  )
}

export default IconCollectionImportsCell;
