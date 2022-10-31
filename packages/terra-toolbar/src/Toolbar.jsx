import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Toolbar.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content alignment. Align to start, end, or center.
   */
  align: PropTypes.oneOf(['start', 'end', 'center']),
  /**
   * String that labels the content the toolbar controls.
   */
  ariaLabel: PropTypes.string,
  /**
   * String that labels the content the toolbar controls. References the
   * id of the element the toolbar controls. Will be used over ariaLabel if
   * both are present.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * Items to be displayed in toolbar such as buttons, button groups, and links.
   */
  children: PropTypes.node,
};

const defaultProps = {
  align: 'start',
};

const Toolbar = ({
  align,
  ariaLabel,
  ariaLabelledBy,
  children,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const toolbarClassNames = classNames(
    cx(
      'toolbar',
      `${align}-align`,
      theme.className,
    ),
    customProps.className,
  );

  const additionalToolbarProps = {};

  if (ariaLabel) {
    additionalToolbarProps['aria-label'] = ariaLabel;
  }

  if (ariaLabelledBy) {
    additionalToolbarProps['aria-labelledby'] = ariaLabelledBy;
  }

  const items = React.Children.map(children, item => (item ? <div className={cx('item')}>{item}</div> : item));

  return (
    <div
      {...customProps}
      {...additionalToolbarProps}
      className={toolbarClassNames}
      role="toolbar"
    >
      {items}
    </div>
  );
};

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
