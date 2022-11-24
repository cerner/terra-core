import React from 'react';
import Card from 'terra-card';
import SingleSelect from 'terra-form-select/lib/SingleSelect';
import classNames from 'classnames/bind';
import styles from './FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const SingleSelectExample = () => (
  <Card>
    <Card.Body>
      <SingleSelect placeholder="Select Allergies" className={cx('form-select')}>
        <SingleSelect.Option value="cats" display="Cats" />
        <SingleSelect.Option value="dogs" display="Dogs" />
        <SingleSelect.Option value="dust" display="Dust" />
        <SingleSelect.Option value="mold" display="Mold" />
        <SingleSelect.Option value="latex" display="Latex" />
      </SingleSelect>
    </Card.Body>
  </Card>
);

export default SingleSelectExample;
