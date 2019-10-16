import React from 'react';
import classNames from 'classnames/bind';
import Textarea from '../../../Textarea';
import styles from './common/Textarea.test.module.scss';

const cx = classNames.bind(styles);

class textarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swap: false,
    };

    this.handleSwap = this.handleSwap.bind(this);
  }

  handleSwap() {
    this.setState(prevState => ({
      swap: !prevState.swap,
    }));
  }

  render() {
    const smallTextArea = <Textarea isAutoResizable size="small" ariaLabel="label" />;
    const largeTextArea = <Textarea isAutoResizable size="large" ariaLabel="label" />;
    const button = <button id="swap-button" type="button" onClick={this.handleSwap}>Swap</button>;

    if (this.state.swap) {
      return (
        <div className={cx('content-wrapper')}>
          {smallTextArea}
          {largeTextArea}
          {button}
        </div>
      );
    }
    return (
      <div className={cx('content-wrapper')}>
        {largeTextArea}
        {smallTextArea}
        {button}
      </div>
    );
  }
}

export default textarea;
