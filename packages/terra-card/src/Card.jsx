import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Card.scss';



const propTypes = {
  /**
   * option to pass in a single boolean to turn on/off, or an array to specify each side using css short hand https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
   */
  padding: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),

  /**
   * option to make a stack of cards
   */
  isStacked: PropTypes.bool,

  /**
   * event to trigger when card is clicked
   */
  handleClick: PropTypes.func,
  /**
   * Child Nodes
   */
  children: PropTypes.node,
};

const defaultProps = {
  padding: true,
  isStacked: false,
  handleClick: undefined,
};

const Card = ({
  padding,
  isStacked,
  handleClick,
  children,
  ...customProps
}) => {
  // Follows these conventions https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
  let containerClass = 'well-Card-container';
  const cardClass = classNames([
    'well-Card',
    customProps.className,
  ]);

  if (padding === true) {
    containerClass += ' u-pa--sm';
  } else if (Array.isArray(padding)) {
    switch (padding.length) {
      case 2: {
        if (padding[0]) { containerClass += ' u-pv--sm'; }
        if (padding[1]) { containerClass += ' u-ph--sm'; }
        break;
      }
      case 3: {
        if (padding[0]) { containerClass += ' u-pt--sm'; }
        if (padding[1]) { containerClass += ' u-ph--sm'; }
        if (padding[2]) { containerClass += ' u-pb--sm'; }
        break;
      }
      case 4: {
        if (padding[0]) { containerClass += ' u-pt--sm'; }
        if (padding[1]) { containerClass += ' u-pr--sm'; }
        if (padding[2]) { containerClass += ' u-pb--sm'; }
        if (padding[3]) { containerClass += ' u-pl--sm'; }
        break;
      }
      default: {
        throw new Error('If you pass an array to padding, it must be either 2, 3, or 4 entries');
      }
    }
  }
  // Create stack of cards
  if (isStacked) {
    containerClass += ' well-Card--stacked';
  }
  // eslint-disable-next-line jsx-a11y/href-no-hash
  if(handleClick != undefined){
  containerClass += ' well-Card-cursor';
  }
  const content = handleClick === undefined ? <div className={containerClass}> {children}</div> : <a onClick={handleClick} className={containerClass}>{children}</a>;

  return (
    <div  {...customProps} className={cardClass}>
      { content}
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;