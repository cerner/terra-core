import React from 'react';
import Badge from 'terra-badge';
import IconHelpInverse from 'terra-icon/lib/icon/IconHelpInverse';
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);
const Icon = <IconHelpInverse />;

const BadgeInTable = () => (
  <div className={cx('table-container')}>
    <Table aria-describedby="table-description">
      <VisuallyHiddenText id="table-description" text="This is table for status and orders of all patients" />
      <Header>
        <HeaderCell key="NAME">Patient Name</HeaderCell>
        <HeaderCell key="ADDRESS">Location</HeaderCell>
        <HeaderCell key="PHONE_NUMBER">Status</HeaderCell>
      </Header>
      <Body>
        <Row key="PERSON_0">
          <Cell key="NAME">John Smith</Cell>
          <Cell key="ADDRESS">123 Adams Drive</Cell>
          <Cell key="BADGE">
            <div className={cx('badge-container')}>
              <div className={cx('badge')}>
                <Badge intent="positive" size="large" text="Active" />
              </div>
            </div>
          </Cell>
        </Row>
        <Row key="PERSON_1">
          <Cell key="NAME">Jane Smith</Cell>
          <Cell key="ADDRESS">321 Drive Street</Cell>
          <Cell key="BADGE">
            <div className={cx('badge-container')}>
              <div className={cx('badge')}>
                <Badge intent="negative" size="large" text="Inactive" />
              </div>
              <div className={cx('badge')}>
                <Badge intent="info" icon={Icon} text="Verification Pending" />
              </div>
            </div>
          </Cell>
        </Row>
        <Row key="PERSON_2">
          <Cell key="NAME">Jason Tyler</Cell>
          <Cell key="ADDRESS">213 Scuba Drive</Cell>
          <Cell key="BADGE">
            <div className={cx('badge-container')}>
              <div className={cx('badge')}>
                <Badge intent="positive" size="large" text="Active" />
              </div>
              <div className={cx('badge')}>
                <Badge intent="warning" text="Order Pending" />
              </div>
            </div>
          </Cell>
        </Row>
      </Body>
    </Table>
  </div>
);

export default BadgeInTable;
