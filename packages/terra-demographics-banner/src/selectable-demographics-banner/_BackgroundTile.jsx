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
};

const defaultProps = {
  children: undefined,
};

const BackgroundTile = ({
  children,
  ...customProps
}) => {
  const backgroundTileClassNames = cx([
    { deceased: customProps.deceasedDate },
    'background-tile',
  ]);

  return (
    <div className={backgroundTileClassNames}>
      {children}
    </div>
  );
};

BackgroundTile.propTypes = propTypes;
BackgroundTile.defaultProps = defaultProps;
export default BackgroundTile;
