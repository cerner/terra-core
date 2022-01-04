import React from 'react';
import PropTypes from 'prop-types';
import Table, {
  Header,
  HeaderCell,
  Body,
  Cell,
  Row,
} from 'terra-html-table';

import classNames from 'classnames/bind';
import styles from './TableWithCustomCells.module.scss';

const cx = classNames.bind(styles);

const CustomCell = props => (
  <div>
    <h3>{props.text}</h3>
    {props.subtext ? <h4 className={cx('custom-cell-header-wrapper')}>{props.subtext}</h4> : null}
  </div>
);

CustomCell.propTypes = {
  text: PropTypes.string,
  subtext: PropTypes.string,
};

const TableWithCustomCells = () => (
  <Table>
    <Header>
      <HeaderCell key="NAME">Name</HeaderCell>
      <HeaderCell key="ADDRESS">Address</HeaderCell>
      <HeaderCell key="PHONE_NUMBER">Phone Number</HeaderCell>
    </Header>
    <Body>
      <Row key="PERSON_0">
        <Cell key="NAME">
          <CustomCell text="John Smith" subtext="Super Cool Person" />
        </Cell>
        <Cell key="ADDRESS">
          <CustomCell text="123 Adams Drive" subtext="Missouri" />
        </Cell>
        <Cell key="PHONE_NUMBER">
          <CustomCell text="111-222-3333" subtext="Home" />
        </Cell>
      </Row>
      <Row key="PERSON_1">
        <Cell key="NAME">
          <CustomCell text="Jane Smith" subtext="Super Cool Person" />
        </Cell>
        <Cell key="ADDRESS">
          <CustomCell text="321 Drive Street" subtext="Kansas" />
        </Cell>
        <Cell key="PHONE_NUMBER">
          <CustomCell text="111-222-3333" subtext="Cell" />
        </Cell>
      </Row>
      <Row key="PERSON_2">
        <Cell key="NAME">
          <CustomCell text="Dave Smith" subtext="Not Super Cool At All" />
        </Cell>
        <Cell key="ADDRESS">
          <CustomCell text="213 Raymond Road" subtext="Alaska" />
        </Cell>
        <Cell key="PHONE_NUMBER">
          <CustomCell text="111-222-3333" subtext="Work" />
        </Cell>
      </Row>
    </Body>
  </Table>
);

export default TableWithCustomCells;
