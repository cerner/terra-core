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
    ageTitle,
    genderTitle,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const PersonNameElement = `h${personNameHeadingLevel || 2}`;

  const mainClasses = classNames(
    cx(
      'demographics-banner',
      { deceased: deceasedDate },
      theme.className,
    ),
    customProps.className,
  );

  delete customProps.className;

  return (
    <section className={mainClasses} {...customProps}>
      <PersonNameElement className={cx('person-name')}>
        <span>
          { personName }
          { preferredFirstName && <span className={cx('preferred-first-name')}>{ `(${preferredFirstName})` }</span> }
        </span>
      </PersonNameElement>
      <dl className={cx('person-details')}>
        {DemographicsBannerUtils.personDetails(props)}
        {DemographicsBannerUtils.applicationIdentifiers(props)}
      </dl>
      <div className={cx('application-content')}>
        {applicationContent}
      </div>
    </section>
  );
};
