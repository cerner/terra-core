/* eslint-disable global-require, import/no-dynamic-require, react/no-unused-prop-types, react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import DemographicsBannerDisplay from './DemographicsBannerDisplay';

import 'terra-base/lib/baseStyles';
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
   * Additional key value identifiers of a person's demographic information
   */
  identifiers: PropTypes.object,
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
  photo: null,
  postMenstrualAge: null,
  preferredFirstName: null,
};

const DemographicsBanner = (
  {
    age,
    dateOfBirth,
    gender,
    personName,
    intl,
    ...customProps
  },
) => {
  const noDataProvided = intl.formatMessage({ id: 'Terra.demographicsBanner.noDataProvided' });

  return (
    <DemographicsBannerDisplay
      {...customProps}
      age={ (age !== undefined) ? age : noDataProvided }
      dateOfBirth={ (dateOfBirth !== undefined) ? dateOfBirth : noDataProvided }
      gender={ (gender !== undefined) ? gender : noDataProvided }
      personName={ (personName !== undefined) ? personName : noDataProvided }
      dateOfBirthLabel={ intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirth' }) }
      deceasedDateLabel={ intl.formatMessage({ id: 'Terra.demographicsBanner.deceased' }) }
      gestationalAgeLabel={ intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAge' }) }
      postMenstrualAgeLabel={ intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAge' }) }
    />
  );
}

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

export default injectIntl(DemographicsBanner);
