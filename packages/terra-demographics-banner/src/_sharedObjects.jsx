import classNames from 'classnames/bind';
import React from 'react';
import styles from './DemographicsBanner.scss';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
const DemographicsBannerValue = ({ label, value }) => (
  <span className={cx('value')}>
    { label && <span className={cx('value-label')}>{`${label}:`}</span> }
    <b>{value}</b>
  </span>
);

const personDetails = (props) => {
  const elements = [
    <DemographicsBannerValue key="age" value={props.age} />,
    <DemographicsBannerValue key="gender" value={props.gender} />,
    <DemographicsBannerValue
      key="dob"
      label={props.dateOfBirthLabel}
      value={props.dateOfBirth}
    />,
  ];

  if (props.gestationalAge) {
    elements.push(
      <DemographicsBannerValue
        key="ga"
        label={props.gestationalAgeLabel}
        value={props.gestationalAge}
      />,
    );
  }

  if (props.postMenstrualAge) {
    elements.push(
      <DemographicsBannerValue
        key="pma"
        label={props.postMenstrualAgeLabel}
        value={props.postMenstrualAge}
      />,
    );
  }

  if (props.deceasedDate) {
    elements.push(
      <DemographicsBannerValue
        key="deceased"
        label={props.deceasedDateLabel}
        value={props.deceasedDate}
      />,
    );
  }

  return elements;
};

const applicationIdentifiers = (props) => {
  const identifiers = props.identifiers;

  if (identifiers) {
    return Object.keys(identifiers).map(key =>
      <DemographicsBannerValue
        key={`identifier-${key}`}
        label={key}
        value={identifiers[key]}
      />,
    );
  }

  return null;
};

module.exports = {
  personDetails,
  applicationIdentifiers,
};
