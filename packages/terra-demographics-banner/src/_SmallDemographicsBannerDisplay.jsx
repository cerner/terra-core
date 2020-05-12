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
    personName,
    photo,
    postMenstrualAge,
    postMenstrualAgeFullText,
    postMenstrualAgeLabel,
    preferredFirstName,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);

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
      <h1 className={cx('person-name')}>
        <span>
          { personName }
          { preferredFirstName && <span className={cx('preferred-first-name')}>{ preferredFirstName }</span> }
        </span>
      </h1>
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
