import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './PopupFrame.scss';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const PopupFrame = ({
    children,
    ...customProps
  }) => {
  const frameClassNames = classNames([
    'terra-PopupFrame',
    customProps.className,
  ]);

  return (
    <ul {...customProps} className={frameClassNames}>
      {children}
    </ul>
  );
};

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

export default PopupFrame;
