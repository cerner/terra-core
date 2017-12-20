import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import List from 'terra-list';
import styles from '../../site.scss';

const propTypes = {
  onClick: PropTypes.func,
};

const IconComponentNavigation = ({
    onClick,
  }) =>
    <List className={[styles['site-component-nav'], styles['sub-nav']]}>
      <List.Item content={<Link onClick={onClick} to="/site/icon/static">Static Icons</Link>} />
      <List.Item content={<Link onClick={onClick} to="/site/icon/themeable">Themeable Icons</Link>} />
    </List>;

IconComponentNavigation.propTypes = propTypes;

export default IconComponentNavigation;
