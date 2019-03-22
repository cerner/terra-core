/* eslint-disable react/jsx-boolean-value, jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Fieldset.module.scss';

const cx = classNames.bind(styles);

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
};

const defaultProps = {
  legendAttrs: {},
  required: false,
};

const Fieldset = ({
  children, help, legend, legendAttrs, required, ...customProps
}) => {
  const fieldsetClasses = cx([
    'fieldset',
    { 'fieldset-required': required },
    customProps.className,
  ]);

  const legendClasses = cx([
    'legend',
    legendAttrs.className,
  ]);

  return (
    <fieldset {...customProps} className={fieldsetClasses}>
      {legend && <legend {...legendAttrs} className={legendClasses}>{legend}</legend>}
      {help && <small className={cx('help-text')} tabIndex="-1">{help}</small>}
      <div className={cx('fieldset-children')}>
        {children}
      </div>
    </fieldset>
  );
};

Fieldset.propTypes = propTypes;
Fieldset.defaultProps = defaultProps;

export default Fieldset;
