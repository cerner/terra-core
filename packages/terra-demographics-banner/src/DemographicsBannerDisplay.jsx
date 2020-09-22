import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import './DemographicsBanner.module.scss';
import SmallDemographicsBannerDisplay from './_SmallDemographicsBannerDisplay';
import LargeDemographicsBannerDisplay from './_LargeDemographicsBannerDisplay';

const identifierShape = {
  /**
   * The label of the identifier: e.g.: `SSN`
   */
  label: PropTypes.string,
  /**
   * The value to display for the identifier. e.g.: `111-22-3333`
   */
  value: PropTypes.string,
  /**
   * The aria-label for the identifier. e.g.: `Social Security Number 1 1 1 2 2 3 3 3 3`
   */
  ariaLabel: PropTypes.string,
};

const stringShape = {
  /**
   * The value to display. e.g.: `03/15/2020`
   */
  value: PropTypes.string,
  /**
   * The aria-label for the value. e.g.: `March 15th, 2020`
   */
  ariaLabel: PropTypes.string,
};

const administrativeSexShape = {
  /**
   * The sex to display. e.g.: `M`
   */
  value: PropTypes.string,
  /**
   * The aria-label for the sex. e.g.: `Male`
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
   * Text description of the Administrative Sex label that is read by screen readers
   */
  administrativeSexFullText: PropTypes.string,
  /**
   * Age of the person.
   */
  age: PropTypes.shape(stringShape),
  /**
   * Application content to display in the banner.
   */
  applicationContent: PropTypes.node,
  /**
   * The persons date of birth
   */
  dateOfBirth: PropTypes.shape(stringShape),
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
  deceasedDate: PropTypes.shape(stringShape),
  /**
   * Label to display for the deceased date
   */
  deceasedDateLabel: PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: PropTypes.shape(stringShape),
  /**
   * Label to display for the Gestational Age
   */
  gestationalAgeLabel: PropTypes.string,
  /**
  * Text Description of the Gestational Age label that is read by screen readers
   */
  gestationalAgeFullText: PropTypes.string,
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
   * The person's postmenstrual age.
   */
  postMenstrualAge: PropTypes.shape(stringShape),
  /**
   * Label to display for the PostMenstrualAgeLabel
   */
  postMenstrualAgeLabel: PropTypes.string,
  /**
   * Text description of the Post Menstrural Age label that is read by screen readers
   */
  postMenstrualAgeFullText: PropTypes.string,
  /**
   * The persons preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
  /**
   * Text description that is read by screen readers when the Administrative Sex and Birth Sex are not identical.
   */
  sexMismatchFullText: PropTypes.string,
};

const defaultProps = {
  administrativeSex: {},
  administrativeSexFullText: '',
  age: {},
  applicationContent: null,
  dateOfBirth: {},
  dateOfBirthLabel: '',
  dateOfBirthFullText: '',
  deceasedDate: {},
  deceasedDateLabel: '',
  gestationalAge: {},
  gestationalAgeLabel: '',
  gestationalAgeFullText: '',
  isActive: false,
  isConfidential: false,
  isSelectable: false,
  personName: '',
  postMenstrualAge: {},
  postMenstrualAgeLabel: '',
  postMenstrualAgeFullText: '',
  preferredFirstName: null,
  sexMismatchFullText: '',
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
