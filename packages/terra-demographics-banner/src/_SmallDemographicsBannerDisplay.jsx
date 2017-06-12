/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';

import { personDetails, applicationIdentifiers } from './_sharedObjects';

export default (props) => {
  const {
    age,
    applicationContent,
    dateOfBirth,
    dateOfBirthLabel,
    deceasedDate,
    deceasedDateLabel,
    gender,
    gestationalAge,
    gestationalAgeLabel,
    identifiers,
    personName,
    photo,
    postMenstrualAge,
    postMenstrualAgeLabel,
    preferredFirstName,
    ...customProps
  } = props;

  const mainClasses = classNames(
    'terra-DemographicsBanner',
    { 'terra-DemographicsBanner--deceased': deceasedDate },
    customProps.className,
  );

  delete customProps.className;

  return (
    <section className={mainClasses} {...customProps}>
      <h1 className="terra-DemographicsBanner-person-name">
        <span>
          { personName }
          { preferredFirstName && <span className="terra-DemographicsBanner-preferred-first-name">
            { preferredFirstName }
          </span> }
        </span>
      </h1>
      <div className="terra-DemographicsBanner-person-details">
        {personDetails(props)}
        {applicationIdentifiers(props)}
      </div>
      <div className="terra-DemographicsBanner-application-content">
        {applicationContent}
      </div>
    </section>
  );
};
