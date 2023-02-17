import React from 'react';
import Button from 'terra-button';
import Card from 'terra-card';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const A11yButtonLabel = () => (
  <Card>
    <Card.Body>
      <p>
        Allergies, also known as allergic diseases, are a number of conditions caused by hypersensitivity of the immune
        system to typically harmless substances in the environment. These diseases include hay fever, food allergies,
        atopic dermatitis, allergic asthma, and anaphylaxis. Symptoms may include red eyes, an itchy rash, sneezing,
        coughing, a runny nose, shortness of breath, or swelling.
      </p>
      <Button aria-label="Learn More About Allergies" href="https://en.wikipedia.org/wiki/Allergy" text="Learn More" className={cx('button')} />
    </Card.Body>
  </Card>
);

export default A11yButtonLabel;
