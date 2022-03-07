import React from 'react';
import IconAnnouncement from 'terra-icon/lib/icon/IconAnnouncement';
import IconManufacturer from 'terra-icon/lib/icon/IconManufacturer';

const DecorativeIconExample = () => (
  <>
    <ul>
      <li>
        <a href="https://example.com/" target="_blank" rel="noreferrer">
          <IconAnnouncement height="2em" width="2em" />
          {' '}
          Important annoucements
        </a>
      </li>
      <li>
        <IconManufacturer height="2em" width="2em" />
        {' '}
        Cerner Corporation. 2800 Rock Creek Pkwy Kansas City, MO 64117
      </li>
    </ul>
  </>
);

export default DecorativeIconExample;
