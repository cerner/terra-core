import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ContentContainer.scss';

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
