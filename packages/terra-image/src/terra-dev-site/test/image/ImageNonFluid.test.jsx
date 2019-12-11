import React from 'react';
import classNames from 'classnames/bind';
import Image from '../../../Image';
import placeholder150x150 from '../../assets/150x150.jpg';
import styles from './ImageTestCommon.module.scss';

const cx = classNames.bind(styles);

const ImageNonFluid = () => (
  <div>
    <h2>Non Fluid Examples</h2>
    <p>Image width and height are smaller than container.</p>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <div id="smaller" tabIndex="0" className={cx('image-container')}>
      <Image src={placeholder150x150} alt="rounded" variant="rounded" />
    </div>
    <p>Image width is larger than the container. Image height is smaller than the container.</p>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <div id="height-smaller" tabIndex="0" className={cx('image-container-reduced-width')}>
      <Image src={placeholder150x150} alt="rounded" variant="rounded" />
    </div>
    <p>Image width is smaller than the container. Image height is larger than the container.</p>
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
    <div id="width-smaller" tabIndex="0" className={cx('image-container-reduced-height')}>
      <Image src={placeholder150x150} alt="rounded" variant="rounded" />
    </div>
  </div>
);

export default ImageNonFluid;
