import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import Spacer from 'terra-spacer';
import 'terra-base/lib/baseStyles';
import styles from './ActionFooter.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Actions to be displayed in the start socket
   */
  start: PropTypes.node,
  /**
   * Actions to be displayed in the center socket
   */
  center: PropTypes.node,
  /**
   * Actions to be displayed in the end socket
   */
  end: PropTypes.node,
};

const defaultProps = {
  start: undefined,
  center: undefined,
  end: undefined,
};

const ActionFooter = ({
  start,
  center,
  end,
  ...customProps
}) => {
  // if (center && (start || end)) {
  //   throw new Error('The center prop should be standalone.');
  // }

  const isEmpty = !start && !center && !end;

  const actionFooterClassNames = cx([
    'action-footer',
    { 'empty-footer': isEmpty },
    { 'with-content': !isEmpty },
    customProps.className,
  ]);

  const actionFooterPadding = {
    paddingTop: 'small-1',
    paddingRight: 'small-1',
    paddingBottom: 'small-1',
    paddingLeft: 'small-1',
  };

  return (isEmpty ?
    <div {...customProps} className={actionFooterClassNames} />
    :
    <Spacer {...actionFooterPadding}>
      <div {...customProps} className={actionFooterClassNames}>
        <div className={cx('start')}>
          {start}
        </div>
        <div className={cx('center')}>
          {center}
        </div>
        <div className={cx('end')}>
          {end}
        </div>
      </div>
    </Spacer>
  );
};

ActionFooter.propTypes = propTypes;
ActionFooter.defaultProps = defaultProps;

export default ActionFooter;
