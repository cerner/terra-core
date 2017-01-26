import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../src/Button';

storiesOf('Size', module)
  .add('Default', () => (
    <Button text="Default" />
  ))
  .add('Tiny', () => (
    <Button size="tiny" text="Tiny" />
  ))
  .add('Small', () => (
    <Button size="small" text="Small" />
  ))
  .add('Medium', () => (
    <Button size="medium" text="Medium" />
  ))
  .add('Large', () => (
    <Button size="large" text="Large" />
  ))
  .add('Huge', () => (
    <Button size="huge" text="Huge" />
  ));

storiesOf('Intent', module)
  .add('Primary', () => (
    <Button intent="primary" text="Primary" />
  ))
  .add('Secondary', () => (
    <Button intent="secondary" text="Secondary" />
  ))
  .add('Positive', () => (
    <Button intent="positive" text="Positive" />
  ))
  .add('Negative', () => (
    <Button intent="negative" text="Negative" />
  ))
  .add('Warning', () => (
    <Button intent="warning" text="Warning" />
  ))
  .add('Info', () => (
    <Button intent="info" text="Info" />
  ));

storiesOf('Outline Variant', module)
  .add('Outline Primary', () => (
    <Button intent="primary" text="Outline Primary" variant="outline" />
  ))
  .add('Outline Secondary', () => (
    <Button intent="secondary" text="Outline Secondary" variant="outline" />
  ))
  .add('Outline Positive', () => (
    <Button intent="positive" text="Outline Positive" variant="outline" />
  ))
  .add('Outline Negative', () => (
    <Button intent="negative" text="Outline Negative" variant="outline" />
  ))
  .add('Outline Warning', () => (
    <Button intent="warning" text="Outline Warning" variant="outline" />
  ))
  .add('Outline Info', () => (
    <Button intent="info" text="Outline Info" variant="outline" />
  ));

storiesOf('Link Variant', module)
  .add('Link Primary', () => (
    <Button intent="primary" text="Link Primary" variant="link" />
  ))
  .add('Link Secondary', () => (
    <Button intent="secondary" text="Link Secondary" variant="link" />
  ))
  .add('Link Positive', () => (
    <Button intent="positive" text="Link Positive" variant="link" />
  ))
  .add('Link Negative', () => (
    <Button intent="negative" text="Link Negative" variant="link" />
  ))
  .add('Link Warning', () => (
    <Button intent="warning" text="Link Warning" variant="link" />
  ))
  .add('Link Info', () => (
    <Button intent="info" text="Link Info" variant="link" />
  ));

storiesOf('Block', module)
  .add('Default Block', () => (
    <Button text="Default Block" isBlock />
  ))
  .add('Primary Block', () => (
    <Button intent="primary" text="Primary Block" isBlock />
  ))
  .add('Outline Secondary Block', () => (
    <Button intent="secondary" variant="outline" text="Outline Secondary Block" isBlock />
  ))
  .add('Link Warning Block', () => (
    <Button intent="warning" variant="link" text="Link Warning Block" isBlock />
  ));

storiesOf('onClick', module)
  .add('Alert onClick', () => (
    <Button text="Click Me" onClick={() => alert("I've been clicked!")} />
  ));

storiesOf('Icons', module)
  .add('Default icon', () => (
    <Button
      text="Default Icon"
      icon={<span style={{ backgroundColor: 'black', color: 'black', height: '1em', width: '1em' }}>...</span>}
    />
  ))
  .add('Reversed icon', () => (
    <Button
      isReversed
      text="Default Icon"
      icon={<span style={{ backgroundColor: 'black', color: 'black', height: '1em', width: '1em' }}>...</span>}
    />
  ));

storiesOf('href', module)
  .add('with an href prop', () => (
    <Button href="#" text="I am rendered with an anchor tag" />
  ));

storiesOf('Disabled', module)
  .add('Disabled', () => (
    <Button text="Disabled" isDisabled />
  ))
  .add('Disabled with primary intent', () => (
    <Button intent="primary" text="Disabled" isDisabled />
  ))
  .add('Disabled with outline primary', () => (
    <Button intent="primary" variant="outline" text="Disabled" isDisabled />
  ))
  .add('Disabled with link primary', () => (
    <Button intent="primary" variant="link" text="Disabled" isDisabled />
  ));