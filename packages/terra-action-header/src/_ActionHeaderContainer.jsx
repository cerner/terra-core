import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ActionHeaderContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child element to be displayed on the right end of the header.
   * The element passed as children will be decorated with flex attributes.
   */
  children: PropTypes.element,

  /**
   * Content to be displayed at the start of the header, placed before the title.
   */
  startContent: PropTypes.element,

  /**
   * Text to be displayed as the title in the header bar.
   */
  title: PropTypes.string,

  /**
   * Content to be displayed at the end of the header.
   * The element passed as endContent will be wrapped in a div with flex attributes.
   */
  endContent: PropTypes.element,
  /**
   * Sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

const defaultProps = {
  title: '',
  startContent: null,
  endContent: null,
};

const ActionHeaderContainer = ({ children, title, startContent, endContent, level, ...customProps }) => {
  let startElement;
  if (startContent) {
    startElement = <div className={cx('flex-end')}>{startContent}</div>;
  }

  const HeaderElement = `h${level}`;

  let titleElement;
  if (title) {
    titleElement = (
      <div className={cx('title-container')}>
        <HeaderElement className={cx('title')}>
          {title}
        </HeaderElement>
      </div>
    );
  }

  let endElement;
  if (endContent) {
    endElement = <div className={cx('flex-end')}>{endContent}</div>;
  }

  let childElement;
  if (children) {
    const childClassNames = cx([
      'flex-collapse',
      children.props.className,
    ]);
    childElement = React.cloneElement(children, { className: childClassNames });
  }

  return (
    <header {...customProps} className={cx('flex-header', customProps.className)}>
      {startElement}
      <div className={cx('flex-fill')}>
        {titleElement}
      </div>
      {childElement}
      {endElement}
    </header>
  );
};

ActionHeaderContainer.propTypes = propTypes;
ActionHeaderContainer.defaultProps = defaultProps;

export default ActionHeaderContainer;
