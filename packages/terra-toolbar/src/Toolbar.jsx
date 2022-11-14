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
   * String that labels the content that the toolbar controls. Should reference
   * the id of the content area that the toolbar controls.
   */
  ariaControls: PropTypes.string,
  /**
   * String that labels the content that the toolbar controls. `ariaLabel` only be used
   * when no visible label for the toolbar is present. `ariaLabelledBy` should be
   * used over `ariaLabel` when possible.
   */
  ariaLabel: PropTypes.string,
  /**
   * String that labels the content that the toolbar controls. Should reference
   * the visible text label that describes the toolbar's function. If no
   * visible text label is present, `ariaLabel` should be used instead. If both
   * `ariaLabel` and `ariaLabelledBy` are present, `ariaLabelledBy` will be used.
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
  ariaControls,
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

  const items = React.Children.map(children, item => (item ? <div className={cx('item')}>{item}</div> : item));

  return (
    <div
      {...customProps}
      aria-controls={ariaControls}
      aria-label={!ariaLabelledBy ? ariaLabel : undefined}
      aria-labelledby={ariaLabelledBy}
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
