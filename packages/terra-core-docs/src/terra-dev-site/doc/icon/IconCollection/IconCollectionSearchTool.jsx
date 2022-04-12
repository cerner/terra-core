import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SearchField from 'terra-search-field';
import Card from 'terra-card';
import Text from 'terra-text';
import Spacer from 'terra-spacer';
import Heading from 'terra-heading';
import ModalManager, { disclosureType } from 'terra-application/lib/modal-manager';
import disclosureManager, { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';
import IconAvailable from 'terra-icon/lib/icon/IconAvailable';
import IconClear from 'terra-icon/lib/icon/IconClear';

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

const FunctionIndicator = ({canBe, stringTemplate, emphasizedSubstring}) => {
  const insertionIndex = stringTemplate.indexOf('_');
  const firstSubstring = stringTemplate.substring(0, insertionIndex);
  const secondSubstring = stringTemplate.substring(insertionIndex + 1);
  console.log('firstString', firstSubstring)
  console.log('secondString', secondSubstring)

  const iconProps = {
    height: '1.5rem',
    width: '1.5rem',
    style: {color: 'red'},
  }

  return (
    <Text>
      { canBe ? (<><IconAvailable {...iconProps} /> Can </>) : <><IconClear {...iconProps} /> Cannot </>}
      {firstSubstring}{<b>{emphasizedSubstring}</b>}{secondSubstring}
    </Text>
  )
}

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

        <div className={cx('summaryInfo')}>
          <Heading level={5}>Meaning</Heading>
          <Text>{data.meaning}</Text>
          <Spacer marginBottom="large+1"/>

          <Heading level={5}>Sets/Categories</Heading>
          <Text>{data.sets.join(', ')}</Text>
          <Spacer marginBottom="large+1"/>

          <Heading level={5}>Functions</Heading>
          <FunctionIndicator
            canBe={data.isAction}
            stringTemplate="be used to perform an _"
            emphasizedSubstring="action"
          />
          <FunctionIndicator
            canBe={data.isStatus}
            stringTemplate="be used to indicate a _"
            emphasizedSubstring="status"
          />
          <FunctionIndicator
            canBe={data.isToggle}
            stringTemplate="be used as a _"
            emphasizedSubstring="toggle"
          />
          <FunctionIndicator
            canBe={!data.labelRequired}
            stringTemplate="be used without a _"
            emphasizedSubstring="label"
          />


          <Spacer marginBottom="large+1"/>
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
