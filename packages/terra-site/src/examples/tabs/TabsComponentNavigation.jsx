import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import List from 'terra-list';
import styles from '../../site.scss';

const propTypes = {
  onClick: PropTypes.func,
};

const TabsComponentNavigation = ({ onClick }) =>
  <List className={[styles['site-component-nav'], styles['sub-nav']]}>
    <List.Item content={<Link onClick={onClick} to="/site/tabs/modular-centered">Modular - Centered</Link>} />
    <List.Item content={<Link onClick={onClick} to="/site/tabs/modular-left-aligned">Modular - Left Aligned</Link>} />
    <List.Item content={<Link onClick={onClick} to="/site/tabs/structural">Structural</Link>} />
  </List>;

TabsComponentNavigation.propTypes = propTypes;

export default TabsComponentNavigation;
