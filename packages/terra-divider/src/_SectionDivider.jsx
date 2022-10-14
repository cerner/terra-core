import React, { useContext } from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import PropTypes from 'prop-types';
import styles from './Divider.module.scss';

const propTypes = {
  /**
   * String to be displayed inline with the divider.
   * A level should also be used whenever using the text.
   */
  text: PropTypes.string.isRequired,
  /**
   * Sets the heading level &lt;h3&gt;-&lt;h6&gt;. One of `3`, `4`, `5`, `6`. This helps screen readers to announce appropriate heading levels.
   * Changing `level` will not visually change the style of the content.
   */
  level: PropTypes.oneOf([3, 4, 5, 6]).isRequired,
  /**
   * IDs should be used with 'aria-labelledby' to associate headings with the corresponding page area when needing to label regions.
   */
  id: PropTypes.string,
};

const cx = classNamesBind.bind(styles);

const SectionDivider = ({
  text, level, id, ...customProps
}) => {
  const theme = useContext(ThemeContext);

  const dividerClassNames = classNames(
    cx([
      'divider-container',
      theme.className,
    ]),
    customProps.className,
  );

  let titleElement;
  if (text && level) {
    const HeaderElement = `h${level}`;
    titleElement = (
      <HeaderElement id={id}>
        {text}
      </HeaderElement>
    );
  }

  return (
    <div {...customProps} className={dividerClassNames}>
      <span className={cx(['divider-text'])}>{titleElement}</span>
    </div>
  );
};

SectionDivider.propTypes = propTypes;
export default SectionDivider;
