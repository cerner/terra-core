/* eslint-disable no-alert */
import React from 'react';
import IconBookmark from 'terra-icon/lib/icon/IconTile';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';
import TagList from 'terra-tag/src/TagList';
import ThemeContext from 'terra-theme-context';
import classNamesBind from 'classnames/bind';
import Toolbar from 'terra-toolbar';
import styles from './FilterTagsCommon.module.scss';

const cx = classNamesBind.bind(styles);

const icon = <IconBookmark />;
const text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ';

const TagListExample = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <div className={cx(['terra-filter-tags-doc-example-applied-filters', theme.className])}>
        <Toolbar className={cx('terra-filter-tags-doc-example-applied-filters-toolbar')}>
          <div className={cx('toolbar-flex-container')}>
            <div className={cx('toolbar-flex-item-start')} />
            <div className={cx('toolbar-flex-item-fill')}>
              <TagList isCollapsible aria-label="TagList Example">
                <Tag icon={icon} text="Icon Tag 1" onClick={() => window.alert('Tag has been clicked!')} id="iconTag1" />
                <Tag icon={icon} text={text} id="longTextIcon" onClick={() => window.alert('Tag has been clicked!')} />
                <Tag id="default1" text="Default Tag 1" onClick={() => window.alert('Tag has been clicked!')} />
                <Tag id="on-click" text="Clickable Tag" onClick={() => window.alert('Tag has been clicked!')} />
                <Tag icon={<IconTag />} text="Icon Tag 2" onClick={() => window.alert('Tag has been clicked!')} id="iconTag2" />
                <Tag icon={icon} text="Icon Tag 3" onClick={() => window.alert('Tag has been clicked!')} id="iconTag3" />
                <Tag text="Default Tag 2" onClick={() => window.alert('Tag has been clicked!')} id="default2" />
                <Tag icon={<IconTag />} text="Icon Tag 4" onClick={() => window.alert('Tag has been clicked!')} id="iconTag4" />
                <Tag icon={icon} text="Icon Tag 5" onClick={() => window.alert('Tag has been clicked!')} id="iconTag5" />
                <Tag text="Default Tag 3" onClick={() => window.alert('Tag has been clicked!')} id="default3" />
                <Tag icon={icon} text="Icon Tag 6" onClick={() => window.alert('Tag has been clicked!')} id="iconTag6" />
                <Tag icon={<IconTag />} text="Icon Tag 7" onClick={() => window.alert('Tag has been clicked!')} id="iconTag7" />
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
  );
};

export default TagListExample;
