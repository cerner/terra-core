import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import DemographicsBannerDisplay from './DemographicsBannerDisplay';

const identifierShape = {
  /**
   * The label of the identifier: i.e.: `SSN`
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
   * @private
   * Whether or not the banner should show active styles
   */
  isActive: PropTypes.bool,
  /**
   * Whether or not to display an icon to indicate confidentiality.
   */
  isConfidential: PropTypes.bool,
  /**
   * @private
   * Whether or not the banner should have additional styles and to indicate it is selectable.
   */
  isSelectable: PropTypes.bool,
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
  identifiers: undefined,
  isActive: false,
  isConfidential: false,
  isSelectable: false,
  personName: undefined,
  photo: null,
  postMenstrualAge: {},
  preferredFirstName: null,
};

const DemographicsBanner = ({
  administrativeSex,
  age,
  dateOfBirth,
  intl,
  personName,
  ...customProps
}) => (
  <DemographicsBannerDisplay
    {...customProps}
    administrativeSex={administrativeSex}
    age={age}
    dateOfBirth={dateOfBirth}
    personName={personName}
    administrativeSexFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.administrativeSexFullText' })}
    dateOfBirthLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirth' })}
    dateOfBirthFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirthFullText' })}
    deceasedDateLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.deceased' })}
    gestationalAgeLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAge' })}
    gestationalAgeFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAgeFullText' })}
    postMenstrualAgeLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAge' })}
    postMenstrualAgeFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAgeFullText' })}
    sexMismatchFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.sexNotIdentical' })}
  />
);

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

export default injectIntl(DemographicsBanner);
