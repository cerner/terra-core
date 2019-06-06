import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DemographicsBanner from 'terra-demographics-banner/lib/DemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';
import styles from './DemographicsBannerSmallContainer.scss';

const cx = classNames.bind(styles);

const DemographicsBannerSmallContainer = () => (
  <div className={cx('content-wrapper')}>
    <DemographicsBanner
      age="25 Years"
      dateOfBirth="May 9, 1992"
      deceasedDate="March 12, 2017"
      gender="True Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo={<Image alt="My Cat" src={demographicsImage} />}
      personName="Johnathon Doe"
    />
  </div>
);

export default DemographicsBannerSmallContainer;
