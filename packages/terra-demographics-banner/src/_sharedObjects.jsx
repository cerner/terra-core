import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './DemographicsBanner.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable react/prop-types */
const DemographicsBannerValue = ({
  label, value, valueAriaHidden = false, abbrTitle,
}) => {
  let valueLabelContent;

  if (label && abbrTitle) {
    valueLabelContent = (
      <span className={cx('value-label')}>
        <abbr className={cx('abbreviation')} title={abbrTitle} aria-hidden="true">
          {`${label}:`}
        </abbr>
      </span>
    );
  } else if (label) {
    valueLabelContent = (
      <span className={cx('value-label')}>
        {`${label}:`}
      </span>
    );
  }

  return (
    <span className={cx('value')}>
      {abbrTitle && (<VisuallyHiddenText text={abbrTitle} />)}
      {valueLabelContent}
      <span className={cx('value-text')} aria-hidden={valueAriaHidden}>{value}</span>
    </span>
  );
};

const personDetails = (props) => {
  const elements = [
    <DemographicsBannerValue key="age" value={props.age} />,
    <DemographicsBannerValue
      key="gender"
      abbrTitle={props.genderAria}
      valueAriaHidden={!!props.genderAria}
      value={props.gender}
    />,
    <DemographicsBannerValue
      key="dob"
      abbrTitle={props.dateOfBirthFullText}
      label={props.dateOfBirthLabel}
      value={props.dateOfBirth}
    />,
  ];

  if (props.gestationalAge) {
    elements.push(<DemographicsBannerValue
      key="ga"
      abbrTitle={props.gestationalAgeFullText}
      label={props.gestationalAgeLabel}
      value={props.gestationalAge}
    />);
  }

  if (props.postMenstrualAge) {
    elements.push(<DemographicsBannerValue
      key="pma"
      abbrTitle={props.postMenstrualAgeFullText}
      label={props.postMenstrualAgeLabel}
      value={props.postMenstrualAge}
    />);
  }

  if (props.deceasedDate) {
    elements.push(<DemographicsBannerValue
      key="deceased"
      label={props.deceasedDateLabel}
      value={props.deceasedDate}
    />);
  }

  return elements;
};

const applicationIdentifiers = (props) => {
  const { identifiers } = props;

  if (identifiers) {
    return Object.keys(identifiers).map(key => (
      <DemographicsBannerValue
        key={`identifier-${key}`}
        label={key}
        value={identifiers[key]}
      />
    ));
  }

  return null;
};

const infoTile = (props) => {
  const infoText = props.intl.formatMessage({ id: 'Terra.demographicsBanner.info' });

  return (
    <div className={cx('info-tile')}>
      <VisuallyHiddenText text={props.personName} />
      <span className={cx('info-text')} aria-hidden="true">{infoText}</span>
      <span className={cx('info-icon')} />
    </div>
  );
};

const avatarShape = {
  /**
   * Specifies the alternative text for the photo.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Sets the background color of the photo. Defaults to `auto`. Accepted color variants are theme specific.
   * One of: `'auto'`, `'neutral'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'`, `'ten'`.
   */
  color: PropTypes.oneOf(['auto', 'neutral', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']),
  /**
   * Value used for the hash function when color is set to `auto`. If not provided, hash function utilizes alt.
   */
  hashValue: PropTypes.string,
  /**
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * One or two letters to display the initials in the photo.
   */
  initials: PropTypes.string.isRequired,
  /**
   * Whether to hide photo from the accessibility tree.
   */
  isAriaHidden: PropTypes.bool,
};

const DemographicsBannerUtils = {
  personDetails,
  applicationIdentifiers,
  avatarShape,
  infoTile,
};

export default DemographicsBannerUtils;
