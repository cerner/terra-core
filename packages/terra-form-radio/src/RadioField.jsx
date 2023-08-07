import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import uniqueid from 'lodash.uniqueid';
import VisualyHiddenText from 'terra-visually-hidden-text';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  VALUE_UP, VALUE_DOWN, VALUE_RIGHT, VALUE_LEFT,
} from 'keycode-js';
import styles from './RadioField.module.scss';

const cx = classNamesBind.bind(styles);

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
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
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

  const theme = React.useContext(ThemeContext);

  const radioFieldClasses = classNames(
    cx(
      'radio-field',
      { 'is-inline': isInline },
      theme.className,
    ),
    customProps.className,
  );

  const legendClassNames = cx([
    'legend',
    legendAttrs.className,
  ]);

  const fieldSetId = customProps.id || `terra-radio-group-${uniqueid()}`;
  const legendAriaDescriptionId = `terra-radio-field-description-${uniqueid()}`;
  const helpAriaDescriptionId = help ? `terra-radio-field-description-help-${uniqueid()}` : '';
  const errorAriaDescriptionId = error ? `terra-radio-field-description-error-${uniqueid()}` : '';
  const ariaDescriptionIds = `${legendAriaDescriptionId} ${errorAriaDescriptionId} ${helpAriaDescriptionId}`;

  const isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
  const isEdge = navigator.userAgent.indexOf('Edg') !== -1;
  const LegendGroup = (isSafari || isEdge) ? 'div' : 'legend';

  const legendGroup = (
    <LegendGroup id={legendAriaDescriptionId} className={cx(['legend-group', { 'legend-group-hidden': isLegendHidden }])}>
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
        {showOptional && !required
          && (
            <span className={cx('optional')}>{intl.formatMessage({ id: 'Terra.form.field.optional' })}</span>
          )}
        {!isInvalid && <span className={cx('error-icon-hidden')} />}
      </div>
    </LegendGroup>
  );

  const handleKeyDown = (event) => {
    const radioGroup = document.getElementById(fieldSetId);
    if (radioGroup) {
      const radioItems = radioGroup.querySelectorAll('[type=radio]');
      const itemIndex = Array.from(radioItems).indexOf(event.currentTarget);
      if (event.key === VALUE_DOWN || event.key === VALUE_RIGHT) {
        if (itemIndex === radioItems.length - 1) {
          radioItems[0].focus();
          radioItems[0].checked = true;
        } else {
          radioItems[itemIndex + 1].focus();
          radioItems[itemIndex + 1].checked = true;
        }
      } else if (event.key === VALUE_UP || event.key === VALUE_LEFT) {
        if (itemIndex === 0) {
          radioItems[radioItems.length - 1].focus();
          radioItems[radioItems.length - 1].checked = true;
        } else {
          radioItems[itemIndex - 1].focus();
          radioItems[itemIndex - 1].checked = true;
        }
      }
    }
  };

  const content = React.Children.map(children, (child) => {
    if (child && child.type.isRadio) {
      return React.cloneElement(child, {
        onKeyDown: handleKeyDown,
        inputAttrs: {
          ...child.props.inputAttrs, 'aria-describedby': ariaDescriptionIds,
        },
      });
    }

    return child;
  });

  return (
    <fieldset id={fieldSetId} {...customProps} required={required} className={radioFieldClasses}>
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
