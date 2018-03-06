/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-avatar/docs/README.md';
import { version } from 'terra-avatar/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import AvatarSrc from '!raw-loader!terra-avatar/src/Avatar';

// Example Files
import AvatarUser from './AvatarUser';
import AvatarFacility from './AvatarFacility';
import AvatarTwoInitials from './AvatarTwoInitials';
import AvatarThreeInitials from './AvatarThreeInitials';
import AvatarImage from './AvatarImage';

const AvatarExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={AvatarSrc} />
    <h2 id="user">User</h2>
    <AvatarUser />
    <h2 id="facility">Facility</h2>
    <AvatarFacility />
    <h2 id="initials">Initials (2)</h2>
    <AvatarTwoInitials />
    <h2 id="initials">Initials (3)</h2>
    <AvatarThreeInitials />
    <h2 id="image">Image</h2>
    <AvatarImage />
  </div>
);

export default AvatarExamples;
