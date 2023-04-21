import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import DemographicsBannerDisplay from './DemographicsBannerDisplay';

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
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: PropTypes.string,
  /**
   * Gender of the Person
   */
  gender: PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information.
   * - ex. { MRN: 'ABC123', EI: '123ABC' }
   * - Note: in this example, EI may need additional context which can be added in identifierTitles prop.
   */
  // eslint-disable-next-line react/forbid-prop-types
  identifiers: PropTypes.object,
  /**
   * Additional key value full titles for identifiers of a person's demographic information.
   * Should be added for identifiers that may require more
   * descriptive name for assistive technologies (typically abbreviations).
   * - ex. { EI: 'Example Identifier' }
   */
  identifierTitles: PropTypes.objectOf(PropTypes.string),
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
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
   * The persons preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
};

const defaultProps = {
  applicationContent: null,
  age: undefined,
  dateOfBirth: undefined,
  deceasedDate: null,
  gender: undefined,
  gestationalAge: null,
  identifiers: {},
  personName: undefined,
  personNameLevel: 2,
  photo: null,
  postMenstrualAge: null,
  preferredFirstName: null,
};

const DemographicsBanner = ({
  age,
  dateOfBirth,
  gender,
  identifiers,
  identifierTitles,
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
      identifiers={identifiers}
      identifierTitles={identifierTitles}
    />
  );
};

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

export default injectIntl(DemographicsBanner);
