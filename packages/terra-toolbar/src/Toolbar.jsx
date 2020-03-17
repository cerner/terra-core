import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Toolbar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content alignment. Align to start, end, or center.
   */
  align: PropTypes.oneOf(['start', 'end', 'center']),
  /**
   * Items to be displayed in toolbar such as buttons, button groups, and links.
   */
  children: PropTypes.node,
};

const defaultProps = {
  align: 'start',
};

const Toolbar = ({
  align, children, ...customProps
}) => {
  let toolbarClassNames = cx('toolbar', `${align}-align`);
  if (customProps.className) {
    toolbarClassNames = `${toolbarClassNames} ${customProps.className}`;
  }

  const items = React.Children.map(children, item => (<div className={cx('item')}>{item}</div>));

  return (<div {...customProps} className={toolbarClassNames}>{items}</div>);
};

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
