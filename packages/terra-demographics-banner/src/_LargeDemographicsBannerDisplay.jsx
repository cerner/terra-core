/* eslint-disable react/prop-types */
import React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Avatar from 'terra-avatar';
import IconFlag from 'terra-icon/lib/icon/IconFlag';
import styles from './DemographicsBanner.module.scss';
import DemographicsBannerUtils from './_sharedObjects';

const cx = classNamesBind.bind(styles);

const LargeDemographicsBannerDisplay = (props) => {
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
      'large-demographics-banner',
      { deceased: deceasedDate },
      { 'is-selectable': isSelectable },
      { 'is-active': isActive },
      theme.className,
    ),
    customProps.className,
  );

  delete customProps.className;

  let profilePhoto;

  if (avatar && avatar.alt && avatar.initials) {
    profilePhoto = (
      <Avatar
        className={cx('profile-avatar')}
        alt={avatar.alt}
        color={avatar.color}
        hashValue={avatar.hashValue}
        image={avatar.image}
        initials={avatar.initials}
        isAriaHidden={avatar.isAriaHidden}
        isDeceased={!!deceasedDate}
      />
    );
  } else if (photo) {
    /*
     * This condition is added to keep the profile photo changes passive to Demographics banner.
     * Should be removed with next MVB.
     * Reference: https://github.com/cerner/terra-core/issues/3002
     */
    profilePhoto = (
      <div className={cx('profile-photo')}>
        {photo}
      </div>
    );
  }

  return (
    <section
      {...customProps}
      className={mainClasses}
      tabIndex={-1}
    >
      {profilePhoto}
      <div className={cx('content')}>
        <div className={cx('column')}>
          <h1 className={cx('person-name')}>
            { isConfidential ? <span className={cx('confidential-icon')}><IconFlag /></span> : null }
            { personName }
            { preferredFirstName && <span className={cx('preferred-first-name')}>{ preferredFirstName }</span> }
          </h1>
          <div className={cx('person-details')}>
            {DemographicsBannerUtils.personDetails(props)}
          </div>
        </div>
        <div className={cx('column')}>
          <div className={cx('application-content')}>
            {applicationContent}
          </div>
          <div className={cx('identifiers')}>
            {DemographicsBannerUtils.applicationIdentifiers(props)}
          </div>
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

export default injectIntl(LargeDemographicsBannerDisplay);
