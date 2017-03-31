import React, { PropTypes } from 'react';
import { FormattedHTMLMessage, injectIntl, intlShape } from 'react-intl';
import shortid from 'shortid';

const propTypes = {
  /**
   * Full Name of the person
   */
  personName: PropTypes.string,
  /**
   * The persons preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
  /**
   * Photo to display in the banner
   */
  photo: PropTypes.node,
  /**
   * Age of the person.
   */
  age: PropTypes.string,
  /**
   * Gender of the Person
   */
  gender: PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information
   */
  identifiers: PropTypes.object,
  /**
   * The persons date of birth
   */
  dateOfBirth: PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: PropTypes.string,
  /**
   * Additional Details to display in the banner.
   */
  additionalDetails: PropTypes.node,
  /**
   * Additional rows of key value pairs to add to the demographics banner. The rows will be added after the person rows.
   */
  applicationRows: PropTypes.array,
  /**
   * intl object
   */
  intl: intlShape,
};

const defaultProps = {
  personName: null,
  preferredFirstName: null,
  photo: null,
  age: null,
  sex: null,
  identifiers: {},
  dateOfBirth: null,
  gestationalAge: null,
  postMenstrualAge: null,
  deceasedDate: null,
  additionalDetails: null,
  applicationRows: [],
  intl: null,
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
    let mainClass = 'terra-DemographicsBanner';

    if (this.props.deceasedDate) {
      mainClass += '--deceased';
    }

    return (
      <section className={mainClass}>
        <div>
          {this.props.photo}
        </div>
        <div className="terra-DemographicsBanner--content">
          <div className="terra-DemographicsBanner--row">
            <h1>
              { this.props.personName || <FormattedHTMLMessage id="Terra.demographicsBanner.noDataProvided" /> }
              { this.props.preferredFirstName && <span className="terra-DemographicsBanner--preferred-first-name">
                { this.props.preferredFirstName }
              </span> }
            </h1>
            <div className="terra-DemographicsBanner--application-content">
              {this.props.additionalDetails}
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
