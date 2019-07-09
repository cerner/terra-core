import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import uniqueid from 'lodash.uniqueid';
import VisualyHiddenText from 'terra-visually-hidden-text';

import styles from './RadioField.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The form control elements the Field contains.
   */
  children: PropTypes.node,
  /**
   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.
   */
  error: PropTypes.node,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the legend.
   */
  hideRequired: PropTypes.bool,
  /**
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Whether or not the field is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether or not the legend is visible. Use this props to hide a legend while still creating it on the DOM for accessibility.
   */
  isLegendHidden: PropTypes.bool,
  /**
   * The legend of the form control children.
   */
  legend: PropTypes.node.isRequired,
  /**
   * Attributes to attach to the legend.
   */
  // eslint-disable-next-line react/forbid-prop-types
  legendAttrs: PropTypes.object,
  /**
   * Whether or not the field is required.
   */
  required: PropTypes.bool,
  /**
   * Whether or not to append the 'optional' legend to a non-required field legend.
   */
  showOptional: PropTypes.bool,
};

const defaultProps = {
  children: null,
  error: null,
  help: null,
  hideRequired: false,
  isInline: false,
  isInvalid: false,
  isLegendHidden: false,
  legendAttrs: {},
  required: false,
  showOptional: false,
};

const RadioField = (props) => {
  const {
    children,
    error,
    help,
    hideRequired,
    intl,
    isInvalid,
    isInline,
    isLegendHidden,
    legend,
    legendAttrs,
    required,
    showOptional,
    ...customProps
  } = props;

  const radioFieldClasses = cx([
    'radio-field',
    { 'is-inline': isInline },
    customProps.className,
  ]);

  const legendClassNames = cx([
    'legend',
    legendAttrs.className,
  ]);

  const legendAriaDescriptionId = `terra-radio-field-description-${uniqueid()}`;
  const helpAriaDescriptionId = help ? `terra-radio-field-description-help-${uniqueid()}` : '';
  const errorAriaDescriptionId = error ? `terra-radio-field-description-error-${uniqueid()}` : '';
  const ariaDescriptionIds = `${legendAriaDescriptionId} ${errorAriaDescriptionId} ${helpAriaDescriptionId}`;

  const legendGroup = (
    <legend id={legendAriaDescriptionId} className={cx(['legend-group', { 'legend-group-hidden': isLegendHidden }])}>
      <div {...legendAttrs} className={legendClassNames}>
        {isInvalid && <span className={cx('error-icon')} />}
        {required && (isInvalid || !hideRequired) && (
          <React.Fragment>
            <div aria-hidden="true" className={cx('required')}>*</div>
            <VisualyHiddenText text={intl.formatMessage({ id: 'Terra.form.field.required' })} />
          </React.Fragment>
        )}
        {legend}
        {required && !isInvalid && hideRequired && <span className={cx('required-hidden')}>*</span>}
        {showOptional && !required && <span className={cx('optional')}>{intl.formatMessage({ id: 'Terra.form.field.optional' })}</span>}
        {!isInvalid && <span className={cx('error-icon-hidden')} />}
      </div>
    </legend>
  );

  const content = React.Children.map(children, (child) => {
    if (child && child.type.isRadio) {
      return React.cloneElement(child, {
        inputAttrs: { 'aria-describedby': ariaDescriptionIds },
      });
    }

    return child;
  });

  return (
    <fieldset {...customProps} aria-required={required} required={required} className={radioFieldClasses}>
      {legendGroup}
      {content}
      {isInvalid && error && <div id={errorAriaDescriptionId} className={cx('error-text')}>{error}</div>}
      {help && <div id={helpAriaDescriptionId} className={cx('help-text')}>{help}</div>}
    </fieldset>
  );
};

RadioField.propTypes = propTypes;
RadioField.defaultProps = defaultProps;

export default injectIntl(RadioField);
