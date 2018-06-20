import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Tabs from '../../../../Tabs';
import TabContent from './TabContentTemplate';

const IconOnlyTabs = () => {
  const searchTab = (
    <Tabs.Pane label="Search" icon={<IconSearch />} isIconOnly key="Search" id="search">
      <TabContent label="Search" id="searchContent" />
    </Tabs.Pane>
  );

  const briefcaseTab = (
    <Tabs.Pane label="Briefcase" icon={<IconBriefcase />} isIconOnly key="Briefcase" id="briefcase">
      <TabContent label="Briefcase" id="briefcaseContent" />
    </Tabs.Pane>
  );

  const bookmarkTab = (
    <Tabs.Pane label="Bookmark" icon={<IconBookmark />} isIconOnly key="Bookmark" id="bookmark">
      <TabContent label="Bookmark" id="bookmarkContent" />
    </Tabs.Pane>
  );

  const calendarTab = (
    <Tabs.Pane label="Calendar" icon={<IconCalendar />} isIconOnly key="Calendar" id="calendar">
      <TabContent label="Calendar" id="calendarContent" />
    </Tabs.Pane>
  );

  return (
    <Tabs id="iconOnlyTabs">
      {searchTab}
      {briefcaseTab}
      {bookmarkTab}
      {calendarTab}
    </Tabs>
  );
};

export default IconOnlyTabs;
