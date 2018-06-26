import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ActionFooterContainer from './_ActionFooterContainer';
import styles from './CenteredActionFooter.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Actions to be displayed in the center socket
   */
  center: PropTypes.node,
  /**
   * Whether or not the center socket should display as a block.
   */
  isBlock: PropTypes.bool,
};

const defaultProps = {
  center: undefined,
  isBlock: false,
};

const CenteredActionFooter = ({
  center,
  isBlock,
  ...customProps
}) => {
  const centeredActionFooterClassNames = cx([
    'centered-action-footer',
    { 'is-block': isBlock },
    customProps.className,
  ]);

  return (
    <ActionFooterContainer
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
