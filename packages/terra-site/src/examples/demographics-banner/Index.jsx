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
      age="25 Years"
      dateOfBirth="DOB: <b>May 9, 1993</b>"
      gender="Male"
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
    <h1>Demographics Banner with Missing Data</h1>
    <DemographicsBanner />
    <h1>Demographics Banner with App Content</h1>
    <DemographicsBanner
      additionalDetails={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="DOB: <b>May 9, 1993</b>"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
      preferredFirstName="John"
    />
    <h1>Deceased Demographics Banners</h1>
    <DemographicsBanner
      additionalDetails={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="DOB: <b>May 9, 1992</b>"
      deceasedDate="March 12, 2017"
      gender="True Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />
    <h1>Demographics Banner with Gestational and Post Menstrural ages</h1>
    <DemographicsBanner
      additionalDetails={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="DOB: <b>May 9, 1993</b>"
      gender="Male"
      gestationalAge="GA: <b>April 5, 2016</b>"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
      personName="Johnathon Doe"
      postMenstrualAge="PMA: <b>April 7, 2016</b>"
      preferredFirstName="John"
    />
  </div>
);

export default DemographicsBannerExamples;
