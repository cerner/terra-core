import React from 'react';
import Scroll from 'terra-scroll';
import classNames from 'classnames/bind';
import styles from './ScrollCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <p>Overflow-X Container</p>
    <div className={cx('overflow-wrapper')}>
      <Scroll tabIndex={0}>
        <p className={cx('paragraph-x-wrapper')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus erat,
          eget facilisis nunc ornare in. Vestibulum ut posuere neque. Maecenas nibh lacus, euismod sit amet magna sit amet,
          porttitor sollicitudin sapien. Vivamus nec lacus vel tortor ultrices efficitur vitae sit amet ipsum.
          Suspendisse risus eros, faucibus eget mattis in, tincidunt id urna. Integer eget urna quis nisi luctus posuere.
          Fusce molestie dignissim neque interdum ultrices. Donec porta condimentum quam, at molestie velit scelerisque vitae.
          Suspendisse eleifend lectus sit amet nunc posuere, sed placerat dolor laoreet.
          Etiam tempus lacinia purus, ac porttitor nisl posuere eget. Aenean nulla tellus,
          lacinia eget tortor vel, tempus fermentum ex. Nullam massa nisl, consequat at lorem non,
          dignissim vehicula mauris. Morbi ultrices mauris ipsum, eu tempor quam luctus id. Curabitur ultrices nunc ultrices,
          commodo lorem eget, vulputate urna. Quisque porttitor nisi vel diam vulputate vehicula eu quis lacus. Nunc eget aliquam elit.
          Vivamus dictum mi molestie, tristique est sit amet, pellentesque urna. Etiam arcu felis, pulvinar et lorem et, efficitur ultricies urna.
          Nunc lacinia pellentesque turpis sit amet egestas. Vivamus ut ex efficitur, egestas lectus sit amet, gravida magna.
          Vivamus suscipit, erat vitae commodo fermentum, massa dolor egestas arcu,
          a sollicitudin sem risus eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          In maximus nunc tempus magna iaculis porttitor.
        </p>
      </Scroll>
    </div>
  </div>
);
