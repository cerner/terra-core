/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import React from 'react';
import IconFlag from 'terra-icon/lib/icon/IconFlag';
import styles from './DemographicsBanner.module.scss';
import DemographicsBannerUtils from './_sharedObjects';

const cx = classNames.bind(styles);

export default (props) => {
  const {
    age,
    applicationContent,
    avatar,
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
    isConfidential,
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
    customProps.className,
    { deceased: deceasedDate },
  ]);

  delete customProps.className;

  return (
    <section className={mainClasses} {...customProps}>
      <div className={cx('row')}>
        { isConfidential ? <span className={cx('confidential-icon')}><IconFlag /></span> : null }
        <h1 className={cx('person-name')}>
          <span>
            { personName }
            { preferredFirstName && <span className={cx('preferred-first-name')}>{ preferredFirstName }</span> }
          </span>
        </h1>
      </div>
      <div className={cx('person-details')}>
        {DemographicsBannerUtils.personDetails(props)}
        {DemographicsBannerUtils.applicationIdentifiers(props)}
      </div>
      <div className={cx('application-content')}>
        {applicationContent}
      </div>
    </section>
  );
};
