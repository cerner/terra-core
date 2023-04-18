import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import './DemographicsBanner.module.scss';
import SmallDemographicsBannerDisplay from './_SmallDemographicsBannerDisplay';
import LargeDemographicsBannerDisplay from './_LargeDemographicsBannerDisplay';

const propTypes = {
  /**
   * Application content to display in the banner.
   */
  applicationContent: PropTypes.node,
  /**
   * Age of the person.
   */
  age: PropTypes.string,
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
   * Additional key value identifiers of a person's demographic information
   */
  // eslint-disable-next-line react/forbid-prop-types
  identifiers: PropTypes.object,
  /**
   * Key value full title identifier name of a person's demographic information.
   * Should be added for identifiers (like abbreviations) that may require more
   * descriptive name for assistive technologies.
   */
  identifierTitles: PropTypes.objectOf(PropTypes.string),
  /**
   * Full Name of the person
   */
  personName: PropTypes.string,
  /**
   * Sets the heading level of the person's name. One of `1`, `2`, `3`, `4`, `5`, `6`.
   * This helps screen readers to announce appropriate heading levels.
   * Changing 'personNameLevel' will not visually change the style of the content.
   */
  personNameLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
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
  applicationContent: null,
  age: '--',
  dateOfBirth: '--',
  dateOfBirthLabel: 'DOB',
  dateOfBirthFullText: 'Date of Birth',
  deceasedDate: null,
  deceasedDateLabel: 'Deceased',
  gender: '--',
  gestationalAge: null,
  gestationalAgeLabel: 'GA',
  gestationalAgeFullText: 'Gestational Age',
  identifiers: {},
  identifierTitles: {},
  personName: '--',
  personNameLevel: 2,
  photo: null,
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
