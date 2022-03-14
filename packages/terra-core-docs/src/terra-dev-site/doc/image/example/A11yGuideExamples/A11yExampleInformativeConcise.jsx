import React from 'react';
import classNamesBind from 'classnames/bind';
import Card from 'terra-card';
import Image from 'terra-image';
import matterhornImage from '../../../../common/images/creative-commons/Matterhorn,_March_2019_(01)_150x150.jpg';
import styles from './A11yExamples.module.scss';

const cx = classNamesBind.bind(styles);

const matterhornAlternativeText = 'Matterhorn mountain peak';

export default () => (
  <Card className={cx('card')}>
    <p className={cx('informative-example')}>
      <Image src={matterhornImage} alt={matterhornAlternativeText} className={cx('image')} />
      <strong className={cx('title')}>Matterhorn</strong>
      Standing at 4,478 meters (14,692ft), Matterhorn is the fifth highest peak in the Alps located on the border between Switzerland and Italy, in the Monte Rosa area of the western Pennine Alps, and overlooks the Swiss town of Zermatt.
      <cite className={cx('cite')}>
        <small>
          {'Photo Credit: '}
          <a href="https://commons.wikimedia.org/wiki/File:Matterhorn,_March_2019_(01).jpg">Liridon</a>
          {', '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>
          , via Wikimedia Commons
        </small>
      </cite>
    </p>
  </Card>
);
