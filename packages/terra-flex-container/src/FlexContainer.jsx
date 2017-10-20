import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './FlexContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const FlexContainer = ({
    children,
    ...customProps
  }) => {
  const flexClassNames = cx([
    'flex-container',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={flexClassNames}>
      {children}
    </div>
  );
};
