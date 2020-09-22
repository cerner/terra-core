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

const SexMismatchIcon = ({
  ariaLabel,
}) => (
  <span className={cx('sex-mismatch')}>
    <VisuallyHiddenText text={ariaLabel} />
    <span className={cx('sex-mismatch-icon')} aria-hidden />
  </span>
);

const personDetails = (props) => {
  const elements = [];

  if (props.age && props.age.value) {
    elements.push(<DemographicsBannerValue
      key="age"
      abbrTitle={props.age.ariaLabel ? props.age.ariaLabel : undefined}
      value={props.age.value}
      valueAriaHidden={!!props.age.ariaLabel}
    />);
  }

  let adminSexAriaLabel = props.administrativeSexFullText;
  let sexValue = '';
  let sexValueAriaHidden = false;
  if (props.administrativeSex) {
    if (props.administrativeSex.value) {
      sexValue = props.administrativeSex.value;
    }

    if (props.administrativeSex.ariaLabel) {
      sexValueAriaHidden = true;
      adminSexAriaLabel = adminSexAriaLabel.concat(' ', props.administrativeSex.ariaLabel);
    }
  }

  elements.push(<DemographicsBannerValue
    key="adminSex"
    abbrTitle={adminSexAriaLabel}
    value={sexValue}
    valueAriaHidden={sexValueAriaHidden}
  />);

  if (props.administrativeSex && props.administrativeSex.isBirthSexMismatch) {
    elements.push(<SexMismatchIcon
      key="sexMismatchIcon"
      ariaLabel={props.sexMismatchFullText}
    />);
  }

  if (props.dateOfBirth && props.dateOfBirth.value) {
    let dobAriaLabel = props.dateOfBirthFullText;
    if (props.dateOfBirth.ariaLabel) {
      dobAriaLabel = dobAriaLabel.concat(' ', props.dateOfBirth.ariaLabel);
    }

    elements.push(<DemographicsBannerValue
      key="dob"
      abbrTitle={dobAriaLabel}
      label={props.dateOfBirthLabel}
      value={props.dateOfBirth.value}
      valueAriaHidden={!!props.dateOfBirth.ariaLabel}
    />);
  }

  if (props.gestationalAge && props.gestationalAge.value) {
    let gaAriaLabel = props.gestationalAgeFullText;
    if (props.gestationalAge.ariaLabel) {
      gaAriaLabel = gaAriaLabel.concat(' ', props.gestationalAge.ariaLabel);
    }

    elements.push(<DemographicsBannerValue
      key="ga"
      abbrTitle={gaAriaLabel}
      label={props.gestationalAgeLabel}
      value={props.gestationalAge.value}
      valueAriaHidden={!!props.gestationalAge.ariaLabel}
    />);
  }

  if (props.postMenstrualAge && props.postMenstrualAge.value) {
    let pmaAriaLabel = props.postMenstrualAgeFullText;
    if (props.postMenstrualAge.ariaLabel) {
      pmaAriaLabel = pmaAriaLabel.concat(' ', props.postMenstrualAge.ariaLabel);
    }

    elements.push(<DemographicsBannerValue
      key="pma"
      abbrTitle={pmaAriaLabel}
      label={props.postMenstrualAgeLabel}
      value={props.postMenstrualAge.value}
      valueAriaHidden={!!props.postMenstrualAge.ariaLabel}
    />);
  }

  if (props.deceasedDate && props.deceasedDate.value) {
    elements.push(<DemographicsBannerValue
      key="deceased"
      abbrTitle={props.deceasedDate.ariaLabel ? props.deceasedDateLabel.concat(' ', props.deceasedDate.ariaLabel) : undefined}
      label={props.deceasedDateLabel}
      value={props.deceasedDate.value}
      valueAriaHidden={!!props.deceasedDate.ariaLabel}
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
