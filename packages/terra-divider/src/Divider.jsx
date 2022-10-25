import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import PropTypes from 'prop-types';
import styles from './Divider.module.scss';
import SectionDivider from './_SectionDivider';

const propTypes = {
  /**
   * String to be displayed inline with the divider. For accessibility best practices, providing a `level` should also be used whenever.
   * Using the `text` prop to make it a section heading.
   */
  text: PropTypes.string,
  /**
   * Sets the heading level to One of `1`, `2`, `3`, `4`, `5`, `6`. This helps screen readers to announce appropriate heading levels.
   * Changing `level` will not visually change the style of the content.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * IDs should be used with 'aria-labelledby' to associate headings with the corresponding list, section, or page area to label regions.
   */
  id: PropTypes.string,
};

const cx = classNamesBind.bind(styles);

const Divider = (props) => {
  const {
    text,
    level,
    id, ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);

  const dividerClassNames = classNames(
    cx([
      { divider: !text },
      { 'divider-container': text },
      theme.className,
    ]),
    customProps.className,
  );

  if (!text) {
    return <hr {...customProps} className={dividerClassNames} />;
  }
  if (level) {
    return <SectionDivider level={level} text={text} id={id} {...customProps} className={dividerClassNames} />;
  }

  return (
    <div {...customProps} className={dividerClassNames} id={id}>
      <span className={cx(['divider-text'])}>{text}</span>
    </div>
  );
};

Divider.propTypes = propTypes;
export default Divider;
