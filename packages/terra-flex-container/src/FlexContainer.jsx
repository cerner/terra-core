import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './FlexContainer.scss';
import FlexItem from './FlexItem';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children flex items passed to the component.
   */
  children: PropTypes.node,
  /**
   * This defines a flex container; inline or block depending on the given value.
   * It enables a flex context for all its direct children.  Default is flex.
   */
  display: PropTypes.string,
  /**
   * This defines the main-axis, thus defining the direction flex items are
   * placed in the flex container. Think of flex items as primarily laying out
   * either in horizontal rows or vertical columns.
   */
  direction: PropTypes.string,
  /**
   *  This can be set to allow the items to wrap as needed with this property.
   */
  wrap: PropTypes.string,
  /**
   * This defines the alignment along the main axis.
   */
  justifyContent: PropTypes.string,
  /**
   * This defines the default behavior for how flex items are laid out along the
   * cross axis on the current line
   */
  alignItems: PropTypes.string,
  /**
   * This aligns a flex container's lines within when there is extra space in
   * the cross-axis.
   */
  alignContent: PropTypes.string,
};

const defaultProps = {
  children: [],
  direction: 'row',
  display: 'flex',
  direction: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch',
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

FlexContainer.propTypes = propTypes;
FlexContainer.defaultProps = defaultProps;
FlexContainer.Item = FlexItem;

export default FlexContainer;
