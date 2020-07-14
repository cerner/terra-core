import React from 'react';
import classNames from 'classnames/bind';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';
import styles from './DemographicsBannerSmallContainer.module.scss';

const cx = classNames.bind(styles);

const DemographicsBannerSmallContainer = () => (
  <div className={cx('content-wrapper')}>
    <DemographicsBanner
      age="25 Years"
      avatar={{
        alt: 'Johnathon Doe',
        color: 'neutral',
        image: demographicsImage,
        initials: 'JD',
        isAriaHidden: true,
      }}
      dateOfBirth="May 9, 1992"
      gender="True Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
    />
  </div>
);

export default DemographicsBannerSmallContainer;
