/* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import uuidv4 from 'uuid/v4';
import styles from './Fieldset.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Children the Field contains.
   */
  children: PropTypes.node,
  /**
   * Help element to display with other elements.
   */
  help: PropTypes.node,
  /**
   * Legend for the input group.
   */
  legend: PropTypes.string,
  /**
   * Attributes to attach to the legend.
   */
  // eslint-disable-next-line react/forbid-prop-types
  legendAttrs: PropTypes.object,
  /**
   * Determines whether the fieldset is required.
   */
  required: PropTypes.bool,
  /**
   * Whether or not the legend is visible. Use this prop to hide a legend while still creating it on the DOM for accessibility.
   */
  isLegendHidden: PropTypes.bool,
};

const defaultProps = {
  legendAttrs: {},
  required: false,
  isLegendHidden: false,
};

const Fieldset = ({
  children, help, legend, legendAttrs, isLegendHidden, required, ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const fieldsetClasses = classNames(
    cx([
      'fieldset',
      { 'fieldset-required': required },
      theme.className,
    ]),
    customProps.className,
  );

  const legendClasses = cx([
    'legend',
    legendAttrs.className,
    { 'legend-visually-hidden': isLegendHidden },
  ]);

  const legendId = `terra-fieldset-legend-${uuidv4()}`;
  const helpId = `terra-fieldset-help-${uuidv4()}`;

  const addAriaHelpers = (fieldsetChildren) => {
    const cloneChildren = [];
    React.Children.forEach(fieldsetChildren, (child) => {
      cloneChildren.push(React.cloneElement(child, { 'aria-labelledby': `${legendId} ${helpId}` }));
    });
    return cloneChildren;
  };

  return (
    <fieldset {...customProps} className={fieldsetClasses}>
      {legend && <legend id={legendId} {...legendAttrs} className={legendClasses}>{legend}</legend>}
      {help && <small id={helpId} className={cx('help-text')} tabIndex="-1">{help}</small>}
      <div className={cx('fieldset-children')}>
        {help || legend ? addAriaHelpers(children) : children}
      </div>
    </fieldset>
  );
};

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;

export default Fieldset;
