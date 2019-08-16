import React from 'react';
import NpmBadge from '../../../NpmBadge';
import { name, version } from '../../../../package.json';

const packageUrl = 'https://engineering.cerner.com/terra-ui/components/terra-doc-template/doc-template/doc-template';
const packageVersion = '2.13.0';

const BadgeExamples = () => (
  <div>
    <br />
    <NpmBadge packageName={name} />
    <br />
    <NpmBadge packageName={name} packageVersion={packageVersion} />
    <NpmBadge packageName={name} packageUrl={packageUrl} packageVersion={packageVersion} />
  </div>
);

export default BadgeExamples;
