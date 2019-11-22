import React from 'react';
import classNames from 'classnames/bind';
import Scroll from '../../../Scroll';
import styles from './DefaultTest.module.scss';

const cx = classNames.bind(styles);

class DefaultScroll extends React.Component {
  constructor(props) {
    super(props);
    this.setNode = this.setNode.bind(this);
    this.toggleScroll = this.toggleScroll.bind(this);
  }

  setNode(node) {
    this.scrollNode = node;
  }

  toggleScroll() {
    if (this.scrollNode) {
      this.scrollNode.scrollTop = this.scrollNode.scrollTop > 0 ? 0 : 1000;
    }
  }

  render() {
    return (
      <div>
        <button type="button" id="scroll" onClick={this.toggleScroll}>Scroll</button>
        <div className={cx('scroll-wrapper')}>
          <Scroll tabIndex={0} id="scroll-test" refCallback={this.setNode}>
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
          </Scroll>
        </div>
      </div>
    );
  }
}

export default DefaultScroll;
