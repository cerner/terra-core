/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import React from 'react';
import Avatar from 'terra-avatar';
import styles from './DemographicsBanner.module.scss';
import DemographicsBannerUtils from './_sharedObjects';

const cx = classNames.bind(styles);

export default (props) => {
  const {
    age,
    alt,
    applicationContent,
    color,
    dateOfBirth,
    dateOfBirthFullText,
    dateOfBirthLabel,
    deceasedDate,
    deceasedDateLabel,
    gender,
    gestationalAge,
    gestationalAgeFullText,
    gestationalAgeLabel,
    hashValue,
    identifiers,
    initials,
    isAriaHidden,
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

  if (alt && initials) {
    const avatarImage = photo && photo.type === String ? photo : undefined;
    profilePhoto = (
      <Avatar
        className={cx('profile-photo')}
        alt={alt}
        color={color}
        hashValue={hashValue}
        image={avatarImage}
        initials={initials}
        isAriaHidden={isAriaHidden}
        isDeceased={!!deceasedDate}
      />
    );
  } else if (photo) {
    /*
     * This condition is added to keep the profile photo changes passive to Demographics banner.
     * Should be removed with next MVB.
     */
    profilePhoto = (
      <div className={cx('profile-photo')}>
        {photo}
      </div>
    );
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
