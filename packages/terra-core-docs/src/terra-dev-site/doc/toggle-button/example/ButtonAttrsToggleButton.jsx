import React from 'react';
import Button from 'terra-button';
import ToggleButton from 'terra-toggle-button';
import classNames from 'classnames/bind';
import styles from './ToggleButtonCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonAttrsToggleButton = () => (
  <ToggleButton
    closedButtonText="Learn More"
    buttonAttrs={{
      variant: Button.Opts.Variants.EMPHASIS,
    }}
  >
    <div className={cx('toggle-button-content')}>
      <h2>Integrated Healthcare Solutions</h2>
      <p>
        Our healthcare system offers state-of-the-art integrated solutions that enhance patient care and improve outcomes. With our advanced electronic health records (EHR) platform and interoperability infrastructure, we aim to revolutionize the way healthcare information is shared and utilized.
      </p>
      <p>
        By seamlessly connecting healthcare providers, laboratories, pharmacies, and patients, we ensure that critical health information is readily available at the point of care. Our integrated solutions streamline workflows, reduce errors, and enable informed decision-making for healthcare professionals.
      </p>
      <p>
        Our platform supports nationwide interoperability, allowing healthcare facilities to access comprehensive patient records regardless of where care was provided. Through our partnership with the CommonWell Health Alliance, we facilitate secure data exchange and provide a unified view of patient information.
      </p>
      <p>
        To learn more about our integrated healthcare solutions and how they can benefit your organization, please
        &nbsp;
        <a href="#contact">Contact us</a>
        &nbsp;
        for further information. Our dedicated team is ready to assist you in transforming healthcare delivery and achieving better patient outcomes.
      </p>
    </div>
  </ToggleButton>
);

export default ButtonAttrsToggleButton;
