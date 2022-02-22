import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './IconCollectionRow.module.scss';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import IconCollectionImportsCell from './IconCollectionImportsCell';

const cx = classNames.bind(styles);

const propTypes = PropTypes.shape({
  iconSvg: PropTypes.elementType,
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
});

const IconCollectionRow = ({
  iconSvg,
  description,
  meaning,
  isAction,
  isStatus,
  isToggle,
  isInteraction,
  isDecoration,
  labelRequired,
  isBidi,
  sets,
  importNames,
  themableElements,
  searchTerms,
  hfFeedback,
  needsDarkBackground,
}) => {
  return (
    <tr>
      <td className={cx('iconCell')}>{iconSvg}</td>
      <td>{description}</td>
      <td>{meaning}</td>
      <td className={cx('iconCell', 'booleanCell')}>{isAction ? (<IconCheckmark />) : null}</td>
      <td className={cx('iconCell', 'booleanCell')}>{isStatus ? (<IconCheckmark />) : null}</td>
      <td className={cx('iconCell', 'booleanCell')}>{isToggle ? (<IconCheckmark />) : null}</td>
      <td>{sets}</td>
      <IconCollectionImportsCell importNames={importNames} />
      <td>{themableElements}</td>
    </tr>
  )
}

export default IconCollectionRow;
