import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ActionFooterContainer from './_ActionFooterContainer';
import EmptyActionFooter from './_EmptyActionFooter';
import styles from './ActionFooter.scss';

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
  const isEmpty = !start && !end;

  const actionFooterClassNames = cx([
    'action-footer',
    customProps.className,
  ]);

  return (isEmpty ?
    <EmptyActionFooter {...customProps} />
    :
    <ActionFooterContainer {...customProps} className={actionFooterClassNames}>
      <div className={cx('socket')}>
        {start}
      </div>
      <div className={cx('empty-center')} />
      <div className={cx('socket')}>
        {end}
      </div>
    </ActionFooterContainer>
  );
};

ActionFooter.propTypes = propTypes;
ActionFooter.defaultProps = defaultProps;

export default ActionFooter;
