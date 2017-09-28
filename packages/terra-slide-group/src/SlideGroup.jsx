import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import 'terra-base/lib/baseStyles';
import Slide from './Slide';
import styles from './SlideGroup.scss';
import transitions from './Slide.scss';

const cx = classNames.bind(styles);

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

class SlideGroup extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.hidePreviousSlide = this.hidePreviousSlide.bind(this);
    this.showPreviousSlide = this.showPreviousSlide.bind(this);
  }

  setContainer(node) {
    if (!node) { return; } // Ref callbacks happen on mount and unmount, element is null on unmount
    this.slideGroup = node;
  }

  hidePreviousSlide() {
    const slideGroupChildren = this.slideGroup.children[0].children;
    const numberOfChildren = slideGroupChildren.length - 1;
    slideGroupChildren[numberOfChildren - 1].setAttribute('aria-hidden', true);
  }

  showPreviousSlide() {
    const slideGroupChildren = this.slideGroup.children[0].children;
    const numberOfChildren = slideGroupChildren.length - 1;
    slideGroupChildren[numberOfChildren - 1].removeAttribute('aria-hidden');
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
      <div {...customProps} ref={this.setContainer} className={cx(['slide-group', customProps.className])}>
        <TransitionGroup key={transitionGroupKey}>
          {items.map((item, index) => (
            <CSSTransition
              classNames={transitionNames}
              enter={isAnimated}
              onEntered={this.hidePreviousSlide}
              exit={isAnimated}
              onExit={this.showPreviousSlide}
              timeout={300}
              key={item.key}
            >
              <Slide isHidden={!isAnimated && index !== itemCount}>
                {item}
              </Slide>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

SlideGroup.propTypes = propTypes;
SlideGroup.defaultProps = defaultProps;


export default SlideGroup;
