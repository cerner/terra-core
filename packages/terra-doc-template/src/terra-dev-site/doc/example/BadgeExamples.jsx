import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import NpmBadge from '../../../NpmBadge';
import { name } from '../../../../package.json';

const packageUrl = 'https://engineering.cerner.com/terra-ui/components/terra-doc-template/doc-template/doc-template';
const packageVersion = '2.13.0';

const BadgeExamples = () => (
  <div>
    <p>Dynamically generated npm badge:</p>
    <NpmBadge packageName={name} />
    <p>Custom Badge with packageVersion prop set:</p>
    <NpmBadge packageName={name} packageVersion={packageVersion} />
    <p>Custom Badge with packageUrl and packageVersion props set:</p>
    <NpmBadge packageName={name} packageUrl={packageUrl} packageVersion={packageVersion} />
  </div>
);

export default BadgeExamples;
