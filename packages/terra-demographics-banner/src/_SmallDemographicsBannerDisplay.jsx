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
      { deceased: deceasedDate },
      { 'is-selectable': isSelectable },
      theme.className,
    ),
    customProps.className,
  );

  delete customProps.className;
  const infoText = intl.formatMessage({ id: 'Terra.demographicsBanner.info' });

  return (
    <section
      {...customProps}
      className={mainClasses}
      tabIndex={isSelectable ? '0' : undefined} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
    >
      <div className={cx('small-content')}>
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
      </div>
      {isSelectable && (
        <div className={cx('info-tile-container')}>
          <div className={cx('info-tile')}>
            <span className={cx('info-text')}>{infoText}</span>
            <span className={cx('info-icon')} />
          </div>
        </div>
      )}
    </section>
  );
};

export default injectIntl(SmallDemographicsBannerDisplay);
