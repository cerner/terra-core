import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';
import styles from './DemographicsBannerSmallContainer.module.scss';

const cx = classNames.bind(styles);

const DemographicsBannerSmallContainer = () => (
  <div className={cx('content-wrapper')}>
    <DemographicsBanner
      age={{ value: '25 Years', ariaLabel: '25 years old.' }}
      dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
      administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
      identifiers={[
        {
          label: 'MRN',
          value: '12343',
          ariaLabel: 'MRN 1 2 3 4 5',
        },
        {
          label: 'REA',
          value: '3JSDA',
          ariaLabel: 'R E A 3JSDA',
        },
      ]}
      photo={<Image alt="My Cat" src={demographicsImage} />}
      personName="Johnathon Doe"
    />
  </div>
);

export default DemographicsBannerSmallContainer;
