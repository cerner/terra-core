/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import React from 'react';
import styles from './DemographicsBanner.module.scss';
import DemographicsBannerUtils from './_sharedObjects';

const cx = classNames.bind(styles);

export default (props) => {
  const {
    age,
    applicationContent,
    dateOfBirth,
    dateOfBirthFullText,
    dateOfBirthLabel,
    deceasedDate,
    deceasedDateLabel,
    gender,
    gestationalAge,
    gestationalAgeFullText,
    gestationalAgeLabel,
    identifiers,
    personName,
    photo,
    postMenstrualAge,
    postMenstrualAgeFullText,
    postMenstrualAgeLabel,
    preferredFirstName,
    ...customProps
  } = props;

  const mainClasses = cx([
    'demographics-banner',
    'large-demographics-banner',
    { deceased: deceasedDate },
    customProps.className,
  ]);

  delete customProps.className;

  return (
    <section className={mainClasses} {...customProps}>
      {props.photo && (
        <div className={cx('profile-photo')}>
          {props.photo}
        </div>
      )}
      <div className={cx('content')}>
        <div className={cx('row')}>
          <h1 className={cx('person-name')}>
            { personName }
            { preferredFirstName && <span className={cx('preferred-first-name')}>{ preferredFirstName }</span> }
          </h1>
          <div className={cx('application-content')}>
            {applicationContent}
          </div>
        </div>
        <div className={cx('row')}>
          <div className={cx('person-details')}>
            {DemographicsBannerUtils.personDetails(props)}
          </div>
          <div className={cx('identifiers')}>
            {DemographicsBannerUtils.applicationIdentifiers(props)}
          </div>
        </div>
      </div>
    </section>
  );
};
