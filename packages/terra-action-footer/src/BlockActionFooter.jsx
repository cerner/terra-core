import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './BlockActionFooter.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const BlockActionFooter = ({
  children,
  ...customProps
}) => {
  const isEmpty = !React.Children.toArray(children).length;

  const blockActionFooterClassNames = cx([
    'block-action-footer',
    { 'with-actions': !isEmpty },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={blockActionFooterClassNames}>
      {children}
    </div>
  );
};

BlockActionFooter.propTypes = propTypes;
BlockActionFooter.defaultProps = defaultProps;

export default BlockActionFooter;
