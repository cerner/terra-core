import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconError from 'terra-icon/lib/icon/IconError';
import 'terra-base/lib/baseStyles';
import styles from './Field.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Children the Field contains.
   */
  children: PropTypes.node,
  /**
   * Error message for when the input is invalid on validation.
   */
  error: PropTypes.node,
  /**
   * Error Icon to display when the input is invalid on validation.
   */
  errorIcon: PropTypes.element,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Determines whether or not to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * The htmlFor attribute on the field label.
   */
  htmlFor: PropTypes.string,
  /**
   * Determines whether the field is in error or not.
   */
  inError: PropTypes.bool,
  /**
   * Determines whether the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Label of the input.
   */
  label: PropTypes.node,
  /**
   * Attributes to attach to the label.
   */
  labelAttrs: PropTypes.object,
  /**
   * Determines whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * Determines whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
};

const defaultProps = {
  children: null,
  error: null,
  errorIcon: <IconError />,
  help: null,
  hideRequired: false,
  htmlFor: undefined,
  inError: false,
  isInline: false,
  label: null,
  labelAttrs: {},
  required: false,
  showOptional: false,
};

const Field = (props) => {
  const {
    children,
    error,
    errorIcon,
    help,
    hideRequired,
    htmlFor,
    inError,
    isInline,
    label,
    labelAttrs,
    required,
    showOptional,
    ...customProps
  } = props;

  const fieldClasses = cx([
    'field',
    { 'field-inline': isInline },
    { 'field-required': required },
    customProps.className,
  ]);

  const labelGroupClassNames = cx([
    'label-group',
    { 'field-required': required },
  ]);

  const labelClassNames = cx([
    'label',
    labelAttrs.className,
  ]);

  let requiredElement;
  if ((required && inError) || (required && !hideRequired)) {
    requiredElement = <div className={cx('required')}>*</div>;
  }

  let labelGroup;
  if (label) {
    labelGroup = (
      <div className={labelGroupClassNames}>
        {inError && <div className={cx('error-icon')}>{errorIcon}</div>}
        {<label htmlFor={htmlFor} {...labelAttrs} className={labelClassNames}>
          {requiredElement}
          <div className={cx('label-text')}>{label}</div>
          {showOptional && !required && <div className={cx('optional')}>(optional)</div>}
        </label>}
      </div>
    );
  }

  return (
    <div {...customProps} className={fieldClasses}>
      {labelGroup}
      {children}
      {inError && error && <div className={cx('error-text')}>{error}</div>}
      {help && <div className={cx('help-text')}>{help}</div>}
    </div>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
