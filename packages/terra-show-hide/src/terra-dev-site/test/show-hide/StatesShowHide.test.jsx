import React from 'react';
import ShowHide from '../../../ShowHide';

const StatesShowHideTest = () => (
  <div>
    <ShowHide id="toggleButton" preview="Lorem ipsum dolor sit amet">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </ShowHide>
    <ShowHide id="hover" className="hover" preview="Lorem ipsum dolor sit amet">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </ShowHide>
    <ShowHide id="isHovered" className="is-hovered" preview="Lorem ipsum dolor sit amet">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </ShowHide>
    <ShowHide id="isFocused" className="is-focused" preview="Lorem ipsum dolor sit amet">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </ShowHide>
    <ShowHide id="active" className="active" preview="Lorem ipsum dolor sit amet">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </ShowHide>
    <ShowHide id="disabled" className="disabled" preview="Lorem ipsum dolor sit amet">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </ShowHide>
    <ShowHide id="isDisabled" className="is-disabled" preview="Lorem ipsum dolor sit amet">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </ShowHide>
  </div>
);

export default StatesShowHideTest;
