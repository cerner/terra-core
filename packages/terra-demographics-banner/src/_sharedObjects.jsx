import classNames from 'classnames/bind';
import React from 'react';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './DemographicsBanner.module.scss';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
const DemographicsBannerValue = ({ label, value, abbrTitle }) => {
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
    <div className={cx('value')} role="presentation">
      <dt className={cx('value-term')}>
        {abbrTitle && (<VisuallyHiddenText text={abbrTitle} />)}
        {valueLabelContent}
      </dt>
      <dd className={cx('value-text')}>{value}</dd>
    </div>
  );
};

const personDetails = (props) => {
  const elements = [
    <DemographicsBannerValue
      key="age"
      abbrTitle={props.ageTitle}
      value={props.age}
    />,
    <DemographicsBannerValue
      key="gender"
      abbrTitle={props.genderTitle}
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
  const { identifiers, identifiersLongForm } = props;

  if (identifiers) {
    return Object.keys(identifiers).map(key => (
      <DemographicsBannerValue
        abbrTitle={identifiersLongForm && identifiersLongForm[key] ? identifiersLongForm[key] : undefined}
        key={`identifier-${key}`}
        label={key}
        value={identifiers[key]}
      />
    ));
  }

  return null;
};

const DemographicsBannerUtils = {
  personDetails,
  applicationIdentifiers,
};

export default DemographicsBannerUtils;
