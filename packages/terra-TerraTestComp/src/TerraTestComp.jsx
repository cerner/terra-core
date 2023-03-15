import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './TerraTestComp.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const TerraTestComp = ({ name, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  const TerraTestCompClassNames = classNames(
    cx([
      'terra-test-comp',
      theme.className,
    ]),
    customProps.className,
  );

  return (<div {...customProps} className={TerraTestCompClassNames}>{name}</div>);
};

TerraTestComp.propTypes = propTypes;
TerraTestComp.defaultProps = defaultProps;

export default TerraTestComp;
