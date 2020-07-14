import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import DemographicsBannerDisplay from './DemographicsBannerDisplay';
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
   * Additional key value identifiers of a person's demographic information.
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
  avatar: undefined,
  dateOfBirth: undefined,
  deceasedDate: null,
  gender: undefined,
  gestationalAge: null,
  identifiers: {},
  isActive: false,
  isConfidential: false,
  isSelectable: false,
  personName: undefined,
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
