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
      <div className="terra-DemographicsBanner-profile-photo">
        {props.photo}
      </div>
      <div className="terra-DemographicsBanner-content">
        <div className="terra-DemographicsBanner-row">
          <h1 className="terra-DemographicsBanner-person-name">
            { personName }
            { preferredFirstName && <span className="terra-DemographicsBanner-preferred-first-name">
              { preferredFirstName }
            </span> }
          </h1>
          <div className="terra-DemographicsBanner-application-content">
            {applicationContent}
          </div>
        </div>
        <div className="terra-DemographicsBanner-row">
          <div className="terra-DemographicsBanner-person-details">
            {personDetails(props)}
          </div>
          <div className="terra-DemographicsBanner-identifiers">
            {applicationIdentifiers(props)}
          </div>
        </div>
      </div>
    </section>
  );
};
