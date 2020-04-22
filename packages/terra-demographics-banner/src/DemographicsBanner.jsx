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
   * The person's date of birth.
   */
  dateOfBirth: PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided.
   */
  deceasedDate: PropTypes.string,
  /**
   * Gender of the Person.
   */
  gender: PropTypes.string,
  /**
   * The person's gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * Value used for the hash function when color is set to `auto`. If not provided, hash function utilizes alt.
   */
  hashValue: PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information.
   */
  // eslint-disable-next-line react/forbid-prop-types
  identifiers: PropTypes.object,
  /**
   * One or two letters to display the initials in the photo.
   */
  initials: PropTypes.string,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Whether to hide photo from the accessibility tree.
   */
  isAriaHidden: PropTypes.bool,
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
  alt: undefined,
  applicationContent: null,
  color: 'auto',
  dateOfBirth: undefined,
  deceasedDate: null,
  gender: undefined,
  gestationalAge: null,
  hashValue: undefined,
  identifiers: {},
  initials: undefined,
  isAriaHidden: false,
  personName: undefined,
  photo: null,
  postMenstrualAge: null,
  preferredFirstName: null,
};

const DemographicsBanner = ({
  age,
  dateOfBirth,
  gender,
  intl,
  personName,
  ...customProps
}) => {
  const noDataProvided = intl.formatMessage({ id: 'Terra.demographicsBanner.noDataProvided' });

  return (
    <DemographicsBannerDisplay
      {...customProps}
      age={age || noDataProvided}
      dateOfBirth={dateOfBirth || noDataProvided}
      gender={gender || noDataProvided}
      personName={personName || noDataProvided}
      dateOfBirthLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirth' })}
      dateOfBirthFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirthFullText' })}
      deceasedDateLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.deceased' })}
      gestationalAgeLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAge' })}
      gestationalAgeFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAgeFullText' })}
      postMenstrualAgeLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAge' })}
      postMenstrualAgeFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAgeFullText' })}
    />
  );
};

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

export default injectIntl(DemographicsBanner);
