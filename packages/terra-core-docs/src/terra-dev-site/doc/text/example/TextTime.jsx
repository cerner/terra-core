import React from 'react';
import Text from 'terra-text';
import moment from 'moment';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import styles from '../../../../../../terra-text/src/Text.module.scss';

const cx = classNamesBind.bind(styles);
const descriptiveClasses = classNames(
  cx([
    'text',
    { 'visually-hidden': true },
  ]),
);

const timeVar = moment('10:22:30', 'hh:mm:ss').format('hh:mm:ss');

const timeParts = timeVar.split(':');
const hourVal = timeParts[0];
const minuteVal = timeParts[1];
const secondVal = timeParts[2];

const valueToDisplay = (
  <>
    <span className={descriptiveClasses}>Hour</span>
    <React.Fragment>
      {hourVal}
      :
    </React.Fragment>

    <span className={descriptiveClasses}>Minute</span>
    <React.Fragment>
      {minuteVal}
      :
    </React.Fragment>

    <span className={descriptiveClasses}>Second</span>
    <React.Fragment>{secondVal}</React.Fragment>
    <div><Text id="timeTest">{valueToDisplay}</Text></div>
  </>
);

const TextTime = () => (
  <div><Text id="dateTest">{valueToDisplay}</Text></div>
)

export default TextTime;
