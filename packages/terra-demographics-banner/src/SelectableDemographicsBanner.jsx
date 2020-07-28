import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import DemographicsBanner from './DemographicsBanner';
import BackgroundTile from './selectable-demographics-banner/_BackgroundTile';
import SelectableTile from './selectable-demographics-banner/_SelectableTile';
import styles from './selectable-demographics-banner/SelectableDemographicsBanner.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Age of the person.
   */
  age: PropTypes.string,
  /**
   * Application content to display in the banner.
   */
  applicationContent: PropTypes.node,
  /**
   * The person's date of birth.
   */
  dateOfBirth: PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided.
   */
  deceasedDate: PropTypes.string,
  /**
   * Gender of the Person. This will be displayed on the demographics banner.
   */
  gender: PropTypes.string,
  /**
   * The gender label used for accessibility. Unlike the `Gender` prop, this label will not be displayed. It will be read in screen readers if provided.
   */
  genderAria: PropTypes.string,
  /**
   * The person's gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * Additional array of label value identifiers of a person's demographic information.
   * ```
   * label: The label of the identifier: i.e.: `SSN`
   * value: The value to display for the identifier. i.e.: `111-22-3333`
   * ariaLabel: The aria-label for the identifier. i.e.: `Social Security Number 1 1 1 2 2 3 3 3 3`
   * ```
   */
  identifiers: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    ariaLabel: PropTypes.string,
  })),
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Whether to display an icon to confidentiality.
   */
  isConfidential: PropTypes.bool,
  /**
   * Function callback for when the appropriate click or key action is performed.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Callback function triggered when mouse is pressed.
   */
  onMouseDown: PropTypes.func,
  /**
   * Full Name of the person.
   */
  personName: PropTypes.string,
  /**
   * URL of photo to display in the banner.
   */
  photo: PropTypes.string,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: PropTypes.string,
  /**
   * The person's preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
};

const defaultProps = {
  applicationContent: null,
  deceasedDate: null,
  gestationalAge: null,
  isConfidential: false,
  postMenstrualAge: null,
  preferredFirstName: null,
};

const SelectableDemographicsBanner = ({
  age,
  applicationContent,
  dateOfBirth,
  deceasedDate,
  gender,
  genderAria,
  gestationalAge,
  identifiers,
  intl,
  isConfidential,
  onClick,
  onMouseDown,
  personName,
  photo,
  postMenstrualAge,
  preferredFirstName,
  ...customProps
}) => {
  const [isActive, setActive] = useState(false);

  const handleKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      setActive(true);
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      setActive(false);
      if (onClick) {
        onClick(event);
      }
    }
  };

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  const handleMouseDown = (event) => {
    event.currentTarget.firstChild.setAttribute('data-focus-styles-enabled', 'false');

    if (onMouseDown) {
      onMouseDown(event);
    }
  };

  const handleBlur = (event) => {
    event.currentTarget.firstChild.setAttribute('data-focus-styles-enabled', 'true');

    if (customProps.onBlur) {
      customProps.onBlur(event);
    }
  };

  return (
    <BackgroundTile
      {...customProps}
      isDeceased={!!(deceasedDate)}
    >
      <SelectableTile
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseDown={handleMouseDown}
        onBlur={handleBlur}
      >
        <DemographicsBanner
          age={age}
          applicationContent={applicationContent}
          className={cx('selectable-demographics-banner')}
          dateOfBirth={dateOfBirth}
          deceasedDate={deceasedDate}
          gender={gender}
          genderAria={genderAria}
          gestationalAge={gestationalAge}
          identifiers={identifiers}
          isConfidential={isConfidential}
          isSelectable
          isActive={isActive}
          personName={personName}
          photo={photo}
          postMenstrualAge={postMenstrualAge}
          preferredFirstName={preferredFirstName}
        />
      </SelectableTile>
    </BackgroundTile>
  );
};

SelectableDemographicsBanner.propTypes = propTypes;
SelectableDemographicsBanner.defaultProps = defaultProps;

export default injectIntl(SelectableDemographicsBanner);
