/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-divider/docs/README.md';
import { name } from 'terra-divider/package.json';

// Example Files
import Divider from './DividerExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Dialog - Default',
        example: (
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
            <Divider />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
        ),
      },
    ]}
  />
);

export default DocPage;
