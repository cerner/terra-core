import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import List from 'terra-list';
import styles from '../../site.scss';

const propTypes = {
  onClick: PropTypes.func,
};

const ListComponentNavigation = ({
    onClick,
  }) =>
    <List className={[styles['site-component-nav'], styles['sub-nav']]}>
      <List.Item content={<Link onClick={onClick} to="/site/list/selectable">Selectable</Link>} />
      <List.Item content={<Link onClick={onClick} to="/site/list/single-select">Single Select</Link>} />
      <List.Item content={<Link onClick={onClick} to="/site/list/multi-select">Multi Select</Link>} />
    </List>;

ListComponentNavigation.propTypes = propTypes;

export default ListComponentNavigation;
