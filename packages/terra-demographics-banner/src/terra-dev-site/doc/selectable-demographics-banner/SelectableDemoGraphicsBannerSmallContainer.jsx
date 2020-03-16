import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { SelectableDemographicsBanner } from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';
import styles from '../example/DemographicsBannerSmallContainer.module.scss';

const cx = classNames.bind(styles);

const SelectableDemoGraphicsBannerSmallContainer = () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics Banner Clicked');
  };

  const handleInfoButtonClick = () => {
    setMessage('Info Button clicked');
  };

  return (
    <div className={cx('content-wrapper')}>
      <SelectableDemographicsBanner
        applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
        age="25 Years"
        dateOfBirth="May 9, 1993"
        gender="Male"
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        personName="Johnathon Doe"
        photo={demographicsImage}
        preferredFirstName="John"
        selectableTileOnClick={handleDemographicsClick}
        infoButtonOnClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemoGraphicsBannerSmallContainer;
