/* eslint-disable global-require, import/no-dynamic-require, react/no-unused-prop-types, react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ResponsiveElement from 'terra-responsive-element';

import 'terra-base/lib/baseStyles';
import './DemographicsBanner.scss';

const propTypes = {
  /**
   * Application content to display in the banner.
   */
  applicationContent: PropTypes.node,
  /**
   * Age of the person.
   */
  age: PropTypes.string,
  /**
   * The persons date of birth
   */
  dateOfBirth: PropTypes.string,
  /**
   * Label to display for the date of birth
   */
  dateOfBirthLabel: PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: PropTypes.string,
  /**
   * Label to display for the deceased date
   */
  deceasedDateLabel: PropTypes.string,
  /**
   * Gender of the Person
   */
  gender: PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * Label to display for the GestationalAge
   */
  gestationalAgeLabel: PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information
   */
  identifiers: PropTypes.object,
  /**
   * Full Name of the person
   */
  personName: PropTypes.string,
  /**
   * Photo to display in the banner
   */
  photo: PropTypes.node,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: PropTypes.string,
  /**
   * Label to display for the PostMenstrualAgeLabel
   */
  postMenstrualAgeLabel: PropTypes.string,
  /**
   * The persons preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
};

const defaultProps = {
  applicationContent: null,
  age: '--',
  dateOfBirth: '--',
  dateOfBirthLabel: 'DOB',
  deceasedDate: null,
  deceasedDateLabel: 'Deceased',
  gender: '--',
  gestationalAge: null,
  gestationalAgeLabel: 'GA',
  identifiers: {},
  personName: '--',
  photo: null,
  postMenstrualAge: null,
  postMenstrualAgeLabel: 'PMA',
  preferredFirstName: null,
};

// eslint-disable-next-line react/prop-types
const DemographicsBannerValue = ({ label, value }) => (
  <span className="terra-DemographicsBanner-value">
    { label && <span className="terra-DemographicsBanner-value-label">{`${label}:`}</span> }
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

const SmallDemographicsBannerDisplay = (props) => {
  const {
    age,
    applicationContent,
    dateOfBirth,
    dateOfBirthLabel,
    deceasedDate,
    deceasedDateLabel,
    gender,
    gestationalAge,
    gestationalAgeLabel,
    identifiers,
    personName,
    photo,
    postMenstrualAge,
    postMenstrualAgeLabel,
    preferredFirstName,
    ...customProps
  } = props;

  const mainClasses = classNames(
    'terra-DemographicsBanner',
    { 'terra-DemographicsBanner--deceased': deceasedDate },
    customProps.className,
  );

  delete customProps.className;

  return (
    <section className={mainClasses} {...customProps}>
      <h1 className="terra-DemographicsBanner-person-name">
        <span>
          { personName }
          { preferredFirstName && <span className="terra-DemographicsBanner-preferred-first-name">
            { preferredFirstName }
          </span> }
        </span>
      </h1>
      <div className="terra-DemographicsBanner-person-details">
        {personDetails(props)}
        {applicationIdentifiers(props)}
      </div>
      <div className="terra-DemographicsBanner-application-content">
        {applicationContent}
      </div>
    </section>
  );
};

const LargeDemographicsBannerDisplay = (props) => {
  const {
    age,
    applicationContent,
    dateOfBirth,
    dateOfBirthLabel,
    deceasedDate,
    deceasedDateLabel,
    gender,
    gestationalAge,
    gestationalAgeLabel,
    identifiers,
    personName,
    photo,
    postMenstrualAge,
    postMenstrualAgeLabel,
    preferredFirstName,
    ...customProps
  } = props;

  const mainClasses = classNames(
    'terra-DemographicsBanner',
    { 'terra-DemographicsBanner--deceased': deceasedDate },
    customProps.className,
  );

  delete customProps.className;

  return (
    <section className={mainClasses} {...customProps}>
      <div className="terra-DemographicsBanner-profile-photo">
        {props.photo}
      </div>
      <div className="terra-DemographicsBanner-content">
        <div className="terra-DemographicsBanner-row">
          <h1 className="terra-DemographicsBanner-person-name">
            { personName }
            { preferredFirstName && <span className="terra-DemographicsBanner-preferred-first-name">
              { preferredFirstName }
            </span> }
          </h1>
          <div className="terra-DemographicsBanner-application-content">
            {applicationContent}
          </div>
        </div>
        <div className="terra-DemographicsBanner-row">
          <div className="terra-DemographicsBanner-person-details">
            {personDetails(props)}
          </div>
          <div className="terra-DemographicsBanner-identifiers">
            {applicationIdentifiers(props)}
          </div>
        </div>
      </div>
    </section>
  );
};

const DemographicsBannerDisplay = props => (
  <ResponsiveElement
    responsiveTo="window"
    defaultElement={<SmallDemographicsBannerDisplay {...props} />}
    small={<LargeDemographicsBannerDisplay {...props} />}
  />
);

SmallDemographicsBannerDisplay.propTypes = propTypes;
LargeDemographicsBannerDisplay.propTypes = propTypes;

DemographicsBannerDisplay.propTypes = propTypes;
DemographicsBannerDisplay.defaultProps = defaultProps;

export default DemographicsBannerDisplay;
