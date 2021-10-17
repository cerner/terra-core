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
