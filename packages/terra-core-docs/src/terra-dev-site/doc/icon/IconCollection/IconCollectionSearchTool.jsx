import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SearchField from 'terra-search-field';
import Card from 'terra-card';
import Text from 'terra-text';
import Spacer from 'terra-spacer';
import ModalManager, { disclosureType } from 'terra-application/lib/modal-manager';
import disclosureManager, { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';

import styles from './IconCollectionSearchTool.module.scss';
const cx = classNames.bind(styles);

import testData from './testData';

const propTypes = {};

const IconCard = ({icon: Icon, label, onClick}) => {
  const [hovered, setHovered] = useState(false);
  const [depressed, setDepressed] = useState(false);

  return (
    <Spacer margin='large+2'>
      <Card variant={(hovered || depressed) ? 'raised' : null}>
        <div
          className={cx('resultContents')}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
        >
          <Spacer margin="large">
            <Icon height='2.1em' width='2.1em'/>
          </Spacer>
          <Text>{label}</Text>
        </div>
      </Card>
    </Spacer>
  )
};

const resultsFromSearchString = (searchString) => {
  const resultsToSearch = testData;
  if(!searchString || searchString === '') return resultsToSearch;

  const words = searchString.split(' ')
    .filter((word) => word !== '')
    .map((word) => word.toLowerCase());
  console.log(words);

  const filteredResults = testData.filter((icon) => {
    for(let i = 0; i < words.length; i++){
      if(icon.searchTerms.includes(words[i])) return true;
    }
    return false;
  })
  // .map((icon) => );
  
  return filteredResults;
}

const SmallIconPreview = ({size = 14, icon: Icon}) => (
  <div>
    <Icon height={size} width={size}/>
    <Text>{`${size}px`}</Text>
  </div>
)

const IconInformationModal = ({data}) => {
  const Icon = data.svg;
  return (
    <div>
      <DisclosureManagerHeaderAdapter
        title="Icon Details"
      />
      <div className={cx('iconModalContents')}>
        <div className={cx('iconPreviews')}>
          <div className={cx('largePreviewContainer')}>
            <Icon height="120" width="120"/>
          </div>
          <Text>120px</Text>
          <div className={cx('iconPreviewsBottomRow')}>
            <SmallIconPreview size={14} icon={Icon} />
            <SmallIconPreview size={28} icon={Icon} />
            <SmallIconPreview size={40} icon={Icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

const IconCollectionSearchTool = withDisclosureManager(({ disclosureManager }) => {
  const [filteredResults, setFilteredResults] = useState(testData);
  // const [searchText, setSearchText] = useState('');

  return (
    <div>
      <SearchField
        isBlock
        onChange={(e, searchString) => setFilteredResults(resultsFromSearchString(searchString))}/>
      <Text>{`${filteredResults.length} Matching Results`}</Text>
      <ModalManager
          disclosureAccessory={<div>Icon Details</div>}
        >
      <Card className={cx('resultsContainer')}>
          {
            filteredResults.map((result) => (
              <IconCard icon={result.svg} label={result.meaning} onClick={
                () => disclosureManager.disclose({
                  preferredType: 'modal',
                  size: 'small',
                  content: {
                    key: `meaning`,
                    component: <IconInformationModal data={result}/>
                  }
                })
              } />
            ))
          }
        </Card>
      </ModalManager>
    </div>
  );
})

export default IconCollectionSearchTool;
