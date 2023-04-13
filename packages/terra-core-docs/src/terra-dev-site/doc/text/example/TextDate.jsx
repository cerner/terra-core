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

const dateVar = moment('01-10-2022').format('MM/DD/YYYY');

const dateParts = dateVar.split('/');
const monthVal = dateParts[0];
const dayVal = dateParts[1];
const yearVal = dateParts[2];

const valueToDisplay = (
  <>
    <span className={descriptiveClasses}>Month</span>
    <React.Fragment>
      {monthVal}
      /
    </React.Fragment>

    <span className={descriptiveClasses}>Day</span>
    <React.Fragment>
      {dayVal}
      /
    </React.Fragment>

    <span className={descriptiveClasses}>Year</span>
    <React.Fragment>{yearVal}</React.Fragment>
  </>
);

const TextDate = () => (
  <div><Text id="dateTest">{valueToDisplay}</Text></div>
)

export default TextDate;
