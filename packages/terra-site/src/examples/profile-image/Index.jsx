import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-profile-image/docs/README.md';
import { version } from 'terra-profile-image/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ImageSrc from '!raw-loader!terra-profile-image/src/ProfileImage';

// Example Files
import ProfileImageDefault from './ProfileImageDefault';

const ProfileImageExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ImageSrc} />
    <ProfileImageDefault />
  </div>
);

export default ProfileImageExamples;
