import React from 'react';
import classNames from 'classnames/bind';
import Grid from 'terra-grid';
import {SingleSelectField} from 'terra-form-select';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const label = 'T-shirt size';
const InlineLabelFieldExample = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column small={1}>
        <span className={cx('field-label')}>{label}</span>
      </Grid.Column>
      <Grid.Column small={3}>
        <SingleSelectField
          label={label}
          isLabelHidden
          placeholder="Select a size"
          selectId="tshirt-size-field-1"
          className={cx('form-select')}
          help="Please take note that product sizes may vary."
        >
          <SingleSelectField.Option value="xSmall" display="Extra Small" />
          <SingleSelectField.Option value="small" display="Small" />
          <SingleSelectField.Option value="medium" display="Medium" />
          <SingleSelectField.Option value="large" display="Large" />
          <SingleSelectField.Option value="xLarge" display="Extra Large" />
        </SingleSelectField>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default InlineLabelFieldExample;
