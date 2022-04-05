import React from 'react';
import classNamesBind from 'classnames/bind';
import Card from 'terra-card';
import Image from 'terra-image';
import matterhornImage from '../../../../common/images/creative-commons/Matterhorn,_March_2019_(01)_150x150.jpg';
import styles from './A11yExamples.module.scss';

const cx = classNamesBind.bind(styles);

const matterhornAlternativeText = 'North-east face of the Matterhorn mountain peak and surrounding landscape covered in snow against a blue sky, located in the Swiss Apps near Zermatt, Switzerland';

const A11yGuideInformativeImage = () => (
  <Card className={cx('card')}>
    <p className={cx('informative-example')}>
      <Image src={matterhornImage} alt={matterhornAlternativeText} className={cx('image')} />
      <strong className={cx('title')}>Matterhorn</strong>
    </p>
  </Card>
);

export default A11yGuideInformativeImage;
