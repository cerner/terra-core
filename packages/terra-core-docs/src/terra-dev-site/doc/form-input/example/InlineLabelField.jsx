import React from 'react';
import classNames from 'classnames/bind';
import Grid from 'terra-grid';
import InputField from 'terra-form-input/lib/InputField';
import styles from '../common/InputFieldDocCommon.module.scss';

const cx = classNames.bind(styles);

const label = 'User Name';
const InlineLabelFieldExample = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column small={1}>
        <span className={cx('field-label')}>{label}</span>
      </Grid.Column>
      <Grid.Column small={3}>
        <InputField
          inputId="profile-name"
          isLabelHidden
          label={label}
          help="Note: Username cannot be changed in the future"
          type="text"
          inputAttrs={{
            name: 'profile',
          }}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default InlineLabelFieldExample;
