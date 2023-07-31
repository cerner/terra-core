/* eslint-disable no-alert */
import React, { useState } from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconTile';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';
import TagList from 'terra-tag/src/TagList';
import ThemeContext from 'terra-theme-context';
import classNamesBind from 'classnames/bind';
import styles from './FilterTagsCommon.module.scss';
import Toolbar from 'terra-toolbar';

const cx = classNamesBind.bind(styles);

const icon = <IconBookmark />;
const text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ';

const TagListExample = () => {
  const theme = React.useContext(ThemeContext);

  const tagsData = [];
  for (let tagCount = 1; tagCount < 11; tagCount += 1) {
    const tagData = {
      label: `Selection ${tagCount}`,
      labelCategory: 'Category',
      id: `terra-filter-tags-category-selection-${tagCount}`,
    };
    tagsData.push(tagData);
  }

  const [tags, setTags] = useState(tagsData);

  return (
    <>
      <div className={cx(['terra-filter-tags-doc-example-applied-filters', theme.className])}>
        <Toolbar className={cx('terra-filter-tags-doc-example-applied-filters-toolbar')}>
          <div className={cx('toolbar-flex-container')}>
            <div className={cx('toolbar-flex-item-start')}>
            </div>
            <div className={cx('toolbar-flex-item-fill')}>
              <TagList isCollapsible aria-label={"blah blah"}>
                <Tag icon={icon} text="Icon Tag" onClick={() => window.alert('Tag has been clicked!')} id="iconTag" />
                <Tag icon={icon} text={text} id="longTextIcon" onClick={() => window.alert('Tag has been clicked!')} />
                <Tag id="default" text="Default Tag" onClick={() => window.alert('Tag has been clicked!')} />
                <Tag id="on-click" text="Clickable Tag" onClick={() => window.alert('Tag has been clicked!')} />
                <Tag icon={<IconTag />} text="Tag 5" onClick={() => window.alert('Tag has been clicked!')} id="tag1" />
                <Tag icon={icon} text="Tag 6" onClick={() => window.alert('Tag has been clicked!')} id="tag2" />
                <Tag text="Tag 7" onClick={() => window.alert('Tag has been clicked!')} id="tag3" />
                <Tag icon={<IconTag />} text="Tag 8" onClick={() => window.alert('Tag has been clicked!')} id="tag4" />
                <Tag icon={icon} text="Tag 9" onClick={() => window.alert('Tag has been clicked!')} id="tag5" />
                <Tag text="Tag 10" onClick={() => window.alert('Tag has been clicked!')} id="tag6" />
                <Tag icon={icon} text="Tag 11" onClick={() => window.alert('Tag has been clicked!')} id="tag7" />
                <Tag icon={<IconTag />} text="Tag 12" onClick={() => window.alert('Tag has been clicked!')} id="tag8" />
              </TagList>
              <TagList isCollapsible>
                <Tag href="http://google.com" text="HREF Tag" id="Tag1" />
                <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" id="Tag2" />
              </TagList>
            </div>
          </div>
        </Toolbar>
    </div>
  </>
  )
};

export default TagListExample;
