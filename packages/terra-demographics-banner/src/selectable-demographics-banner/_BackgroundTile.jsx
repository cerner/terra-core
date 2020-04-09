import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SelectableDemographicsBanner.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child Nodes that are rendered within background tile.
   */
  children: PropTypes.node,
  /**
   * boolean value to identify whether banner is deceased or not.
   */
  isDeceased: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
};

const BackgroundTile = ({
  children,
  isDeceased,
  ...customProps
}) => {
  const backgroundTileClassNames = cx([
    { deceased: isDeceased },
    'background-tile',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={backgroundTileClassNames}>
      {children}
    </div>
  );
};

BackgroundTile.propTypes = propTypes;
BackgroundTile.defaultProps = defaultProps;
export default BackgroundTile;
