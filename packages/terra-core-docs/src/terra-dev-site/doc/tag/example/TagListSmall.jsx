/* eslint-disable no-alert */
import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import Tag from 'terra-tag';
import TagList from 'terra-tag/src/TagList';
import ThemeContext from 'terra-theme-context';
import classNamesBind from 'classnames/bind';
import Toolbar from 'terra-toolbar';
import styles from './FilterTagsCommon.module.scss';

const cx = classNamesBind.bind(styles);

const TagListSmall = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <div className={cx(['terra-filter-tags-doc-example-applied-filters', theme.className])}>
        <Toolbar className={cx('terra-filter-tags-doc-example-applied-filters-toolbar')}>
          <div className={cx('toolbar-flex-container')}>
            <div className={cx('toolbar-flex-item-start')} />
            <div className={cx('toolbar-flex-item-fill')}>
              <TagList isCollapsible ariaLabel="Tag List Example with small list">
                <Tag href="https://www.google.com/search?q=Asthma" text="Asthma" id="asthma" />
                <Tag icon={<IconPerson />} href="https://www.google.com/search?q=Bronchitis" text="Bronchitis" id="Bronchitis" />
              </TagList>
            </div>
          </div>
        </Toolbar>
      </div>
    </>
  );
};

export default TagListSmall;
