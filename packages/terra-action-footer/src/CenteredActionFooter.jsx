import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ActionFooterContainer from './_ActionFooterContainer';
import styles from './CenteredActionFooter.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Actions to be displayed in the center socket
   */
  center: PropTypes.node,
  /**
   * Determines whether or not a border is shown
   */
  isBorderless: PropTypes.bool,
};

const defaultProps = {
  center: undefined,
  isBorderless: false,
};

const CenteredActionFooter = ({
  center,
  isBorderless,
  ...customProps
}) => {
  const centeredActionFooterClassNames = cx([
    'centered-action-footer',
    customProps.className,
  ]);

  return (
    <ActionFooterContainer
      isBorderless={isBorderless}
      {...customProps}
      className={centeredActionFooterClassNames}
    >
      {center}
    </ActionFooterContainer>
  );
};

CenteredActionFooter.propTypes = propTypes;
CenteredActionFooter.defaultProps = defaultProps;

export default CenteredActionFooter;
