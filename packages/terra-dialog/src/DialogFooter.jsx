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

const DialogFooter = ({ children }) => {
  const DialogFooterClassNames = cx([
    'dialog-footer',
  ]);

  return (
    <div className={DialogFooterClassNames}>
      {children}
    </div>
  );
};

DialogFooter.propTypes = propTypes;
DialogFooter.defaultProps = defaultProps;

export default DialogFooter;
