import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import 'terra-base/lib/baseStyles';

import Slide from './Slide';

import './SlideGroup.scss';

const propTypes = {
  /**
   * The array of components for the group. Only the last component is visible. The others are hidden but still mounted.
   */
  items: PropTypes.array,
  /**
   * When true, the transition between slides is animated.
   */
  isAnimated: PropTypes.bool,
};

const defaultProps = {
  isAnimated: false,
};

const SlideGroup = ({ items, isAnimated, ...customProps }) => {
  // We don't want to render the transition group when no children exist. Doing so will cause the first child to
  // animate into place, which in most cases we do not want.
  if (!items || !items.length) {
    return null;
  }

  const slideGroupClassNames = classNames([
    'terraClinical-SlideGroup',
    customProps.className,
  ]);

  // We use the key from the first child as the key for the transition group. This will cause the transition group to
  // rerender when the root child changes and subsequently prevent that child from animating into position.
  const transitionGroupKey = items[0].key;

  const itemCount = items.length;

  return (
    <div {...customProps} className={slideGroupClassNames}>
      <CSSTransitionGroup
        key={transitionGroupKey}
        transitionEnter={isAnimated}
        transitionLeave={isAnimated}
        transitionName="terraClinical-Slide"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {items.map((item, index) => (
          <Slide key={item.key} isHidden={index !== itemCount - 1}>
            {item}
          </Slide>
        ))}
      </CSSTransitionGroup>
    </div>
  );
};

SlideGroup.propTypes = propTypes;
SlideGroup.defaultProps = defaultProps;


export default SlideGroup;
