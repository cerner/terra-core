import React, { useState } from 'react';
import classNames from 'classnames/bind';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';
import styles from '../example/DemographicsBannerSmallContainer.module.scss';

const cx = classNames.bind(styles);

const SelectableDemoGraphicsBannerSmallContainer = () => {
  return (
    <div className={cx('content-wrapper')}>
      <SelectableDemographicsBanner
        applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
        age="25 Years"
        avatar={{
          alt: 'Johnathon Doe',
          color: 'neutral',
          image: demographicsImage,
          initials: 'JD',
          isAriaHidden: true,
        }}
        dateOfBirth="May 9, 1993"
        gender="Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        personName="Johnathon Doe"
        preferredFirstName="John"
        onClick={() => alert('Demographics banner clicked!')}
      />
    </div>
  );
};

export default SelectableDemoGraphicsBannerSmallContainer;
