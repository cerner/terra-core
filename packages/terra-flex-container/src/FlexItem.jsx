import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './FlexItem.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The content element to be placed inside the flex item for display.
   */
  content: PropTypes.element,
  /**
   * Controls the order in which the item will appear in the flex container.
   */
  order: PropTypes.number,
  /**
   * This defines the ability for a flex item to grow if necessary. It accepts
   * a unitless value that serves as a proportion. It dictates what amount of
   * the available space inside the flex container the item should take up.
   */
  grow: PropTypes.number,
  /**
   * This defines the ability for a flex item to shrink if necessary.
   */
  shrink: PropTypes.number,
  /**
   * This defines the default size of an element before the remaining space is
   * distributed.
   */
  basis: PropTypes.string,
  /**
   * This allows the default alignment (or the one specified by align-items) to
   * be overridden for individual flex items
   */
  alignSelf: PropTypes.string,
};

const defaultProps = {
  content: undefined,
  order: 0,
  grow: 0,
  shrink: 1,
  basis: 'auto',
};

const FlexItem = ({
    ...customProps
  }) => {
  const flexItemClassNames = cx([
    'flex-item',
    customProps.className,
  ]);

  customProps.order = order;
  customProps['flex-grow'] = grow;
  customProps['flex-shrink'] = shrink;
  customProps['flex-basis'] = basis;
  customProps['align-self'] = alignSelf;

  return (
    <div {...customProps} className={flexItemClassNames}>
      {content}
    </div>
  );
};

FlexContainer.propTypes = propTypes;
FlexContainer.defaultProps = defaultProps;
FlexContainer.Item = FlexItem;

export default FlexContainer;
