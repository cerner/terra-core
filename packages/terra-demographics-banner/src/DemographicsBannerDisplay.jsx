import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import './DemographicsBanner.module.scss';
import SmallDemographicsBannerDisplay from './_SmallDemographicsBannerDisplay';
import LargeDemographicsBannerDisplay from './_LargeDemographicsBannerDisplay';

const propTypes = {
  /**
   * Age of the person.
   */
  age: PropTypes.string,
  /**
   * Specifies the alternative text for the photo.
   * CAN WE JUST TREAT personName AS ALT AND NOT NEED THIS PROP???
   */
  alt: PropTypes.string,
  /**
   * Application content to display in the banner.
   */
  applicationContent: PropTypes.node,
  /**
   * Sets the background color of the photo. Defaults to `auto`. Accepted color variants are theme specific.
   * One of: `'auto'`, `'neutral'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'`, `'ten'`.
   */
  color: PropTypes.oneOf(['auto', 'neutral', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten']),
  /**
   * The persons date of birth
   */
  dateOfBirth: PropTypes.string,
  /**
   * Label to display for the date of birth
   */
  dateOfBirthLabel: PropTypes.string,
  /**
   * Text Description of the date of birth label that is read by screen readers
   */
  dateOfBirthFullText: PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: PropTypes.string,
  /**
   * Label to display for the deceased date
   */
  deceasedDateLabel: PropTypes.string,
  /**
   * Gender of the Person
   */
  gender: PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * Label to display for the Gestational Age
   */
  gestationalAgeLabel: PropTypes.string,
  /**
  * Text Description of the Gestational Age label that is read by screen readers
   */
  gestationalAgeFullText: PropTypes.string,
  /**
   * Value used for the hash function when color is set to `auto`. If not provided, hash function utilizes alt.
   */
  hashValue: PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information
   */
  // eslint-disable-next-line react/forbid-prop-types
  identifiers: PropTypes.object,
  /**
   * One or two letters to display the initials in the photo.
   */
  initials: PropTypes.string,
  /**
   * Whether to hide photo from the accessibility tree.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Full Name of the person
   */
  personName: PropTypes.string,
  /**
   * Photo to display in the banner
   */
  photo: PropTypes.node,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: PropTypes.string,
  /**
   * Label to display for the PostMenstrualAgeLabel
   */
  postMenstrualAgeLabel: PropTypes.string,
  /**
  * Text Description of the Post Menstrural Age label that is read by screen readers
   */
  postMenstrualAgeFullText: PropTypes.string,
  /**
   * The persons preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
};

const defaultProps = {
  age: '--',
  alt: undefined,
  applicationContent: null,
  color: 'auto',
  dateOfBirth: '--',
  dateOfBirthLabel: 'DOB',
  dateOfBirthFullText: 'Date of Birth',
  deceasedDate: null,
  deceasedDateLabel: 'Deceased',
  gender: '--',
  gestationalAge: null,
  gestationalAgeLabel: 'GA',
  gestationalAgeFullText: 'Gestational Age',
  hashValue: undefined,
  identifiers: {},
  isAriaHidden: false,
  personName: '--',
  postMenstrualAge: null,
  postMenstrualAgeLabel: 'PMA',
  postMenstrualAgeFullText: 'Post Menstrual Age',
  preferredFirstName: null,
};

const DemographicsBannerDisplay = props => (
  <ResponsiveElement
    tiny={<SmallDemographicsBannerDisplay {...props} />}
    small={<LargeDemographicsBannerDisplay {...props} />}
  />
);

DemographicsBannerDisplay.propTypes = propTypes;
DemographicsBannerDisplay.defaultProps = defaultProps;

export default DemographicsBannerDisplay;
