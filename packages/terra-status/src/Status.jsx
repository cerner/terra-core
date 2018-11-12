import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import 'terra-base/lib/baseStyles';
import styles from './Status.module.scss';


const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the status indicator. Accepts a CSS color value.
   */
  color: PropTypes.string,
  /**
   * Visually hidden text used to convey the meaning of the status indicator to screen readers.
   */
  visuallyHiddenText: PropTypes.string,
};

const Status = ({
  color,
  children,
  visuallyHiddenText,
  ...customProps
}) => {
  if ((process.env.NODE_ENV !== 'production') && (!visuallyHiddenText)) {
  // eslint-disable-next-line no-console
    console.warn('\'visuallyHiddenText\' should be added to convey the meaning of the status indicator for screen readers accessibility. This prop will be required in the next major version bump of terra-status.');
  }

  return (
    <div {...customProps} style={{ borderColor: color }} className={cx('status', customProps.className)}>
      {visuallyHiddenText && <VisuallyHiddenText text={visuallyHiddenText} />}
      {children}
    </div>
  );
};

Status.propTypes = propTypes;

export default Status;
