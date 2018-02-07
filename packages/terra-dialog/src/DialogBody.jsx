import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Dialog.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children to be placed within the main content area of the dialog.
   */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  children: null,
};

const DialogBody = ({ children }) => {
  const dialogBodyClassNames = cx([
    'dialog-body',
  ]);

  return (
    <div className={dialogBodyClassNames}>
      {children}
    </div>
  );
};

DialogBody.propTypes = propTypes;
DialogBody.defaultProps = defaultProps;

export default DialogBody;
