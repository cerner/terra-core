import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import classNames from 'classnames/bind';
import Alert from 'terra-alert';
import styles from '../../doc/example/colors.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <Alert id="custom1" type={Alert.Opts.Types.CUSTOM}>Custom Alert with no icon, title or custom color</Alert>
    <br />
    <Alert id="custom2" type={Alert.Opts.Types.CUSTOM} title="Custom_Alert:">Custom Alert with title but no icon or custom color</Alert>
    <br />
    <Alert id="custom3" type={Alert.Opts.Types.CUSTOM} customIcon={<IconHelp />}>Custom Alert with icon but no title or custom color</Alert>
    <br />
    <Alert id="custom4" type={Alert.Opts.Types.CUSTOM} customColorClass={cx(['my-app-alert-attention-example'])}>Custom Alert with custom color but no title or icon</Alert>
    <br />
    <Alert id="custom5" type={Alert.Opts.Types.CUSTOM} customColorClass={cx(['my-app-alert-help-example'])} title="Custom_Alert:">Custom Alert with custom color and title but no icon</Alert>
    <br />
    <Alert id="custom6" type={Alert.Opts.Types.CUSTOM} title="Custom_Alert:" customIcon={<IconHelp />}>Custom Alert with title and icon but no custom color</Alert>
    <br />
    <Alert id="custom7" type={Alert.Opts.Types.CUSTOM} customColorClass={cx(['my-app-alert-dismiss-example'])} customIcon={<IconHelp />}>Custom Alert with custom color and icon but no title</Alert>
    <br />
    <Alert id="custom8" type={Alert.Opts.Types.CUSTOM} title="Custom_Alert:" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>Custom Alert with title, custom color and icon</Alert>
  </div>
);
