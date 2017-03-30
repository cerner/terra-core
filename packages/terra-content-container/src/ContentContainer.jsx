import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ContentContainer.scss';

const ContentContainer = ({
  /**
   * The header element to be placed within the header area of the container.
   */
  header,
  /**
   * The children to be placed within the main content area of the container.
   */
  children,
  /**
   * Whether or not the container should expanded to fill its parent element.
   */
  fill,
  ...customProps
  }) => {
  const contentLayoutClassNames = classNames([
    'terra-ContentContainer',
    { 'terra-ContentContainer--fill': fill },
    customProps.className,
  ]);

  return (
    <div
      {...customProps}
      className={contentLayoutClassNames}
    >
      <div className="terra-ContentContainer-header">
        {header}
      </div>
      <div className="terra-ContentContainer-main">
        <div className="terra-ContentContainer-main-normalizer">
          {children}
        </div>
      </div>
    </div>
  );
};

ContentContainer.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  fill: PropTypes.bool,
};

export default ContentContainer;
