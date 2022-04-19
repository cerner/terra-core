import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SearchField from 'terra-search-field';
import Card from 'terra-card';
import Text from 'terra-text';
import Spacer from 'terra-spacer';
import Checkbox from 'terra-form-checkbox';
import ModalManager from 'terra-application/lib/modal-manager';
import { withDisclosureManager } from 'terra-application/lib/disclosure-manager';

import IconInformationModal from './IconInformationModal';

import styles from './IconCollectionSearchTool.module.scss';
const cx = classNames.bind(styles);

import testData from './testData';
import Heading from 'terra-heading';

const propTypes = {};

const IconCard = ({icon: Icon, label, onClick, darkBackground}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Spacer margin='large+2'>
      <Card variant={hovered ? 'raised' : null}>
        <div
          className={cx('resultContents')}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
        >
          <Spacer padding="small" margin="small" className={cx({'dark-background': darkBackground})}>
            <Icon height='2.1em' width='2.1em'/>
          </Spacer>
          <Text>{label}</Text>
        </div>
      </Card>
    </Spacer>
  )
};

const resultsFromSearchString = (resultsToSearch, searchString) => {
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
  
  return filteredResults;
}

const filterFunctions = {
  action: item => item.isAction,
  status: item => item.isStatus,
  toggle: item => item.isToggle,
  labelNotRequired: item => !item.labelRequired,
}

const applyBoolFilters = (results, filterNames) => {
  // If no filters to apply, return all results
  if(!filterNames || filterNames.length === 0){
    return results;
  }
  return results.filter((result) => {
    let showResult = true;
    for(let i = 0; i < filterNames.length; i++){
      const filterFunction = filterFunctions[filterNames[i]];
      if(filterFunction && !filterFunction(result)){
        showResult = false;
      }
    }
    // Filter result if it doesn't match any of the filters
    return showResult;
  })
}

const getFilteredResults = (searchString, activeBoolFilters) => {
  const searchedResults = resultsFromSearchString([...testData], searchString);
  const filteredResults = applyBoolFilters(searchedResults, activeBoolFilters);
  return filteredResults;
}

const IconCollectionSearchTool = withDisclosureManager(({ disclosureManager }) => {
  const [activeBoolFilters, setActiveBoolFilters] = useState([]);
  const [searchString, setSearchString] = useState('');

  // Rework filtered results if either param has changed
  const filteredResults = useMemo(
    () => getFilteredResults(searchString, activeBoolFilters),
    [searchString, activeBoolFilters],
  )

  const handleFilterChange = (filterName, isActive) => {
    // check if the filter name being passed is even available
    if(!Object.keys(filterFunctions).includes(filterName)){
      console.warn(`Filter name "${filterName}" passed to handleFilterChange() is not an available filter.`);
      return;
    }
    if(isActive){
      // turn the filter on if it's not on
      if(!activeBoolFilters.includes(filterName)){
        setActiveBoolFilters((prev) => [...prev, filterName]);
      }
    } else {
      // turn the filter off it's not off
      if(activeBoolFilters.includes(filterName)){
        setActiveBoolFilters(
          (prevFilters) => prevFilters.filter(
            (activeFilter) => activeFilter !== filterName
          )
        )
      }
    }
  }

  return (
    <div>
      <SearchField
        isBlock
        onChange={(e, searchString) => setSearchString(searchString)}/>
      <Spacer marginTop="large">
        <Heading level={5}>Functions</Heading>
        {/* Note, first param of handleFilterChange must correspond to a key in filterFunctions */}
        <Checkbox onChange={(e) => handleFilterChange('action', e.target.checked)} isInline labelText="Action"/>
        <Checkbox onChange={(e) => handleFilterChange('status', e.target.checked)} isInline labelText="Status"/>
        <Checkbox onChange={(e) => handleFilterChange('toggle', e.target.checked)} isInline labelText="Toggle"/>
        <Checkbox onChange={(e) => handleFilterChange('labelNotRequired', e.target.checked)} isInline labelText="Label Not Required"/>
      </Spacer>
      <Text>{`${filteredResults.length} Matching Results`}</Text>
      <ModalManager
          disclosureAccessory={<div>Icon Details</div>}
        >
      <Card className={cx('resultsContainer')}>
          {
            filteredResults.map((result) => (
              <IconCard
                icon={result.svg}
                label={result.meaning}
                darkBackground={result.needsDarkBackground}
                onClick={
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
