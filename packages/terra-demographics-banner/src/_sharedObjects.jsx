import classNames from 'classnames/bind';
import React from 'react';
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
    return identifiers.map((identifier) => (
      <DemographicsBannerValue
        key={`identifier-${identifier.label}`}
        abbrTitle={identifier.ariaLabel}
        valueAriaHidden={!!identifier.ariaLabel}
        label={identifier.label}
        value={identifier.value}
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

const DemographicsBannerUtils = {
  personDetails,
  applicationIdentifiers,
  infoTile,
};

export default DemographicsBannerUtils;
