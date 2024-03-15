import React from 'react';
import classNames from 'classnames/bind';
import { InputField } from 'terra-form-input';
import styles from '../common/InputFieldDocCommon.module.scss';

const cx = classNames.bind(styles);

const label = 'Profile Name';
const InlineLabelFieldExample = () => (
  <div className={cx('flex-box-container')}>
    <div>
      <span className={cx('field-label')}>{label}</span>
    </div>
    <div>
      <InputField
        inputId="profile-name"
        isLabelHidden
        isInline
        label={label}
        help="Note: profile name cannot be changed in the future"
        type="text"
        inputAttrs={{
          name: 'profile',
        }}
      />
    </div>
  </div>
);

export default InlineLabelFieldExample;
