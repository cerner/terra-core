import React from 'react';
import PropTypes from 'prop-types';
import { I18nProvider, i18nLoader } from 'terra-i18n';
import './baseStyles';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: PropTypes.node.isRequired,
  /**
   * The locale name.
   */
  locale: PropTypes.string,
  /**
   * Customized translations provided by consuming application
   * only for current locale.
   */
   /* eslint-disable consistent-return */
  customMessages: (props, propName, componentName) => {
    if (Object.keys(props[propName]).length !== 0 && props.locale === undefined) {
      return new Error(
        `Missing locale prop for ${propName} in ${componentName} props`,
      );
    }
  },
};

const defaultProps = {
  customMessages: {},
};

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areTranslationsLoaded: false,
      locale: props.locale,
      messages: {},
    };
  }

  componentDidMount() {
    if (this.props.locale !== undefined) {
      i18nLoader(this.props.locale, this.setState, this);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) return;
    if (nextProps.locale !== undefined) {
      i18nLoader(nextProps.locale, this.setState, this);
    }
  }

  render() {
    const {
      children,
      locale,
      customMessages,
      ...customProps
    } = this.props;

    const childComponent = (
      <div {...customProps}>
        {children}
      </div>
    );

    const messages = Object.assign({}, this.state.messages, customMessages);

    if (locale === undefined) return childComponent;
    if (!this.state.areTranslationsLoaded) return null;
    return (
      <I18nProvider locale={this.state.locale} messages={messages}>
        {childComponent}
      </I18nProvider>
    );
  }
}

Base.propTypes = propTypes;

Base.defaultProps = defaultProps;

export default Base;
