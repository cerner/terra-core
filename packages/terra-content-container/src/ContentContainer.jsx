import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ContentContainer.scss';

const propTypes = {
  /**
   * The header element to be placed within the header area of the container.
   */
  header: PropTypes.node,
  /**
   * The children to be placed within the main content area of the container.
   */
  children: PropTypes.node,
  /**
   * Whether or not the container should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  header: undefined,
  children: undefined,
  fill: false,
};

const ContentContainer = ({
  header,
  children,
  fill,
  ...customProps
  }) => {
  const contentLayoutClassNames = classNames([
    'terra-ContentContainer',
    { 'terra-ContentContainer--fill': fill },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={contentLayoutClassNames}>
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

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
