/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import React from 'react';
import Avatar from 'terra-avatar';
import Image from 'terra-image';
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

  let mainClasses = cx(['demographics-banner', 'large-demographics-banner', { deceased: deceasedDate }]);
  if (customProps.className) {
    mainClasses = `${mainClasses} ${customProps.className}`;
  }

  delete customProps.className;

  let profilePhoto;

  /*
   * This condition is added keep the profile photo changes passive to Demographics banner.
   * Should be removed with next MVB.
   */
  if (photo && photo.type === Image) {
    profilePhoto = (
      <div className={cx('profile-photo')}>
        {photo}
      </div>
    );
  /*
   * else if check is added to ensure that default fallback avatar is not displayed when no value is provided for profile photo.
   * So that it will passive change to existing demoraphics banner. Should be removed with next MVB.
   */
  } else if (photo) {
    profilePhoto = (<Avatar className={cx('profile-photo')} image={photo} alt={personName} initials={personName} />);
  }

  return (
    <section className={mainClasses} {...customProps}>
      {profilePhoto}
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
