/* eslint-disable no-alert */
import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconBookmark from 'terra-icon/lib/icon/IconTile';
import { Tag, TagList } from 'terra-tag';
import ThemeContext from 'terra-theme-context';
import classNamesBind from 'classnames/bind';
import Toolbar from 'terra-toolbar';
import styles from './FilterTagsCommon.module.scss';

const cx = classNamesBind.bind(styles);

const text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ';

const TagListCollapsed = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <div className={cx(['terra-filter-tags-doc-example-applied-filters', theme.className])}>
        <Toolbar className={cx('terra-filter-tags-doc-example-applied-filters-toolbar')}>
          <div className={cx('toolbar-flex-container')}>
            <div className={cx('toolbar-flex-item-start')} />
            <div className={cx('toolbar-flex-item-fill')}>
              <TagList isCollapsible ariaLabel="Collapsible Tag List Example with collapsed list items">
                <Tag icon={<IconPerson />} text="Asthma" onClick={() => window.alert('Patient is diagnosed with asthma')} id="asthma" />
                <Tag icon={<IconBookmark />} text={text} id="longTextIcon" onClick={() => window.alert('Tag has been clicked!')} />
                <Tag id="bronchitis" text="Bronchitis" onClick={() => window.alert('Patient is diagnosed with bronchitis')} />
                <Tag id="fibro" text="Fibro" onClick={() => window.alert('Patient is diagnosed with Fibro')} />
                <Tag icon={<IconPerson />} text="Dust Allergy" onClick={() => window.alert('Patient is diagnosed with dust allergy')} id="allergy" />
                <Tag icon={<IconPerson />} text="Diabetes" onClick={() => window.alert('Patient is diagnosed with Diabetes')} id="diabetes" />
                <Tag text="Arthritis" onClick={() => window.alert('Patient is diagnosed with Arthritis')} id="arthritis" />
                <Tag text="Hypertension" onClick={() => window.alert('Patient is diagnosed with Hypertension (High Blood Pressure)')} id="hypertension" />
                <Tag icon={<IconPerson />} text="Multiple Sclerosis (MS)" onClick={() => window.alert('Patient is diagnosed with Multiple Sclerosis (MS)')} id="sclerosis" />
                <Tag text="Psoriasis" onClick={() => window.alert('Patient is diagnosed with Psoriasis')} id="psoriasis" />
                <Tag icon={<IconBookmark />} text="Epilepsy" onClick={() => window.alert('Patient is diagnosed with Epilepsy')} id="epilepsy" />
                <Tag icon={<IconPerson />} text="Ulcerative Colitis" onClick={() => window.alert('Patient is diagnosed with Ulcerative Colitis')} id="ulcer" />
              </TagList>
            </div>
          </div>
        </Toolbar>
      </div>
    </>
  );
};

export default TagListCollapsed;
