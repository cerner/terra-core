import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import List from 'terra-list';
import styles from '../../site.scss';

const propTypes = {
  onClick: PropTypes.func,
};

const ActionFooterComponentNavigation = ({
  onClick,
}) => (
  <List className={[styles['site-component-nav'], styles['sub-nav']]}>
    <List.Item content={<Link onClick={onClick} to="/site/action-footer/centered">Centered Action Footer</Link>} />
  </List>
);

ActionFooterComponentNavigation.propTypes = propTypes;

export default ActionFooterComponentNavigation;
