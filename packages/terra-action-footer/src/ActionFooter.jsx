import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import BlockActionFooter from './BlockActionFooter';
import styles from './ActionFooter.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Actions to be displayed in the start socket
   */
  start: PropTypes.node,
  /**
   * Actions to be displayed in the end socket
   */
  end: PropTypes.node,
};

const defaultProps = {
  start: undefined,
  end: undefined,
};

const ActionFooter = ({
  start,
  end,
  ...customProps
}) => {
  const actionFooterClassnames = cx([
    { 'action-footer': start },
    { 'action-footer-end': !start },
    customProps.className,
  ]);

  return (
    <BlockActionFooter {...customProps} className={actionFooterClassnames}>
      {start && <div className={cx('start-actions')}>{start}</div>}
      {end && <div className={cx('end-actions')}>{end}</div>}
    </BlockActionFooter>
  );
};

ActionFooter.propTypes = propTypes;
ActionFooter.defaultProps = defaultProps;

export default ActionFooter;
