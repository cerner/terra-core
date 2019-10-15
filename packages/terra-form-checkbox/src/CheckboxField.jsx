import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import uniqueid from 'lodash.uniqueid';
import VisualyHiddenText from 'terra-visually-hidden-text';
import { FormattedMessage } from 'react-intl';
import styles from './CheckboxField.module.scss';

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
   * Help element to display with the checkboxes.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the legend.
   */
  hideRequired: PropTypes.bool,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Whether the field displays as Invalid. Use when value does not meet validation pattern.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether or not the legend is visible. Use this props to hide a legend while still creating it on the DOM for accessibility.
   */
  isLegendHidden: PropTypes.bool,
  /**
   * The legend of the form control children.
   */
  legend: PropTypes.string.isRequired,
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

const CheckboxField = (props) => {
  const {
    children,
    error,
    help,
    hideRequired,
    isInvalid,
    isInline,
    isLegendHidden,
    legend,
    legendAttrs,
    required,
    showOptional,
    ...customProps
  } = props;

  const checkboxFieldClasses = cx([
    'checkbox-field',
    { 'is-inline': isInline },
    customProps.className,
  ]);

  const legendClassNames = cx([
    'legend',
    legendAttrs.className,
  ]);

  const legendAriaDescriptionId = `terra-checkbox-field-description-${uniqueid()}`;
  const helpAriaDescriptionId = help ? `terra-checkbox-field-description-help-${uniqueid()}` : '';
  const errorAriaDescriptionId = error ? `terra-checkbox-field-description-error-${uniqueid()}` : '';
  const ariaDescriptionIds = `${legendAriaDescriptionId} ${errorAriaDescriptionId} ${helpAriaDescriptionId}`;

  const legendGroup = (
    <legend id={legendAriaDescriptionId} className={cx(['legend-group', { 'legend-group-hidden': isLegendHidden }])}>
      <div {...legendAttrs} className={legendClassNames}>
        {isInvalid && <span className={cx('error-icon')} />}
        {required && (isInvalid || !hideRequired) && (
          <React.Fragment>
            <div aria-hidden="true" className={cx('required')}>*</div>
            <FormattedMessage id="Terra.form.field.required">
              {requiredText => (
                <VisualyHiddenText text={requiredText} />
              )}
            </FormattedMessage>
          </React.Fragment>
        )}
        {legend}
        {required && !isInvalid && hideRequired && <span className={cx('required-hidden')}>*</span>}
        {showOptional && !required
          && (
            <FormattedMessage id="Terra.form.field.optional">
              {optionalText => (
                <span className={cx('optional')}>{optionalText}</span>
              )}
            </FormattedMessage>
          )}
        {!isInvalid && <span className={cx('error-icon-hidden')} />}
      </div>
    </legend>
  );

  const content = React.Children.map(children, (child) => {
    if (child && child.type.isCheckbox) {
      return React.cloneElement(child, {
        inputAttrs: { 'aria-describedby': ariaDescriptionIds },
      });
    }

    return child;
  });

  return (
    <fieldset {...customProps} className={checkboxFieldClasses}>
      {legendGroup}
      {content}
      {isInvalid && error && <div id={errorAriaDescriptionId} className={cx('error-text')}>{error}</div>}
      {help && <div id={helpAriaDescriptionId} className={cx('help-text')}>{help}</div>}
    </fieldset>
  );
};

CheckboxField.propTypes = propTypes;
CheckboxField.defaultProps = defaultProps;

export default CheckboxField;
