import React from 'react';
import classNames from 'classnames/bind';
import Grid from 'terra-grid';
import {NativeSelectField} from 'terra-form-select';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const label = 'Select a Day';
const InlineLabelFieldExample = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column small={1}>
        <span className={cx('field-label')}>{label}</span>
      </Grid.Column>
      <Grid.Column small={3}>
        <NativeSelectField
          label={label}
          isLabelHidden
          isInline
          help="Note: Shop will be closed on weekends"
          options={[
            { value: 'monday', display: 'Volvo' },
            { value: 'tuesday', display: 'Tuesday' },
            { value: 'wednesday', display: 'Wednesday' },
            { value: 'thursday', display: 'Thursday' },
            { value: 'friday', display: 'Friday' },
            { value: 'saturday', disabled: true, display: 'Saturday' },
            { value: 'sunday', disabled: true, display: 'Sunday' },
          ]}
          selectId="default-example"
          className={cx('form-select')}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default InlineLabelFieldExample;
