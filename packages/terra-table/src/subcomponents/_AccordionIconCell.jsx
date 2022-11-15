import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccordionIconCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private Whether or not the section is collapsed.
   */
  isCollapsed: PropTypes.bool,
}

const defaultProps = {
  isCollapsed: false,
};

const AccordionIconCell = ({
  isCollapsed,
  ...customProps
}) => (
  <div
    {...customProps}
    className={customProps.className ? `${cx('cell')} ${customProps.className}` : cx('cell')}
    role="none"
  >
    <div className={cx('container')}>
      <span 
        className={cx(
          ['accordion-icon', { 'is-open': !isCollapsed }]
        )} 
      />
    </div>
  </div>
);

export default AccordionIconCell;
