/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './DemographicsBanner.module.scss';
import DemographicsBannerUtils from './_sharedObjects';

const cx = classNamesBind.bind(styles);

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
    identifiersLongForm,
    personName,
    personNameHeadingLevel,
    photo,
    postMenstrualAge,
    postMenstrualAgeFullText,
    postMenstrualAgeLabel,
    preferredFirstName,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const PersonNameElement = `h${personNameHeadingLevel || 2}`;

  const mainClasses = classNames(
    cx(
      'demographics-banner',
      'large-demographics-banner',
      { deceased: deceasedDate },
      theme.className,
    ),
    customProps.className,
  );

  delete customProps.className;

  return (
    <section className={mainClasses} {...customProps}>
      {props.photo && (
        <div className={cx('profile-photo')}>
          {props.photo}
        </div>
      )}
      <div className={cx('content')}>
        <PersonNameElement className={cx('person-name')}>
          { personName }
          { preferredFirstName && <span className={cx('preferred-first-name')}>{ `(${preferredFirstName})` }</span> }
        </PersonNameElement>
        <dl className={cx('identifier-row')}>
          <div className={cx('person-details')}>
            {DemographicsBannerUtils.personDetails(props)}
          </div>
          <div className={cx('identifiers')}>
            {DemographicsBannerUtils.applicationIdentifiers(props)}
          </div>
        </dl>
        <div className={cx('application-content')}>
          {applicationContent}
        </div>
      </div>
    </section>
  );
};
