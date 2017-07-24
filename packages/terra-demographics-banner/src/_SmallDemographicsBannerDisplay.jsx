/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import React from 'react';
import styles from './DemographicsBanner.scss';

import { personDetails, applicationIdentifiers } from './_sharedObjects';

const cx = classNames.bind(styles);

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

  const mainClasses = cx([
    'demographics-banner',
    { deceased: deceasedDate },
    customProps.className,
  ]);

  delete customProps.className;

  return (
    <section className={mainClasses} {...customProps}>
      <h1 className={cx('person-name')}>
        <span>
          { personName }
          { preferredFirstName && <span className={cx('preferred-first-name')}>
            { preferredFirstName }
          </span> }
        </span>
      </h1>
      <div className={cx('person-details')}>
        {personDetails(props)}
        {applicationIdentifiers(props)}
      </div>
      <div className={cx('application-content')}>
        {applicationContent}
      </div>
    </section>
  );
};
