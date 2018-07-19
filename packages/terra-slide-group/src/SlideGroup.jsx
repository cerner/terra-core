import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import 'terra-base/lib/baseStyles';
import Slide from './Slide';
import styles from './SlideGroup.module.scss';
import transitions from './Slide.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The array of components for the group. Only the last component is visible. The others are hidden but still mounted.
   */
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
  /**
   * When true, the transition between slides is animated.
   */
  isAnimated: PropTypes.bool,
};

const defaultProps = {
  isAnimated: false,
};

class SlideGroup extends React.Component {
  static hidePreviousSlide(enteredElement) {
    if (enteredElement.previousSibling) {
      enteredElement.previousSibling.setAttribute('aria-hidden', true);
    }
  }

  static showPreviousSlide(exitingElement) {
    if (exitingElement.previousSibling) {
      exitingElement.previousSibling.removeAttribute('aria-hidden');
    }
  }

  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
  }

  setContainer(node) {
    if (!node) { return; } // Ref callbacks happen on mount and unmount, element is null on unmount
    this.slideGroup = node;
  }

  render() {
    const { items, isAnimated, ...customProps } = this.props;
    // We don't want to render the transition group when no children exist. Doing so will cause the first child to
    // animate into place, which in most cases we do not want.
    if (!items || !items.length) {
      return null;
    }

    // We use the key from the first child as the key for the transition group. This will cause the transition group to
    // rerender when the root child changes and subsequently prevent that child from animating into position.
    const transitionGroupKey = items[0].key;

    const itemCount = items.length - 1;

    const transitionNames = {
      enter: transitions.enter,
      enterActive: transitions['enter-active'],
      exit: transitions.exit,
      exitActive: transitions['exit-active'],
    };

    return (
      <TransitionGroup {...customProps} ref={this.setContainer} className={cx(['slide-group', customProps.className])} key={transitionGroupKey}>
        {items.map((item, index) => (
          <CSSTransition
            classNames={transitionNames}
            enter={isAnimated}
            onEntered={SlideGroup.hidePreviousSlide}
            exit={isAnimated}
            onExit={SlideGroup.showPreviousSlide}
            timeout={300}
            key={item.key}
            id="shmmoop"
          >
            <Slide isHidden={!isAnimated && index !== itemCount}>
              {item}
            </Slide>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

SlideGroup.propTypes = propTypes;
SlideGroup.defaultProps = defaultProps;


export default SlideGroup;
