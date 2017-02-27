import React from 'react';
import Badge from '../src/Badge';

storiesOf('Badge', module)
  .add('Default (Renders nothing as text and icon properties are not supplied)', () => (
    <Badge />
    ));

storiesOf('Size', module)
  .add('Tiny', () => (
  	<Badge size = 'tiny' text = 'Tiny'/>
  	))

  .add('Small (Default)', () => (
  	<Badge text = 'Small' />
  	))

  .add('Medium', () => (
    <Badge size = 'medium' text = 'Medium' />
  	))

  .add('Large', () => (
    <Badge size = 'large' text = 'Large' />
  	))

  .add('Huge', () => (
  	<Badge size = 'huge' text = 'Huge' />
  	));

storiesOf('Intent', module)
  .add('Default', () => (
  	<Badge text = 'Default' />
  	))

  .add('Primary', () => (
  	<Badge text = 'Primary' intent ='primary' />
  	))

  .add('Secondary', () => (
  	<Badge text = 'Secondary' intent ='secondary' />
  	))

  .add('Info', () => (
  	<Badge text = 'Info' intent ='info' />
  	))

  .add('Warning', () => (
  	<Badge text = 'Warning' intent ='warning' />
  	))

  .add('Positive', () => (
  	<Badge text = 'Postive' intent ='positive' />
  	))

  .add('Negative', () => (
  	<Badge text = 'Negative' intent ='negative' />
  	));

storiesOf('Icon', module)
  .add('Icon without Text', () => (
    <Badge size = 'large' intent = 'secondary'
    icon = {<span style={{ backgroundColor: 'black', color: 'black', height: '0.5em', width: '0.5em' }}>...</span>} />
    ))

  .add('Default Order', () => (
  	<Badge text = 'Default Order' size = 'large' intent = 'secondary'
    icon = {<span style={{ backgroundColor: 'black', color: 'black', height: '0.5em', width: '0.5em' }}>...</span>} />
  	))

  .add('Reversed Order', () => (
  	<Badge text = 'Order' size = 'large' intent = 'secondary' isReversed
    icon = {<span style={{ backgroundColor: 'black', color: 'black', height: '0.5em', width: '0.5em' }}>...</span>} />
  ));


storiesOf('Custom Props', module)
  .add('Additional negative style overrides the supplied positive intent and has the additional prop lang set as English.', () => (
    <Badge size = 'large' intent = 'positive' lang = 'English' className = 'terra-Badge--negative'
    icon = {<span style={{ backgroundColor: 'black', color: 'black', height: '0.5em', width: '0.5em' }}>...</span>} />
  ));
