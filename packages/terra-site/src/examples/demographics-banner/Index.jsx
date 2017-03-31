/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-demographics-banner/docs/README.md';
import DemographicsBanner from 'terra-demographics-banner';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DemographicsBannerSrc from '!raw-loader!terra-demographics-banner/src/DemographicsBanner.jsx';

const DemographicsBannerExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={DemographicsBannerSrc} />
    <h1>Basic Demographics Banner</h1>
    <DemographicsBanner
      personName="Johnathon Doe"
      preferredFirstName="John"
      gender="Male"
      age="25 Years"
      dateOfBirth="May 9, 1993"
    />
    <h1>Demographics Banner with Missing Data</h1>
    <DemographicsBanner />
    <h1>Demographics Banner with App Content</h1>
    <DemographicsBanner
      photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
      personName="Johnathon Doe"
      preferredFirstName="John"
      gender="Male"
      age="25 Years"
      dateOfBirth="May 9, 1993"
      additionalDetails={<span className="risk-score">5%</span>}
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
    />
    <h1>Deceased Demographics Banners</h1>
    <DemographicsBanner
      personName="Johnathon Doe"
      preferredFirstName="John"
      gender="True Male"
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      additionalDetails={<span className="risk-score">5%</span>}
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
    />
  </div>
);

export default DemographicsBannerExamples;
