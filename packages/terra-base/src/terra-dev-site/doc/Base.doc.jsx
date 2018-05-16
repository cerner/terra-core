/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-base/docs/README.md';
import { name } from 'terra-base/package.json';

// Component Source
import BaseSrc from '!raw-loader!terra-base/src/Base';

const BaseExample = () => (
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
);

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        example: <BaseExample />,
      },
    ]}
    propsTables={[
      {
        componentName: 'Base',
        componentSrc: BaseSrc,
      },
    ]}
  />
);

export default DocPage;
