import React, { PropTypes } from 'react';
import { FormattedHTMLMessage, injectIntl, intlShape } from 'react-intl';
import shortid from 'shortid';
import classNames from 'classnames';

const propTypes = {
  /**
   * Additional Details to display in the banner.
   */
  additionalDetails: PropTypes.node,
  /**
   * Age of the person.
   */
  age: PropTypes.string,
  /**
   * Additional rows of key value pairs to add to the demographics banner. The rows will be added after the person rows.
   */
  applicationRows: PropTypes.array,
  /**
   * The persons date of birth
   */
  dateOfBirth: PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: PropTypes.string,
  /**
   * Gender of the Person
   */
  gender: PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information
   */
  identifiers: PropTypes.object,
  /**
   * intl object
   */
  intl: intlShape,
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
   * The persons preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
};

const defaultProps = {
  additionalDetails: null,
  age: null,
  applicationRows: [],
  dateOfBirth: null,
  deceasedDate: null,
  gender: null,
  gestationalAge: null,
  identifiers: {},
  intl: null,
  personName: null,
  photo: null,
  postMenstrualAge: null,
  preferredFirstName: null,
};

class DemographicsBannerDisplay extends React.Component {
  additionalApplicationRows() {
    return this.props.applicationRows.map(row => (
      <div key={shortid.generate()} className="terra-DemographicsBanner--row">
        {Object.keys(row).map(key => (
          <span key={`additional-row-${key}-${row[key]}`}>{key}: <b>{row[key]}</b></span>
        ))}
      </div>
    ));
  }

  personDetails() {
    const noDataMessage = this.props.intl.formatMessage({ id: 'Terra.demographicsBanner.noDataProvided' });
    const dateOfBirth = this.props.dateOfBirth || noDataMessage;

    const elements = [
      <span key="age"><b>{ this.props.age || noDataMessage }</b></span>,
      <span key="gender"><b>{ this.props.gender || noDataMessage }</b></span>,
      <span key="dob">
        <FormattedHTMLMessage id="Terra.demographicsBanner.dateOfBirth" values={{ dob: dateOfBirth }} />
      </span>,
    ];

    if (this.props.gestationalAge) {
      elements.push(<span key="ga"><FormattedHTMLMessage id="Terra.demographicsBanner.gestationalAge" values={{ gestationalAge: this.props.gestationalAge }} /></span>);
    }

    if (this.props.postMenstrualAge) {
      elements.push(<span key="pma"><FormattedHTMLMessage id="Terra.demographicsBanner.postMenstrualAge" values={{ postMenstrualAge: this.props.postMenstrualAge }} /></span>);
    }

    if (this.props.deceasedDate) {
      elements.push(<span key="deceased"><FormattedHTMLMessage id="Terra.demographicsBanner.deceased" values={{ deceasedDate: this.props.deceasedDate }} /></span>);
    }

    return elements;
  }

  applicationIdentifiers() {
    const identifiers = this.props.identifiers;

    if (identifiers) {
      return Object.keys(identifiers).map(key =>
        <span key={`identifier-${key}`}>{key}: <b>{identifiers[key]}</b></span>,
      );
    }

    return null;
  }

  render() {
    const {
      age,
      additionalDetails,
      applicationRows,
      dateOfBirth,
      deceasedDate,
      gender,
      gestationalAge,
      identifiers,
      intl,
      personName,
      photo,
      postMenstrualAge,
      preferredFirstName,
      ...customProps
    } = this.props;

    const mainClasses = classNames(
      'terra-DemographicsBanner',
      { 'terra-DemographicsBanner--deceased': deceasedDate },
      customProps.className,
    );

    delete customProps.className;

    return (
      <section className={mainClasses} {...customProps}>
        <div>
          {this.props.photo}
        </div>
        <div className="terra-DemographicsBanner--content">
          <div className="terra-DemographicsBanner--row">
            <h1 className="terra-DemographicsBanner--person-name">
              { personName || <FormattedHTMLMessage id="Terra.demographicsBanner.noDataProvided" /> }
              { preferredFirstName && <span className="terra-DemographicsBanner--preferred-first-name">
                { preferredFirstName }
              </span> }
            </h1>
            <div className="terra-DemographicsBanner--application-content">
              {additionalDetails}
            </div>
          </div>
          <div className="terra-DemographicsBanner--row">
            <div className="terra-DemographicsBanner--person-details">
              {this.personDetails()}
            </div>
            <div className="terra-DemographicsBanner--identifiers">
              {this.applicationIdentifiers()}
            </div>
          </div>
          {this.additionalApplicationRows()}
        </div>
      </section>
    );
  }
}

DemographicsBannerDisplay.propTypes = propTypes;
DemographicsBannerDisplay.defaultProps = defaultProps;

export default injectIntl(DemographicsBannerDisplay);
