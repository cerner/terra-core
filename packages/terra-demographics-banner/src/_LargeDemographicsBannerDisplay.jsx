/* eslint-disable react/prop-types */
import React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Avatar from 'terra-avatar';
import IconFlag from 'terra-icon/lib/icon/IconFlag';
import IconInfo from 'terra-icon/lib/icon/IconInformation';
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
    gestationalAge,
    gestationalAgeFullText,
    gestationalAgeLabel,
    identifiers,
    intl,
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
      theme.className,
    ),
    customProps.className,
  );

  delete customProps.className;

  let profilePhoto;

  if (avatar && avatar.alt && avatar.initials) {
    profilePhoto = (
      <Avatar
        className={cx('profile-photo')}
        alt={avatar.alt}
        color={avatar.color}
        hashValue={avatar.hashValue}
        image={avatar.image}
        initials={avatar.initials}
        isAriaHidden={avatar.isAriaHidden}
        isDeceased={!!deceasedDate}
        size="1.15em"
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

  const infoText = intl.formatMessage({ id: 'Terra.demographicsBanner.info' });

  return (
    <section className={mainClasses} {...customProps}>
      {profilePhoto}
      <div className={cx('content')}>
        <div className={cx('row')}>
          { isConfidential ? <span className={cx('confidential-icon')}><IconFlag /></span> : null }
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
      {isSelectable && (
        <div className={cx('info-tile-container')}>
          <div className={cx('divider')} />
          <div className={cx('info-tile')}>
            <span className={cx('info-text')}>{infoText}</span>
            <span className={cx('info-icon')}>{<IconInfo />}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default injectIntl(LargeDemographicsBannerDisplay);
