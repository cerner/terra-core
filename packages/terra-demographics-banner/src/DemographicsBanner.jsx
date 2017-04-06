/* eslint-disable global-require, import/no-dynamic-require, react/no-unused-prop-types */
import React, { PropTypes } from 'react';
import i18nLoader from 'terra-i18n/lib/i18nLoader';
import I18nProvider from 'terra-i18n/lib/I18nProvider';

import './DemographicsBanner.scss';
import DemographicsBannerDisplay from './DemographicsBannerDisplay';

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
   * Locale to display the banner with
   */
  locale: PropTypes.string,
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
};

const defaultProps = {
  personName: null,
  preferredFirstName: null,
  photo: null,
  age: null,
  gender: null,
  identifiers: {},
  locale: 'en',
  dateOfBirth: null,
  gestationalAge: null,
  postMenstrualAge: null,
  deceasedDate: null,
  additionalDetails: null,
  applicationRows: [],
};

class DemographicsBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      demographicsMessages: require(`./translations/${props.locale}.js`),
    };
  }

  componentDidMount() {
    i18nLoader(this.props.locale, this.setState, this);
  }

  render() {
    const bannerProps = Object.assign({}, this.props);
    delete bannerProps.locale;

    if (this.state.load) {
      return (
        <I18nProvider locale={this.props.locale} messages={Object.assign({}, this.state.messages, this.state.demographicsMessages)}>
          <DemographicsBannerDisplay {...bannerProps} />
        </I18nProvider>
      );
    }

    return null;
  }
}

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

export default DemographicsBanner;
