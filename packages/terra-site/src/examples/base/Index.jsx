/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-base/docs/README.md';
import { version } from 'terra-base/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import BaseSrc from '!raw-loader!terra-base/src/Base';

// Example Files
import Base from 'terra-base';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

const BaseExamples = () => (
  <Base locale={locale}>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={BaseSrc} />
    <div>
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
    </div>
  </Base>
);

export default BaseExamples;
