import React from 'react';
import classNames from 'classnames/bind';
import Textarea from '../../../Textarea';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

export default class textarea extends React.Component {
  constructor() {
    super();
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentDidUpdate() {
    if (!window.ontouchstart) {
      this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
  }

  componentWillUnmount() {
    if (this.resetontouchstart) {
      delete window.ontouchstart;
    }
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <Textarea id="auto-resizable" cols="2" isAutoResizable defaultValue="Default Value" ariaLabel="label" />
      </div>
    );
  }
}
