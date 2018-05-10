import React from 'react';
import Button from '../../lib/Button';

const spacingStyle = { padding: '20px' };
const iconStyle = { backgroundColor: 'black' };
const icon = <svg width="1em" height="1em" style={iconStyle} className="test"><rect width="1em" height="1em" /></svg>;

const NeutralButton = () => <div id="neutral" style={spacingStyle}>
  <Button id="neutralActive" text="Neutral-Active" variant="neutral" className="is-active" />
  <span id="neutralActiveFocusSpan" style={spacingStyle}>
    <Button id="neutralActiveFocus" text="Neutral-Active+Focus" variant="neutral" className={['is-active', 'is-focused']} />
  </span>
</div>;

const EmphasisButton = () => <div id="emphasis" style={spacingStyle}>
  <Button id="emphasisActive" text="Emphasis-Active" variant="emphasis" className="is-active" />
  <span id="emphasisActiveFocusSpan" style={spacingStyle}>
    <Button id="emphasisActiveFocus" text="Emphasis-Active+Focus" variant="emphasis" className={['is-active', 'is-focused']} />
  </span>
</div>;

const DeemphasisButton = () => <div id="deempshasis" style={spacingStyle}>
  <Button id="de-emphasisActive" text="De-emphasis-Active" variant="de-emphasis" className="is-active" />
  <span id="de-emphasisActiveFocusSpan" style={spacingStyle}>
    <Button id="de-emphasisActiveFocus" text="De-emphasis-Active+Focus" variant="de-emphasis" className={['is-active', 'is-focused']} />
  </span>
</div>;

const ActionButton = () => <div id="action" style={spacingStyle}>
  <Button id="actionActive" text="Action-Active" icon={icon} variant="action" className="is-active" />
  <span id="actionActiveFocusSpan" style={spacingStyle}>
    <Button id="actionActiveFocus" text="Action-Active+Focus" icon={icon} variant="action" className={['is-active', 'is-focused']} />
  </span>
</div>;

const UtilityButton = () => <div id="utility" style={spacingStyle}>
  <Button id="utilityActive" text="Utility-Active" icon={icon} variant="utility" className="is-active" />
  <span id="utilityActiveFocusSpan" style={spacingStyle}>
    <Button id="utilityButtonActiveFocus" text="Utility-Active+Focus" icon={icon} variant="utility" className={['is-active', 'is-focused']} />
  </span>
</div>;

const activeButtons = () =>
  <div>
    <NeutralButton />
    <EmphasisButton />
    <DeemphasisButton />
    <ActionButton />
    <UtilityButton />
  </div>;

export default activeButtons;
