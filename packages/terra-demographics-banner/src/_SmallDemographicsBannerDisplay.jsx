/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconFlag from 'terra-icon/lib/icon/IconFlag';
import styles from './DemographicsBanner.module.scss';
import DemographicsBannerUtils from './_sharedObjects';

const cx = classNamesBind.bind(styles);

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
