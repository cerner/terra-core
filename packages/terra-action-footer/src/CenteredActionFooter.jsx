import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import BlockActionFooter from './BlockActionFooter';
import styles from './CenteredActionFooter.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Actions to be displayed in the center socket
   */
  center: PropTypes.node,
};

const defaultProps = {
  center: undefined,
};

const CenteredActionFooter = ({
  center,
  ...customProps
}) => {
  const centeredActionFooterClassNames = cx([
    'centered-action-footer',
    customProps.className,
  ]);

  return (
    <BlockActionFooter {...customProps} className={centeredActionFooterClassNames}>
      {center}
    </BlockActionFooter>
  );
};

CenteredActionFooter.propTypes = propTypes;
CenteredActionFooter.defaultProps = defaultProps;

export default CenteredActionFooter;
