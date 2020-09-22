/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
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
    administrativeSex,
    administrativeSexFullText,
    age,
    applicationContent,
    dateOfBirth,
    dateOfBirthFullText,
    dateOfBirthLabel,
    deceasedDate,
    deceasedDateLabel,
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
    sexMismatchFullText,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const infoTile = useRef(null);

  const handleInfoTileMouseDown = () => {
    infoTile.current.setAttribute('data-focus-styles-enabled', 'false');
  };

  const handleInfoTileBlur = () => {
    infoTile.current.setAttribute('data-focus-styles-enabled', 'true');
  };

  const mainClasses = classNames(
    cx(
      'demographics-banner',
      { deceased: deceasedDate && deceasedDate.value },
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
          data-focus-styles-enabled
          role="button"
          aria-label={personName || intl.formatMessage({ id: 'Terra.demographicsBanner.info' })}
          className={cx('info-tile-container')}
          tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
          ref={infoTile}
          onMouseDown={handleInfoTileMouseDown}
          onBlur={handleInfoTileBlur}
        >
          {DemographicsBannerUtils.infoTile(props)}
        </div>
      )}
    </section>
  );
};

export default injectIntl(SmallDemographicsBannerDisplay);
