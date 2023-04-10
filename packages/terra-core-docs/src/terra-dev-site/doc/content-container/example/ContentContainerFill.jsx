import React from 'react';
import ContentContainer from 'terra-content-container';
import classNames from 'classnames/bind';
import styles from './ContentContainerDocCommon.module.scss';

const cx = classNames.bind(styles);

const display1 = (
  <p key="1">
    Command Center provides near real-time enterprise transparency to help health systems perform at their peak efficiency, streamline operations and improve care delivery.
  </p>
);
const display2 = (
  <p key="2">
    We know organizations are challenged to increase clinical and operational efficiencies, provide high-quality care, improve satisfaction and, ultimately, grow revenue and market share. The ability to provide consumers, clinicians, and clinics with integration across ambulatory venues is vital for organizations to achieve their goals.
  </p>
);
const display3 = (
  <p key="3">
    With a focus on enhanced productivity across ambulatory practices, Cerner Ambulatory is designed to help advance clinical and operational efficiencies throughout the continuum of care. We’ve designed our products with an ambulatory-first focus where operations and workflows are streamlined through integration across venues.
  </p>
);

const contentheader = <h3>Display Header</h3>;
const contentfooter = <h3>Display Footer</h3>;

const container = () => (
  <div className={cx('content-container-fill')}>
    <ContentContainer header={contentheader} footer={contentfooter} fill>
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
