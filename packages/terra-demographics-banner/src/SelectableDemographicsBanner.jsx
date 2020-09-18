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

const identifierShape = {
  /**
   * The label of the identifier: e.g.: `SSN`
   */
  label: PropTypes.string,
  /**
   * The value to display for the identifier. i.e.: `111-22-3333`
   */
  value: PropTypes.string,
  /**
   * The aria-label for the identifier. i.e.: `Social Security Number 1 1 1 2 2 3 3 3 3`
   */
  ariaLabel: PropTypes.string,
};

const stringShape = {
  /**
   * The value to display. i.e.: `03/15/2020`
   */
  value: PropTypes.string,
  /**
   * The aria-label for the value. i.e.: `March 15th, 2020`
   */
  ariaLabel: PropTypes.string,
};

const administrativeSexShape = {
  /**
   * The sex to display. i.e.: `M`
   */
  value: PropTypes.string,
  /**
   * The aria-label for the sex. i.e.: `Male`
   */
  ariaLabel: PropTypes.string,
  /**
   * Whether or not the administrative sex is different from the birth sex. If different, an icon will be displayed to denote the mismatch in sex.
   */
  isBirthSexMismatch: PropTypes.bool,
};

const propTypes = {
  /**
   * Administrative sex of the Person. This will be displayed on the demographics banner.
   */
  administrativeSex: PropTypes.shape(administrativeSexShape),
  /**
   * Age of the person.
   */
  age: PropTypes.shape(stringShape),
  /**
   * Application content to display in the banner.
   */
  applicationContent: PropTypes.node,
  /**
   * The person's date of birth.
   */
  dateOfBirth: PropTypes.shape(stringShape),
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided.
   */
  deceasedDate: PropTypes.shape(stringShape),
  /**
   * The person's gestational age.
   */
  gestationalAge: PropTypes.shape(stringShape),
  /**
   * Additional array of label value identifiers of a person's demographic information.
   */
  identifiers: PropTypes.arrayOf(PropTypes.shape(identifierShape)),
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
   * Photo to display in the banner.
   */
  photo: PropTypes.node,
  /**
   * The person's postmenstrual age.
   */
  postMenstrualAge: PropTypes.shape(stringShape),
  /**
   * The person's preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
};

const defaultProps = {
  administrativeSex: {},
  age: {},
  applicationContent: null,
  dateOfBirth: {},
  deceasedDate: {},
  gestationalAge: {},
  isConfidential: false,
  postMenstrualAge: {},
  preferredFirstName: null,
};

const SelectableDemographicsBanner = ({
  administrativeSex,
  age,
  applicationContent,
  dateOfBirth,
  deceasedDate,
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
      isDeceased={!!(deceasedDate.value)}
    >
      <SelectableTile
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseDown={handleMouseDown}
        onBlur={handleBlur}
      >
        <DemographicsBanner
          administrativeSex={administrativeSex}
          age={age}
          applicationContent={applicationContent}
          className={cx('selectable-demographics-banner')}
          dateOfBirth={dateOfBirth}
          deceasedDate={deceasedDate}
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
