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
      <div className={cx('profile-photo')}>
        {props.photo}
      </div>
      <div className={cx('content')}>
        <div className={cx('row')}>
          <h1 className={cx('person-name')}>
            { personName }
            { preferredFirstName && <span className={cx('preferred-first-name')}>
              { preferredFirstName }
            </span> }
          </h1>
          <div className={cx('application-content')}>
            {applicationContent}
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('person-details')}>
            {personDetails(props)}
          </div>
          <div className={cx('identifiers')}>
            {applicationIdentifiers(props)}
          </div>
        </div>
      </div>
    </section>
  );
};
