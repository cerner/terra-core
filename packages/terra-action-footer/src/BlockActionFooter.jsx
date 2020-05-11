import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './BlockActionFooter.module.scss';

const cx = classNamesBind.bind(styles);

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
  const theme = React.useContext(ThemeContext);
  const isEmpty = !React.Children.toArray(children).length;

  const blockActionFooterClassNames = classNames(
    cx([
      'block-action-footer',
      { 'with-actions': !isEmpty },
      theme.className,
    ]),
    customProps.className,
  );

  return (
    <div {...customProps} className={blockActionFooterClassNames}>
      {children}
    </div>
  );
};

BlockActionFooter.propTypes = propTypes;
BlockActionFooter.defaultProps = defaultProps;

export default BlockActionFooter;
