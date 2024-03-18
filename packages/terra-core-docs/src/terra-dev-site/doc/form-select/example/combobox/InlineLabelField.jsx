import React from 'react';
import classNames from 'classnames/bind';
import Grid from 'terra-grid';
import { ComboboxField } from 'terra-form-select';
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
        <ComboboxField
          label={label}
          isLabelHidden
          placeholder="Select a size"
          selectId="tshirt-size-field-1"
          className={cx('form-select')}
          help="Please take note that product sizes may vary."
        >
          <ComboboxField.Option value="xSmall" display="Extra Small" />
          <ComboboxField.Option value="small" display="Small" />
          <ComboboxField.Option value="medium" display="Medium" />
          <ComboboxField.Option value="large" display="Large" />
          <ComboboxField.Option value="xLarge" display="Extra Large" />
        </ComboboxField>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default InlineLabelFieldExample;
