import React from 'react';
import ReactDOM from 'react-dom';

import './demo.scss';
import Button from '../src/Button';

const icon = <span style={{ backgroundColor: 'black', color: 'black', height: '1em', width: '1em' }}>....</span>;

const buttons = (
  <div>
    <h1>Button Size</h1>

    <Button size="tiny" text="Tiny Button" />

    <Button size="small" text="Small Button" />

    <Button text="Default Button" />

    <Button size="medium" text="Medium Button" />

    <Button size="large" text="Large Button" />

    <Button size="huge" text="Huge Button" />

    <h1>Disabled</h1>

    <Button text="Disabled Button" isDisabled />

    <h1>Intent</h1>

    <Button intent="primary" text="Primary Button" />

    <Button intent="secondary" text="Secondary Button" />

    <Button intent="positive" text="Positive Button" />

    <Button intent="negative" text="Negative Button" />

    <Button intent="warning" text="Warning Button" />

    <Button intent="info" text="Info Button" />

    <h1>Button Block</h1>

    <Button text="Block" isBlock />

    <h1>Intent Outline</h1>

    <Button intent="default" variant="outline" text="Outline Default Button" />

    <Button intent="primary" variant="outline" text="Outline Primary Button" />

    <Button intent="secondary" variant="outline" text="Outline Secondary Button" />

    <Button intent="positive" variant="outline" text="Outline Positive Button" />

    <Button intent="negative" variant="outline" text="Outline Negative Button" />

    <Button intent="warning" variant="outline" text="Outline Warning Button" />

    <Button intent="info" variant="outline" text="Outline Info Button" />

    <h1>Intent Link</h1>

    <Button intent="default" variant="link" text="Link Default Button" />

    <Button intent="primary" variant="link" text="Link Primary Button" />

    <Button intent="secondary" variant="link" text="Link Secondary Button" />

    <Button intent="positive" variant="link" text="Link Positive Button" />

    <Button intent="negative" variant="link" text="Link Negative Button" />

    <Button intent="warning" variant="link" text="Link Warning Button" />

    <Button intent="info" variant="link" text="Link Info Button" />

    <h1>Icon</h1>

    <Button icon={icon} text="icon" />

    <Button icon={icon} text="icon" isReversed />

    <Button icon={icon} />
  </div>
);

ReactDOM.render(buttons, document.getElementById('terra-button'));
