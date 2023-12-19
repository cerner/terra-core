import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Spacer from '../../terra-spacer/src/Spacer';
import styles from './CardBody.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Child Nodes
   */
  children: PropTypes.node,
  /**
   * Provides themeable padding vertical
   */
  hasPaddingVertical: PropTypes.bool,
  /**
   * Provides themeable padding horizontal
   */
  hasPaddingHorizontal: PropTypes.bool,
  /**
  * Sets the content of the card to be centered
  */
  isContentCentered: PropTypes.bool,
};

const defaultProps = {
  hasPaddingHorizontal: true,
  hasPaddingVertical: true,
  isContentCentered: false,
};

const CardBody = ({
  children,
  hasPaddingVertical,
  hasPaddingHorizontal,
  isContentCentered,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const cardBodyClasses = classNames(
    cx([
      'card-body', { 'center-content': isContentCentered },
    ]),
    customProps.className,
  );
  return (
    <Spacer
      className={theme.className}
      paddingTop={hasPaddingVertical ? 'medium' : undefined}
      paddingBottom={hasPaddingVertical ? 'medium' : undefined}
      paddingLeft={hasPaddingHorizontal ? 'medium' : undefined}
      paddingRight={hasPaddingHorizontal ? 'medium' : undefined}
    >
      <div {...customProps} className={cardBodyClasses}>{children}</div>
    </Spacer>
  );
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
export default CardBody;
