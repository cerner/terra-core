import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import IconError from 'terra-icon/lib/icon/IconError';
import styles from './Field.module.scss';

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
   * Error Icon to display when the input is invalid.
   */
  errorIcon: PropTypes.element,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * The htmlFor attribute on the field label.
   */
  htmlFor: PropTypes.string,
  /**
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Whether or not the field is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * The label of the form control children.
   */
  label: PropTypes.node.isRequired,
  /**
   * Attributes to attach to the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: PropTypes.string,
  /**
   * Whether or not the field is required.
   */
  required: PropTypes.bool,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   *  Provides first class prop for custom inline styles
   */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

const defaultProps = {
  children: null,
  error: null,
  errorIcon: <IconError />,
  help: null,
  hideRequired: false,
  htmlFor: undefined,
  isInvalid: false,
  isInline: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxWidth: undefined,
  required: false,
  showOptional: false,
};

const hasWhiteSpace = s => /\s/g.test(s);
// Detect IE 10 or IE 11
// TODO - Delete detection logic when we drop support for IE
const isIE = () => (window.navigator.userAgent.indexOf('Trident/6.0') > -1 || window.navigator.userAgent.indexOf('Trident/7.0') > -1);

const Field = (props) => {
  const {
    children,
    error,
    errorIcon,
    help,
    hideRequired,
    htmlFor,
    intl,
    isInvalid,
    isInline,
    isLabelHidden,
    label,
    labelAttrs,
    maxWidth,
    required,
    showOptional,
    style,
    ...customProps
  } = props;

  const customStyles = maxWidth ? Object.assign({ maxWidth }, style) : style;

  const fieldClasses = cx([
    'field',
    { 'field-inline': isInline },
    customProps.className,
  ]);

  const labelClassNames = cx([
    'label',
    labelAttrs.className,
  ]);

  // Checks to run when not in production
  // TODO - Remove this once we make this a required prop.
  // More info: https://github.com/cerner/terra-core/issues/2290
  if (process.env.NODE_ENV !== 'production') {
    if (!htmlFor) {
      // eslint-disable-next-line
      console.warn('The htmlFor prop will be required in the next major version bump of terra-form-field. It is needed for creating an accessible mapping from the form field to its related error and help text.');
    }

    if (htmlFor && hasWhiteSpace(htmlFor)) {
      // eslint-disable-next-line
      console.warn('The htmlFor prop should be a string without white spaces as it will be used as an HTML attribute value. Use - or _ in place of white space characters.');
    }
  }


  /**
   * IE + JAWS has trouble reading aria-describedby content with our form components.
   * Using feature detect for Microsoft browsers and injecting the help and error messages
   * into the label as visually hidden text so JAWS can announce them correctly in IE.
   */
  const IEDescriptionText = (
    isIE()
      ? (
        <div className={cx('visually-hidden-text')}>
          {isInvalid && error ? error : null}
          {help}
        </div>
      ) : null
  );

  const content = React.Children.map(children, (child) => {
    if (required && child && (child.type.isInput || child.type.isSelect || child.type.isTextarea)) {
      return React.cloneElement(child, {
        required: true,
      });
    }
    return child;
  });

  const labelGroup = (
    <div className={cx(['label-group', { 'label-group-hidden': isLabelHidden }])}>
      {isInvalid && <div className={cx('error-icon')}>{errorIcon}</div>}
      {
        <label htmlFor={htmlFor} {...labelAttrs} className={labelClassNames}>
          {required && (isInvalid || !hideRequired) && <div className={cx('required')}>*</div>}
          {label}
          {required && !isInvalid && hideRequired && <div className={cx('required-hidden')}>*</div>}
          {showOptional && !required && <div className={cx('optional')}>{intl.formatMessage({ id: 'Terra.form.field.optional' })}</div>}
          {IEDescriptionText}
        </label>
      }
      {!isInvalid && <div className={cx('error-icon-hidden')}>{errorIcon}</div>}
    </div>
  );

  return (
    <div style={customStyles} {...customProps} className={fieldClasses}>
      {labelGroup}
      {content}
      {isInvalid && error && <div tabIndex="-1" id={htmlFor ? `${htmlFor}-error` : undefined} className={cx('error-text')}>{error}</div>}
      {help && <div tabIndex="-1" id={htmlFor ? `${htmlFor}-help` : undefined} className={cx('help-text')}>{help}</div>}
    </div>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default injectIntl(Field);
