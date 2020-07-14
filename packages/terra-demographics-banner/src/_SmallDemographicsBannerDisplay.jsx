/* eslint-disable react/prop-types */
import React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconFlag from 'terra-icon/lib/icon/IconFlag';
import styles from './DemographicsBanner.module.scss';
import DemographicsBannerUtils from './_sharedObjects';

const cx = classNamesBind.bind(styles);

const SmallDemographicsBannerDisplay = (props) => {
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
    genderAria,
    gestationalAge,
    gestationalAgeFullText,
    gestationalAgeLabel,
    identifiers,
    intl,
    isActive,
    isConfidential,
    isSelectable,
    personName,
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
      { 'is-selectable': isSelectable },
      { 'is-active': isActive },
      theme.className,
    ),
    customProps.className,
  );

  delete customProps.className;

  return (
    <section
      {...customProps}
      className={mainClasses}
      tabIndex={-1}
    >
      <div className={cx('small-content')}>
        <div className={cx('column')}>
          <h1 className={cx('person-name')}>
            { isConfidential ? <span className={cx('confidential-icon')}><IconFlag /></span> : null }
            <span>
              { personName }
              { preferredFirstName && <span className={cx('preferred-first-name')}>{ preferredFirstName }</span> }
            </span>
          </h1>
        </div>
        <div className={cx('person-details')}>
          {DemographicsBannerUtils.personDetails(props)}
        </div>
        <div className={cx('identifiers')}>
          {DemographicsBannerUtils.applicationIdentifiers(props)}
        </div>
        <div className={cx('application-content')}>
          {applicationContent}
        </div>
      </div>
      {isSelectable && (
        <div
          className={cx('info-tile-container')}
          tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
        >
          {DemographicsBannerUtils.infoTile(props)}
        </div>
      )}
    </section>
  );
};

export default injectIntl(SmallDemographicsBannerDisplay);
