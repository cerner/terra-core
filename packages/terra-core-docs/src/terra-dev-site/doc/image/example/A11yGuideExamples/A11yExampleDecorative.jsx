import React from 'react';
import classNamesBind from 'classnames/bind';
import Card from 'terra-card';
import { DecorativeImage } from 'terra-image';
import matterhornBackgroundImage from '../../../../common/images/creative-commons/Matterhorn,_March_2019_(01)_960x640.jpg';
import styles from './A11yExamples.module.scss';

const cx = classNamesBind.bind(styles);

const A11yGuideInformativeImage = () => (
  <div className={cx('decorative-example')}>
    <DecorativeImage src={matterhornBackgroundImage} fit="cover" className={cx('background')} />
    <div className={cx('foreground')}>
      <Card className={cx('card')}>
        <p className={cx('decorative-text-container')}>
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
    </div>
  </div>
);

export default A11yGuideInformativeImage;
