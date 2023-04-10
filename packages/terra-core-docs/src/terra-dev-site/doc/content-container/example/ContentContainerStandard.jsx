import React from 'react';
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';
import styles from './ContentContainerDocCommon.module.scss';

const cx = classNames.bind(styles);

const display1 = (
  <p key="1">
    Healthcare organizations face accelerating cost and revenue pressures, as well as the need to improve clinical outcomes. Establishing greater operational and clinical efficiency can help alleviate these pressures. Unfortunately, many healthcare organizations are basing care decisions on old data.
  </p>
);
const display2 = (
  <p key="2">
    They could achieve greater efficiency and outcomes by basing decisions on near real-time and predictive analytics to gain situational awareness of what is happening in the enterprise right now, instead of yesterday. Cerner Command Center provides near real-time enterprise transparency to help health systems perform at their peak efficiency, streamline operations and improve care delivery.
  </p>
);
const display3 = (
  <p key="3">
    Effectively centralizing operations requires a more holistic approach than technology alone can provide. It also requires having the right people and processes in place. Cerner Advisory Services are designed to help healthcare organizations maximize the value of their Command Center implementation through improved outcomes and reduced costs.
  </p>
);

const contentheader = <h3>Display Header</h3>;
const contentfooter = <h3>Display Footer</h3>;

const container = () => (
  <div className={cx('content-container-standard')}>
    <ContentContainer header={contentheader} footer={contentfooter}>
      <div key="1">
        {display1}
      </div>
      <div key="2">
        {display2}
      </div>
      <div key="3">
        {display3}
      </div>
    </ContentContainer>
  </div>
);

export default container;
