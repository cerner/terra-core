import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';

import styles from './ContentContainerDocCommon.module.scss';

const cx = classNames.bind(styles);

const display1 = (
  <p key="1">
    Nearly half of healthcare executives reported patient leakage cost them at least 10% of their annual revenue, with one in five executives stating it cost more than 20%.
  </p>
);
const display2 = (
  <p key="2">
    You work hard for your patients and your revenue. Keeping referrals inside your network is paramount to generating both fee-for-service (increasing utilization) and risk-based revenue (managing care quality and gap closure).
  </p>
);
const display3 = (
  <p key="3">
   Around one in three primary care appointments result in a referral. Today, many referrals are based on personal relationships. To build and retain market share, referring decisions should align to evidence-based best practices and factors like schedule availability, location and accepted insurances.
  </p>
);

const contentheader = <h3>Display Header</h3>;
const contentfooter = <h3 id="contentfooter">Children count is </h3>;

const onContainerScroll = scrollRef => (
  document.getElementById('contentfooter').append(` ${scrollRef.children.length}`)
);

const container = () => (
  <div className={cx('content-container-fill')}>
    {
      /**
       * ScrollRefCallback is used to refer to the scrollable area of the content container DOM element.
       */
    }
    <ContentContainer header={contentheader} footer={contentfooter} fill scrollRefCallback={onContainerScroll}>
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
