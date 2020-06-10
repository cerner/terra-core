import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import './DemographicsBanner.module.scss';
import SmallDemographicsBannerDisplay from './_SmallDemographicsBannerDisplay';
import LargeDemographicsBannerDisplay from './_LargeDemographicsBannerDisplay';
import DemographicsBannerUtils from './_sharedObjects';

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
   * Avatar to display in the banner. `photo` prop will be ignored if avatar is used.
   */
  avatar: PropTypes.shape(DemographicsBannerUtils.avatarShape),
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
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * @private
   * Whether or not the banner should show active styles
   */
  isActive: PropTypes.bool,
  /**
   * Whether to display an icon to confidentiality.
   */
  isConfidential: PropTypes.bool,
  /**
   * @private
   * Whether or not the banner should have additional styles and to indicate it is selectable.
   */
  isSelectable: PropTypes.bool,
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
  age: '',
  applicationContent: null,
  avatar: undefined,
  dateOfBirth: '',
  dateOfBirthLabel: 'DOB',
  dateOfBirthFullText: 'Date of Birth',
  deceasedDate: null,
  deceasedDateLabel: 'Deceased',
  gender: '',
  gestationalAge: null,
  gestationalAgeLabel: 'GA',
  gestationalAgeFullText: 'Gestational Age',
  identifiers: {},
  isActive: false,
  isConfidential: false,
  isSelectable: false,
  personName: '',
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

export default injectIntl(DemographicsBannerDisplay);
