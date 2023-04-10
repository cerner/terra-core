import React from 'react';

/* eslint-disable react/prop-types */
const DividerTemplate = props => (
  <div>
    <p>
      Since 1979, we’ve been proud to work at the intersection of health care and information technology to
      connect people and systems around the world.
    </p>
    {props.children}
    <p>
      Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat
      around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas.
      It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that
      would eventually become Cerner.
    </p>
  </div>

);

export default DividerTemplate;
