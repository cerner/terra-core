import React from 'react';
import classNames from 'classnames/bind';
import Signature from '../../../Signature';
import styles from './SignatureDefaultTest.module.scss';

const cx = classNames.bind(styles);

class SignatureDefault extends React.Component {
  constructor() {
    super();

    this.state = { lineSegments: [], lineWidth: Signature.Opts.Width.FINE };
  }

  render() {
    return (
      <div>
        <div id="othersection" />
        <div className={cx('signature-wrapper')}>
          <Signature id="drawline" lineWidth={this.state.lineWidth} lineSegments={this.state.lineSegments} ref={(instance) => { this.signature = instance; }} />
        </div>
      </div>
    );
  }
}

export default SignatureDefault;
