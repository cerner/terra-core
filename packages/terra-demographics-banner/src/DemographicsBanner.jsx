import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import DemographicsBannerDisplay from './DemographicsBannerDisplay';

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
   * identifierAria: The aria-label for the identifier. i.e.: `Social Security Number 1 1 1 2 2 3 3 3 3`
   * label: The label of the identifier: i.e.: `SSN`
   * value: The value to display for the identifier. i.e.: `111-22-3333`
   * ```
   */
  identifiers: PropTypes.arrayOf(PropTypes.shape({
    identifierAria: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  })),
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
   * Image Node to display photo in the banner or URL of photo to display in the banner.
   */
  photo: PropTypes.node,
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
  age: undefined,
  applicationContent: null,
  dateOfBirth: undefined,
  deceasedDate: null,
  gender: undefined,
  gestationalAge: null,
  identifiers: undefined,
  isActive: false,
  isConfidential: false,
  isSelectable: false,
  personName: undefined,
  photo: null,
  postMenstrualAge: null,
  preferredFirstName: null,
};

const DemographicsBanner = ({
  age,
  dateOfBirth,
  gender,
  genderAria,
  intl,
  personName,
  ...customProps
}) => (
  <DemographicsBannerDisplay
    {...customProps}
    age={age}
    dateOfBirth={dateOfBirth}
    gender={gender}
    genderAria={genderAria}
    personName={personName}
    dateOfBirthLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirth' })}
    dateOfBirthFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirthFullText' })}
    deceasedDateLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.deceased' })}
    gestationalAgeLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAge' })}
    gestationalAgeFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAgeFullText' })}
    postMenstrualAgeLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAge' })}
    postMenstrualAgeFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAgeFullText' })}
  />
);

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

export default injectIntl(DemographicsBanner);
