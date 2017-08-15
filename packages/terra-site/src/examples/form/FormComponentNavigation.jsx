import React from 'react';
import { Link } from 'react-router';
import List from 'terra-list';
import styles from '../../site.scss';

const FormComponentNavigation = () => (
  <List className={[styles['site-nav'], styles['sub-nav']]}>
    <List.Item content={<Link to="/site/form/field">Field</Link>} />
    <List.Item content={<Link to="/site/form/fieldset">Fieldset</Link>} />
    <List.Item content={<Link to="/site/form/input">Input</Link>} />
    <List.Item content={<Link to="/site/form/control">Control</Link>} />
    <List.Item content={<Link to="/site/form/number-field">Number Field</Link>} />
    <List.Item content={<Link to="/site/form/textarea">Textarea</Link>} />
    <List.Item content={<Link to="/site/form/textarea-field">Textarea Field</Link>} />
    <List.Item content={<Link to="/site/form/text-field">Text Field</Link>} />
    <List.Item content={<Link to="/site/form/select">Select</Link>} />
    <List.Item content={<Link to="/site/form/select-field">Select Field</Link>} />
  </List>
);

export default FormComponentNavigation;
