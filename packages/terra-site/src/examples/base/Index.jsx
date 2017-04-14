/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-base/docs/README.md';
import { version } from 'terra-base/package.json';

import { FormattedMessage } from 'react-intl';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import BaseSrc from '!raw-loader!terra-base/src/Base';

// Example Files
import Base from 'terra-base';

// Application customMessage from application
const customMessages = {
  'Terra.isInIntlBase': 'This message is customMessages from application',
};
/*
  const fiCustomMessages = {
    'Terra.isInIntlBase': 'This message is in fi locale',
  };
*/

class BaseExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  handleLocaleChange(e) {
    this.setState({
      locale: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div id="version">Version: {version}</div>
        <Markdown id="readme" src={ReadMe} />
        <PropsTable id="props" src={BaseSrc} />
        <div>
          <Base
            locale={this.state.locale}
            customMessages={customMessages}
          >
            <h1>I18n FormattedMessage examples</h1>
            <p>Application customMessages: <FormattedMessage id="Terra.isInIntlBase" /></p>
            <p>Terra I18n demo messages: <FormattedMessage id="Terra.demo" /></p>
            <p>Terra I18n ajax error messages: <FormattedMessage id="Terra.ajax.error" /></p>
            <label htmlFor="locale"> Current locale: {this.state.locale} </label>
            <select onChange={this.handleLocaleChange}>
              <option value="en-GB">en-GB</option>
              <option value="en-US">en-US</option>
              <option value="en">en</option>
              <option value="de">de</option>
              <option value="es">es</option>
              <option value="fr">fr</option>
              <option value="pt">pt</option>
              <option value="fi-FI">fi-FI</option>
            </select>
            <h1>Globale BaseStyles example</h1>
            <p>Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src="https://placeholdit.imgix.net/~text?txtsize=20&txt=200%C3%97200&w=200&h=200" alt="Placeholder" />
            <dl>
              <dt>Description name</dt>
              <dd>Description value</dd>
              <dt>Description name</dt>
              <dd>Description value</dd>
            </dl>
            <ol>
              <li>Ordered list item</li>
              <li>Ordered list item
                <ol>
                  <li>Nested ordered list item</li>
                </ol>
              </li>
              <li>Ordered list item</li>
            </ol>
            <ul>
              <li>Unordered list item</li>
              <li>Unordered list item
                <ol>
                  <li>Nested unordered list item</li>
                </ol>
              </li>
              <li>Unordered list item</li>
            </ul>
          </Base>
        </div>
      </div>);
  }
}


export default BaseExamples;
