import React from 'react';
import classNames from 'classnames/bind';
import Image from 'terra-image';
import placeholder150x150 from '../../doc/image/assets/150x150.jpg';
import styles from './ImageTestCommon.module.scss';

const cx = classNames.bind(styles);

const ImageFluid = () => (
  <div>
    <h2>Fluid Examples</h2>
    <p>informative</p>
    <div id="smaller" className={cx('image-conatiner')}>
      <Image src={placeholder150x150} title="example image" imageType="informative" alt="rounded" variant="rounded" isFluid />
    </div>
    <br />
    <p>decorative</p>
    <div id="height-smaller" className={cx('image-conatiner-reduced-width')}>
      <Image src={placeholder150x150} imageType="decorative" alt="rounded2" variant="rounded" fit="cover" isFluid />
    </div>
  </div>
);

export default ImageFluid;
